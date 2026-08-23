"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Process } from "@/components/home/Process";
import { SpeedSection } from "@/components/home/SpeedSection";
import { PageHeader } from "@/components/page/PageHeader";
import { useLanguage } from "@/lib/i18n";

export function ProcessPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.processPage.eyebrow}
        title={t.processPage.title}
        description={t.processPage.description}
      />
      <SpeedSection />
      <Process />
      <FinalCTA />
    </>
  );
}
