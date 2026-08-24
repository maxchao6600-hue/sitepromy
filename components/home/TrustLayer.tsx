"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";

export function TrustLayer() {
  const { t } = useLanguage();

  return (
    <section className="scene-trust scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.trust.scene} label={t.trust.index} />
          <h2 className="heading-display mt-6 max-w-3xl text-cream lg:mt-8">
            {t.trust.title}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-0 border-t border-line sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {t.trust.items.map((item) => (
              <article
                key={item.title}
                className="border-b border-line p-6 sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.1em] text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-secondary">{item.body}</p>
                <span className="mt-5 block h-px w-8 bg-accent/50" aria-hidden="true" />
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
