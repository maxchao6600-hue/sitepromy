"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ServicePreview } from "@/components/home/ServicePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { services } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ServiceMeta({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active: boolean;
}) {
  return (
    <div>
      <p className="meta-label text-muted">{label}</p>
      <p
        className={cn(
          "mt-1.5 text-sm tracking-wide transition-colors duration-500",
          active ? "text-cream" : "text-muted",
        )}
      >
        {value}
      </p>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const current = services[active];
  const activeCopy = t.services.items[current.number as ServiceKey];

  const handleSelect = (index: number) => {
    setActive(index);
    setMobileOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="scene-services scene-noise relative scroll-mt-24 border-y border-line"
    >
      <div className="container-main section-y">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <MotionReveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionIndex index={t.services.scene} label={t.services.index} />
            <h2 className="display-lg mt-6 text-cream lg:mt-8">
              {t.services.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-8 hidden border-t border-line pt-6 lg:mt-10 lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="grid gap-5"
                >
                  <ServiceMeta
                    label={t.services.metaLabels.type}
                    value={activeCopy.type}
                    active
                  />
                  <ServiceMeta
                    label={t.services.metaLabels.role}
                    value={activeCopy.role}
                    active
                  />
                  <ServiceMeta
                    label={t.services.metaLabels.focus}
                    value={activeCopy.focus}
                    active
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </MotionReveal>

          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <p className="eyebrow mb-4 text-accent lg:hidden">{t.services.eyebrow}</p>
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
                              "font-display text-[clamp(1.5rem,5vw,2.75rem)] font-semibold tracking-tight transition-all duration-500",
                              isActive ? "text-cream" : "text-cream/55",
                            )}
                          >
                            {copy.title}
                          </h3>
                          <span
                            className={cn(
                              "mt-1 shrink-0 text-lg transition-all duration-500 sm:mt-2",
                              isActive
                                ? "translate-x-0 text-accent opacity-100"
                                : "text-muted opacity-30",
                            )}
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>

                        <p
                          className={cn(
                            "mt-2 max-w-md text-[0.9375rem] leading-7 transition-all duration-500 sm:text-base",
                            isActive ? "text-secondary" : "text-muted/75",
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
                          <div className="mb-5 grid grid-cols-2 gap-4 border-t border-line pt-4">
                            <ServiceMeta
                              label={t.services.metaLabels.type}
                              value={copy.type}
                              active
                            />
                            <ServiceMeta
                              label={t.services.metaLabels.role}
                              value={copy.role}
                              active
                            />
                            <ServiceMeta
                              label={t.services.metaLabels.focus}
                              value={copy.focus}
                              active
                            />
                          </div>
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
