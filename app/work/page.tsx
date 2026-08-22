import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Showcase } from "@/components/home/Showcase";
import { PageHeader } from "@/components/page/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore SitePro concept website designs for businesses in Malaysia — corporate, restaurant, e-commerce, construction, beauty and professional service sites.",
  alternates: {
    canonical: `${SITE.url}/work`,
  },
  openGraph: {
    title: "Our Work | SitePro Malaysia",
    description:
      "Concept website designs showing the range of styles SitePro can create for Malaysian businesses.",
    url: `${SITE.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Built for different businesses."
        description="Concept designs showing the range of styles SitePro can create — not live client projects. Real work will replace these as projects launch."
      />
      <Showcase hideIntro />
      <FinalCTA />
    </>
  );
}
