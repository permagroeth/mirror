import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns – Team, Qualität & Kundennähe in Wien",
  description:
    "Erfahren Sie mehr über Alpenklar: Erfahrung in Fenster- und Glasreinigung in Wien, Fokus auf Qualität und echte Kundenzufriedenheit.",
  alternates: { canonical: "/uber-uns" },
};

export default function UeberUnsPage() {
  return (
    <div className="bg-background">
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Über uns
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
            Menschen, die’s gern sauber haben – und anderen auch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {site.name} ist aus dem Alltag entstanden: aus Terminen, die passen müssen,
            aus Fenstern, die endlich wieder durchsichtig sein wollen, und aus dem Wunsch,
            Qualität nicht laut zu versprechen, sondern leise zu liefern.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <SectionHeading
            title="Unsere Geschichte – kurz und ehrlich"
            description="Keine Märchen, keine Superlative ohne Boden."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Am Anfang standen Nachbarschaftsjobs, Empfehlungen und die eine Kundin, die
              sagte: „So hab ich’s mir vorgestellt.“ Daraus wurde ein kleines Team mit
              klaren Standards: pünktlich sein, sauber arbeiten, nachvollziehbar
              kommunizieren. Heute betreuen wir Haushalte und Unternehmen in {site.city}{" "}
              und Umgebung – immer noch mit dem Gefühl, dass jedes Fenster ein bisschen
              Vertrauen verdient.
            </p>
            <p>
              Wir kommen aus dem Handwerk, nicht aus dem Marketing. Deshalb klingt unsere
              Sprache oft sachlich: Wir erklären, was wir tun, warum wir etwas vorschlagen
              und wo Grenzen sind. Das schafft Ruhe – auf beiden Seiten.
            </p>
          </div>
        </section>

        <section className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm sm:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Erfahrung</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Viele Objekte, viele Glasarten – wir kennen die typischen Stolperstellen
              und gehen sie routiniert an.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Qualität</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Wir wählen Mittel und Methoden passend zur Oberfläche. Sauberkeit ist kein
              Zufall, sondern System.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Kundenzufriedenheit</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Wenn etwas hakt, sprechen wir’s an. Unser Ziel: dass Sie uns weiterempfehlen
              – weil’s stimmt, nicht weil’s draufsteht.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Wie wir zusammenarbeiten"
            description="Unkompliziert, respektvoll, mit Wiener Schmäh – aber ohne Zeitverschwendung."
          />
          <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted">
            <li>Sie schildern kurz Ihr Anliegen – Fotos helfen, sind aber kein Muss.</li>
            <li>Wir melden uns mit Rückfragen, falls nötig, und einem klaren Angebot.</li>
            <li>Terminfindung flexibel; bei Gewerbe stimmen wir uns mit Ihren Abläufen ab.</li>
            <li>Nach der Reinigung ist der Raum nutzbar – ohne „Chemie-Regen“ in der Luft.</li>
          </ul>
        </section>

        <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-[color:var(--brand-navy)] px-8 py-10 text-center text-white">
          <p className="text-lg font-semibold">Lernen Sie uns in einem Gespräch kennen</p>
          <p className="mt-2 text-sm text-slate-200">
            Unverbindlich, ohne Druck – einfach klären, ob wir zusammenpassen.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-accent transition hover:bg-slate-100"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
