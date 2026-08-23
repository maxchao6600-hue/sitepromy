import type { Metadata } from "next";
import { PageHeader } from "@/components/page/PageHeader";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Tell SitePro about your website idea. We'll help turn it into a professional website for your Malaysian business.",
  alternates: {
    canonical: `${SITE.url}/quote`,
  },
  openGraph: {
    title: "Start Your Project | SitePro Malaysia",
    description:
      "Tell SitePro about your website idea. We'll help turn it into a professional website.",
    url: `${SITE.url}/quote`,
  },
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Start your project"
        title="Tell us what you have in mind."
        description="Share a little about your business and the website you need. We'll follow up with a clear next step — no obligation."
      />
      <section className="bg-ink py-20">
        <div className="container-main grid grid-cols-[0.85fr_1.15fr] gap-12">
          <aside>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              What happens next
            </h2>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-cream/55">
              <li>
                <span className="font-medium text-cream">1. We review your brief.</span>{" "}
                Your goals, website type and timeline help us recommend the
                right approach.
              </li>
              <li>
                <span className="font-medium text-cream">2. We follow up.</span>{" "}
                You&apos;ll hear from us with questions if needed, and a suitable
                quote.
              </li>
              <li>
                <span className="font-medium text-cream">3. We plan the site.</span>{" "}
                Once you&apos;re ready, we turn the idea into structure, design and
                a live website.
              </li>
            </ol>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
