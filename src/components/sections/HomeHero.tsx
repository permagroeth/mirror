import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-navy)]">
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop"
        alt="Moderne Glasfassade in einer Stadt"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-slate-900/70 to-[color:var(--brand-navy)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
            Reinigungsservice · Wien & Umgebung
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Streifenfreie Fenster- &amp; Spiegelreinigung in Wien
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200">
            Professionelle Reinigung für Zuhause &amp; Unternehmen – schnell,
            zuverlässig &amp; fair. Wir bringen Licht ins Zimmer, ohne Kompromisse
            bei Sauberkeit oder Termintreue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-accent-hover"
            >
              Jetzt Angebot anfordern
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Kostenlose Beratung
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Erfahrung
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">Seit Jahren im Einsatz</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Zufriedenheit
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">Viele Stammkund:innen</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Schnell
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">Rückmeldung meist am selben Tag</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
