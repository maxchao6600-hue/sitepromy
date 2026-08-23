import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SitePro Malaysia for professional web design and development. Tell us about your website project.",
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
  openGraph: {
    title: "Contact SitePro | Malaysia Web Design",
    description:
      "Contact SitePro about your website project. Fast, flexible and professional web design in Malaysia.",
    url: `${SITE.url}/contact`,
  },
};

export const revalidate = 300;

export default function ContactPage() {
  return <ContactPageContent />;
}
