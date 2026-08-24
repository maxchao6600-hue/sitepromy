import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("about", "zh");

export const revalidate = 300;

export default function ChineseAboutPage() {
  return <AboutPageContent />;
}
