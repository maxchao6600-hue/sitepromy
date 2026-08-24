"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { SubtleGrid } from "@/components/ui/SubtleGrid";
import {
  BrandFilmStage,
  BRAND_FILM_STAGES,
  type BrandFilmStageKey,
} from "@/components/home/brand-film/BrandFilmStage";
import { BrandFilmVisual } from "@/components/home/brand-film/BrandFilmVisual";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function stageFromProgress(progress: number): BrandFilmStageKey {
  if (progress < 0.2) return "idea";
  if (progress < 0.4) return "direction";
  if (progress < 0.65) return "design";
  if (progress < 0.85) return "build";
  return "live";
}

export function BrandFilm() {
  const { t, href } = useLanguage();
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) return;

    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const next = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const activeStage = reduced ? "live" : stageFromProgress(progress);
  const displayProgress = reduced ? 1 : progress;
  const stageIndex = BRAND_FILM_STAGES.indexOf(activeStage);
  const stageCopy = t.brandFilm.stages[activeStage];

  const visualLabels = useMemo(
    () => ({
      artboard: t.brandFilm.artboard,
      concept: t.brandFilm.concept,
      responsive: t.brandFilm.responsive,
      liveStatus: t.brandFilm.liveStatus,
      brandName: t.brandFilm.brandName,
      brandDescriptor: t.brandFilm.brandDescriptor,
      closingLines: t.brandFilm.closingLines,
    }),
    [t.brandFilm],
  );

  return (
    <section
      id="brand-film"
      aria-label={t.brandFilm.index}
      className="scene-brand-film scene-noise relative overflow-x-clip border-y border-line"
    >
      <div
        ref={trackRef}
        className={cn(
          "relative",
          reduced ? "min-h-0" : "h-[320vh] lg:h-[360vh]",
        )}
      >
        <div
          className={cn(
            "relative z-10",
            reduced
              ? "section-y-compact lg:section-y"
              : "sticky top-16 flex min-h-[calc(100svh-4rem)] items-center py-8 lg:top-[4.25rem] lg:min-h-[calc(100svh-4.25rem)] lg:py-10",
          )}
        >
          <SubtleGrid className="opacity-20" />
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 75% 45%, rgba(0,128,255,0.1), transparent 65%)",
            }}
          />

          <div className="container-main relative z-10 w-full">
            <SectionIndex index={t.brandFilm.scene} label={t.brandFilm.index} />

            <div className="brand-film-grid mt-6 grid min-w-0 grid-cols-1 gap-8 lg:mt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:gap-12">
              <div className="brand-film-copy relative z-[2] min-w-0">
                <BrandFilmStage
                  stageKey={activeStage}
                  stageIndex={stageIndex}
                  label={stageCopy.label}
                  description={stageCopy.description}
                  titleLines={t.brandFilm.titleLines}
                  active
                  reduced={!!reduced}
                />

                <ol className="mt-8 flex flex-wrap gap-2 lg:mt-10" aria-hidden="true">
                  {BRAND_FILM_STAGES.map((key, index) => {
                    const isActive = key === activeStage;
                    return (
                      <li
                        key={key}
                        className={cn(
                          "border px-2.5 py-1.5 meta-label transition-colors duration-500",
                          isActive
                            ? "border-accent/40 text-accent"
                            : "border-line text-muted",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}{" "}
                        {t.brandFilm.stages[key].label}
                      </li>
                    );
                  })}
                </ol>

                {activeStage === "live" || reduced ? (
                  <Link
                    href={href("/quote")}
                    className="group mt-8 inline-flex min-h-12 items-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-cream lg:mt-10"
                  >
                    {t.brandFilm.cta}
                    <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ) : null}
              </div>

              <div className="brand-film-preview relative z-[1] min-w-0 max-w-full overflow-hidden">
                <BrandFilmVisual
                  stageKey={activeStage}
                  progress={displayProgress}
                  labels={visualLabels}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
