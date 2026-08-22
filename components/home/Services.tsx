"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 bg-off-white text-ink">
      <div className="container-main section-y">
        <MotionReveal>
          <h2 className="display-lg text-ink">WHAT WE BUILD.</h2>
        </MotionReveal>

        <div className="mt-16 lg:mt-24">
          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={cn(
                "group flex w-full border-t border-ink/10 py-10 text-left transition-colors lg:py-14",
                active === index && "bg-ink/[0.02]",
              )}
            >
              <span
                className={cn(
                  "w-16 shrink-0 font-display text-sm tracking-widest transition-colors lg:w-24 lg:text-base",
                  active === index ? "text-accent" : "text-ink/30",
                )}
              >
                {service.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className={cn(
                    "font-display text-3xl font-semibold tracking-tight transition-transform sm:text-4xl lg:text-5xl",
                    active === index && !reduced && "translate-x-2",
                  )}
                >
                  {service.title}
                </h3>
              </div>
            </button>
          ))}
          <div className="border-t border-ink/10" />
        </div>

        <motion.div
          key={active}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-10 overflow-hidden rounded-xl border border-ink/10 shadow-[0_32px_80px_rgba(5,6,8,0.12)] lg:mt-14"
        >
          <WebsitePreview
            id={services[active].preview}
            large
            className="aspect-[16/9] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
