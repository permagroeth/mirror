import { site, siteUrl } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${siteUrl}${site.logoSrc}`,
    description: site.tagline,
    areaServed: {
      "@type": "City",
      name: site.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "AT",
    },
    telephone: site.phoneDisplay,
    email: site.email,
    url: siteUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
