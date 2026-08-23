import type { Metadata } from "next";
import { en } from "@/lib/i18n/en";
import { zh } from "@/lib/i18n/zh";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import type { Language } from "@/lib/i18n/types";
import { SITE } from "@/lib/site";

export function buildPageMetadata(page: PageKey, lang: Language): Metadata {
  const copy = lang === "zh" ? zh : en;
  const meta = copy.pageMeta[page];
  const paths = ROUTES[page];
  const canonical = `${SITE.url}${paths[lang]}`;
  const enUrl = `${SITE.url}${paths.en}`;
  const zhUrl = `${SITE.url}${paths.zh}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        zh: zhUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      locale: lang === "zh" ? "zh_CN" : "en_MY",
      siteName: SITE.fullName,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export function getHtmlLang(lang: Language): string {
  return lang === "zh" ? "zh-CN" : "en";
}
