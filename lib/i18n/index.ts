export type { Language, SiteCopy } from "./types";
export { LANGUAGE_STORAGE_KEY } from "./types";
export {
  applyLanguageToDocument,
  isLanguage,
  persistLanguagePreference,
  readLanguagePreference,
} from "./language";
export {
  getLanguageFromPathname,
  getLocalizedPath,
  getPageKeyFromPathname,
  NAV_PAGES,
  ROUTES,
  stripLocalePrefix,
  switchLanguagePath,
  type NavKey,
  type PageKey,
} from "./routes";
export { LanguageProvider, useLanguage, useOptionalLanguage } from "./LanguageProvider";
export { en } from "./en";
export { zh } from "./zh";
