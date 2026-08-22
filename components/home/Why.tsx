import { MotionReveal } from "@/components/ui/Motion";
import { values } from "@/lib/site";

export function Why() {
  return (
    <section id="why" className="scroll-mt-24 bg-off-white text-ink">
      <div className="container-main section-y">
        <MotionReveal>
          <h2 className="display-lg text-ink">WHY SITEPRO?</h2>
        </MotionReveal>

        <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-20">
          {values.map((value, index) => (
            <MotionReveal key={value.title} delay={index * 0.05}>
              <article className="grid gap-4 border-t border-ink/10 pt-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-12 sm:pt-12">
                <h3 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="self-end text-base leading-7 text-ink/55 sm:text-lg">
                  {value.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
