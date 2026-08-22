"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { speedStages, speedStatus } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SpeedSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setActive((a) => (a >= speedStages.length - 1 ? 0 : a + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <section className="border-y border-line bg-surface">
      <div className="container-main section-y">
        <MotionReveal className="max-w-4xl">
          <h2 className="display-lg">
            GOOD DESIGN
            <br />
            <span className="text-accent">SHOULDN&apos;T TAKE FOREVER.</span>
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-muted">Process flow</p>
            <div className="mt-6 space-y-0">
              {speedStages.map((stage, index) => (
                <div key={stage.key} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                        active >= index
                          ? "border-accent bg-accent-dim text-accent"
                          : "border-line text-muted",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < speedStages.length - 1 ? (
                      <span className="my-1 w-px flex-1 bg-line" />
                    ) : null}
                  </div>
                  <div className="pb-8 pt-2">
                    <p
                      className={cn(
                        "font-display text-2xl font-semibold tracking-tight transition-colors sm:text-3xl",
                        active >= index ? "text-cream" : "text-muted",
                      )}
                    >
                      {stage.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-muted">Project status</p>
            <div className="mt-6 space-y-3">
              {speedStatus.map((status, index) => (
                <motion.div
                  key={status.key}
                  animate={{
                    opacity: active >= index ? 1 : 0.35,
                    x: active === index && !reduced ? 4 : 0,
                  }}
                  className={cn(
                    "flex items-center justify-between border-b border-line py-4",
                    active === index && "border-accent/30",
                  )}
                >
                  <span className="font-display text-lg tracking-wide sm:text-xl">
                    {status.label}
                  </span>
                  {active === index ? (
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-line" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
