import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei Alpenklar Fensterreinigung gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-sm text-muted">Stand: April 2026</p>

        <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed text-muted">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung
              (DSGVO) ist {site.name}, erreichbar unter {site.email} und{" "}
              {site.phoneDisplay}. Bitte ersetzen Sie diese Angaben vor Veröffentlichung durch
              Ihre rechtsgültigen Unternehmensdaten (juristische Person, Adresse, UID-Nummer).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              2. Zwecke und Rechtsgrundlagen
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten, soweit dies zur Anbahnung und
              Durchführung unserer Reinigungsleistungen, zur Kommunikation mit Ihnen sowie
              zur Erfüllung gesetzlicher Pflichten erforderlich ist. Rechtsgrundlagen können
              insbesondere Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung), Art. 6 Abs. 1 lit. c
              DSGVO (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einer sicheren und effizienten Website-Nutzung) sein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Formular kontaktieren, verarbeiten wir die von Ihnen
              eingegebenen Daten (z. B. Name, E-Mail, Telefonnummer, Nachrichtentext), um Ihre
              Anfrage zu bearbeiten. Die Daten werden gelöscht, sobald die Speicherung nicht
              mehr erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Hosting &amp; Server-Logs</h2>
            <p>
              Beim Aufruf dieser Website können technisch notwendige Informationen
              (z. B. IP-Adresse, Zeitstempel, User-Agent) kurzzeitig verarbeitet werden, um die
              Auslieferung der Seite zu ermöglichen und die Sicherheit zu gewährleisten. Details
              richten sich nach dem eingesetzten Hosting-Anbieter und sollten dort konkretisiert
              werden (Auftragsverarbeitung gemäß Art. 28 DSGVO).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Cookies &amp; Tracking</h2>
            <p>
              Diese Vorlage-Website setzt keine Marketing-Cookies. Wenn Sie später Analyse- oder
              Marketing-Tools (z. B. Google Analytics, Meta Pixel) einbinden, benötigen Sie eine
              Einwilligung nach TDDDG/ePrivacy sowie entsprechende Ergänzungen in dieser
              Erklärung.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen Verarbeitungen, die auf
              berechtigtem Interesse beruhen, unter den gesetzlichen Voraussetzungen. Außerdem
              haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In Österreich
              ist dies die Datenschutzbehörde.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
