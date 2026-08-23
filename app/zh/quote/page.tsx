import type { Metadata } from "next";
import { QuotePageContent } from "@/components/pages/QuotePageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("quote", "zh");

export const revalidate = 300;

export default function ChineseQuotePage() {
  return <QuotePageContent />;
}
