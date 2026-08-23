"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { SpeedSection } from "@/components/home/SpeedSection";

export function HomePageContent() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SpeedSection />
      <FinalCTA />
    </>
  );
}
