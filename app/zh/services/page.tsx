import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("services", "zh");

export const revalidate = 300;

export default function ChineseServicesPage() {
  return <ServicesPageContent />;
}
