import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { navItems, site } from "@/lib/site";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="inline-block max-w-full">
            <BrandLogo className="h-10 w-auto max-w-[13rem] object-contain object-left sm:h-11" />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.tagline}. Wir arbeiten diskret, pünktlich und mit Blick fürs
            Detail – ideal für Privathaushalte und Unternehmen in {site.city}.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/datenschutz"
                className="text-muted transition hover:text-accent"
              >
                Datenschutz
              </Link>
            </li>
            <li>
              <Link
                href="/impressum"
                className="text-muted transition hover:text-accent"
              >
                Impressum
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.serviceArea}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border bg-slate-50/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} {site.name}. Alle Rechte vorbehalten.</p>
          <p className="max-w-xl leading-relaxed">
            Hinweis: Angebote unverbindlich. Preise abhängig von Fläche, Höhe und
            Zustand – transparent im Angebot ausgewiesen.
          </p>
        </div>
      </div>
    </footer>
  );
}
