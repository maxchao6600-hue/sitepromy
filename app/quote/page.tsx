import type { Metadata } from "next";
import { PageHeader } from "@/components/page/PageHeader";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell SitePro about your website idea. We’ll help turn it into a professional website for your Malaysian business.",
  alternates: {
    canonical: `${SITE.url}/quote`,
  },
  openGraph: {
    title: "Get a Free Quote | SitePro Malaysia",
    description:
      "Tell SitePro about your website idea. We’ll help turn it into a professional website.",
    url: `${SITE.url}/quote`,
  },
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Free quote"
        title="Tell us what you have in mind."
        description="Share a little about your business and the website you need. We’ll follow up with a clear next step — no obligation."
      />
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              What happens next
            </h2>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-ink/65">
              <li>
                <span className="font-medium text-ink">1. We review your brief.</span>{" "}
                Your goals, website type and timeline help us recommend the
                right approach.
              </li>
              <li>
                <span className="font-medium text-ink">2. We follow up.</span>{" "}
                You’ll hear from us with questions if needed, and a suitable
                quote.
              </li>
              <li>
                <span className="font-medium text-ink">3. We plan the site.</span>{" "}
                Once you’re ready, we turn the idea into structure, design and
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
