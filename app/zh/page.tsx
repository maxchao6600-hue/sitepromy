import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { JsonLd } from "@/components/home/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("home", "zh");

export const revalidate = 300;

export default function ChineseHomePage() {
  return (
    <>
      <JsonLd />
      <HomePageContent />
    </>
  );
}
