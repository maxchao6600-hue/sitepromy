"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQ } from "@/components/home/FAQ";
import { Services } from "@/components/home/Services";
import { StartingPoints } from "@/components/home/StartingPoints";
import { PageHeader } from "@/components/page/PageHeader";
import { useLanguage } from "@/lib/i18n";

export function ServicesPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        description={t.servicesPage.description}
      />
      <Services />
      <StartingPoints />
      <FAQ />
      <FinalCTA />
    </>
  );
}
