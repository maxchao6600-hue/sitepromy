"use client";

import { AfterLaunch } from "@/components/home/AfterLaunch";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQ } from "@/components/home/FAQ";
import { ProcessInteractive } from "@/components/home/ProcessInteractive";
import { SiteProStandard } from "@/components/home/SiteProStandard";
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
      <ProcessInteractive />
      <AfterLaunch />
      <SiteProStandard />
      <StartingPoints />
      <FAQ />
      <FinalCTA />
    </>
  );
}
