"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Portfolio } from "@/components/home/Portfolio";
import { PageHeader } from "@/components/page/PageHeader";
import { useLanguage } from "@/lib/i18n";

export function WorkPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.workPage.eyebrow}
        title={t.workPage.title}
        description={t.workPage.description}
      />
      <Portfolio hideIntro />
      <FinalCTA />
    </>
  );
}
