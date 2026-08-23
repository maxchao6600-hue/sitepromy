"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { usePortraitMobile } from "@/lib/useMediaQuery";
import { projects } from "@/lib/site";
import { cn } from "@/lib/cn";

const themeStyles: Record<
  (typeof projects)[number]["theme"],
  { section: string; text: string; muted: string; border: string; meta: string }
> = {
  warm: {
    section: "bg-[#0a0806]",
    text: "text-[#f4eadc]",
    muted: "text-[#f4eadc]/50",
    border: "border-[#f4eadc]/10",
    meta: "text-[#f4eadc]/35",
  },
  editorial: {
    section: "bg-[#f0ede8] text-ink",
    text: "text-ink",
    muted: "text-ink/50",
    border: "border-ink/10",
    meta: "text-ink/35",
  },
  concrete: {
    section: "bg-[#0c0c0c]",
    text: "text-white",
    muted: "text-white/50",
    border: "border-white/10",
    meta: "text-white/35",
  },
  mono: {
    section: "bg-[#06080c]",
    text: "text-white",
    muted: "text-white/50",
    border: "border-white/10",
    meta: "text-white/35",
  },
  clean: {
    section: "bg-[#f5f5f3] text-ink",
    text: "text-ink",
    muted: "text-ink/50",
    border: "border-ink/10",
    meta: "text-ink/35",
  },
  navy: {
    section: "bg-[#040a12]",
    text: "text-white",
    muted: "text-white/50",
    border: "border-white/10",
    meta: "text-white/35",
  },
};

function ProjectMeta({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="meta-label">{label}</p>
      <p className="mt-1.5 text-sm leading-6">{value}</p>
    </div>
  );
}

function PortfolioItem({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const isPortraitMobile = usePortraitMobile();
  const theme = themeStyles[project.theme];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced || isPortraitMobile ? [0, 0] : [40, -40],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    reduced ? [1, 1, 1, 1] : [0.7, 1, 1, 0.85],
  );

  return (
    <article
      ref={ref}
      id={index === 0 ? "portfolio" : undefined}
      className={cn(
        "scroll-mt-24 flex flex-col justify-center py-14 sm:py-16 lg:min-h-[92vh] lg:py-24",
        theme.section,
      )}
    >
      <motion.div
        style={{ opacity: reduced ? 1 : opacity }}
        className="container-main flex flex-col gap-8 lg:gap-12"
      >
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:items-end lg:gap-12">
          <div className="max-w-3xl">
            <p className={cn("meta-label", theme.meta)}>
              PROJECT {project.number}
            </p>
            <h3 className={cn("portfolio-title mt-3 lg:mt-4", theme.text)}>
              {project.name}
            </h3>
            <div className={cn("mt-3 flex flex-wrap gap-x-4 gap-y-1 body-lg lg:mt-4", theme.muted)}>
              {project.subtitle.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <p className={cn("mt-5 max-w-xl body-lg lg:mt-6", theme.muted)}>
              {project.summary}
            </p>
            <a
              href={`/#portfolio-${project.slug}`}
              className="nav-link mt-6 inline-flex min-h-12 items-center gap-2 text-accent transition-opacity hover:opacity-80 lg:mt-8"
            >
              View Concept →
            </a>
          </div>

          <div className={cn("grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6", theme.muted)}>
            <ProjectMeta label="Industry" value={project.industry} />
            <ProjectMeta label="Direction" value={project.direction} />
            <div className="col-span-2 sm:col-span-1">
              <p className="meta-label">Focus</p>
              <ul className="mt-1.5 space-y-1 text-sm leading-6">
                {project.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          id={`portfolio-${project.slug}`}
          style={{ y: reduced || isPortraitMobile ? 0 : y }}
          className="w-full max-w-full origin-center"
        >
          <div
            className={cn(
              "overflow-hidden rounded-xl border shadow-[0_24px_64px_rgba(0,0,0,0.35)] sm:rounded-2xl lg:shadow-[0_48px_120px_rgba(0,0,0,0.35)]",
              theme.border,
            )}
          >
            <WebsitePreview
              id={project.preview}
              large
              className="aspect-[16/10] min-h-[220px] w-full max-w-full sm:min-h-[320px] lg:min-h-[min(68vh,820px)]"
            />
          </div>
          <p className={cn("meta-label mt-3 lg:mt-4", theme.meta)}>{project.category}</p>
        </motion.div>
      </motion.div>
    </article>
  );
}

export function Portfolio({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="overflow-x-clip">
      {hideIntro ? null : (
        <div className="container-main section-y pb-0">
          <MotionReveal className="max-w-5xl">
            <p className="eyebrow text-accent">Case Studies</p>
            <h2 className="display-lg mt-5 lg:mt-6">
              WEBSITES BUILT
              <br />
              <span className="text-accent">FOR EVERY INDUSTRY.</span>
            </h2>
            <p className="mt-5 max-w-2xl body-lg text-secondary lg:mt-6">
              Six concept projects — each treated as a real design case study with
              its own visual world, industry context and digital focus.
            </p>
          </MotionReveal>
        </div>
      )}

      <div className={hideIntro ? "" : "mt-8 sm:mt-10 lg:mt-12"}>
        {projects.map((project, index) => (
          <PortfolioItem key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
