"use client";

import { cn } from "@/lib/cn";

export type BrandFilmStageKey = "idea" | "direction" | "design" | "build" | "live";

export const BRAND_FILM_STAGES: BrandFilmStageKey[] = [
  "idea",
  "direction",
  "design",
  "build",
  "live",
];

type BrandFilmStageProps = {
  stageKey: BrandFilmStageKey;
  stageIndex: number;
  label: string;
  description: string;
  titleLines: string[];
  active: boolean;
  reduced: boolean;
};

export function BrandFilmStage({
  stageKey,
  stageIndex,
  label,
  description,
  titleLines,
  active,
  reduced,
}: BrandFilmStageProps) {
  const number = String(stageIndex + 1).padStart(2, "0");

  return (
    <div className="relative min-w-0">
      <p
        className={cn(
          "meta-label transition-colors duration-500",
          active ? "text-accent" : "text-muted",
        )}
      >
        {number} / 05
      </p>

      <div className="relative mt-4 overflow-hidden lg:mt-5">
        <h2
          className={cn(
            "font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-cream transition-all duration-700",
            !reduced && active && "brand-film-reveal",
            !active && "opacity-40",
          )}
          style={{
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {label}
        </h2>
        <span
          className={cn(
            "mt-4 block h-px origin-left bg-accent transition-transform duration-700",
            active ? "scale-x-100" : "scale-x-0",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          aria-hidden="true"
        />
      </div>

      <p
        className={cn(
          "mt-5 max-w-md text-sm leading-7 text-secondary transition-opacity duration-500 lg:mt-6 lg:text-[0.9375rem] lg:leading-8",
          active ? "opacity-100" : "opacity-50",
        )}
      >
        {description}
      </p>

      {stageKey === "live" ? (
        <div
          className={cn(
            "mt-8 transition-opacity duration-700 lg:mt-10",
            active ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.05] tracking-tight text-cream">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      ) : null}
    </div>
  );
}
