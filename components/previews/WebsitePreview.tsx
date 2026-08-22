import { cn } from "@/lib/cn";
import type { PreviewId } from "@/lib/site";

type WebsitePreviewProps = {
  id: PreviewId;
  className?: string;
  large?: boolean;
};

export function WebsitePreview({ id, className, large }: WebsitePreviewProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        shells[id],
        className,
      )}
      aria-hidden="true"
    >
      {id === "atelier" && <Atelier large={large} />}
      {id === "nova" && <Nova large={large} />}
      {id === "form" && <Form large={large} />}
      {id === "mono" && <Mono large={large} />}
      {id === "orbit" && <Orbit large={large} />}
      {id === "pulse" && <Pulse large={large} />}
      {id === "business" && <Mono large={large} />}
      {id === "corporate" && <Mono large={large} />}
      {id === "ecommerce" && <Orbit large={large} />}
      {id === "restaurant" && <Atelier large={large} />}
      {id === "landing" && <Landing large={large} />}
      {id === "custom" && <Pulse large={large} />}
    </div>
  );
}

const shells: Record<PreviewId, string> = {
  atelier: "bg-[#14100c] text-[#f4eadc]",
  nova: "bg-[#faf8f5] text-[#111]",
  form: "bg-[#111] text-white",
  mono: "bg-[#0c1018] text-white",
  orbit: "bg-white text-zinc-900",
  pulse: "bg-[#081018] text-white",
  business: "bg-[#0c1018] text-white",
  corporate: "bg-[#0c1018] text-white",
  ecommerce: "bg-white text-zinc-900",
  restaurant: "bg-[#14100c] text-[#f4eadc]",
  landing: "bg-[#050608] text-white",
  custom: "bg-[#081018] text-white",
};

function Nav({ brand, dark = true }: { brand: string; dark?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-current/10 px-[5%] py-[3%]">
      <span className="font-display text-[clamp(8px,1.2vw,11px)] font-bold tracking-[0.2em]">
        {brand}
      </span>
      <div className="flex items-center gap-[3%]">
        <span className={cn("h-[2px] w-[5%] min-w-[16px] rounded-full", dark ? "bg-white/25" : "bg-black/20")} />
        <span className={cn("h-[2px] w-[5%] min-w-[16px] rounded-full", dark ? "bg-white/25" : "bg-black/20")} />
        <span className="rounded-full bg-accent px-[3%] py-[1%] text-[clamp(6px,0.9vw,9px)] font-medium text-white">
          Contact
        </span>
      </div>
    </div>
  );
}

