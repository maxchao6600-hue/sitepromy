"use client";

import { useState } from "react";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scene-faq scene-noise relative scroll-mt-24 overflow-x-clip border-y border-line"
    >
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.faq.scene} label={t.faq.index} />
          <h2 className="display-lg mt-6 text-cream lg:mt-8">{t.faq.title}</h2>

          <div className="mt-8 border-t border-line lg:mt-10">
            {t.faq.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-cream lg:py-6"
                  >
                    <span className="flex min-w-0 gap-4">
                      <span className="meta-label shrink-0 text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display text-base font-semibold tracking-tight transition-colors sm:text-lg",
                          isOpen ? "text-cream" : "text-cream/70",
                        )}
                      >
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "meta-label shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-45 text-accent",
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-5 pl-12 text-sm leading-7 text-secondary sm:pl-14 lg:pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
