import Image from "next/image";
import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import type { PreviewId } from "@/lib/site";

type WebsitePreviewProps = {
  id: PreviewId;
  className?: string;
  large?: boolean;
};

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

function PreviewPhoto({
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
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
        loading={priority ? "eager" : "lazy"}
        priority={priority}
      />
    </div>
  );
}

function Nav({
  brand,
  dark = true,
  cta = "Contact",
}: {
  brand: string;
  dark?: boolean;
  cta?: string;
}) {
  return (
    <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-current/10 px-[5%] py-[2.8%]">
      <span className="font-display text-[clamp(8px,1.2vw,11px)] font-bold tracking-[0.2em]">
        {brand}
      </span>
      <div className="flex items-center gap-[3%]">
        <span
          className={cn(
            "hidden h-[2px] w-[5%] min-w-[14px] rounded-full sm:block",
            dark ? "bg-white/25" : "bg-black/20",
          )}
        />
        <span
          className={cn(
            "hidden h-[2px] w-[5%] min-w-[14px] rounded-full sm:block",
            dark ? "bg-white/25" : "bg-black/20",
          )}
        />
        <span className="rounded-full bg-accent px-[3.5%] py-[1.2%] text-[clamp(6px,0.9vw,9px)] font-medium text-white">
          {cta}
        </span>
      </div>
    </div>
  );
}

