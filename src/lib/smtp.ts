import nodemailer from "nodemailer";
import { site } from "@/lib/site";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_PORT,
  );
}

export async function sendContactFormEmail(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<void> {
  if (!isSmtpConfigured()) {
    throw new Error("MISSING_SMTP_CONFIG");
  }

  const host = process.env.SMTP_HOST!;
  const port = Number.parseInt(process.env.SMTP_PORT ?? "465", 10);
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const to = process.env.CONTACT_TO ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const safe = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: escapeHtml(input.phone),
    message: escapeHtml(input.message),
  };

  const text = [
    "Neue Kontaktanfrage über die Website",
    "",
    `Name: ${input.name}`,
    `E-Mail: ${input.email}`,
    `Telefon: ${input.phone}`,
    "",
    "Nachricht:",
    input.message,
  ].join("\n");

  const html = `
    <p><strong>Neue Kontaktanfrage über die Website</strong></p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;"><strong>Name</strong></td><td>${safe.name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>E-Mail</strong></td><td>${safe.email}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Telefon</strong></td><td>${safe.phone}</td></tr>
    </table>
    <p style="margin-top:16px;"><strong>Nachricht</strong></p>
    <p style="white-space:pre-wrap;word-break:break-word;">${safe.message}</p>
  `;

  await transporter.sendMail({
    from: `"${site.shortName} Website" <${user}>`,
    to,
    replyTo: input.email,
    subject: `Kontakt: ${input.name}`,
    text,
    html,
  });
}
