"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const current = services[active];

  return (
    <section id="services" className="scroll-mt-24 border-y border-line bg-surface">
      <div className="container-main section-y">
        <MotionReveal>
          <p className="eyebrow text-accent">Services</p>
          <h2 className="display-lg mt-6 text-cream">WHAT WE BUILD.</h2>
        </MotionReveal>

        <div className="mt-16 lg:mt-20">
          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={cn(
                "group flex w-full flex-col gap-3 border-t border-line py-8 text-left transition-colors sm:flex-row sm:items-start sm:gap-8 lg:py-12",
                active === index && "bg-white/[0.02]",
              )}
            >
              <span
                className={cn(
                  "w-14 shrink-0 font-display text-sm tracking-[0.2em] transition-colors lg:w-20 lg:text-base",
                  active === index ? "text-accent" : "text-muted",
                )}
              >
                {service.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className={cn(
                    "font-display text-3xl font-semibold tracking-tight transition-transform sm:text-4xl lg:text-5xl",
                    active === index ? "text-cream" : "text-cream/70",
                    active === index && !reduced && "translate-x-1",
                  )}
                >
                  {service.title}
                </h3>
                <AnimatePresence mode="wait">
                  {active === index ? (
                    <motion.p
                      key={service.number}
                      initial={reduced ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? undefined : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.35 }}
                      className="mt-3 max-w-xl body-lg text-secondary"
                    >
                      {service.description}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </button>
          ))}
          <div className="border-t border-line" />
        </div>

        <motion.div
          key={active}
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-2xl border border-line shadow-[0_40px_100px_rgba(0,0,0,0.45)] lg:mt-14"
        >
          <WebsitePreview
            id={current.preview}
            large
            className="min-h-[min(52vh,640px)] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
