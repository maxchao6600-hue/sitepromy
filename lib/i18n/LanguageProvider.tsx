"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./en";
import { zh } from "./zh";
import {
  applyLanguageToDocument,
  isLanguage,
  readLanguageFromSearch,
  updateLanguageInUrl,
} from "./language";
import { LANGUAGE_STORAGE_KEY, type Language, type SiteCopy } from "./types";

type LanguageContextValue = {
  lang: Language;
  t: SiteCopy;
  setLanguage: (lang: Language) => void;
  href: (path: string) => string;
};

const translations: Record<Language, SiteCopy> = { en, zh };

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persistLanguage(lang: Language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Ignore storage access errors.
  }
}

function readStoredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    if (readLanguageFromSearch(window.location.search)) {
      return;
    }

    const stored = readStoredLanguage();
    if (stored && stored !== initialLang) {
      // Restore saved preference after SSR when URL has no lang param.
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-hydration language restore
      setLang(stored);
    }
  }, [initialLang]);

  useEffect(() => {
    applyLanguageToDocument(lang);
    persistLanguage(lang);
    updateLanguageInUrl(lang);
  }, [lang]);

  useEffect(() => {
    const onPopState = () => {
      const fromUrl = readLanguageFromSearch(window.location.search);
      if (fromUrl) {
        setLang(fromUrl);
        return;
      }

      setLang(readStoredLanguage() ?? "en");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLang(next);
  }, []);

  const href = useCallback(
    (path: string) => {
      if (lang === "en") {
        return path;
      }

      const hashIndex = path.indexOf("#");
      const base = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
      const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
      const url = new URL(base || "/", window.location.origin);
      url.searchParams.set("lang", "zh");
      return `${url.pathname}${url.search}${hash}`;
    },
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
