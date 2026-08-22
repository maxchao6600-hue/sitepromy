import { SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.shortName,
        alternateName: SITE.fullName,
        inLanguage: "en-MY",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#business`,
        name: SITE.shortName,
        alternateName: SITE.fullName,
        url: SITE.url,
        description: SITE.description,
        areaServed: {
          "@type": "Country",
          name: "Malaysia",
        },
        serviceType: [
          "Web design Malaysia",
          "Website development",
          "Business website design",
          "E-commerce website design",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