function Atelier({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.atelier;

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="ATELIER" cta="Reserve" />
      <div className="relative flex-[1.35] min-h-0">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-[#14100c]/45 to-transparent" />
        <div className="absolute inset-x-[5%] bottom-[8%]">
          <p className="text-[clamp(6px,0.9vw,10px)] tracking-[0.28em] text-[#c9a882]">
            FINE DINING
          </p>
          <h3
            className={cn(
              "mt-[2%] font-display font-semibold leading-tight text-[#f4eadc]",
              large ? "text-2xl sm:text-4xl" : "text-sm sm:text-xl",
            )}
          >
            Taste the craft
          </h3>
          <p className="mt-[2%] text-[clamp(6px,0.95vw,11px)] text-[#f4eadc]/65">
            Menu · Reservations · Location
          </p>
          <span className="mt-[4%] inline-block rounded-full bg-[#c46a3a] px-[5%] py-[2%] text-[clamp(6px,0.9vw,10px)]">
            Book a table
          </span>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-[2%] p-[3%] pt-[2%]">
        {gallery.map((src) => (
          <PreviewPhoto key={src} src={src} className="aspect-[4/3]" />
        ))}
      </div>
    </div>
  );
}

function Nova({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.nova;

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="NØVA" dark={false} cta="Shop" />
      <div className="relative flex-[1.2] min-h-0">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/90 via-[#faf8f5]/25 to-transparent" />
        <div className="absolute inset-y-0 left-[5%] flex w-[52%] flex-col justify-center">
          <h3
            className={cn(
              "font-display font-light tracking-[0.35em] text-[#111]",
              large ? "text-3xl sm:text-5xl" : "text-lg sm:text-2xl",
            )}
          >
            NØVA
          </h3>
          <p className="mt-[4%] text-[clamp(6px,1vw,11px)] leading-relaxed text-zinc-600">
            Fashion · Editorial · Collection
          </p>
          <span className="mt-[5%] inline-flex w-fit border-b border-[#111] pb-[1%] text-[clamp(6px,0.9vw,10px)] tracking-[0.2em]">
            VIEW LOOKBOOK
          </span>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-[2%] p-[3%] pt-[2%]">
        {gallery.map((src) => (
          <PreviewPhoto key={src} src={src} className="aspect-[3/4]" />
        ))}
      </div>
    </div>
  );
}

function Form({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.form;

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <div className="h-[3px] shrink-0 bg-[#f5a623]" />
      <Nav brand="FORM" cta="Projects" />
      <div className="relative flex-[1.25] min-h-0">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/55 to-[#111]/15" />
        <div className="absolute inset-x-[5%] bottom-[8%]">
          <h3
            className={cn(
              "font-display font-black uppercase leading-none",
              large ? "text-3xl sm:text-5xl" : "text-xl sm:text-3xl",
            )}
          >
            Build
            <br />
            Strong
          </h3>
          <p className="mt-[3%] max-w-[70%] text-[clamp(6px,1vw,11px)] text-white/55">
            Construction · Engineering · Projects
          </p>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-[2%] p-[3%] pt-[2%]">
        {gallery.map((src) => (
          <PreviewPhoto key={src} src={src} className="aspect-[16/10]" />
        ))}
      </div>
    </div>
  );
}

function Mono({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.mono;

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="MONO" cta="Services" />
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_46%]">
        <div className="flex flex-col justify-center p-[6%]">
          <h3
            className={cn(
              "font-display font-semibold leading-tight",
              large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl",
            )}
          >
            Corporate clarity.
          </h3>
          <p className="mt-[3%] text-[clamp(6px,1vw,11px)] text-white/45">
            Strategy · Services · Leadership
          </p>
          <span className="mt-[5%] inline-flex w-fit rounded-full border border-white/20 px-[5%] py-[2%] text-[clamp(6px,0.9vw,10px)]">
            Explore capabilities
          </span>
        </div>
        <PreviewPhoto src={hero} className="min-h-[120px]" priority={large} />
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-[2%] p-[3%] pt-0">
        {gallery.map((src) => (
          <PreviewPhoto key={src} src={src} className="aspect-[16/10]" />
        ))}
      </div>
    </div>
  );
}

function Orbit({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.orbit;
  const products = [...gallery, gallery[0]];

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="ORBIT" dark={false} cta="Cart" />
      <div className="relative h-[34%] min-h-[88px] shrink-0">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent" />
        <div className="absolute inset-y-0 left-[5%] flex flex-col justify-center">
          <h3
            className={cn(
              "font-display font-semibold text-zinc-900",
              large ? "text-xl sm:text-3xl" : "text-sm sm:text-lg",
            )}
          >
            New arrivals
          </h3>
          <p className="mt-[2%] text-[clamp(6px,0.95vw,10px)] text-zinc-600">
            Premium essentials · Studio crafted
          </p>
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-[2.5%] p-[3%]">
        {products.slice(0, 4).map((src, index) => (
          <div key={`${src}-${index}`} className="flex min-h-0 flex-col">
            <PreviewPhoto src={src} className="aspect-square flex-1" />
            <span className="mt-[3%] h-[2px] w-[55%] bg-zinc-300" />
            <span className="mt-[2%] h-[2px] w-[35%] bg-zinc-200" />
          </div>
        ))}
      </div>
      <div className="shrink-0 px-[3%] pb-[3%]">
        <span className="inline-flex rounded-full bg-zinc-900 px-[5%] py-[2%] text-[clamp(6px,0.9vw,10px)] text-white">
          Shop now
        </span>
      </div>
    </div>
  );
}

function Pulse({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.pulse;

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="PULSE" cta="Consult" />
      <div className="relative flex-[1.15] min-h-0">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081018] via-[#081018]/60 to-[#081018]/20" />
        <div className="absolute inset-x-[5%] bottom-[8%]">
          <span className="h-[2px] w-[8%] bg-accent" />
          <h3
            className={cn(
              "mt-[4%] font-display font-semibold leading-tight",
              large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl",
            )}
          >
            Trusted expertise.
          </h3>
          <p className="mt-[2%] text-[clamp(6px,1vw,11px)] text-white/50">
            Consulting · Advisory · Results
          </p>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-[2%] p-[3%] pt-[2%]">
        {gallery.map((src) => (
          <div key={src} className="overflow-hidden rounded border border-white/10">
            <PreviewPhoto src={src} className="aspect-[16/11]" />
            <div className="p-[4%]">
              <span className="block text-[clamp(6px,0.85vw,9px)] uppercase tracking-widest text-accent">
                Advisory
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Landing({ large }: { large?: boolean }) {
  const hero = conceptImages.pulse.hero;

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <Nav brand="LAUNCH" cta="Start" />
      <div className="relative flex-1">
        <PreviewPhoto src={hero} className="absolute inset-0" />
        <div className="absolute inset-0 bg-[#050608]/72" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-[8%] text-center">
          <span className="h-[2px] w-[12%] bg-accent" />
          <h3
            className={cn(
              "mt-[5%] font-display font-bold",
              large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl",
            )}
          >
            Launch faster.
          </h3>
          <p className="mt-[3%] max-w-[80%] text-[clamp(6px,1vw,11px)] text-white/45">
            One focused page. One clear action.
          </p>
          <div className="mt-[6%] flex gap-[3%]">
            <span className="rounded-full bg-accent px-[6%] py-[2.5%] text-[clamp(6px,0.9vw,10px)]">
              Get started
            </span>
            <span className="rounded-full border border-white/15 px-[6%] py-[2.5%] text-[clamp(6px,0.9vw,10px)]">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebsitePreview({ id, className, large }: WebsitePreviewProps) {
  return (
    <div
      className={cn("relative overflow-hidden", shells[id], className)}
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
