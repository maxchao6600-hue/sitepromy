"use client";

import { AfterLaunch } from "@/components/home/AfterLaunch";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQ } from "@/components/home/FAQ";
import { Process } from "@/components/home/Process";
import { StartingPoints } from "@/components/home/StartingPoints";
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
      <Process />
      <AfterLaunch />
      <StartingPoints />
      <FAQ />
      <FinalCTA />
    </>
  );
}
