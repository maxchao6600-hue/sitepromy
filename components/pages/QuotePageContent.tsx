"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQ } from "@/components/home/FAQ";
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
          <aside className="space-y-10">
            <div>
              <p className="meta-label text-muted">{t.quotePage.nextTitle}</p>
              <ol className="mt-5 space-y-4">
                {t.quotePage.steps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm leading-7 text-cream/60">
                    <span className="meta-label shrink-0 text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-line pt-8">
              <ul className="space-y-3">
                {t.quotePage.sections.map((section) => (
                  <li
                    key={section.number}
                    className="flex items-center gap-3 text-sm text-cream/50"
                  >
                    <span className="meta-label text-accent">{section.number}</span>
                    <span>{section.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <QuoteForm />
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
