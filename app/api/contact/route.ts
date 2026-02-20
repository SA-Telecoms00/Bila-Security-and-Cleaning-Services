import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a message of at least 10 characters." },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      TO_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server configuration error. Please contact us directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4f46e5, #0d9488); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Bila Security & Cleaning Services</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px; vertical-align: top;">Name:</td>
              <td style="padding: 8px 0; color: #1e293b;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Email:</td>
              <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Phone:</td>
              <td style="padding: 8px 0; color: #1e293b;">${phone.trim()}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #1e293b; white-space: pre-wrap;">${message.trim()}</td>
            </tr>
          </table>
        </div>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 16px; text-align: center;">
          Sent from the contact form at bilasecurity.co.za
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Bila Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name.trim()} — Bila Security & Cleaning`,
      html: htmlBody,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
