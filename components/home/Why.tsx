import { MotionReveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { values } from "@/lib/site";

export function Why() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-white/[0.06] bg-surface">
      <div className="container-main section-pad">
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow text-accent">Why SitePro</p>
          <h2 className="heading-display mt-5 text-[clamp(2rem,5.5vw,4rem)]">
            FAST DOESN&apos;T MEAN BASIC.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-cream/55">
            We build fast without compromising design, quality or performance.
          </p>
        </MotionReveal>

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.number}>
              <article className="h-full bg-surface p-8 sm:p-10">
                <span className="font-display text-sm tracking-[0.15em] text-accent">
                  {value.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cream/55">
                  {value.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
