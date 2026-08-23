import type { MetadataRoute } from "next";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import { SITE } from "@/lib/site";

const SITEMAP_PAGES: PageKey[] = [
  "home",
  "services",
  "work",
  "process",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_PAGES.flatMap((page) => {
    const paths = ROUTES[page];
    const priority = page === "home" ? 1 : page === "contact" ? 0.7 : 0.8;

    return (["en", "zh"] as const).map((lang) => ({
      url: `${SITE.url}${paths[lang]}`,
      lastModified,
      changeFrequency: page === "home" ? ("weekly" as const) : ("monthly" as const),
      priority,
      alternates: {
        languages: {
          en: `${SITE.url}${paths.en}`,
          zh: `${SITE.url}${paths.zh}`,
        },
      },
    }));
  });
}
