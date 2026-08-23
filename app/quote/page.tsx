import type { Metadata } from "next";
import { QuotePageContent } from "@/components/pages/QuotePageContent";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Tell SitePro about your website idea. We'll help turn it into a professional website for your Malaysian business.",
  alternates: {
    canonical: `${SITE.url}/quote`,
  },
  openGraph: {
    title: "Start Your Project | SitePro Malaysia",
    description:
      "Tell SitePro about your website idea. We'll help turn it into a professional website.",
    url: `${SITE.url}/quote`,
  },
};

export const revalidate = 300;

export default function QuotePage() {
  return <QuotePageContent />;
}
