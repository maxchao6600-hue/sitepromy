"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { SubtleGrid } from "@/components/ui/SubtleGrid";
import {
  SelectedWorkSlide,
  type SelectedWorkSlideData,
} from "@/components/home/selected-work/SelectedWorkSlide";
import { SelectedWorkNavigation } from "@/components/home/selected-work/SelectedWorkNavigation";
import { projects } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ProjectSlug } from "@/lib/i18n/types";

const AUTOPLAY_MS = 5500;
const TOTAL = projects.length;

export function SelectedWorkSlider() {
  const { t, href } = useLanguage();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slides: SelectedWorkSlideData[] = projects.map((project) => {
    const copy = t.portfolio.projects[project.slug as ProjectSlug];
    return {
      number: project.number,
      name: project.name,
      slug: project.slug,
      preview: project.preview,
      industry: copy.industry,
      summary: copy.summary,
      category: copy.category,
    };
  });

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goTo = useCallback((nextIndex: number, dir: 1 | -1) => {
    setDirection(dir);
    setIndex((nextIndex + TOTAL) % TOTAL);
  }, []);

  const goNext = useCallback(() => {
    goTo(index + 1, 1);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo(index - 1, -1);
  }, [goTo, index]);

  useEffect(() => {
    if (reduced || paused) {
      clearTimer();
      return;
    }

    clearTimer();
    timerRef.current = setTimeout(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % TOTAL);
    }, AUTOPLAY_MS);

    return clearTimer;
  }, [index, paused, reduced, clearTimer]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
  };

  const active = slides[index];

  return (
    <section
      id="selected-work"
      aria-roledescription="carousel"
      aria-label={t.selectedWork.index}
      className="scene-selected-work scene-noise relative overflow-x-clip border-y border-line"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="container-main relative section-y-compact lg:section-y">
        <SubtleGrid className="opacity-20" />
        <div className="relative z-10">
          <SectionIndex index={t.selectedWork.scene} label={t.selectedWork.index} />

          <div
            className="relative mt-6 outline-none lg:mt-8"
            tabIndex={0}
            onKeyDown={onKeyDown}
            aria-live="polite"
          >
            <div className="relative aspect-[16/11] w-full min-w-0 overflow-hidden sm:aspect-[16/9] lg:aspect-[16/7] lg:max-h-[620px]">
              {slides.map((slide, slideIndex) => (
                <SelectedWorkSlide
                  key={slide.slug}
                  slide={slide}
                  projectLabel={t.selectedWork.projectLabel}
                  viewProject={t.selectedWork.viewProject}
                  liveLabel={t.selectedWork.live}
                  total={TOTAL}
                  active={slideIndex === index}
                  reduced={!!reduced}
                  direction={direction}
                  href={href(`/work#portfolio-${slide.slug}`)}
                />
              ))}

              {!reduced && !paused ? (
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-0.5 overflow-hidden bg-white/[0.06]"
                  aria-hidden="true"
                >
                  <div
                    key={index}
                    className="selected-work-progress h-full bg-accent/70"
                    style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                  />
                </div>
              ) : (
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-0.5 bg-white/[0.06]"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>

          <SelectedWorkNavigation
            total={TOTAL}
            activeIndex={index}
            prevLabel={t.selectedWork.prev}
            nextLabel={t.selectedWork.next}
            onPrev={goPrev}
            onNext={goNext}
            onSelect={(next) => goTo(next, next > index ? 1 : -1)}
            getSlideLabel={(i) =>
              `${t.selectedWork.projectLabel} ${slides[i].number} — ${slides[i].name}`
            }
          />

          <p className="sr-only">
            {t.selectedWork.projectLabel} {active.number}: {active.name}
          </p>
        </div>
      </div>
    </section>
  );
}
