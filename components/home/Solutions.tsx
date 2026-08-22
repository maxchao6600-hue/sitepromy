import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/lib/site";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-20 bg-ink py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-accent">
            Website solutions
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A Website for Every Business.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-cream/65">
            These are examples of the businesses we can support — not a fixed
            list. Whatever your business needs, we can build a suitable web
            solution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 45}>
              <article className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream/58">
                  {solution.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button href="/quote" tone="dark">
            Let&apos;s Discuss Your Website
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
