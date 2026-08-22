"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectMockup } from "@/components/home/ProjectMockup";
import { MotionReveal } from "@/components/ui/Motion";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 bg-paper text-ink">
      <div className="container-main section-pad">
        <MotionReveal>
          <p className="eyebrow text-accent">Services</p>
          <h2 className="heading-display mt-5 text-[clamp(2.25rem,6vw,4.5rem)] text-ink">
            WHAT WE BUILD.
          </h2>
        </MotionReveal>

        <div className="mt-14 grid gap-0 lg:grid-cols-[1fr_420px] lg:gap-10">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {services.map((service, index) => (
              <button
                key={service.number}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "group flex w-full items-start gap-6 py-7 text-left transition-colors duration-300 sm:gap-10 sm:py-8",
                  active === index ? "bg-accent-soft" : "hover:bg-ink/[0.02]",
                )}
              >
                <span
                  className={cn(
                    "font-display text-sm tracking-[0.15em] transition-colors",
                    active === index ? "text-accent" : "text-muted",
                  )}
                >
                  {service.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3
                    className={cn(
                      "font-display text-xl font-semibold tracking-tight transition-transform duration-300 sm:text-2xl",
                      active === index && !reduced && "translate-x-1",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-7 text-ink/60">
                    {service.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="relative mt-8 hidden lg:block">
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-28 overflow-hidden rounded-2xl border border-ink/10 shadow-[0_24px_64px_rgba(6,8,15,0.12)]"
            >
              <ProjectMockup theme={services[active].theme} className="rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
