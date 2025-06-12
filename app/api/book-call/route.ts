import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import createICS from '@/utils/createICS';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, date } = body;

    const startTime = new Date(date);
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000); // 30 mins after

    const title = '30-Minute Strategy Call with FoundrFlow Mentor';
    const description = `Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${message}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📨 Send to person booking
    const userIcs = createICS({
      title,
      description,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      email,
    });

    await transporter.sendMail({
      from: `"FoundrFlow" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Call Scheduled: ${title}`,
      text: `Hi ${name},\n\nYour session "${title}" is scheduled.\n\nJoin here: ${process.env.MEET_LINK}\n\nDetails:\n${description}`,
      icalEvent: {
        filename: 'invite.ics',
        method: 'request',
        content: userIcs,
      },
    });
const ownerMail = process.env.OWNER_EMAIL!;
    // 📨 Send to mentor (OWNER)
    const ownerIcs = createICS({
      title,
      description,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      email:ownerMail // now the mentor's email is included
    });

    await transporter.sendMail({
      from: `"FoundrFlow" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Booking: ${title}`,
      text: `Hi Mentor,\n\nA new session "${title}" is scheduled.\n\nJoin here: ${process.env.MEET_LINK}\n\nDetails:\n${description}`,
      icalEvent: {
        filename: 'invite.ics',
        method: 'request',
        content: ownerIcs,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email send failed:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal error' },
      { status: 500 }
    );
  }
}
