import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/WorkPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("work", "zh");

export const revalidate = 300;

export default function ChineseWorkPage() {
  return <WorkPageContent />;
}
