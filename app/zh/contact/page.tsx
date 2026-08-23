import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("contact", "zh");

export const revalidate = 300;

export default function ChineseContactPage() {
  return <ContactPageContent />;
}
