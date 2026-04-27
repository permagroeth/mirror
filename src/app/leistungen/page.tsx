import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Leistungen – Fensterreinigung, Spiegel- & Glasreinigung Wien",
  description:
    "Fensterreinigung Wien, Glasreinigung Wien und Spiegel reinigen lassen: Leistungen für Privat & Gewerbe. Transparente Angebote, flexible Termine.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <div className="bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Leistungen
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
            Reinigung, die man sieht
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Ob klassische Fensterreinigung in Wien, empfindliche Spiegel oder große
            Glasflächen im Büro: Wir stimmen Methode, Mittel und Zeitaufwand auf Ihre
            Situation ab – damit das Ergebnis hält, was die Überschrift verspricht.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-accent-hover"
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        <section id="fenster" className="scroll-mt-28">
          <SectionHeading
            title="Fensterreinigung in Wien"
            description="Von der Altbauwohnung bis zur modernen Loggia – wir kennen die typischen Herausforderungen."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Fensterreinigung in Wien ist mehr als Wasser und Lappen: Kalkränder,
              Stadtstaub und die eine oder andere Vogelspur wollen sachgerecht behandelt
              werden, ohne Beschichtungen oder Silikonfugen zu strapazieren. Wir arbeiten
              strukturiert, schonen Rahmen und Fensterbänke und achten besonders auf
              Kanten und Ecken – dort, wo sich sonst schnell Schlieren bilden.
            </p>
            <p>
              Für die Glasreinigung in Wien setzen wir auf bewährte Technik und
              professionelles Equipment, damit auch höher gelegene Scheiben sauber
              werden, ohne unnötiges Risiko. Sie erhalten vorab ein klares Angebot: nach
              Fläche, Zugänglichkeit und Zustand – ohne Kleingedrucktes, das später
              weh tut. Wenn Sie möchten, reinigen wir innen und außen im Paket oder
              starten schrittweise, etwa saisonal nach dem Winter. So bleibt Ihr Zuhause
              oder Büro hell, freundlich und einfach wohler.
            </p>
          </div>
        </section>

        <section id="spiegel" className="scroll-mt-28">
          <SectionHeading
            title="Spiegelreinigung für Zuhause & Büros"
            description="Spiegel wirken nur dann edel, wenn sie wirklich klar sind – ohne Fusseln und ohne Schleier."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Spiegel reinigen lassen in Wien lohnt sich besonders dann, wenn viel Licht
              im Spiel ist: Im Bad, im Flur oder in Praxisräumen, wo sich jede kleine
              Störung verdoppelt. Wir reinigen oberflächenschonend, entfernen
              Zahnpastaspritzer, Fingerspuren und Staub sauber und sorgen für ein
              streifenfreies Finish. Auf Wunsch berücksichtigen wir auch LED-Spiegel
              oder rahmenlose Varianten – hier zählt feinfühliges Arbeiten.
            </p>
            <p>
              In Büros und Studios ist Spiegelreinigung in Wien oft Teil des ersten
              Eindrucks: Kund:innen merken sofort, ob ein Raum gepflegt ist. Wir
              koordinieren Termine diskret, arbeiten zügig und hinterlassen keine
              unnötige Feuchtigkeit. Kombinieren Sie die Spiegelreinigung gern mit einer
              Fensterreinigung in Wien – dann wirkt das Gesamtbild noch stimmiger, und
              Sie haben nur eine Ansprechperson für alles, was glänzen soll.
            </p>
          </div>
        </section>

        <section id="glas" className="scroll-mt-28">
          <SectionHeading
            title="Glasreinigung für Gewerbe"
            description="Repräsentative Eingänge, Trennwände und Vitrinen – wir halten Ihre Glasflächen stets repräsentativ."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Glasreinigung in Wien ist im Gewerbe oft eine Daueraufgabe: Hohe Frequenz,
              Handauflegen, Kaffeespritzer. Wir planen Intervalle, die zur Nutzung passen
              – vom monatlichen Service bis zur intensiveren Betreuung nach Bedarf. Dabei
              achten wir auf sichere Abläufe in öffentlichen Bereichen und auf saubere
              Kanten bei Glastüren, damit nichts „mitgeschleppt“ wird.
            </p>
            <p>
              Wenn Sie Fensterreinigung Wien und Glasflächen gemeinsam beauftragen,
              sparen Sie Zeit und Koordinationsaufwand. Wir dokumentieren auf Wunsch
              kurz die bearbeiteten Bereiche und passen uns an Ihre internen Vorgaben an
              – etwa Zugangszeiten oder besondere Hygienehinweise. So bleibt Ihr
              Erscheinungsbild konstant hochwertig, und Ihre Mitarbeiter:innen merken:
              Hier wird auf Details geachtet. Für eine maßgeschneiderte Lösung reicht
              eine kurze Anfrage; wir melden uns mit einem konkreten Vorschlag.
            </p>
          </div>
        </section>

        <section id="gewerbe" className="scroll-mt-28">
          <SectionHeading
            title="Büro & Gewerbe – optional als Paket"
            description="Saubere Fenster und gepflegte Glasflächen sind das i-Tüpfelchen zu einer ordentlichen Büroatmosphäre."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Viele Betriebe kombinieren Glasreinigung in Wien mit einer regelmäßigen
              Fensterreinigung in Wien, etwa für Konferenzräume und Eingangsbereiche. Wir
              stimmen Leistungsumfang und Rhythmus mit Ihnen ab – pragmatisch und ohne
              lange Vertragsromane, sofern Sie das nicht explizit wünschen. Wichtig ist
              uns eine verlässliche Kommunikation: wer kommt, wann, und was ist im
              vereinbarten Preis enthalten.
            </p>
            <p>
              Wenn Sie zusätzlich Spiegel reinigen lassen möchten – etwa in Sanitärbereichen
              oder Showrooms – packen wir das gern dazu. So bleibt Ihr Auftritt durchgängig
              stimmig, und Sie müssen nicht mehrere Dienstleister koordinieren. Schreiben
              Sie uns einfach Ihre Gegebenheiten; wir melden uns mit einem Angebot, das
              zu Ihrem Alltag passt.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
