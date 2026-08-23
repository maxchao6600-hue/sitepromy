import type { Language } from "./types";

export type PageKey =
  | "home"
  | "services"
  | "work"
  | "process"
  | "contact"
  | "quote";

export type NavKey = Exclude<PageKey, "quote">;

export const ROUTES: Record<PageKey, Record<Language, string>> = {
  home: { en: "/", zh: "/zh" },
  services: { en: "/services", zh: "/zh/services" },
  work: { en: "/work", zh: "/zh/work" },
  process: { en: "/process", zh: "/zh/process" },
  contact: { en: "/contact", zh: "/zh/contact" },
  quote: { en: "/quote", zh: "/zh/quote" },
};

export const NAV_PAGES: NavKey[] = [
  "home",
  "services",
  "work",
  "process",
  "contact",
];

export function getLanguageFromPathname(pathname: string): Language {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/zh") {
    return "/";
  }

  if (pathname.startsWith("/zh/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

export function getLocalizedPath(path: string, lang: Language): string {
  const hashIndex = path.indexOf("#");
  const base = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const normalized = base || "/";

  if (lang === "en") {
    if (normalized === "/zh") {
      return `/${hash}`;
    }

    if (normalized.startsWith("/zh/")) {
      return `${normalized.slice(3)}${hash}`;
    }

    return `${normalized}${hash}`;
  }

  if (normalized === "/zh" || normalized.startsWith("/zh/")) {
    return `${normalized}${hash}`;
  }

  if (normalized === "/") {
    return `/zh${hash}`;
  }

  return `/zh${normalized}${hash}`;
}

export function switchLanguagePath(pathname: string, targetLang: Language): string {
  const base = stripLocalePrefix(pathname);
  return getLocalizedPath(base, targetLang);
}

export function getPageKeyFromPathname(pathname: string): PageKey | null {
  const base = stripLocalePrefix(pathname);

  if (base === "/") return "home";
  if (base === "/services") return "services";
  if (base === "/work") return "work";
  if (base === "/process") return "process";
  if (base === "/contact") return "contact";
  if (base === "/quote") return "quote";

  return null;
}
