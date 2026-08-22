import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { JsonLd } from "@/components/home/JsonLd";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Solutions } from "@/components/home/Solutions";
import { Why } from "@/components/home/Why";
import { Work } from "@/components/home/Work";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Why />
      <Process />
      <Solutions />
      <Work compact />
      <FAQ />
      <FinalCTA />
    </>
  );
}
