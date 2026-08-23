import type { Language } from "./types";
import { LANGUAGE_STORAGE_KEY } from "./types";

export { LANGUAGE_STORAGE_KEY };

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "zh";
}

export function applyLanguageToDocument(lang: Language) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.lang = lang;
}

export function persistLanguagePreference(lang: Language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Ignore storage access errors.
  }
}

export function readLanguagePreference(): Language | null {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch {
    return null;
  }
}
