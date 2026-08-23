"use client";

import { cn } from "@/lib/cn";

type PreviewFrameProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
  variant?: "hero" | "default";
  fixedAspect?: boolean;
};

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="preview-chrome flex shrink-0 items-center gap-3 border-b border-white/[0.06] px-3 py-2 sm:px-4 sm:py-2.5">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-[7px] w-[7px] rounded-full bg-white/10 ring-1 ring-white/[0.06]" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/10 ring-1 ring-white/[0.06]" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/10 ring-1 ring-white/[0.06]" />
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center">
        <span className="truncate rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-white/40 sm:px-3 sm:text-[10px]">
          {url}
        </span>
      </div>
      <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
        <span className="text-[9px] tracking-[0.18em] text-white/30">LIVE</span>
      </span>
    </div>
  );
}

export function PreviewFrame({
  url,
  children,
  className,
  variant = "default",
  fixedAspect = true,
}: PreviewFrameProps) {
  return (
    <div
      className={cn(
        "preview-frame-root relative w-full max-w-full",
        variant === "hero" && "preview-frame-hero lg:[perspective:1400px]",
        className,
      )}
    >
      {variant === "hero" ? (
        <div
          className="pointer-events-none absolute -inset-4 rounded-[1.75rem] bg-accent/[0.06] blur-3xl motion-safe-only lg:-inset-8"
          aria-hidden="true"
        />
      ) : null}

      <div
        className={cn(
          "preview-frame-shell relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#07090e] shadow-[0_24px_64px_rgba(0,0,0,0.45)] sm:rounded-2xl",
          variant === "hero" &&
            "lg:shadow-[0_64px_140px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset] lg:transition-transform lg:duration-700 lg:[transform:rotateY(-4deg)_rotateX(2deg)]",
        )}
      >
        <BrowserChrome url={url} />

        <div
          className={cn(
            "preview-frame-stage relative w-full max-w-full overflow-hidden bg-[#07090e]",
            fixedAspect && "aspect-[16/10]",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
