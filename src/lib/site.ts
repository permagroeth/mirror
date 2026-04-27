/** Öffentliche Basis-URL (für SEO, JSON-LD) – bei Bedarf anpassen */
export const siteUrl = "https://www.alpenklar-wien.at" as const;

/** Firmen- und Kontaktdaten */
export const site = {
  name: "Alpenklar Fensterreinigung",
  shortName: "Alpenklar",
  tagline: "Fenster-, Spiegel- & Glasreinigung in Wien",
  phoneDisplay: "+43 676 921 71 02",
  phoneTel: "+436769217102",
  city: "Wien",
  country: "Österreich",
  serviceArea:
    "Wien und angrenzende Gemeinden – von Innenstadt bis Speckgürtel, Termine nach Absprache.",
  /** Relativer Pfad unter /public */
  logoSrc: "/alpenklar-logo.png",
  logoAlt:
    "Alpenklar Fensterreinigung Logo – professionelle Glas- und Fensterreinigung in Wien",
} as const;

export const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/uber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
