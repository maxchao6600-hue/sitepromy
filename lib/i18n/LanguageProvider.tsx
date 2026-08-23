"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { en } from "./en";
import { zh } from "./zh";
import {
  applyLanguageToDocument,
  persistLanguagePreference,
} from "./language";
import {
  getLanguageFromPathname,
  getLocalizedPath,
  switchLanguagePath,
} from "./routes";
import type { Language, SiteCopy } from "./types";

type LanguageContextValue = {
  lang: Language;
  t: SiteCopy;
  setLanguage: (lang: Language) => void;
  href: (path: string) => string;
};

const translations: Record<Language, SiteCopy> = { en, zh };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Language;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const pathLang = getLanguageFromPathname(pathname);
  const lang = pathLang || initialLang;

  useEffect(() => {
    applyLanguageToDocument(lang);
    persistLanguagePreference(lang);
  }, [lang]);

  const setLanguage = useCallback(
    (next: Language) => {
      persistLanguagePreference(next);
      router.push(switchLanguagePath(pathname, next));
    },
    [pathname, router],
  );

  const href = useCallback(
    (path: string) => getLocalizedPath(path, lang),
    [lang],
  );

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      setLanguage,
      href,
    }),
    [lang, setLanguage, href],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useOptionalLanguage() {
  return useContext(LanguageContext);
}

export type { Language };
