import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || "ObraLink <no-reply@localhost>",
      to: process.env.MAIL_TO,
      subject: subject ? `[Contacto] ${subject}` : "[Contacto] Nuevo mensaje",
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`
    });
    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}