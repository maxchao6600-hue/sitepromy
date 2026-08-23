"use client";

import { Button } from "@/components/ui/Button";
import { WebsiteShowcase } from "@/components/home/WebsiteShowcase";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Hero() {
  const { t, href } = useLanguage();

  return (
    <section className="scene-hero scene-noise hero-section relative overflow-x-clip pt-16 lg:min-h-[100svh] lg:overflow-hidden lg:pt-[4.25rem]">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-35"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 72% 38%, rgba(0,128,255,0.14), transparent 62%)",
        }}
      />

      <div className="container-main relative z-10 py-8 lg:flex lg:min-h-[calc(100svh-4.25rem)] lg:flex-col lg:justify-center lg:py-12">
        <SectionIndex
          index={t.hero.scene}
          label={t.hero.eyebrow}
          className="hero-enter hero-enter-eyebrow mb-5 lg:mb-6"
        />

        <div className="hero-grid grid min-w-0 grid-cols-1 items-end gap-8 lg:items-center lg:gap-10">
          <div className="hero-copy relative z-[2] min-w-0 max-w-xl">
            <h1 className="display-xl hero-title mt-0">
              {t.hero.lines.map((line, index) => (
                <span
                  key={line}
                  className={cn(
                    "hero-enter hero-enter-line",
                    `hero-enter-line-${index + 1}`,
                    index === t.hero.accentLineIndex && "text-accent",
                  )}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-enter hero-enter-body mt-5 max-w-md body-lg text-secondary lg:mt-6">
              {t.hero.body}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-8">
              <Button
                href={href("/quote")}
                className="hero-enter hero-enter-cta-button hero-enter-cta-button-1 min-h-12 w-full sm:w-auto"
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                href={href("/work")}
                variant="secondary"
                className="hero-enter hero-enter-cta-button hero-enter-cta-button-2 min-h-12 w-full sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="hero-preview hero-enter hero-enter-visual relative z-[1] mx-auto w-full min-w-0 max-w-[min(560px,calc(100vw-2rem))] overflow-hidden lg:mx-0 lg:max-w-full">
            <WebsiteShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
