import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 bg-paper py-20 text-ink sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-mist">
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            From Idea to Website.
          </h2>
        </Reveal>

        <Reveal className="relative mt-16">
          <div
            className="pointer-events-none absolute top-[18px] right-[12%] left-[12%] hidden h-px bg-ink/10 lg:block"
            aria-hidden="true"
          >
            <span className="process-line-fill absolute inset-y-0 left-0 bg-accent" />
          </div>
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.number} className="relative" style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-xs font-semibold text-ink">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight lg:mt-6">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-sm pl-[3.25rem] text-sm leading-7 text-ink/65 lg:pl-0">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
