"use client";

import { cn } from "@/lib/cn";

type SelectedWorkNavigationProps = {
  total: number;
  activeIndex: number;
  prevLabel: string;
  nextLabel: string;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  getSlideLabel: (index: number) => string;
};

export function SelectedWorkNavigation({
  total,
  activeIndex,
  prevLabel,
  nextLabel,
  onPrev,
  onNext,
  onSelect,
  getSlideLabel,
}: SelectedWorkNavigationProps) {
  return (
    <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2" role="tablist" aria-label="Selected work slides">
        {Array.from({ length: total }, (_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={getSlideLabel(index)}
              onClick={() => onSelect(index)}
              className={cn(
                "meta-label min-h-10 min-w-10 border px-2.5 transition-colors duration-300",
                isActive
                  ? "border-accent/40 bg-accent/[0.08] text-accent"
                  : "border-line text-muted hover:border-white/15 hover:text-cream",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          className="meta-label inline-flex min-h-10 items-center border border-line px-3 text-muted transition-colors hover:border-white/15 hover:text-cream"
        >
          ← {prevLabel}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="meta-label inline-flex min-h-10 items-center border border-line px-3 text-muted transition-colors hover:border-white/15 hover:text-cream"
        >
          {nextLabel} →
        </button>
      </div>
    </div>
  );
}
