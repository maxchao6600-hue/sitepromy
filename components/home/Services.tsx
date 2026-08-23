"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { services } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const current = services[active];
  const activeCopy = t.services.items[current.number as ServiceKey];

  return (
    <section
      id="services"
      className="scene-services scene-noise relative scroll-mt-24 border-y border-line"
    >
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.services.scene} label={t.services.index} />

          <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <h2 className="display-lg text-cream">
                {t.services.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-4 text-sm leading-7 text-secondary lg:mt-5">
                {activeCopy.description}
              </p>
            </div>

            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <PreviewFrame url={`${current.preview}.sitepromy.com`} fixedAspect={false}>
                    <WebsitePreview
                      id={current.preview}
                      large
                      className="aspect-[16/10] min-h-[240px] w-full sm:min-h-[320px] lg:min-h-[420px]"
                    />
                  </PreviewFrame>

                  <div className="mt-4 grid grid-cols-2 gap-4 border border-line bg-surface-2/50 p-4 sm:grid-cols-4 lg:mt-5 lg:p-5">
                    <MetaBlock label={t.services.metaLabels.type} value={activeCopy.type} />
                    <MetaBlock label={t.services.metaLabels.role} value={activeCopy.role} />
                    <MetaBlock label={t.services.metaLabels.focus} value={activeCopy.focus} />
                    <MetaBlock
                      label={t.services.metaLabels.deliverable}
                      value={activeCopy.deliverable}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:mt-10 lg:grid-cols-6 lg:gap-3">
            {services.map((service, index) => {
              const copy = t.services.items[service.number as ServiceKey];
              const isActive = active === index;

              return (
                <button
                  key={service.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group border px-3 py-3 text-left transition-all duration-300 sm:px-4 sm:py-4",
                    isActive
                      ? "border-accent/40 bg-accent/[0.06]"
                      : "border-line bg-transparent hover:border-white/15",
                  )}
                >
                  <span
                    className={cn(
                      "meta-label transition-colors",
                      isActive ? "text-accent" : "text-muted",
                    )}
                  >
                    {service.number}
                  </span>
                  <p
                    className={cn(
                      "mt-2 font-display text-sm font-semibold leading-snug tracking-tight transition-colors sm:text-base",
                      isActive ? "text-cream" : "text-cream/55",
                    )}
                  >
                    {copy.title}
                  </p>
                  <span
                    className={cn(
                      "mt-3 block h-px origin-left bg-accent transition-transform duration-500",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="meta-label text-muted">{label}</p>
      <p className="mt-1.5 text-sm leading-6 text-cream">{value}</p>
    </div>
  );
}
