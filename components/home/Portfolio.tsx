"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { projects } from "@/lib/site";
import { cn } from "@/lib/cn";

const themeStyles: Record<
  (typeof projects)[number]["theme"],
  { section: string; text: string; muted: string; border: string }
> = {
  warm: {
    section: "bg-[#0a0806]",
    text: "text-[#f4eadc]",
    muted: "text-[#f4eadc]/45",
    border: "border-[#f4eadc]/10",
  },
  editorial: {
    section: "bg-[#f0ede8] text-ink",
    text: "text-ink",
    muted: "text-ink/45",
    border: "border-ink/10",
  },
  concrete: {
    section: "bg-[#0c0c0c]",
    text: "text-white",
    muted: "text-white/45",
    border: "border-white/10",
  },
  mono: {
    section: "bg-[#06080c]",
    text: "text-white",
    muted: "text-white/45",
    border: "border-white/10",
  },
  clean: {
    section: "bg-[#f5f5f3] text-ink",
    text: "text-ink",
    muted: "text-ink/45",
    border: "border-ink/10",
  },
  navy: {
    section: "bg-[#040a12]",
    text: "text-white",
    muted: "text-white/45",
    border: "border-white/10",
  },
};

function PortfolioItem({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const theme = themeStyles[project.theme];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [48, -48]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduced ? [1, 1, 1] : [0.96, 1, 0.98],
  );

  return (
    <article
      ref={ref}
      id={index === 0 ? "portfolio" : undefined}
      className={cn(
        "scroll-mt-24 flex min-h-[88vh] flex-col justify-center py-16 sm:min-h-[92vh] sm:py-20 lg:py-24",
        theme.section,
      )}
    >
      <div className="container-main flex flex-col gap-8 lg:gap-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">
            {project.category} · {project.number}
          </p>
          <p className={cn("mt-3 text-sm", theme.muted)}>{project.type}</p>
          <h3
            className={cn(
              "mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
              theme.text,
            )}
          >
            {project.name}
          </h3>
          <p className={cn("mt-5 max-w-xl text-base leading-7 sm:text-lg", theme.muted)}>
            {project.summary}
          </p>
          <a
            href={`/#portfolio-${project.slug}`}
            className={cn(
              "mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-opacity hover:opacity-80",
            )}
          >
            View Concept →
          </a>
        </div>

        <motion.div
          id={`portfolio-${project.slug}`}
          style={{ y, scale }}
          className="origin-center"
        >
          <div
            className={cn(
              "overflow-hidden rounded-2xl border shadow-[0_48px_120px_rgba(0,0,0,0.35)]",
              theme.border,
            )}
          >
            <WebsitePreview
              id={project.preview}
              large
              className="min-h-[min(68vh,820px)] w-full"
            />
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export function Portfolio({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="overflow-x-clip">
      {hideIntro ? null : (
        <div className="container-main section-y pb-0">
          <MotionReveal className="max-w-5xl">
            <p className="eyebrow text-accent">Concept Work</p>
            <h2 className="display-lg mt-6">
              WEBSITES BUILT
              <br />
              <span className="text-accent">FOR EVERY INDUSTRY.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-cream/50">
              Six concept projects — each a different visual world. This is how
              SitePro designs for restaurants, fashion, architecture, corporate,
              e-commerce and professional services.
            </p>
          </MotionReveal>
        </div>
      )}

      <div className={hideIntro ? "" : "mt-8 sm:mt-12"}>
        {projects.map((project, index) => (
          <PortfolioItem key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
