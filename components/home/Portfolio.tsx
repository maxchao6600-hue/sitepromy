"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { usePortraitMobile } from "@/lib/useMediaQuery";
import { conceptImages } from "@/lib/images";
import { projects } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ProjectSlug } from "@/lib/i18n/types";
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

function DetailStripBar({
  slug,
  theme,
}: {
  slug: ProjectSlug;
  theme: (typeof themeStyles)[keyof typeof themeStyles];
}) {
  const { t } = useLanguage();
  const copy = t.portfolio.projects[slug];
  const items = [
    { label: t.portfolio.detailStrip.typography, value: copy.designDetail.split(" / ")[0] ?? copy.designDetail },
    { label: t.portfolio.detailStrip.imageDirection, value: copy.designDetail.split(" / ")[1] ?? copy.industry },
    { label: t.portfolio.detailStrip.navigation, value: copy.systemDetail.split(" / ")[1] ?? "Navigation" },
    { label: t.portfolio.detailStrip.mobile, value: "Responsive" },
  ];

  return (
    <div
      className={cn(
        "mt-4 grid grid-cols-2 gap-px border sm:grid-cols-4",
        theme.border,
      )}
    >
      {items.map((item) => (
        <div key={item.label} className={cn("px-3 py-3 lg:px-4", theme.section)}>
          <p className={cn("meta-label", theme.meta)}>{item.label}</p>
          <p className={cn("mt-1 text-xs leading-5 sm:text-sm", theme.muted)}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function CaseStudyDetails({
  slug,
  theme,
}: {
  slug: ProjectSlug;
  theme: (typeof themeStyles)[keyof typeof themeStyles];
}) {
  const { t } = useLanguage();
  const copy = t.portfolio.projects[slug];
  const projectImages = {
    atelier: conceptImages.atelier,
    nova: conceptImages.nova,
    orbit: conceptImages.orbit,
    pulse: conceptImages.pulse,
    mono: conceptImages.mono,
    launch: conceptImages.launch,
  } as const;
  const images = projectImages[slug];
  const crops = [
    images.hero,
    images.gallery?.[0] ?? images.hero,
    images.gallery?.[1] ?? images.hero,
  ];

  const blocks = [
    { label: t.portfolio.caseStudy.challenge, value: copy.challenge, image: crops[0] },
    { label: t.portfolio.caseStudy.designDirection, value: copy.designDetail, image: crops[0] },
    { label: t.portfolio.caseStudy.experience, value: copy.experienceDetail, image: crops[1] },
    { label: t.portfolio.caseStudy.system, value: copy.systemDetail, image: crops[2] },
    {
      label: t.portfolio.caseStudy.intendedOutcome,
      value: copy.intendedOutcome,
      image: crops[1],
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
      {blocks.map((block) => (
        <article
          key={block.label}
          className={cn("overflow-hidden border", theme.border, theme.section)}
        >
          <div className="aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className={cn("border-t p-4", theme.border)}>
            <p className={cn("meta-label", theme.meta)}>{block.label}</p>
            <p className={cn("mt-2 text-sm leading-6", theme.muted)}>{block.value}</p>
          </div>
        </article>
      ))}
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
  const { t } = useLanguage();
  const copy = t.portfolio.projects[project.slug as ProjectSlug];
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
              {t.portfolio.projectLabel} {project.number}
            </p>
            <h3 className={cn("portfolio-title mt-3 lg:mt-4", theme.text)}>
              {project.name}
            </h3>
            <p className={cn("mt-3 text-[0.9375rem] leading-7 sm:text-base lg:mt-4", theme.muted)}>
              {copy.subtitle}
            </p>
            <p className={cn("mt-4 max-w-lg text-[0.9375rem] leading-7 sm:text-base lg:mt-5", theme.muted)}>
              {copy.summary}
            </p>
          </div>

          <div className={cn("grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6", theme.muted)}>
            <ProjectMeta label={t.portfolio.industry} value={copy.industry} />
            <ProjectMeta label={t.portfolio.direction} value={copy.direction} />
            <div className="col-span-2 sm:col-span-1">
              <p className="meta-label">{t.portfolio.focus}</p>
              <ul className="mt-1.5 space-y-1 text-sm leading-6">
                {copy.focus.map((item) => (
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
          <PreviewFrame url={`${project.slug}.sitepromy.com`} fixedAspect={false}>
            <WebsitePreview
              id={project.preview}
              large
              className="aspect-[16/10] min-h-[220px] h-full w-full max-w-full sm:min-h-[320px] lg:min-h-[min(68vh,820px)]"
            />
          </PreviewFrame>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 lg:mt-5">
            <p className={cn("meta-label", theme.meta)}>{copy.category}</p>
            <p className={cn("micro-label", theme.meta)}>{project.name}</p>
          </div>

          <DetailStripBar slug={project.slug as ProjectSlug} theme={theme} />

          <CaseStudyDetails slug={project.slug as ProjectSlug} theme={theme} />
        </motion.div>
      </motion.div>
    </article>
  );
}

export function Portfolio({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className="scene-work-intro scene-noise overflow-x-clip">
      {hideIntro ? null : (
        <div className="container-main section-y pb-0">
          <MotionReveal className="max-w-5xl">
            <SectionIndex index={t.portfolio.scene} label={t.portfolio.index} />
            <h2 className="display-lg mt-6 text-cream lg:mt-8">
              {t.portfolio.titleLines.map((line, index) => (
                <span
                  key={line}
                  className={cn(
                    "block",
                    index === t.portfolio.accentLineIndex && "text-accent",
                  )}
                >
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-2xl body-lg text-secondary lg:mt-6">
              {t.portfolio.intro}
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
