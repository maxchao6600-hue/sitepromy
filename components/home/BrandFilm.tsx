"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { brandPipeline } from "@/lib/site";
import { cn } from "@/lib/cn";

function PipelineVisual({ stage }: { stage: number }) {
  const key = brandPipeline[stage]?.key ?? "idea";

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-[#080a0f]">
      {key === "idea" && (
        <div className="flex h-full flex-col justify-center p-8 sm:p-12">
          <div className="space-y-3 opacity-80">
            <span className="block h-2 w-32 rounded-full bg-white/15" />
            <span className="block h-2 w-48 rounded-full bg-white/10" />
            <span className="block h-2 w-24 rounded-full bg-white/10" />
          </div>
          <div className="mt-8 h-40 rounded-lg border-2 border-dashed border-white/15" />
          <p className="mt-4 font-mono text-xs text-muted">sketch notes</p>
        </div>
      )}
      {key === "wireframe" && (
        <div className="grid h-full grid-cols-4 grid-rows-4 gap-2 p-6 sm:p-10">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className={cn(
                "rounded border border-white/15 bg-white/[0.03]",
                i === 0 && "col-span-2 row-span-1",
                i === 1 && "col-span-2",
                i === 4 && "col-span-2 row-span-2",
              )}
            />
          ))}
        </div>
      )}
      {key === "design" && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-6 py-3">
            <span className="font-display text-xs font-bold">Brand.</span>
            <span className="h-3 w-12 rounded-full bg-accent" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 p-6">
            <div className="flex flex-col justify-center gap-2">
              <span className="h-3 w-3/4 rounded-full bg-white/80" />
              <span className="h-3 w-1/2 rounded-full bg-white/80" />
              <span className="mt-2 h-2 w-full rounded-full bg-white/15" />
            </div>
            <div className="rounded-lg bg-gradient-to-br from-accent/25 to-transparent" />
          </div>
        </div>
      )}
      {key === "build" && (
        <pre className="flex h-full items-center p-8 font-mono text-xs leading-relaxed text-accent/90 sm:text-sm">
          {`<section className="hero">\n  <h1>{title}</h1>\n  <Button>Launch</Button>\n</section>`}
        </pre>
      )}
      {key === "live" && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-6 py-3">
            <span className="font-display text-xs font-bold">Brand.</span>
            <span className="flex items-center gap-1.5 text-[10px] text-[#28c840]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
              LIVE
            </span>
          </div>
          <div className="grid flex-1 grid-cols-[1fr_40%] gap-4 p-6">
            <div className="flex flex-col justify-center gap-2">
              <span className="h-3 w-3/4 rounded-full bg-white/85" />
              <span className="h-2 w-full rounded-full bg-white/15" />
              <span className="mt-3 h-6 w-20 rounded-full bg-accent" />
            </div>
            <div className="rounded-lg bg-white/[0.06]" />
          </div>
        </div>
      )}
    </div>
  );
}

export function BrandFilm() {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setStage((s) => (s >= brandPipeline.length - 1 ? 0 : s + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <section
      id="brand-film"
      className="relative flex min-h-[100svh] flex-col justify-center border-y border-line bg-surface"
    >
      <div className="container-main section-y w-full">
        <MotionReveal>
          <h2 className="display-lg max-w-4xl">
            FROM IDEA
            <br />
            <span className="text-accent">TO LIVE WEBSITE.</span>
          </h2>
        </MotionReveal>

        <div className="mt-12 lg:mt-16">
          <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
            {brandPipeline.map((item, index) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setStage(index)}
                className={cn(
                  "rounded-full border px-4 py-2 text-left transition-all duration-300",
                  stage === index
                    ? "border-accent/40 bg-accent-dim text-accent"
                    : "border-line text-muted hover:text-cream",
                )}
              >
                <span className="block text-[10px] tracking-[0.2em]">
                  {item.label.toUpperCase()}
                </span>
                <span className="block text-[10px] text-muted">{item.sub}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={stage}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PipelineVisual stage={stage} />
          </motion.div>

          <div className="mt-6 flex items-center gap-3 text-xs tracking-[0.25em] text-muted uppercase">
            {brandPipeline.map((item, i) => (
              <span key={item.key} className="flex items-center gap-3">
                <span className={cn(stage >= i && "text-accent")}>{item.label}</span>
                {i < brandPipeline.length - 1 ? <span>→</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
