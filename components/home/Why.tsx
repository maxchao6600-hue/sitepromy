import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/lib/site";

export function Why() {
  return (
    <section id="why" className="scroll-mt-20 bg-paper-2 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-mist">
            Why SitePro
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Why Businesses Choose SitePro.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.eyebrow} delay={index * 60} className="h-full bg-paper">
              <article className="p-7 sm:p-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-ink">
                  {value.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-ink/65">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
