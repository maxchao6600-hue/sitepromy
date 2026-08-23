"use client";

import { Button } from "@/components/ui/Button";
import { WebsiteShowcase } from "@/components/home/WebsiteShowcase";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 lg:min-h-[100svh] lg:pt-[4.25rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(0,128,255,0.12), transparent 60%)",
        }}
      />

      <div className="container-main relative py-10 lg:flex lg:min-h-[calc(100svh-4.25rem)] lg:flex-col lg:justify-center lg:section-y">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-end lg:gap-16">
          <div className="max-w-xl">
            <p className="hero-enter hero-enter-eyebrow eyebrow text-accent">
              {SITE.descriptor}
            </p>
            <h1 className="display-xl mt-5 lg:mt-6">
              <span className="hero-enter hero-enter-line hero-enter-line-1">
                WE BUILD
              </span>
              <span className="hero-enter hero-enter-line hero-enter-line-2">
                WEBSITES
              </span>
              <span className="hero-enter hero-enter-line hero-enter-line-3">
                THAT
              </span>
              <span className="hero-enter hero-enter-line hero-enter-line-4 text-accent">
                MOVE.
              </span>
            </h1>
            <p className="hero-enter hero-enter-body mt-6 max-w-md body-lg text-secondary lg:mt-8">
              You have an idea. We turn it into a website you can launch — fast,
              professional and built around your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
              <Button
                href="/quote"
                className="hero-enter hero-enter-cta-button hero-enter-cta-button-1 min-h-12 w-full sm:w-auto"
              >
                Start a Project →
              </Button>
              <Button
                href="/#portfolio"
                variant="secondary"
                className="hero-enter hero-enter-cta-button hero-enter-cta-button-2 min-h-12 w-full sm:w-auto"
              >
                View Concept Work →
              </Button>
            </div>
          </div>

          <div className="hero-enter hero-enter-visual relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
            <WebsiteShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
