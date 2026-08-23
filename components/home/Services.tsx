"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ServicePreview } from "@/components/home/ServicePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { services } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const current = services[active];

  const handleSelect = (index: number) => {
    setActive(index);
    setMobileOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="scroll-mt-24 border-y border-line bg-surface">
      <div className="container-main section-y">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <MotionReveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-accent">{t.services.eyebrow}</p>
            <h2 className="display-lg mt-5 text-cream lg:mt-6">
              {t.services.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </MotionReveal>

          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="border-t border-line">
              {services.map((service, index) => {
                const copy = t.services.items[service.number as ServiceKey];
                const isActive = active === index;
                const isMobileExpanded = mobileOpen === index;

                return (
                  <div key={service.number} className="border-b border-line">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => handleSelect(index)}
                      className={cn(
                        "group relative flex w-full flex-col gap-3 py-6 text-left transition-colors sm:flex-row sm:items-start sm:gap-5 sm:py-7 lg:py-9",
                        isActive && "bg-white/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "meta-label w-12 shrink-0 transition-colors sm:w-14",
                          isActive ? "text-accent" : "text-muted",
                        )}
                      >
                        {service.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3
                            className={cn(
                              "font-display text-[clamp(1.5rem,5vw,2.75rem)] font-semibold tracking-tight transition-colors",
                              isActive ? "text-cream" : "text-cream/65",
                            )}
                          >
                            {copy.title}
                          </h3>
                          <span
                            className={cn(
                              "mt-1 shrink-0 text-lg transition-all duration-500 sm:mt-2",
                              isActive ? "translate-x-0 text-accent opacity-100" : "text-muted opacity-35",
                            )}
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>

                        <p
                          className={cn(
                            "mt-2 max-w-md text-[0.9375rem] leading-7 transition-all duration-500 sm:text-base",
                            isActive ? "text-secondary" : "text-muted/80",
                          )}
                        >
                          {copy.description}
                        </p>

                        <span
                          className={cn(
                            "mt-4 block h-px origin-left bg-accent transition-transform duration-700",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isMobileExpanded ? (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="overflow-hidden pb-6 lg:hidden"
                        >
                          <ServicePreview preview={service.preview} />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 hidden lg:col-span-3 lg:mt-0 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <ServicePreview preview={current.preview} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
