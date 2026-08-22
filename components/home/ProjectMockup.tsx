import { cn } from "@/lib/cn";
import type { ProjectTheme } from "@/lib/site";

type ProjectMockupProps = {
  theme: ProjectTheme;
  className?: string;
  compact?: boolean;
};

export function ProjectMockup({ theme, className, compact }: ProjectMockupProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        compact ? "aspect-[16/11]" : "aspect-[16/10]",
        themeStyles[theme],
        className,
      )}
      aria-hidden="true"
    >
      {theme === "corporate" && <Corporate />}
      {theme === "restaurant" && <Restaurant />}
      {theme === "ecommerce" && <Ecommerce />}
      {theme === "construction" && <Construction />}
      {theme === "beauty" && <Beauty />}
      {theme === "professional" && <Professional />}
      {theme === "landing" && <Landing />}
      {theme === "service" && <Professional />}
    </div>
  );
}

const themeStyles: Record<ProjectTheme, string> = {
  corporate: "border-white/10 bg-[#0d1119]",
  restaurant: "border-[#3d2a1f] bg-[#1a120d]",
  ecommerce: "border-zinc-200 bg-white",
  construction: "border-[#2a2a2a] bg-[#141414]",
  beauty: "border-zinc-200 bg-[#faf8f5]",
  professional: "border-sky-100/20 bg-[#0a1220]",
  landing: "border-white/10 bg-[#08080f]",
  service: "border-sky-100/20 bg-[#0a1220]",
};

function Corporate() {
  return (
    <div className="flex h-full flex-col p-5 text-cream">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] font-bold tracking-widest">NORTHLINE</span>
        <span className="flex gap-2">
          <span className="h-1 w-6 rounded-full bg-white/20" />
          <span className="h-1 w-6 rounded-full bg-white/20" />
          <span className="h-3 w-10 rounded-full bg-accent" />
        </span>
      </div>
      <div className="mt-auto max-w-[65%] pb-2">
        <span className="block font-display text-sm font-bold leading-tight sm:text-base">
          Built for business.
        </span>
        <span className="mt-2 block h-1 w-full rounded-full bg-white/15" />
        <span className="mt-1 block h-1 w-3/4 rounded-full bg-white/10" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        <span className="h-8 rounded bg-white/[0.06]" />
        <span className="h-8 rounded bg-white/[0.06]" />
        <span className="h-8 rounded bg-white/[0.06]" />
      </div>
    </div>
  );
}

function Restaurant() {
  return (
    <div className="relative flex h-full">
      <div className="flex w-[45%] flex-col justify-between p-5">
        <span className="font-display text-[9px] tracking-[0.25em] text-[#c9a882]">ATELIER</span>
        <div>
          <span className="block font-display text-sm font-semibold text-[#f4eadc]">Taste the craft</span>
          <span className="mt-2 block h-1 w-12 rounded-full bg-[#c46a3a]" />
        </div>
      </div>
      <div className="relative flex-1 bg-gradient-to-br from-[#c46a3a] to-[#8b3a1a]">
        <div className="absolute inset-3 border border-[#f4eadc]/20" />
      </div>
    </div>
  );
}

function Ecommerce() {
  return (
    <div className="flex h-full flex-col p-4 text-zinc-900">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] font-bold">STORE</span>
        <span className="h-3.5 w-3.5 rounded-full border border-zinc-300" />
      </div>
      <div className="mt-3 grid flex-1 grid-cols-2 gap-2">
        <span className="rounded-md bg-zinc-100" />
        <span className="rounded-md bg-zinc-50" />
        <span className="rounded-md bg-zinc-50" />
        <span className="rounded-md bg-zinc-100" />
      </div>
      <span className="mt-2 h-6 rounded-full bg-zinc-900" />
    </div>
  );
}

function Construction() {
  return (
    <div className="flex h-full flex-col">
      <div className="h-1 bg-[#f5a623]" />
      <div className="flex flex-1 flex-col justify-end p-5">
        <span className="font-display text-lg font-black uppercase leading-none text-white">
          Build
          <br />
          Strong
        </span>
        <span className="mt-3 block h-1 w-16 bg-[#f5a623]" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <span className="h-10 bg-white/10" />
          <span className="h-10 bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function Beauty() {
  return (
    <div className="relative flex h-full flex-col p-5">
      <span className="font-display text-2xl font-light tracking-[0.3em] text-zinc-800">ÉLAN</span>
      <span className="mt-auto block h-px w-12 bg-zinc-400" />
      <span className="mt-3 block max-w-[60%] text-[10px] leading-relaxed text-zinc-500">
        Refined beauty, considered design.
      </span>
      <span className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[#e8d5c4]/80" />
    </div>
  );
}

function Professional() {
  return (
    <div className="flex h-full flex-col p-5">
      <span className="h-0.5 w-8 bg-accent" />
      <span className="mt-6 block font-display text-sm font-semibold text-cream">
        Trusted expertise.
      </span>
      <span className="mt-2 block h-1 w-full rounded-full bg-white/15" />
      <span className="mt-1 block h-1 w-2/3 rounded-full bg-white/10" />
      <div className="mt-auto grid grid-cols-2 gap-2">
        <span className="h-8 rounded border border-white/10 bg-white/[0.04]" />
        <span className="h-8 rounded border border-white/10 bg-white/[0.04]" />
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
      <span className="h-1 w-12 rounded-full bg-accent" />
      <span className="font-display text-sm font-bold text-cream">Launch faster.</span>
      <span className="h-1 w-32 rounded-full bg-white/15" />
      <span className="mt-2 h-5 w-20 rounded-full bg-accent" />
    </div>
  );
}
