import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/Motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,128,255,0.18), transparent 70%)",
        }}
      />
      <div className="container-main relative section-y text-center">
        <MotionReveal>
          <p className="eyebrow text-accent">Start here</p>
          <h2 className="display-lg mt-6">
            HAVE AN IDEA?
            <br />
            <span className="text-accent">LET&apos;S BUILD IT.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg body-lg text-secondary">
            Tell us what you have in mind. We&apos;ll turn it into a website —
            fast, professional and ready to launch.
          </p>
          <div className="mt-10">
            <Button href="/quote" className="text-base">
              Start a Project →
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
