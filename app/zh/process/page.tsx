import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/pages/ProcessPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("process", "zh");

export const revalidate = 300;

export default function ChineseProcessPage() {
  return <ProcessPageContent />;
}
