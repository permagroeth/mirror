import Image from "next/image";
import alpenklarLogo from "@/images/alpenklar-logo.png";
import { site } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Statisch importiertes Logo – zuverlässiger als reine Public-URL in flexiblen Layouts.
 * Public-URL bleibt parallel für JSON-LD / Favicon (`site.logoSrc`).
 */
export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src={alpenklarLogo}
      alt={site.logoAlt}
      priority={priority}
      sizes="(max-width: 640px) 52vw, 240px"
      className={className}
    />
  );
}
