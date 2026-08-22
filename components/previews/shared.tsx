import { cn } from "@/lib/cn";

export function PreviewRoot({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[320px] flex-col overflow-y-auto text-[clamp(10px,1.05vw,14px)] leading-snug",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PreviewPhoto({
  src,
  className,
  priority = false,
  alt = "",
}: {
  src: string;
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function PreviewHero({
  src,
  priority,
  gradientClass,
  children,
  className,
}: {
  src: string;
  priority?: boolean;
  gradientClass: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative shrink-0", className)}>
      <PreviewPhoto
        src={src}
        priority={priority}
        className="aspect-[16/10] min-h-[120px] w-full sm:aspect-[16/9]"
      />
      <div className={cn("pointer-events-none absolute inset-0", gradientClass)} />
      <div className="absolute inset-x-0 bottom-0 p-[4%] sm:p-[5%]">{children}</div>
    </section>
  );
}

export function PreviewHeroSide({
  src,
  priority,
  gradientClass,
  children,
  side = "left",
}: {
  src: string;
  priority?: boolean;
  gradientClass: string;
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  return (
    <section className="relative shrink-0">
      <PreviewPhoto
        src={src}
        priority={priority}
        className="aspect-[16/10] min-h-[120px] w-full sm:aspect-[16/9]"
      />
      <div className={cn("pointer-events-none absolute inset-0", gradientClass)} />
      <div
        className={cn(
          "absolute inset-y-0 flex w-[58%] max-w-[420px] flex-col justify-center p-[4%] sm:p-[5%]",
          side === "left" ? "left-0" : "right-0 items-end text-right",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function PreviewNav({
  brand,
  dark = true,
  links,
  cta,
}: {
  brand: string;
  dark?: boolean;
  links?: string[];
  cta: string;
}) {
  return (
    <div
      className={cn(
        "relative z-20 flex shrink-0 items-center justify-between border-b px-[4%] py-[2.8%]",
        dark ? "border-white/10" : "border-black/8",
      )}
    >
      <span className="font-display text-[0.95em] font-bold tracking-[0.2em]">
        {brand}
      </span>
      {links ? (
        <div className="hidden items-center gap-[5%] sm:flex">
          {links.map((link) => (
            <span
              key={link}
              className={cn(
                "text-[0.78em] tracking-[0.1em]",
                dark ? "text-white/55" : "text-black/50",
              )}
            >
              {link}
            </span>
          ))}
        </div>
      ) : null}
      <span className="rounded-full bg-accent px-[4%] py-[1.4%] text-[0.78em] font-medium text-white">
        {cta}
      </span>
    </div>
  );
}

export function PreviewFooter({
  text,
  dark = true,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative z-10 mt-auto flex shrink-0 items-center justify-between border-t px-[4%] py-[2.4%] text-[0.72em] tracking-[0.12em]",
        dark ? "border-white/10 text-white/45" : "border-black/8 text-black/40",
      )}
    >
      <span>{text}</span>
      <span>© Concept</span>
    </div>
  );
}

export function PreviewEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[0.72em] font-medium tracking-[0.24em] uppercase", className)}>
      {children}
    </p>
  );
}

export function PreviewTitle({
  children,
  large,
  className,
}: {
  children: React.ReactNode;
  large?: boolean;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-display font-semibold leading-[0.95] tracking-tight",
        large ? "text-[2.4em] sm:text-[3.2em]" : "text-[1.65em] sm:text-[2.2em]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function PreviewBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("mt-[0.6em] text-[0.88em] leading-relaxed", className)}>{children}</p>;
}

export function PreviewButton({
  children,
  className,
  variant = "solid",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "underline";
}) {
  return (
    <span
      className={cn(
        "mt-[0.9em] inline-flex w-fit items-center text-[0.78em] font-medium tracking-[0.14em] uppercase",
        variant === "solid" && "rounded-full px-[1.4em] py-[0.55em]",
        variant === "outline" && "rounded-full border px-[1.4em] py-[0.55em]",
        variant === "underline" && "border-b pb-[0.15em]",
        className,
      )}
    >
      {children}
    </span>
  );
}
