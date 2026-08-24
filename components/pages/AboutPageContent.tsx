"use client";

import { AboutStudio } from "@/components/home/AboutStudio";
import { Capabilities } from "@/components/home/Capabilities";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SiteProStandard } from "@/components/home/SiteProStandard";
import { TrustLayer } from "@/components/home/TrustLayer";
import { WhySitePro } from "@/components/home/WhySitePro";
import { PageHeader } from "@/components/page/PageHeader";
import { useLanguage } from "@/lib/i18n";

export function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        description={t.aboutPage.description}
      />
      <AboutStudio />
      <TrustLayer />
      <WhySitePro />
      <Capabilities />
      <SiteProStandard />
      <FAQ />
      <FinalCTA />
    </>
  );
}
