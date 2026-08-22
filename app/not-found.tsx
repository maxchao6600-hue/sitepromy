import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-ink px-5 py-32 text-center text-cream sm:px-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
        This page doesn’t exist.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-cream/60">
        The page you’re looking for has moved or was never here. Head back to
        the homepage to continue.
      </p>
      <div className="mt-8">
        <Button href="/" tone="dark">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
