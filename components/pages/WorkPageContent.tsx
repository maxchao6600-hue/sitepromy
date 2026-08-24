"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQ } from "@/components/home/FAQ";
import { Portfolio } from "@/components/home/Portfolio";
import { StartingPoints } from "@/components/home/StartingPoints";
import { PageHeader } from "@/components/page/PageHeader";
import { WorkProjectNav } from "@/components/home/WorkProjectNav";
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
      <WorkProjectNav />
      <Portfolio hideIntro />
      <StartingPoints />
      <FAQ />
      <FinalCTA />
    </>
  );
}
