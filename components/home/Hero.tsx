"use client";

import { Button } from "@/components/ui/Button";
import { WebsiteShowcase } from "@/components/home/WebsiteShowcase";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Hero() {
  const { t, href } = useLanguage();

  return (
    <section className="hero-section relative overflow-x-clip pt-16 lg:min-h-[100svh] lg:overflow-hidden lg:pt-[4.25rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(0,128,255,0.12), transparent 60%)",
        }}
      />

      <div className="container-main relative py-10 lg:flex lg:min-h-[calc(100svh-4.25rem)] lg:flex-col lg:justify-center lg:section-y">
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-end lg:gap-16">
          <div className="hero-copy max-w-xl">
            <p className="hero-enter hero-enter-eyebrow eyebrow text-accent">
              {t.hero.eyebrow}
            </p>
            <h1 className="display-xl hero-title mt-5 lg:mt-6">
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
            <p className="hero-enter hero-enter-body mt-6 max-w-md body-lg text-secondary lg:mt-8">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
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

          <div className="hero-enter hero-enter-visual relative mx-auto w-full min-w-0 max-w-[min(520px,calc(100vw-2rem))] lg:mx-0 lg:max-w-none">
            <WebsiteShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
