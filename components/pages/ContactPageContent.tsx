"use client";

import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQ } from "@/components/home/FAQ";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="scene-hero scene-noise border-b border-line pt-24 lg:pt-28">
        <div className="container-main section-y-compact pb-10 lg:pb-14">
          <p className="meta-label text-accent">{t.contactPage.eyebrow}</p>
          <h1 className="display-lg mt-4 text-cream">
            {t.contactPage.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-xl body-lg text-secondary">{t.contactPage.description}</p>
        </div>
      </section>

      <section className="bg-ink py-12 sm:py-16 lg:py-20">
        <div className="container-main grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <aside>
            <p className="text-sm leading-7 text-cream/60 lg:text-[0.9375rem] lg:leading-8">
              {t.contactPage.aside}
            </p>
            <p className="meta-label mt-8 text-muted">{SITE.domain}</p>

            <div className="mt-8 border-t border-line pt-8">
              <p className="meta-label text-accent">{t.footer.visitTitle}</p>
              <address className="mt-4 not-italic text-sm leading-7 text-cream/70">
                <span className="block">{SITE.address.line1}</span>
                <span className="block">{SITE.address.line2}</span>
                <span className="block">{SITE.address.line3}</span>
              </address>
              <a
                href={SITE.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.mapsAria}
                className="group mt-5 inline-flex max-w-full items-center gap-2 text-sm text-accent transition-colors duration-300 hover:text-cream"
              >
                <span className="relative min-w-0">
                  <span className="break-words">{t.footer.mapsLink}</span>
                  <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="meta-label text-accent">{t.quotePage.nextTitle}</p>
              <ol className="mt-5 space-y-4">
                {t.quotePage.steps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm leading-6 text-secondary">
                    <span className="meta-label shrink-0 text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
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
