"use client";

import { cn } from "@/lib/cn";

type StagePipelineProps = {
  stages: string[];
  activeIndex: number;
  className?: string;
};

export function StagePipeline({ stages, activeIndex, className }: StagePipelineProps) {
  return (
    <ol className={cn("flex flex-col gap-0", className)}>
      {stages.map((stage, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;

        return (
          <li key={stage} className="relative flex items-stretch gap-4">
            {index < stages.length - 1 ? (
              <span
                className={cn(
                  "absolute left-[7px] top-6 bottom-0 w-px",
                  isPast || isActive ? "bg-accent/40" : "bg-line",
                )}
                aria-hidden="true"
              />
            ) : null}
            <span
              className={cn(
                "relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 transition-colors duration-500",
                isActive
                  ? "border-accent bg-accent"
                  : isPast
                    ? "border-accent/60 bg-accent/30"
                    : "border-line bg-transparent",
              )}
            />
            <div className={cn("pb-6", index === stages.length - 1 && "pb-0")}>
              <p
                className={cn(
                  "font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-500 sm:text-base",
                  isActive ? "text-cream" : isPast ? "text-cream/60" : "text-muted",
                )}
              >
                {stage}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
