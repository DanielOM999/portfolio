import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

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
    console.log("SMTP connection verified successfully");

    const templatePath = path.join(
      process.cwd(),
      "src",
      "lib",
      "contactForm.html"
    );
    const htmlTemplate = fs.readFileSync(templatePath, "utf-8");
    const htmlContent = htmlTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{message}}", message);

    const info = await transporter.sendMail({
      from: `"Your Portfolio" <${process.env.SMTP_USER}>`,
      to: "daniel.mostad1@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Failed to send email: Unknown error", error);
      return NextResponse.json(
        { success: false, error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
