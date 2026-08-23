import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/WorkPageContent";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore SitePro concept website designs — ATELIER, NØVA, FORM, MONO, ORBIT and PULSE.",
  alternates: {
    canonical: `${SITE.url}/work`,
  },
};

export const revalidate = 300;

export default function WorkPage() {
  return <WorkPageContent />;
}