function Atelier({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="ATELIER" />
      <div className="grid flex-1 grid-cols-[42%_1fr]">
        <div className="flex flex-col justify-between p-[6%]">
          <p className="text-[clamp(7px,1vw,10px)] tracking-[0.25em] text-[#c9a882]">FINE DINING</p>
          <div>
            <h3 className={cn("font-display font-semibold leading-tight", large ? "text-2xl sm:text-4xl" : "text-sm sm:text-xl")}>
              Taste the craft
            </h3>
            <p className="mt-[3%] text-[clamp(7px,1vw,11px)] leading-relaxed text-[#f4eadc]/60">
              Menu · Reservations · Location
            </p>
            <span className="mt-[5%] inline-block rounded-full bg-[#c46a3a] px-[5%] py-[2%] text-[clamp(7px,0.9vw,10px)]">
              Book a table
            </span>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-[#c46a3a] to-[#6b2f18]">
          <div className="absolute inset-[8%] border border-[#f4eadc]/20" />
          <div className="absolute bottom-[10%] left-[10%] right-[10%] grid grid-cols-3 gap-1">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-square bg-[#f4eadc]/15" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Nova({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="NØVA" dark={false} />
      <div className="relative flex flex-1 flex-col p-[6%]">
        <h3 className={cn("font-display font-light tracking-[0.35em]", large ? "text-3xl sm:text-5xl" : "text-lg sm:text-2xl")}>
          NØVA
        </h3>
        <p className="mt-[4%] max-w-[55%] text-[clamp(7px,1vw,11px)] leading-relaxed text-zinc-500">
          Fashion · Editorial · Collection
        </p>
        <span className="absolute right-[6%] top-[18%] h-[28%] w-[28%] rounded-full bg-[#e8d5c4]" />
        <div className="mt-auto grid grid-cols-3 gap-[3%]">
          {[1, 2, 3].map((n) => (
            <div key={n} className="aspect-[3/4] bg-zinc-100" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Form({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <div className="h-[3px] bg-[#f5a623]" />
      <Nav brand="FORM" />
      <div className="flex flex-1 flex-col justify-end p-[6%]">
        <h3 className={cn("font-display font-black uppercase leading-none", large ? "text-3xl sm:text-5xl" : "text-xl sm:text-3xl")}>
          Build
          <br />
          Strong
        </h3>
        <p className="mt-[4%] max-w-[60%] text-[clamp(7px,1vw,11px)] text-white/50">
          Construction · Engineering · Projects
        </p>
        <div className="mt-[6%] grid grid-cols-2 gap-[3%]">
          <div className="aspect-[16/10] bg-white/10" />
          <div className="aspect-[16/10] bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function Mono({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="MONO" />
      <div className="flex flex-1 flex-col p-[6%]">
        <h3 className={cn("font-display font-semibold leading-tight", large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl")}>
          Corporate clarity.
        </h3>
        <p className="mt-[3%] max-w-[70%] text-[clamp(7px,1vw,11px)] text-white/45">
          Strategy · Services · Leadership
        </p>
        <div className="mt-auto grid grid-cols-3 gap-[3%]">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded border border-white/8 bg-white/[0.04] p-[4%]">
              <span className="block h-[2px] w-[40%] bg-white/40" />
              <span className="mt-[8%] block h-[20%] bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Orbit({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="ORBIT" dark={false} />
      <div className="flex flex-1 flex-col p-[6%]">
        <h3 className={cn("font-display font-semibold", large ? "text-xl sm:text-3xl" : "text-sm sm:text-lg")}>
          New arrivals
        </h3>
        <div className="mt-[5%] grid flex-1 grid-cols-2 gap-[3%]">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex flex-col">
              <div className="aspect-square bg-zinc-100" />
              <span className="mt-[4%] h-[2px] w-[50%] bg-zinc-300" />
              <span className="mt-[2%] h-[2px] w-[30%] bg-zinc-200" />
            </div>
          ))}
        </div>
        <span className="mt-[4%] inline-flex w-fit rounded-full bg-zinc-900 px-[5%] py-[2%] text-[clamp(7px,0.9vw,10px)] text-white">
          Shop now
        </span>
      </div>
    </div>
  );
}

function Pulse({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="PULSE" />
      <div className="flex flex-1 flex-col p-[6%]">
        <span className="h-[2px] w-[8%] bg-accent" />
        <h3 className={cn("mt-[5%] font-display font-semibold leading-tight", large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl")}>
          Trusted expertise.
        </h3>
        <p className="mt-[3%] text-[clamp(7px,1vw,11px)] text-white/45">
          Consulting · Advisory · Results
        </p>
        <div className="mt-auto grid grid-cols-2 gap-[3%]">
          <div className="rounded border border-white/10 bg-white/[0.03] p-[5%]">
            <span className="block text-[clamp(7px,1vw,10px)] uppercase tracking-widest text-accent">Expertise</span>
            <span className="mt-1 block text-[clamp(6px,0.8vw,9px)] text-white/40">Advisory · Results</span>
          </div>
          <div className="rounded border border-white/10 bg-white/[0.03] p-[5%]">
            <span className="block h-[2px] w-full bg-white/20" />
            <span className="mt-2 block h-[2px] w-2/3 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Landing({ large }: { large?: boolean }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center p-[8%] text-center">
      <span className="h-[2px] w-[12%] bg-accent" />
      <h3 className={cn("mt-[5%] font-display font-bold", large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl")}>
        Launch faster.
      </h3>
      <p className="mt-[3%] max-w-[80%] text-[clamp(7px,1vw,11px)] text-white/45">
        One focused page. One clear action.
      </p>
      <div className="mt-[6%] flex gap-[3%]">
        <span className="rounded-full bg-accent px-[6%] py-[2.5%] text-[clamp(7px,0.9vw,10px)]">Get started</span>
        <span className="rounded-full border border-white/15 px-[6%] py-[2.5%] text-[clamp(7px,0.9vw,10px)]">Learn more</span>
      </div>
    </div>
  );
}
