import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-main px-5 py-32 text-center sm:px-8">
      <p className="eyebrow text-accent">404</p>
      <h1 className="heading-display mt-4 text-4xl sm:text-6xl">
        Page not found.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-cream/55">
        The page you&apos;re looking for doesn&apos;t exist. Head back to the
        homepage to continue.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
