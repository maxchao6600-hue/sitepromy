import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,214,168,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-accent">
          {SITE.domain}
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
          Ready to Build Your Website?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-cream/65">
          Tell us what you have in mind. We&apos;ll help turn your idea into a
          professional website.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/quote" tone="dark" className="min-h-12 px-6">
            Get a Free Quote
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            tone="dark"
            className="min-h-12 px-6"
          >
            Contact SitePro
          </Button>
        </div>
      </div>
    </section>
  );
}
