import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.shortName} · Fensterreinigung & Glasreinigung Wien`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "Streifenfreie Fensterreinigung Wien, Spiegelreinigung und Glasreinigung für Privat & Gewerbe. Schnelle Termine, faire Preise, professionelle Ausführung.",
  keywords: [
    "Fensterreinigung Wien",
    "Glasreinigung Wien",
    "Spiegelreinigung Wien",
    "Spiegel reinigen lassen Wien",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: site.name,
    title: `${site.name} – Reinigung in Wien`,
    description:
      "Professionelle Fenster-, Spiegel- und Glasreinigung in Wien und Umgebung.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${sans.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
