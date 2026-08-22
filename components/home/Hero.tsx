import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,214,168,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(80,120,255,0.1),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-28 lg:pt-32">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
            Malaysia Web Design
          </p>
          <h1 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[68px]">
            From Idea to Website, Fast.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-cream/68 sm:text-[17px] sm:leading-8">
            We design and build modern, professional websites tailored to your
            business — with fast execution, flexible solutions and a focus on
            getting your website live.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/quote" tone="dark" className="min-h-12 px-6">
              Get a Free Quote
            </Button>
            <Button
              href="/work"
              variant="secondary"
              tone="dark"
              className="min-h-12 px-6"
            >
              View Our Work
            </Button>
          </div>
          <p className="mt-5 text-sm text-cream/45">
            Built for businesses that want to move fast.
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="aspect-[16/10] max-h-[360px] w-full sm:max-h-none lg:aspect-video">
              <HeroVisual />
            </div>
          </div>
          <p className="sr-only">
            Animated preview of SitePro’s website process, from idea to launch.
            This area is reserved for a future SitePro brand film.
          </p>
        </div>
      </div>
    </section>
  );
}
