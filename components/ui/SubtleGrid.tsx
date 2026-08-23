import { cn } from "@/lib/cn";

export function SubtleGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-[0.35]", className)}
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,128,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}
