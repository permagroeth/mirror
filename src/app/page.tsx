import type { Metadata } from "next";
import { HomeCta } from "@/components/sections/HomeCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomeReviews } from "@/components/sections/HomeReviews";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeWhy } from "@/components/sections/HomeWhy";

export const metadata: Metadata = {
  title: "Fensterreinigung Wien – streifenfrei & zuverlässig",
  description:
    "Streifenfreie Fenster- und Spiegelreinigung in Wien: schnelle Termine, faire Preise, professionelles Equipment. Jetzt unverbindlich Angebot anfordern.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeWhy />
      <HomeProcess />
      <HomeReviews />
      <HomeCta />
    </>
  );
}
