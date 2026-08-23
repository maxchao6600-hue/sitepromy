"use client";

import { cn } from "@/lib/cn";

type GridAccentProps = {
  className?: string;
};

export function GridAccent({ className }: GridAccentProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] min-h-[180px] overflow-hidden rounded-lg border border-line bg-[#07090e]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,128,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-x-[12%] top-[18%] h-[12%] border border-dashed border-accent/30" />
      <div className="absolute inset-x-[12%] top-[36%] h-[28%] border border-white/10" />
      <div className="absolute inset-x-[12%] top-[40%] h-[6%] bg-white/10" />
      <div className="absolute inset-x-[12%] top-[50%] h-[18%] bg-accent/15" />
      <div className="absolute bottom-4 left-4 meta-label text-muted">SITEPRO / BUILD</div>
      <div className="absolute right-4 top-4 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="meta-label text-accent/80">LIVE</span>
      </div>
    </div>
  );
}
