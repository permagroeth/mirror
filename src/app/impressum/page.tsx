import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben zu Alpenklar Fensterreinigung, Wien.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Impressum</h1>
        <p className="mt-4 text-sm text-muted">
          Informationspflicht laut §5 E-Commerce-Gesetz, §14 Unternehmensgesetzbuch bzw. §63
          Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Medieninhaberin / Medieninhaber</h2>
            <p className="mt-3">
              {site.name}
              <br />
              Musterstraße 1/2/3
              <br />
              1010 {site.city}, {site.country}
              <br />
              <span className="text-foreground/80">
                (Bitte Adresse und Rechtsform vor Livegang durch Ihre echten Unternehmensdaten
                ersetzen.)
              </span>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-3">
              Telefon: {site.phoneDisplay}
              <br />
              E-Mail: {site.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Unternehmensgegenstand</h2>
            <p className="mt-3">
              Reinigungsdienstleistungen, insbesondere Fenster-, Spiegel- und Glasreinigung für
              Privat- und Gewerbekund:innen in {site.city} und Umgebung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">UID-Nummer / Register</h2>
            <p className="mt-3">
              UID-Nummer: ATU12345678 (Muster)
              <br />
              Firmenbuchnummer: FN 123456 x (Muster)
              <br />
              Firmenbuchgericht: Handelsgericht {site.city}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Gewerbebehörde</h2>
            <p className="mt-3">Magistrat der Stadt Wien – Fachbereich Gewerbe (Musterangabe)</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Haftung für Inhalte</h2>
            <p className="mt-3">
              Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr. Als
              Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf
              diesen Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot kann Links zu externen Websites Dritter enthalten. Auf deren
              Inhalte haben wir keinen Einfluss; deshalb können wir für diese fremden Inhalte
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Urheberrecht</h2>
            <p className="mt-3">
              Die auf dieser Website veröffentlichten Inhalte unterliegen dem österreichischen
              Urheberrecht. Jede vom Urheberrechtsgesetz nicht zugelassene Verwertung bedarf der
              vorherigen Zustimmung des Rechteinhabers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
