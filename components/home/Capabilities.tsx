"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";

const COLUMN_KEYS = ["design", "development", "growth"] as const;

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section className="scene-capabilities scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.capabilities.scene} label={t.capabilities.index} />
          <h2 className="display-lg mt-6 text-cream lg:mt-8">
            {t.capabilities.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary lg:mt-5 lg:text-base">
            {t.capabilities.intro}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3 lg:mt-12">
            {COLUMN_KEYS.map((key) => {
              const column = t.capabilities.columns[key];
              return (
                <article key={key} className="bg-ink p-6 sm:p-8">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-cream">
                    {column.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-secondary"
                      >
                        <span className="mt-2 h-px w-3 shrink-0 bg-accent/60" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
