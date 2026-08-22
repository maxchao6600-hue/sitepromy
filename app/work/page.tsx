import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Portfolio } from "@/components/home/Portfolio";
import { PageHeader } from "@/components/page/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore SitePro concept website designs — ATELIER, NØVA, FORM, MONO, ORBIT and PULSE.",
  alternates: {
    canonical: `${SITE.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Concept websites."
        description="Each project is a SitePro concept design — not a live client. Real work will replace these as projects launch."
      />
      <Portfolio hideIntro />
      <FinalCTA />
    </>
  );
}
