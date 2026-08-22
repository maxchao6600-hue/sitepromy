import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/Motion";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-ink">
      <div className="container-main section-y text-center">
        <MotionReveal>
          <h2 className="display-lg">
            HAVE AN IDEA?
            <br />
            <span className="text-accent">LET&apos;S BUILD IT.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-cream/50">
            Tell us what you have in mind.
            <br />
            We&apos;ll turn it into a website.
          </p>
          <div className="mt-10">
            <Button href="/quote">Start a Project →</Button>
          </div>
          <p className="mt-8 text-sm text-muted">{SITE.domain}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
