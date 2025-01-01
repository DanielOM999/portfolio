'use server'

import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: 'authguard0@gmail.com',
      pass: "ddln obzr ulhe daaz",
    },
  })

  try {
    const currentDir = process.cwd();
    const templatePath = path.join(currentDir, 'src', 'app', 'components', 'item', 'contactForm.html');
    const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
    const htmlContent = htmlTemplate.replace('{{name}}', name)
                                    .replace('{{email}}', email)
                                    .replace('{{message}}', message);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'daniel.mostad1@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlContent,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false }
  }
}

