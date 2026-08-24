"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { SelectedWorkSlider } from "@/components/home/SelectedWorkSlider";
import { WhySitePro } from "@/components/home/WhySitePro";
import { Services } from "@/components/home/Services";
import { Capabilities } from "@/components/home/Capabilities";
import { ProcessInteractive } from "@/components/home/ProcessInteractive";
import { SiteProStandard } from "@/components/home/SiteProStandard";
import { FAQ } from "@/components/home/FAQ";

export function HomePageContent() {
  return (
    <>
      <Hero />
      <SelectedWorkSlider />
      <WhySitePro />
      <Services />
      <Capabilities />
      <ProcessInteractive />
      <SiteProStandard />
      <FAQ />
      <FinalCTA />
    </>
  );
}
