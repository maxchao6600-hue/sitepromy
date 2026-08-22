import { Button } from "@/components/ui/Button";
import { MotionReveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { pricingTiers } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-paper text-ink">
      <div className="container-main section-pad">
        <MotionReveal className="max-w-2xl">
          <p className="eyebrow text-accent">Pricing</p>
          <h2 className="heading-display mt-5 text-[clamp(2.25rem,6vw,4rem)] text-ink">
            CHOOSE YOUR STARTING POINT.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/60">
            Every project is quoted individually — no fixed packages, no hidden
            surprises.
          </p>
        </MotionReveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-7 transition-shadow duration-300",
                  tier.featured
                    ? "border-accent/30 bg-ink text-cream shadow-[0_24px_64px_rgba(0,128,255,0.12)]"
                    : "border-ink/10 bg-cream hover:shadow-[0_16px_48px_rgba(6,8,15,0.08)]",
                )}
              >
                {tier.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-accent/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-accent">
                    Recommended
                  </span>
                ) : (
                  <span className="mb-4 block h-6" aria-hidden="true" />
                )}
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 font-display text-2xl font-bold tracking-tight",
                    tier.featured ? "text-accent" : "text-accent",
                  )}
                >
                  {tier.price}
                </p>
                <p
                  className={cn(
                    "mt-3 text-sm leading-6",
                    tier.featured ? "text-cream/60" : "text-ink/55",
                  )}
                >
                  {tier.description}
                </p>
                <ul
                  className={cn(
                    "mt-5 flex-1 space-y-2 text-sm",
                    tier.featured ? "text-cream/70" : "text-ink/60",
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button
                    href={tier.href}
                    variant={tier.featured ? "primary" : "outline-dark"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
