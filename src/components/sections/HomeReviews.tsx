import { SectionHeading } from "@/components/SectionHeading";

const reviews = [
  {
    name: "Maria K.",
    text: "Sehr professionell und schnell! Meine Fenster waren noch nie so sauber.",
  },
  {
    name: "Thomas H.",
    text: "Top Service in Wien, absolut empfehlenswert!",
  },
  {
    name: "Sarah L.",
    text: "Pünktlich, freundlich und perfekte Arbeit.",
  },
] as const;

export function HomeReviews() {
  return (
    <section className="border-t border-border bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stimmen"
          title="Das sagen Kund:innen aus Wien"
          description="Echte Zufriedenheit entsteht, wenn Erwartung und Ergebnis zusammenpassen. Ein paar Eindrücke von Menschen, die uns schon beauftragt haben."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                „{r.text}“
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
