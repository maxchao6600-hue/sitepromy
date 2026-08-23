import type { Metadata } from "next";
import { PageHeader } from "@/components/page/PageHeader";
import { QuoteForm } from "@/components/quote/QuoteForm";
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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact SitePro."
        description="The fastest way to start is the form. Tell us about your project and we'll follow up."
      />
      <section className="bg-ink py-12 sm:py-16 lg:py-20">
        <div className="container-main grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <aside>
            <p className="text-sm leading-7 text-cream/55">
              SitePro designs and develops professional websites for businesses
              in Malaysia. If you already have an idea — or just know you need
              a better website — start here.
            </p>
            <p className="mt-6 text-sm text-muted">{SITE.domain}</p>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
