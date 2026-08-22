import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/Motion";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,255,0.15),transparent_60%)]" />
      <div className="container-main section-pad relative text-center">
        <MotionReveal>
          <h2 className="heading-display text-[clamp(2.5rem,7vw,5rem)]">
            HAVE AN IDEA?
            <br />
            <span className="text-gradient">LET&apos;S BUILD IT.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-cream/55">
            Tell us what you need and we&apos;ll turn it into a website.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/quote">Start Your Project →</Button>
            <Button href="/contact" variant="secondary">
              Contact SitePro
            </Button>
          </div>
          <p className="mt-8 text-sm tracking-wide text-muted">{SITE.domain}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
