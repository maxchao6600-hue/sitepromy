"use client";

import { Button } from "@/components/ui/Button";
import { WebsiteBuildPreview } from "@/components/home/WebsiteBuildPreview";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[4.25rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(0,128,255,0.12), transparent 60%)",
        }}
      />

      <div className="container-main relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center section-y">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow text-accent">{SITE.descriptor}</p>
            <h1 className="display-xl mt-6">
              WE BUILD
              <br />
              WEBSITES
              <br />
              THAT <span className="text-accent">MOVE.</span>
            </h1>
            <p className="mt-8 max-w-md body-lg text-secondary">
              You have an idea. We turn it into a website you can launch — fast,
              professional and built around your business.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote">Start a Project →</Button>
              <Button href="/#portfolio" variant="secondary">
                View Concept Work →
              </Button>
            </div>
          </div>

          <div className="relative w-full max-lg:max-w-xl max-lg:justify-self-center lg:max-w-none">
            <WebsiteBuildPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
