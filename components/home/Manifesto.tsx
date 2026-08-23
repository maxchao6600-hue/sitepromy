"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { CredibilityStrip } from "@/components/ui/CredibilityStrip";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section className="scene-manifesto relative overflow-x-clip border-y border-line">
      <div className="container-main section-y">
        <MotionReveal>
          <SectionIndex index={t.manifesto.scene} label={t.manifesto.index} />

          <div className="mt-10 lg:mt-16">
            <h2 className="type-editorial max-w-5xl text-cream">
              {t.manifesto.lines.map((line, index) => (
                <span
                  key={line}
                  className={cn(
                    "block",
                    index === t.manifesto.accentLineIndex && "text-accent",
                  )}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-8 max-w-lg text-[0.9375rem] leading-8 text-secondary sm:mt-10 sm:text-base lg:mt-12 lg:max-w-xl lg:text-lg lg:leading-8">
              {t.manifesto.body}
            </p>

            <CredibilityStrip
              items={t.manifesto.credibility}
              className="mt-10 border-t border-line pt-8 lg:mt-14 lg:pt-10"
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
