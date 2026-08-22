"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { steps } from "@/lib/site";

export function Process() {
  const reduced = useReducedMotion();

  return (
    <section id="process" className="scroll-mt-24 bg-ink">
      <div className="container-main section-pad">
        <MotionReveal className="max-w-2xl">
          <p className="eyebrow text-accent">Process</p>
          <h2 className="heading-display mt-5 text-[clamp(2.25rem,6vw,4rem)]">
            IDEA → DESIGN → BUILD → LAUNCH
          </h2>
        </MotionReveal>

        <Stagger className="relative mt-16">
          <div
            className="pointer-events-none absolute top-5 right-[8%] left-[8%] hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          >
            <motion.span
              className="block h-full origin-left bg-accent"
              initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <li>
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-surface font-display text-xs font-semibold text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-cream/55">
                    {step.description}
                  </p>
                </li>
              </StaggerItem>
            ))}
          </ol>
        </Stagger>
      </div>
    </section>
  );
}
