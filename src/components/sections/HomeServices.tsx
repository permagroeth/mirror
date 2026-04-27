import Link from "next/link";
import { IconBuilding, IconGlass, IconMirror, IconWindow } from "@/components/icons/ServiceIcons";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "Fensterreinigung",
    description:
      "Innen und außen – auch schwer erreichbare Flächen. Sauberes Finish, ohne Rückstände.",
    href: "/leistungen#fenster",
    Icon: IconWindow,
  },
  {
    title: "Spiegelreinigung",
    description:
      "Badspiegel, Ganzkörperspiegel, Designelemente. Wir schonen Rahmen und Oberflächen.",
    href: "/leistungen#spiegel",
    Icon: IconMirror,
  },
  {
    title: "Glasflächen",
    description:
      "Glastüren, Vitrinen, Trennwände. Ideal für repräsentative Bereiche mit hoher Frequenz.",
    href: "/leistungen#glas",
    Icon: IconGlass,
  },
  {
    title: "Büro & Gewerbe",
    description:
      "Optional als Ergänzung: regelmäßige Reinigung für ein gepflegtes Erscheinungsbild.",
    href: "/leistungen#gewerbe",
    Icon: IconBuilding,
  },
] as const;

export function HomeServices() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Leistungen"
        title="Was wir für Sie tun"
        description="Von der Stadtwohnung bis zum Firmensitz – wir passen uns Ihren Gegebenheiten an und liefern ein Ergebnis, das man sofort sieht."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, href, Icon }) => (
          <article
            key={title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-accent">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
            <Link
              href={href}
              className="mt-6 inline-flex text-sm font-semibold text-accent transition group-hover:underline"
            >
              Mehr erfahren
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
