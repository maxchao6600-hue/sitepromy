"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { brandSteps } from "@/lib/site";
import { cn } from "@/lib/cn";

function StepVisual({ visual, active }: { visual: string; active: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border transition-colors duration-500",
        active
          ? "border-accent/30 bg-accent-soft"
          : "border-white/[0.06] bg-white/[0.02]",
      )}
    >
      {visual === "idea" && (
        <div className="space-y-2 p-6">
          <span className="block h-2 w-24 rounded-full bg-white/60" />
          <span className="block h-2 w-32 rounded-full bg-white/30" />
          <span className="block h-2 w-20 rounded-full bg-white/20" />
          <span className="mt-4 block h-16 w-full rounded-lg border border-dashed border-white/15" />
        </div>
      )}
      {visual === "design" && (
        <div className="grid w-full grid-cols-3 gap-2 p-6">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={cn(
                "rounded bg-white/10",
                i === 0 ? "col-span-2 row-span-2" : "h-8",
              )}
            />
          ))}
        </div>
      )}
      {visual === "build" && (
        <pre className="p-4 font-mono text-[10px] leading-relaxed text-accent/80 sm:text-xs">
          {`const site = {
  design: "ready",
  mobile: true,
  fast: true
}`}
        </pre>
      )}
      {visual === "launch" && (
        <div className="w-full p-6">
          <div className="rounded-lg border border-white/10 bg-[#0a0d14] p-3">
            <div className="mb-2 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
              <span className="ml-auto text-[8px] text-muted">LIVE</span>
            </div>
            <span className="block h-2 w-20 rounded-full bg-white/70" />
            <span className="mt-2 block h-16 rounded bg-gradient-to-br from-accent/25 to-transparent" />
          </div>
        </div>
      )}
      {active && !reduced ? (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent"
          layoutId="brand-glow"
        />
      ) : null}
    </div>
  );
}

export function BrandFilm() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="brand-film" className="relative overflow-hidden border-y border-white/[0.06] bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,255,0.08),transparent_65%)]" />
      <div className="container-main section-pad relative">
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow text-accent">How we work</p>
          <h2 className="heading-display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
            FROM IDEA
            <br />
            <span className="text-gradient">TO LIVE WEBSITE.</span>
          </h2>
        </MotionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {brandSteps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "shrink-0 rounded-xl border px-5 py-4 text-left transition-all duration-300 lg:w-full",
                  active === index
                    ? "border-accent/40 bg-accent-soft"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/12",
                )}
              >
                <span className="text-[11px] font-medium tracking-[0.2em] text-accent">
                  {step.number}
                </span>
                <p className="mt-1 font-display text-lg font-semibold tracking-tight text-cream">
                  {step.title.toUpperCase()}
                </p>
              </button>
            ))}
          </div>

          <div>
            <StepVisual visual={brandSteps[active].visual} active />
            <motion.p
              key={active}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 max-w-lg text-sm leading-7 text-cream/60"
            >
              {brandSteps[active].description}
            </motion.p>

            <div
              className="mt-10 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]"
              aria-hidden="true"
            >
              <p className="text-center text-xs tracking-[0.2em] text-muted uppercase">
                Future brand film · 16:9 reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
