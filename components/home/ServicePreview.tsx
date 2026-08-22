import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import type { PreviewId } from "@/lib/site";

type ServicePreviewProps = {
  preview: PreviewId;
  className?: string;
};

function PreviewFrame({
  children,
  className,
  dark = true,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border text-[clamp(9px,0.95vw,12px)] leading-snug",
        dark
          ? "border-white/10 bg-[#080a10] text-white"
          : "border-black/8 bg-[#f7f6f3] text-zinc-900",
        className,
      )}
    >
      {children}
    </div>
  );
}

function MiniNav({
  brand,
  dark = true,
}: {
  brand: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-between border-b px-4 py-2.5",
        dark ? "border-white/10" : "border-black/8",
      )}
    >
      <span className="font-display text-[0.85em] font-bold tracking-[0.18em]">
        {brand}
      </span>
      <span className="rounded-full bg-accent px-2.5 py-1 text-[0.72em] font-medium text-white">
        Contact
      </span>
    </div>
  );
}

function MiniPhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
    </div>
  );
}

function BusinessPreview() {
  return (
    <PreviewFrame>
      <MiniNav brand="MONO" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[0.72em] tracking-[0.2em] text-white/40">CORPORATE</p>
        <h4 className="font-display text-[1.6em] font-semibold leading-tight">
          Clarity builds confidence.
        </h4>
        <MiniPhoto
          src={conceptImages.mono.hero}
          alt="Corporate workspace"
          className="aspect-[16/10] rounded-md"
        />
        <span className="inline-flex w-fit rounded-full border border-white/15 px-3 py-1.5 text-[0.75em]">
          View services
        </span>
      </div>
    </PreviewFrame>
  );
}

function EcommercePreview() {
  return (
    <PreviewFrame dark={false}>
      <MiniNav brand="ORBIT" dark={false} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[0.72em] tracking-[0.2em] text-zinc-500">PREMIUM AUDIO</p>
        <h4 className="font-display text-[1.55em] font-semibold leading-tight">ORBIT ONE</h4>
        <p className="text-[0.82em] text-zinc-600">Precision in sound.</p>
        <MiniPhoto
          src={conceptImages.orbit.hero}
          alt="Orbit One product"
          className="aspect-[16/11] rounded-md bg-white"
        />
        <div className="flex items-center justify-between gap-2">
          <span className="text-[0.85em] font-semibold">RM 899</span>
          <span className="rounded-full bg-zinc-900 px-3 py-1.5 text-[0.72em] text-white">
            Shop now
          </span>
        </div>
      </div>
    </PreviewFrame>
  );
}

function LandingPreview() {
  return (
    <PreviewFrame>
      <MiniNav brand="LAUNCH" />
      <div className="relative flex flex-1 flex-col justify-end p-4">
        <MiniPhoto
          src={conceptImages.atelier.hero}
          alt="Campaign landing visual"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[#050608]/72" />
        <div className="relative">
          <p className="text-[0.72em] tracking-[0.2em] text-accent">CAMPAIGN</p>
          <h4 className="mt-1 font-display text-[1.5em] font-bold leading-tight">
            One page. One action.
          </h4>
          <span className="mt-3 inline-flex rounded-full bg-accent px-3 py-1.5 text-[0.75em] text-white">
            Get started
          </span>
        </div>
      </div>
    </PreviewFrame>
  );
}

function CorporatePreview() {
  return (
    <PreviewFrame>
      <MiniNav brand="MONO" />
      <div className="grid flex-1 grid-cols-2 gap-3 p-4">
        <div className="flex flex-col justify-center">
          <p className="text-[0.72em] tracking-[0.2em] text-accent">LEADERSHIP</p>
          <h4 className="mt-2 font-display text-[1.35em] font-semibold leading-tight">
            Enterprise clarity.
          </h4>
          <p className="mt-2 text-[0.8em] text-white/45">Strategy · Results</p>
        </div>
        <MiniPhoto
          src={conceptImages.mono.caseStudy}
          alt="Corporate case study"
          className="aspect-[4/5] rounded-md"
        />
      </div>
    </PreviewFrame>
  );
}

function PortfolioPreview() {
  return (
    <PreviewFrame dark={false}>
      <MiniNav brand="NØVA" dark={false} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[0.72em] tracking-[0.2em] text-zinc-400">EDITORIAL</p>
        <h4 className="font-display text-[1.5em] font-light tracking-[0.14em]">NEW COLLECTION</h4>
        <div className="grid grid-cols-3 gap-2">
          {conceptImages.nova.gallery.map((src, i) => (
            <MiniPhoto key={src} src={src} alt={`Look ${i + 1}`} className="aspect-[3/4] rounded-sm" />
          ))}
        </div>
      </div>
    </PreviewFrame>
  );
}

function CustomPreview() {
  return (
    <PreviewFrame>
      <MiniNav brand="PULSE" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[0.72em] tracking-[0.2em] text-accent">ADVISORY</p>
        <h4 className="font-display text-[1.45em] font-semibold leading-tight">
          Expertise that moves business forward.
        </h4>
        <MiniPhoto
          src={conceptImages.pulse.hero}
          alt="Professional services workspace"
          className="aspect-[16/10] rounded-md"
        />
        <span className="inline-flex w-fit rounded-full bg-accent px-3 py-1.5 text-[0.75em] text-white">
          Book consultation
        </span>
      </div>
    </PreviewFrame>
  );
}

const previewMap: Record<PreviewId, React.ComponentType> = {
  business: BusinessPreview,
  ecommerce: EcommercePreview,
  restaurant: BusinessPreview,
  corporate: CorporatePreview,
  landing: LandingPreview,
  custom: CustomPreview,
  atelier: LandingPreview,
  nova: PortfolioPreview,
  form: BusinessPreview,
  mono: CorporatePreview,
  orbit: EcommercePreview,
  pulse: CustomPreview,
};

export function ServicePreview({ preview, className }: ServicePreviewProps) {
  const Preview = previewMap[preview] ?? BusinessPreview;

  return (
    <div
      className={cn(
        "aspect-[4/5] w-full overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)] sm:aspect-[3/4]",
        className,
      )}
    >
      <Preview />
    </div>
  );
}
