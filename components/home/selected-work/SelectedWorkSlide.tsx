"use client";

import Link from "next/link";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { cn } from "@/lib/cn";
import type { PreviewId } from "@/lib/site";

export type SelectedWorkSlideData = {
  number: string;
  name: string;
  slug: string;
  preview: PreviewId;
  industry: string;
  summary: string;
  category: string;
};

type SelectedWorkSlideProps = {
  slide: SelectedWorkSlideData;
  projectLabel: string;
  viewProject: string;
  liveLabel: string;
  total: number;
  active: boolean;
  reduced: boolean;
  direction: 1 | -1;
  href: string;
};

export function SelectedWorkSlide({
  slide,
  projectLabel,
  viewProject,
  liveLabel,
  total,
  active,
  reduced,
  direction,
  href,
}: SelectedWorkSlideProps) {
  return (
    <article
      className={cn(
        "absolute inset-0 flex flex-col overflow-hidden border border-line bg-[#07090e]",
        "transition-[opacity,transform] duration-700",
        reduced
          ? active
            ? "z-[2] opacity-100"
            : "pointer-events-none z-[1] opacity-0"
          : active
            ? "z-[2] translate-x-0 scale-100 opacity-100"
            : cn(
                "pointer-events-none z-[1] scale-[1.01] opacity-0",
                direction > 0 ? "-translate-x-5" : "translate-x-5",
              ),
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      aria-hidden={!active}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5 sm:py-3.5 lg:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="meta-label text-accent">{liveLabel}</span>
          </span>
          <span className="hidden h-px w-6 bg-line sm:block" aria-hidden="true" />
          <p className="meta-label truncate text-muted">
            {projectLabel} {slide.number}
          </p>
        </div>
        <p className="meta-label shrink-0 text-muted">
          {slide.number} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(0,128,255,0.1), transparent 70%)",
          }}
        />
        <PreviewFrame
          url={`${slide.slug}.sitepromy.com`}
          fixedAspect={false}
          className="h-full"
        >
          <WebsitePreview
            id={slide.preview}
            large
            className="aspect-[16/9] min-h-[200px] w-full sm:min-h-[260px] lg:aspect-[16/7] lg:min-h-[320px] lg:max-h-[520px]"
          />
        </PreviewFrame>
      </div>

      <div className="flex shrink-0 flex-col gap-4 border-t border-line px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:px-5 sm:py-5 lg:px-6">
        <div className="min-w-0 max-w-xl">
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-cream">
            {slide.name}
          </h3>
          <p className="meta-label mt-2 text-accent">{slide.industry}</p>
          <p className="mt-2 text-sm leading-6 text-secondary sm:leading-7">
            {slide.summary}
          </p>
          <p className="meta-label mt-2 text-muted">{slide.category}</p>
        </div>
        <Link
          href={href}
          tabIndex={active ? 0 : -1}
          className="group inline-flex shrink-0 items-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-cream"
        >
          <span className="transition-transform duration-500 group-hover:translate-x-0.5">
            {viewProject}
          </span>
        </Link>
      </div>
    </article>
  );
}
