import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, company, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.OWNER_EMAIL,
    replyTo: email, 
    subject: `Contact Form: ${firstName} ${lastName}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
