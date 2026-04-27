import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  { n: "1", title: "Anfrage senden", text: "Kurz beschreiben, was gemacht werden soll – Fläche, Stockwerk, Zeitfenster." },
  { n: "2", title: "Angebot erhalten", text: "Transparent und nachvollziehbar. Sie entscheiden in Ruhe." },
  { n: "3", title: "Termin vereinbaren", text: "Wir stimmen uns auf Ihren Alltag ab – pünktlich und zuverlässig." },
  { n: "4", title: "Reinigung genießen", text: "Klare Sicht, frischer Glanz – ohne Stress für Sie." },
] as const;

export function HomeProcess() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Ablauf"
        title="So läuft’s bei uns"
        description="Schlanker Prozess, damit Sie schnell vom Wunsch zur sauberen Scheibe kommen."
        align="center"
      />
      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-950 text-sm font-bold text-white">
              {s.n}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
