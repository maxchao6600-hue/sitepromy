import { BrandFilm } from "@/components/home/BrandFilm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { JsonLd } from "@/components/home/JsonLd";
import { Portfolio } from "@/components/home/Portfolio";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { SpeedSection } from "@/components/home/SpeedSection";
import { Why } from "@/components/home/Why";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <BrandFilm />
      <Services />
      <Portfolio />
      <SpeedSection />
      <Why />
      <Process />
      <FinalCTA />
    </>
  );
}
