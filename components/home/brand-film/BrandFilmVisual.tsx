"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { conceptImages } from "@/lib/images";
import { SiteProMarkIcon } from "@/components/layout/Logo";
import type { BrandFilmStageKey } from "@/components/home/brand-film/BrandFilmStage";
import { cn } from "@/lib/cn";
import type { PreviewId } from "@/lib/site";

const DESIGN_SEQUENCE: Array<{ id: PreviewId; brand: string; image: string }> = [
  { id: "atelier", brand: "ATELIER", image: conceptImages.atelier.hero },
  { id: "nova", brand: "NØVA", image: conceptImages.nova.hero },
  { id: "form", brand: "FORM", image: conceptImages.form.hero },
  { id: "pulse", brand: "PULSE", image: conceptImages.pulse.hero },
];

type BrandFilmVisualProps = {
  stageKey: BrandFilmStageKey;
  progress: number;
  labels: {
    artboard: string;
    concept: string;
    responsive: string;
    liveStatus: string;
    brandName: string;
    brandDescriptor: string;
    closingLines: string[];
  };
};

function IdeaVisual({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[240px] items-center justify-center overflow-hidden border border-line bg-[#07090e] sm:min-h-[280px] lg:min-h-0",
        "transition-opacity duration-700",
        active ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(0,128,255,0.12), transparent 70%)",
        }}
      />
      <div
        className={cn(
          "relative overflow-hidden",
          active && "brand-film-mask-reveal",
        )}
      >
        <p className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tight text-cream">
          IDEA
        </p>
      </div>
      <span
        className={cn(
          "absolute bottom-[22%] left-[18%] right-[18%] h-px origin-left bg-accent transition-transform duration-1000",
          active ? "scale-x-100" : "scale-x-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
    </div>
  );
}

