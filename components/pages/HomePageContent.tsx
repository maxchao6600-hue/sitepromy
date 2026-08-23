"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { SpeedSection } from "@/components/home/SpeedSection";

export function HomePageContent() {
  return (
    <>
      <Hero />
      <SpeedSection />
      <FinalCTA />
    </>
  );
}
