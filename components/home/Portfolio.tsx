"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { projects } from "@/lib/site";

function PortfolioItem({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [0.94, 1, 0.96]);

  return (
    <article
      ref={ref}
      id={index === 0 ? "portfolio" : undefined}
      className="scroll-mt-24 border-t border-line py-16 sm:py-24 lg:py-32"
    >
      <div className="container-main grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-accent">Project {project.number}</p>
          <h3 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-muted">{project.category}</p>
          <p className="mt-1 text-base text-cream/70">{project.type}</p>
          <p className="mt-6 max-w-xs text-sm leading-7 text-cream/50">
            {project.summary}
          </p>
        </div>

        <motion.div style={{ y, scale }} className="origin-top">
          <div className="overflow-hidden rounded-xl border border-line shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
            <WebsitePreview
              id={project.preview}
              large
              className="aspect-[16/10] w-full sm:aspect-[16/9]"
            />
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export function Portfolio({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="bg-ink">
      {hideIntro ? null : (
        <div className="container-main section-y pb-0">
          <MotionReveal className="max-w-5xl">
            <h2 className="display-lg">
              WE DON&apos;T JUST BUILD WEBSITES.
              <br />
              <span className="text-accent">WE BUILD EXPERIENCES.</span>
            </h2>
          </MotionReveal>
        </div>
      )}

      <div className={hideIntro ? "" : "mt-12 sm:mt-20"}>
        {projects.map((project, index) => (
          <PortfolioItem key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
