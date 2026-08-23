"use client";

import { Footer } from "@/components/layout/Footer";
import { LanguageMeta } from "@/components/layout/LanguageMeta";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/ui/SkipLink";
import { LanguageProvider, type Language } from "@/lib/i18n";

export function AppShell({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <LanguageMeta />
      <SkipLink />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
