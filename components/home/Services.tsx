"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ServicePreview } from "@/components/home/ServicePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Services() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const current = services[active];

  return (
    <section id="services" className="scroll-mt-24 border-y border-line bg-surface">
      <div className="container-main section-y">
        <div className="grid grid-cols-12 gap-x-14">
          <MotionReveal className="col-span-4 sticky top-28 self-start">
            <p className="eyebrow text-accent">Services</p>
            <h2 className="display-lg mt-6 text-cream">
              WHAT
              <br />
              WE
              <br />
              BUILD.
            </h2>
          </MotionReveal>

          <div className="col-span-5">
            <div className="border-t border-line">
              {services.map((service, index) => {
                const isActive = active === index;

                return (
                  <div key={service.number} className="border-b border-line">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className={cn(
                        "group relative flex w-full flex-row items-start gap-6 py-9 text-left transition-colors",
                        isActive && "bg-white/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "meta-label w-14 shrink-0 transition-colors",
                          isActive ? "text-accent" : "text-muted",
                        )}
                      >
                        {service.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3
                            className={cn(
                              "font-display text-[clamp(1.75rem,calc(4*var(--cvw,1vw)),2.75rem)] font-semibold tracking-tight transition-colors",
                              isActive ? "text-cream" : "text-cream/65",
                            )}
                          >
                            {service.title}
                          </h3>
                          <span
                            className={cn(
                              "mt-2 shrink-0 text-lg transition-all duration-500",
                              isActive ? "translate-x-0 text-accent opacity-100" : "text-muted opacity-35",
                            )}
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>

                        <p
                          className={cn(
                            "mt-2 max-w-md text-base leading-7 transition-all duration-500",
                            isActive ? "text-secondary" : "text-muted/80",
                          )}
                        >
                          {service.description}
                        </p>

                        <span
                          className={cn(
                            "mt-4 block h-px origin-left bg-accent transition-transform duration-700",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative col-span-3">
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
