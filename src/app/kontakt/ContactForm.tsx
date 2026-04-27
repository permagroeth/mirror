"use client";

import { useActionState, useEffect, useRef } from "react";
import type { ContactState } from "./actions";
import { submitContact } from "./actions";

const initial: ContactState | null = null;

function FieldError({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-600" role="alert">
      {text}
    </p>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitContact, initial);

  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset();
    }
  }, [state]);

  const fieldErrors = state && !state.ok ? state.fieldErrors : undefined;

  return (
    <form ref={formRef} action={formAction} className="space-y-6" noValidate>
      {state ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            state.ok
              ? "border-blue-200 bg-blue-50 text-blue-950"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
          role="status"
        >
          {state.message}
        </div>
      ) : null}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(fieldErrors?.name)}
          aria-describedby={fieldErrors?.name ? "name-error" : undefined}
          className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-sm outline-none ring-accent/30 transition focus:ring-4"
        />
        <FieldError id="name-error" text={fieldErrors?.name} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(fieldErrors?.email)}
          aria-describedby={fieldErrors?.email ? "email-error" : undefined}
          className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-sm outline-none ring-accent/30 transition focus:ring-4"
        />
        <FieldError id="email-error" text={fieldErrors?.email} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Telefonnummer
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-invalid={Boolean(fieldErrors?.phone)}
          aria-describedby={fieldErrors?.phone ? "phone-error" : undefined}
          className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-sm outline-none ring-accent/30 transition focus:ring-4"
        />
        <FieldError id="phone-error" text={fieldErrors?.phone} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(fieldErrors?.message)}
          aria-describedby={fieldErrors?.message ? "message-error" : undefined}
          placeholder="z. B. Stockwerk, Fensteranzahl, gewünschtes Zeitfenster …"
          className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-sm outline-none ring-accent/30 transition focus:ring-4"
        />
        <FieldError id="message-error" text={fieldErrors?.message} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Wird gesendet …" : "Angebot anfordern"}
      </button>
    </form>
  );
}
