"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";

export function AfterLaunch() {
  const { t } = useLanguage();

  return (
    <section className="scene-after-launch scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionIndex index={t.afterLaunch.scene} label={t.afterLaunch.index} />
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight text-cream lg:mt-8">
                {t.afterLaunch.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-secondary lg:text-base">
                {t.afterLaunch.body}
              </p>
            </div>
            <ul className="border-t border-line lg:border-t-0 lg:border-l lg:pl-10">
              {t.afterLaunch.items.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-line py-4"
                >
                  <span className="meta-label text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-cream/80 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
