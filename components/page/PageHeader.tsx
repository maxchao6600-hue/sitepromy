type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="bg-ink pt-28 pb-16 text-cream sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-cream/65">
          {description}
        </p>
      </div>
    </header>
  );
}
