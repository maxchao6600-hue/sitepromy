type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-white/[0.06] bg-surface pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <div className="container-main">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="heading-display mt-4 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-cream/55">
          {description}
        </p>
      </div>
    </header>
  );
}
