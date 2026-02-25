import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

// Cache the email template at module level
let cachedTemplate: string | null = null;

async function getTemplate(): Promise<string> {
  if (cachedTemplate) return cachedTemplate;
  const templatePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "contactForm.html"
  );
  cachedTemplate = await fs.readFile(templatePath, "utf-8");
  return cachedTemplate;
}

// In-memory rate limiter: IP -> timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimitMap.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  // Input validation
  if (
    !name ||
    !email ||
    !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { success: false, error: "All fields are required." },
      { status: 400 }
    );
  }

  if (name.length > 100) {
    return NextResponse.json(
      { success: false, error: "Name must be 100 characters or less." },
      { status: 400 }
    );
  }

  if (email.length > 254 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { success: false, error: "Message must be 5000 characters or less." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.verify();
  } catch (error: unknown) {
    console.error("SMTP authentication failed:", error);
    return NextResponse.json(
      { success: false, error: "Email service authentication failed. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const htmlTemplate = await getTemplate();
    const htmlContent = htmlTemplate
      .replace("{{name}}", escapeHtml(name))
      .replace("{{email}}", escapeHtml(email))
      .replace("{{message}}", escapeHtml(message));

    await transporter.sendMail({
      from: `"Your Portfolio" <${process.env.SMTP_USER}>`,
      to: "daniel.mostad1@gmail.com",
      subject: `New message from ${escapeHtml(name)}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
