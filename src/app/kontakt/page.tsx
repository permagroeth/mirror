import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – Angebot für Fensterreinigung in Wien",
  description:
    "Kontaktieren Sie Alpenklar für Fensterreinigung Wien, Spiegel- und Glasreinigung. Schnelle Rückmeldung, Einsatz in Wien und Umgebung.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <div className="bg-background">
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Kontakt
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground">
            Angebot anfordern – wir melden uns zügig
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Beschreiben Sie kurz Ihr Objekt und Ihr Wunschdatum. Wir sind in{" "}
            {site.city} und im Speckgürtel unterwegs – {site.serviceArea}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">Direkt erreichen</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-muted">Telefon</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-lg font-semibold text-accent hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-muted">E-Mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="font-medium text-foreground hover:text-accent">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-muted">Einsatzgebiet</dt>
                <dd className="mt-1 leading-relaxed text-foreground">{site.serviceArea}</dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Für Google-Ads-Besucher:innen: Schreiben Sie einfach, worum es geht – wir
              antworten persönlich und ohne vorgefertigte Textbausteine.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">Nachricht senden</h2>
            <p className="mt-2 text-sm text-muted">
              Pflichtfelder sind gekennzeichnet. Ihre Daten verwenden wir nur zur
              Bearbeitung Ihrer Anfrage (Details siehe{" "}
              <Link href="/datenschutz" className="font-medium text-accent hover:underline">
                Datenschutz
              </Link>
              ).
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
