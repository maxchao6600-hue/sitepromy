export type { Language, SiteCopy } from "./types";
export { LANGUAGE_STORAGE_KEY } from "./types";
export {
  applyLanguageToDocument,
  isLanguage,
  localizedHref,
  readLanguageFromSearch,
  resolveClientLanguage,
  updateLanguageInUrl,
} from "./language";
export { LanguageProvider, useLanguage, useOptionalLanguage } from "./LanguageProvider";
export { en } from "./en";
export { zh } from "./zh";
