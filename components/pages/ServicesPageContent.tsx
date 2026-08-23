"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Services } from "@/components/home/Services";
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
      <FinalCTA />
    </>
  );
}
