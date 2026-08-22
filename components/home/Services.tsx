import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-paper py-20 text-ink sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-mist">
            Services
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Everything You Need to Get Online.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/65">
            From simple business websites to custom digital experiences, SitePro
            provides flexible web solutions based on what your business actually
            needs.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 40}>
                <article className="grid gap-3 py-7 sm:grid-cols-[220px_1fr] sm:gap-10 lg:grid-cols-[280px_1fr] lg:py-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs tracking-[0.18em] text-mist">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-ink/65 sm:pt-1 sm:text-[15px]">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
