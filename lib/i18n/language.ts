import type { Language } from "./types";
import { LANGUAGE_STORAGE_KEY } from "./types";

export { LANGUAGE_STORAGE_KEY };

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "zh";
}

export function readLanguageFromSearch(search: string): Language | null {
  const value = new URLSearchParams(search).get("lang");
  return isLanguage(value) ? value : null;
}

export function localizedHref(path: string, lang: Language): string {
  if (lang === "en") {
    return path;
  }

  const hashIndex = path.indexOf("#");
  const base = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const url = new URL(base || "/", "https://sitepromy.com");

  url.searchParams.set("lang", "zh");
  return `${url.pathname}${url.search}${hash}`;
}

export function applyLanguageToDocument(lang: Language) {
  document.documentElement.lang = lang === "zh" ? "zh-MY" : "en-MY";
  document.documentElement.dataset.lang = lang;
}

export function updateLanguageInUrl(lang: Language) {
  const url = new URL(window.location.href);

  if (lang === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }

  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

export function resolveClientLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const fromUrl = readLanguageFromSearch(window.location.search);
  if (fromUrl) {
    return fromUrl;
  }

  const fromDataset = document.documentElement.dataset.lang;
  if (isLanguage(fromDataset)) {
    return fromDataset;
  }

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage access errors.
  }

  return "en";
}
