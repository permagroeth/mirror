"use server";

import { sendContactFormEmail } from "@/lib/smtp";

export type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Record<string, string> = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Bitte geben Sie Ihren Namen an.";
  }
  if (!email || !isValidEmail(email)) {
    fieldErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (!phone || phone.length < 5) {
    fieldErrors.phone = "Bitte geben Sie eine erreichbare Telefonnummer an.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Bitte beschreiben Sie Ihr Anliegen etwas ausführlicher.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Bitte prüfen Sie die markierten Felder.",
      fieldErrors,
    };
  }

  try {
    await sendContactFormEmail({ name, email, phone, message });
  } catch (err) {
    console.error("Kontaktformular SMTP:", err);
    const code = err instanceof Error ? err.message : "";
    if (code === "MISSING_SMTP_CONFIG") {
      return {
        ok: false,
        message:
          "Der Versand ist derzeit nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch.",
      };
    }
    return {
      ok: false,
      message:
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
    };
  }

  return {
    ok: true,
    message:
      "Danke! Ihre Nachricht ist bei uns eingegangen. Wir melden uns in Kürze bei Ihnen.",
  };
}
