import { cn } from "@/lib/cn";

export function PreviewPhoto({
  src,
  className,
  priority = false,
}: {
  src: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
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
    <div className="relative z-20 flex shrink-0 items-center justify-between border-b border-current/10 px-[4%] py-[2.5%]">
      <span className="font-display text-[clamp(7px,1.1vw,12px)] font-bold tracking-[0.22em]">
        {brand}
      </span>
      {links ? (
        <div className="hidden items-center gap-[4%] sm:flex">
          {links.map((link) => (
            <span
              key={link}
              className={cn(
                "text-[clamp(5px,0.75vw,9px)] tracking-[0.12em]",
                dark ? "text-current/50" : "text-current/45",
              )}
            >
              {link}
            </span>
          ))}
        </div>
      ) : null}
      <span className="rounded-full bg-accent px-[3.5%] py-[1.2%] text-[clamp(5px,0.85vw,9px)] font-medium text-white">
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
        "relative z-10 flex shrink-0 items-center justify-between border-t border-current/10 px-[4%] py-[2%] text-[clamp(5px,0.7vw,8px)] tracking-[0.14em]",
        dark ? "text-current/40" : "text-current/35",
      )}
    >
      <span>{text}</span>
      <span>© Concept</span>
    </div>
  );
}
