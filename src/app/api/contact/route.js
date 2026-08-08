// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, service, countryCode, phone, project } = body;

    // Configure Nodemailer Transporter with Google SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "hrazabukhari@greyloops.com",
      replyTo: email,
      subject: `New Lead Consultation: ${name} (${service})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Website Contact Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${countryCode} ${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Required:</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${service}</td>
            </tr>
          </table>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
          <h3 style="color: #475569; margin-bottom: 10px;">Project Details</h3>
          <p style="background: #f8fafc; padding: 15px; border-radius: 6px; white-space: pre-wrap; line-height: 1.6;">${project}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}