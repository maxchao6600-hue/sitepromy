import { BrandFilm } from "@/components/home/BrandFilm";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { JsonLd } from "@/components/home/JsonLd";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Showcase } from "@/components/home/Showcase";
import { Why } from "@/components/home/Why";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <BrandFilm />
      <Services />
      <Showcase />
      <Why />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
