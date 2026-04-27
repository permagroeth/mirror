import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const points = [
  "100 % streifenfrei – sichtbares Ergebnis beim ersten Blick",
  "Flexible Termine – auch kurzfristig, wenn’s eilt",
  "Faire Preise – klar kommuniziert, ohne Überraschungen",
  "Professionelles Equipment – sicher auch in der Höhe",
  "Schnelle Reaktionszeit – wir melden uns zügig zurück",
] as const;

export function HomeWhy() {
  return (
    <section className="border-y border-border bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow={`Warum ${site.shortName}`}
            title="Weil Details Vertrauen schaffen"
            description="Wir wissen: Saubere Fenster und Spiegel sind kein Luxus, sondern Teil eines gepflegten Umfelds. Deshalb arbeiten wir strukturiert, freundlich und mit dem Blick fürs Wesentlichen."
          />
          <ul className="space-y-4">
            {points.map((text) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-border bg-background px-4 py-4 shadow-sm"
              >
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-meadow text-xs font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-base leading-relaxed text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
