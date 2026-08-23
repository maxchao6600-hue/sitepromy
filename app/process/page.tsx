import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/pages/ProcessPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("process", "en");

export const revalidate = 300;

export default function ProcessPage() {
  return <ProcessPageContent />;
}
