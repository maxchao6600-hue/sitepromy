import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Work } from "@/components/home/Work";
import { PageHeader } from "@/components/page/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore SitePro concept website designs for businesses in Malaysia — corporate, restaurant, e-commerce, service and campaign sites.",
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
        description="These are concept designs, not live client projects. They show the kind of websites SitePro can create — and will be replaced with real work as projects launch."
      />
      <Work hideIntro />
      <FinalCTA />
    </>
  );
}
