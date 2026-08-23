"use client";

import { PageHeader } from "@/components/page/PageHeader";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        description={t.contactPage.description}
      />
      <section className="bg-ink py-12 sm:py-16 lg:py-20">
        <div className="container-main grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <aside>
            <p className="text-sm leading-7 text-cream/55">{t.contactPage.aside}</p>
            <p className="mt-6 text-sm text-muted">{SITE.domain}</p>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
