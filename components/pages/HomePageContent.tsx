"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { StudioStatement } from "@/components/home/StudioStatement";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { SpeedSection } from "@/components/home/SpeedSection";
import { ProcessInteractive } from "@/components/home/ProcessInteractive";
import { DesignSystemSection } from "@/components/home/DesignSystemSection";
import { BusinessGoalsSection } from "@/components/home/BusinessGoalsSection";
import { DetailStrip } from "@/components/ui/DetailStrip";
import { useLanguage } from "@/lib/i18n";

export function HomePageContent() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <DetailStrip items={t.detailStrips.capabilities} numbered />
      <StudioStatement />
      <DetailStrip items={t.detailStrips.disciplines} />
      <Services variant="workbench" />
      <Portfolio />
      <SpeedSection />
      <ProcessInteractive />
      <DesignSystemSection />
      <BusinessGoalsSection />
      <FinalCTA />
    </>
  );
}
