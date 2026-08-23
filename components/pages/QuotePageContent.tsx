"use client";

import { PageHeader } from "@/components/page/PageHeader";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { useLanguage } from "@/lib/i18n";

export function QuotePageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.quotePage.eyebrow}
        title={t.quotePage.title}
        description={t.quotePage.description}
      />
      <section className="bg-ink py-12 sm:py-16 lg:py-20">
        <div className="container-main grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <aside>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              {t.quotePage.nextTitle}
            </h2>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-cream/55">
              {t.quotePage.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
