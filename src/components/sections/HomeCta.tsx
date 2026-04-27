import Link from "next/link";

export function HomeCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent via-blue-800 to-[color:var(--brand-navy)] px-8 py-14 text-center shadow-xl sm:px-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-300/10 blur-2xl" />
        <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Jetzt Termin sichern
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-100">
          Schreiben Sie uns kurz Ihr Anliegen – wir melden uns mit einem konkreten
          Vorschlag. Unverbindlich, klar formuliert, wienerisch pragmatisch.
        </p>
        <Link
          href="/kontakt"
          className="relative mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-semibold text-accent shadow-md transition hover:bg-slate-50"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
