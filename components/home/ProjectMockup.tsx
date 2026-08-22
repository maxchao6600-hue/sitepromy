import { cn } from "@/lib/cn";
import type { ProjectTheme } from "@/lib/site";

type ProjectMockupProps = {
  theme: ProjectTheme;
  className?: string;
};

export function ProjectMockup({ theme, className }: ProjectMockupProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden border",
        theme === "corporate" && "border-[#1b2430] bg-[#0e1620]",
        theme === "restaurant" && "border-[#e4d5c3] bg-[#f4eadc]",
        theme === "ecommerce" && "border-zinc-200 bg-white",
        theme === "service" && "border-sky-100 bg-[#f4f8fc]",
        theme === "landing" && "border-white/10 bg-[#111118]",
        theme === "brand" && "border-zinc-200 bg-[#f6f4ef]",
        className,
      )}
      aria-hidden="true"
    >
      {theme === "corporate" && <Corporate />}
      {theme === "restaurant" && <Restaurant />}
      {theme === "ecommerce" && <Ecommerce />}
      {theme === "service" && <Service />}
      {theme === "landing" && <Landing />}
      {theme === "brand" && <Brand />}
    </div>
  );
}

function Corporate() {
  return (
    <div className="flex h-full flex-col p-4 text-[#e8eef4]">
      <div className="flex items-center justify-between">
        <span className="h-2 w-16 rounded-full bg-white/80" />
        <span className="flex gap-2">
          <span className="h-1.5 w-8 rounded-full bg-white/25" />
          <span className="h-1.5 w-8 rounded-full bg-white/25" />
          <span className="h-1.5 w-10 rounded-full bg-[#c5a572]" />
        </span>
      </div>
      <div className="mt-8 max-w-[70%]">
        <span className="block h-3 w-40 rounded-full bg-white/90" />
        <span className="mt-2 block h-3 w-28 rounded-full bg-white/90" />
        <span className="mt-4 block h-1.5 w-full rounded-full bg-white/20" />
        <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-white/20" />
      </div>
      <div className="mt-auto grid grid-cols-3 gap-2">
        <span className="h-10 rounded-sm bg-white/8" />
        <span className="h-10 rounded-sm bg-white/8" />
        <span className="h-10 rounded-sm bg-white/8" />
      </div>
    </div>
  );
}

function Restaurant() {
  return (
    <div className="flex h-full">
      <div className="flex w-[42%] flex-col justify-between p-4">
        <span className="font-display text-[10px] tracking-[0.2em] text-[#5c4030]">
          ATELIER
        </span>
        <div>
          <span className="block h-2.5 w-24 rounded-full bg-[#3a2a20]" />
          <span className="mt-2 block h-2.5 w-16 rounded-full bg-[#3a2a20]" />
          <span className="mt-4 h-1.5 w-12 rounded-full bg-[#c46a3a]" />
        </div>
      </div>
      <div className="relative flex-1 bg-[#c46a3a]">
        <div className="absolute inset-4 border border-[#f4eadc]/30" />
        <div className="absolute bottom-4 right-4 h-8 w-16 bg-[#f4eadc]/90" />
      </div>
    </div>
  );
}

function Ecommerce() {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center justify-between">
        <span className="h-2 w-12 rounded-full bg-zinc-900" />
        <span className="h-4 w-4 rounded-full border border-zinc-300" />
      </div>
      <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
        <span className="rounded-md bg-zinc-100" />
        <span className="rounded-md bg-zinc-100" />
        <span className="rounded-md bg-zinc-50" />
        <span className="rounded-md bg-zinc-50" />
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="flex h-full flex-col">
      <div className="h-2 bg-sky-700" />
      <div className="flex flex-1 flex-col p-4">
        <span className="h-2 w-10 rounded-full bg-sky-700/40" />
        <span className="mt-4 block h-3 w-36 rounded-full bg-slate-900" />
        <span className="mt-2 block h-3 w-24 rounded-full bg-slate-900" />
        <div className="mt-auto grid grid-cols-2 gap-2">
          <span className="h-8 rounded bg-white shadow-sm" />
          <span className="h-8 rounded bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <span className="h-1.5 w-16 rounded-full bg-accent" />
      <span className="h-3 w-40 rounded-full bg-white" />
      <span className="h-3 w-28 rounded-full bg-white" />
      <span className="mt-1 h-1.5 w-48 rounded-full bg-white/20" />
      <div className="mt-2 flex gap-2">
        <span className="h-6 w-16 rounded-full bg-white" />
        <span className="h-6 w-16 rounded-full border border-white/20" />
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="relative h-full p-4">
      <span className="absolute left-4 top-8 font-display text-4xl font-semibold tracking-tight text-ink">
        NØVA
      </span>
      <span className="absolute right-6 top-6 h-20 w-20 rounded-full bg-accent/80" />
      <span className="absolute bottom-5 left-4 h-2 w-24 rounded-full bg-ink/80" />
      <span className="absolute bottom-5 right-6 h-8 w-14 bg-ink" />
    </div>
  );
}