function DirectionVisual({ active, artboard }: { active: boolean; artboard: string }) {
  return (
    <div
      className={cn(
        "relative h-full min-h-[240px] overflow-hidden border border-line bg-[#07090e] sm:min-h-[280px] lg:min-h-0",
        "transition-opacity duration-700",
        active ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,128,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <p className="meta-label absolute left-4 top-4 text-muted lg:left-5 lg:top-5">
        {artboard}
      </p>
      <div
        className={cn(
          "absolute inset-x-[10%] top-[18%] h-[12%] border border-dashed border-accent/40 transition-all duration-700",
          active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      <div
        className={cn(
          "absolute inset-x-[10%] top-[36%] h-[8%] bg-white/10 transition-all duration-700 delay-100",
          active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      <div
        className={cn(
          "absolute left-[10%] top-[50%] h-[28%] w-[48%] border border-white/12 transition-all duration-700 delay-150",
          active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      <div
        className={cn(
          "absolute right-[10%] top-[50%] h-[28%] w-[28%] border border-white/12 transition-all duration-700 delay-200",
          active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      <div className="absolute bottom-4 left-4 flex gap-3 lg:bottom-5 lg:left-5">
        <span className="meta-label text-muted">GRID</span>
        <span className="meta-label text-muted">TYPE</span>
        <span className="meta-label text-muted">LAYOUT</span>
      </div>
    </div>
  );
}

function DesignVisual({
  active,
  designIndex,
  conceptLabel,
}: {
  active: boolean;
  designIndex: number;
  conceptLabel: string;
}) {
  const current = DESIGN_SEQUENCE[designIndex] ?? DESIGN_SEQUENCE[0];

  return (
    <div
      className={cn(
        "relative h-full min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-0",
        "transition-opacity duration-700",
        active ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      aria-hidden="true"
    >
      <PreviewFrame url={`${current.id}.sitepromy.com`} fixedAspect={false} className="h-full">
        <div className="relative aspect-[16/10] min-h-[220px] w-full overflow-hidden lg:min-h-0 lg:h-full lg:aspect-auto">
          {DESIGN_SEQUENCE.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-all duration-700",
                index === designIndex
                  ? "z-[2] scale-100 opacity-100"
                  : "z-[1] scale-[1.02] opacity-0",
              )}
              style={{
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                filter: index === designIndex ? "blur(0px)" : "blur(4px)",
              }}
            >
              <WebsitePreview
                id={item.id}
                large
                className="h-full min-h-full w-full"
              />
            </div>
          ))}
        </div>
      </PreviewFrame>
      <div className="pointer-events-none absolute bottom-3 left-3 z-10 border border-line bg-ink/80 px-3 py-2 backdrop-blur-sm lg:bottom-4 lg:left-4">
        <p className="meta-label text-accent">{conceptLabel}</p>
        <p className="mt-1 font-display text-sm font-semibold tracking-wide text-cream">
          {current.brand}
        </p>
      </div>
    </div>
  );
}

function BuildVisual({
  active,
  buildProgress,
  responsiveLabel,
}: {
  active: boolean;
  buildProgress: number;
  responsiveLabel: string;
}) {
  // 0 wireframe → image → full → desktop → tablet → mobile
  const phase =
    buildProgress < 0.2
      ? "wire"
      : buildProgress < 0.4
        ? "image"
        : buildProgress < 0.55
          ? "full"
          : buildProgress < 0.75
            ? "desktop"
            : buildProgress < 0.9
              ? "tablet"
              : "mobile";

  const frameClass =
    phase === "mobile"
      ? "mx-auto w-[42%] max-w-[180px]"
      : phase === "tablet"
        ? "mx-auto w-[68%] max-w-[280px]"
        : "w-full";

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[240px] items-center justify-center overflow-hidden border border-line bg-[#07090e] p-4 sm:min-h-[280px] sm:p-5 lg:min-h-0",
        "transition-opacity duration-700",
        active ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-700",
          frameClass,
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {phase === "wire" ? (
          <div className="relative aspect-[16/10] w-full border border-dashed border-accent/30 bg-[#06080c]">
            <div className="absolute inset-x-[8%] top-[14%] h-[14%] border border-white/10" />
            <div className="absolute inset-x-[8%] top-[36%] h-[40%] border border-white/10" />
          </div>
        ) : phase === "image" ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={conceptImages.atelier.hero}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/30" />
          </div>
        ) : (
          <PreviewFrame url="atelier.sitepromy.com" fixedAspect={false}>
            <WebsitePreview
              id="atelier"
              large
              className={cn(
                "w-full",
                phase === "mobile" ? "aspect-[9/16] min-h-[200px]" : "aspect-[16/10] min-h-[180px]",
              )}
            />
          </PreviewFrame>
        )}
      </div>
      <p className="meta-label absolute bottom-3 left-3 text-muted lg:bottom-4 lg:left-4">
        {responsiveLabel}
      </p>
    </div>
  );
}

function LiveVisual({
  active,
  labels,
}: {
  active: boolean;
  labels: BrandFilmVisualProps["labels"];
}) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[240px] flex-col overflow-hidden border border-line bg-[#07090e] sm:min-h-[280px] lg:min-h-0",
        "transition-opacity duration-700",
        active ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      aria-hidden="true"
    >
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <PreviewFrame url="pulse.sitepromy.com" fixedAspect={false} className="h-full">
          <WebsitePreview
            id="pulse"
            large
            className="aspect-[16/10] min-h-[180px] w-full lg:aspect-auto lg:h-full lg:min-h-[240px]"
          />
        </PreviewFrame>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>
      <div className="relative z-[1] border-t border-line bg-ink/90 px-4 py-5 backdrop-blur-sm lg:px-5 lg:py-6">
        <p className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-[1.05] tracking-tight text-cream">
          {labels.closingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <SiteProMarkIcon className="h-8 w-auto" />
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.12em] text-cream">
              SITEPRO<span className="text-accent">MY</span>
            </p>
            <p className="meta-label mt-0.5 text-muted">{labels.brandDescriptor}</p>
          </div>
        </div>
        <p className="meta-label mt-4 text-accent">
          {labels.liveStatus} · 01 / 01
        </p>
      </div>
    </div>
  );
}

export function BrandFilmVisual({ stageKey, progress, labels }: BrandFilmVisualProps) {
  const reduced = useReducedMotion();

  const designIndex = useMemo(() => {
    // design stage occupies ~0.40–0.65 of total progress
    const local = Math.min(1, Math.max(0, (progress - 0.4) / 0.25));
    return Math.min(DESIGN_SEQUENCE.length - 1, Math.floor(local * DESIGN_SEQUENCE.length));
  }, [progress]);

  const buildProgress = useMemo(() => {
    return Math.min(1, Math.max(0, (progress - 0.65) / 0.2));
  }, [progress]);

  if (reduced) {
    return (
      <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden border border-line lg:aspect-auto lg:h-full">
        <PreviewFrame url="atelier.sitepromy.com" fixedAspect={false}>
          <WebsitePreview id="atelier" large className="aspect-[16/10] w-full" />
        </PreviewFrame>
      </div>
    );
  }

  return (
    <div className="brand-film-visual relative aspect-[16/10] w-full min-w-0 overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
      <div
        className={cn(
          "absolute inset-0",
          stageKey === "idea" ? "z-[5]" : "z-[1] pointer-events-none",
        )}
      >
        <IdeaVisual active={stageKey === "idea"} />
      </div>
      <div
        className={cn(
          "absolute inset-0",
          stageKey === "direction" ? "z-[5]" : "z-[1] pointer-events-none",
        )}
      >
        <DirectionVisual active={stageKey === "direction"} artboard={labels.artboard} />
      </div>
      <div
        className={cn(
          "absolute inset-0",
          stageKey === "design" ? "z-[5]" : "z-[1] pointer-events-none",
        )}
      >
        <DesignVisual
          active={stageKey === "design"}
          designIndex={designIndex}
          conceptLabel={labels.concept}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0",
          stageKey === "build" ? "z-[5]" : "z-[1] pointer-events-none",
        )}
      >
        <BuildVisual
          active={stageKey === "build"}
          buildProgress={buildProgress}
          responsiveLabel={labels.responsive}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0",
          stageKey === "live" ? "z-[5]" : "z-[1] pointer-events-none",
        )}
      >
        <LiveVisual active={stageKey === "live"} labels={labels} />
      </div>
    </div>
  );
}
