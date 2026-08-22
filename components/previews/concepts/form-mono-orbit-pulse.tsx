import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import { PreviewFooter, PreviewNav, PreviewPhoto } from "@/components/previews/shared";

export function FormPreview({ large }: { large?: boolean }) {
  const { hero, project, material } = conceptImages.form;

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#0e0e0e] text-white">
      <div className="h-[3px] shrink-0 bg-[#e8a020]" />
      <PreviewNav
        brand="FORM"
        links={["Projects", "Studio", "Contact"]}
        cta="Enquire"
      />
      <div className="relative min-h-[40%] flex-1">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent" />
        <div className="absolute inset-x-[5%] bottom-[10%]">
          <p className="text-[clamp(5px,0.85vw,10px)] tracking-[0.28em] text-[#e8a020]">
            ARCHITECTURE · CONSTRUCTION
          </p>
          <h3
            className={cn(
              "mt-[2%] font-display font-black uppercase leading-[0.9]",
              large ? "text-4xl sm:text-6xl" : "text-xl sm:text-3xl",
            )}
          >
            Build
            <br />
            Strong
          </h3>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-[2%] p-[3%]">
        <div>
          <PreviewPhoto src={project} className="aspect-[16/11]" />
          <p className="mt-[3%] text-[clamp(5px,0.75vw,8px)] tracking-[0.14em] text-white/45">
            RESIDENTIAL · 2025
          </p>
        </div>
        <div>
          <PreviewPhoto src={material} className="aspect-[16/11]" />
          <p className="mt-[3%] text-[clamp(5px,0.75vw,8px)] tracking-[0.14em] text-white/45">
            MATERIALS · CONCRETE
          </p>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-[2%] border-t border-white/10 px-[3%] py-[2.5%]">
        {["Design", "Engineering", "Delivery"].map((service) => (
          <div key={service} className="border border-white/10 p-[4%]">
            <p className="text-[clamp(5px,0.75vw,8px)] tracking-[0.16em] text-[#e8a020]">
              {service.toUpperCase()}
            </p>
            <p className="mt-[4%] h-[2px] w-full bg-white/15" />
          </div>
        ))}
      </div>
      <PreviewFooter text="Studio · Projects · Global" />
    </div>
  );
}

export function MonoPreview({ large }: { large?: boolean }) {
  const { hero, gallery, caseStudy } = conceptImages.mono;

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#080a10] text-white">
      <PreviewNav
        brand="MONO"
        links={["Services", "Cases", "About"]}
        cta="Contact"
      />
      <div className="grid min-h-[36%] flex-1 grid-cols-[1fr_48%]">
        <div className="flex flex-col justify-center p-[5%]">
          <p className="text-[clamp(5px,0.85vw,10px)] tracking-[0.24em] text-white/40">
            CORPORATE · TECHNOLOGY
          </p>
          <h3
            className={cn(
              "mt-[3%] font-display font-semibold leading-tight",
              large ? "text-3xl sm:text-5xl" : "text-lg sm:text-2xl",
            )}
          >
            Corporate clarity.
          </h3>
          <p className="mt-[3%] text-[clamp(5px,0.9vw,10px)] text-white/45">
            Strategy · Technology · Growth
          </p>
          <span className="mt-[5%] inline-flex w-fit border border-white/20 px-[5%] py-[2%] text-[clamp(5px,0.85vw,9px)]">
            View case studies
          </span>
        </div>
        <PreviewPhoto src={hero} className="min-h-[100px]" priority={large} />
      </div>
      <div className="grid shrink-0 grid-cols-[1.2fr_1fr] gap-[2%] p-[3%]">
        <PreviewPhoto src={caseStudy} className="aspect-[16/10]" />
        <div className="flex flex-col justify-between py-[2%]">
          <div>
            <p className="text-[clamp(5px,0.75vw,9px)] tracking-[0.18em] text-accent">
              CASE STUDY
            </p>
            <p className="mt-[4%] font-display text-[clamp(9px,1.5vw,16px)]">
              Enterprise platform redesign
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[3%]">
            {gallery.map((src) => (
              <PreviewPhoto key={src} src={src} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </div>
      <PreviewFooter text="Global offices · Since 2012" />
    </div>
  );
}

export function OrbitPreview({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.orbit;
  const products = [
    { src: gallery[0], name: "Studio headphones", price: "RM 890" },
    { src: gallery[1], name: "Classic eyewear", price: "RM 420" },
    { src: gallery[2], name: "Field camera", price: "RM 1,240" },
    { src: gallery[0], name: "Ceramic speaker", price: "RM 680" },
  ];

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-white text-zinc-900">
      <PreviewNav
        brand="ORBIT"
        dark={false}
        links={["Shop", "About", "Journal"]}
        cta="Cart"
      />
      <div className="relative h-[32%] min-h-[90px] shrink-0">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/30 to-transparent" />
        <div className="absolute inset-y-0 left-[5%] flex flex-col justify-center">
          <h3
            className={cn(
              "font-display font-semibold",
              large ? "text-2xl sm:text-4xl" : "text-base sm:text-xl",
            )}
          >
            New arrivals
          </h3>
          <p className="mt-[2%] text-[clamp(5px,0.9vw,10px)] text-zinc-600">
            Premium essentials · Studio lighting
          </p>
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-[2.5%] p-[3%]">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col">
            <PreviewPhoto src={product.src} className="aspect-square" />
            <p className="mt-[3%] text-[clamp(5px,0.8vw,9px)] font-medium">
              {product.name}
            </p>
            <p className="text-[clamp(5px,0.75vw,8px)] text-zinc-500">
              {product.price}
            </p>
          </div>
        ))}
      </div>
      <div className="flex shrink-0 items-center justify-between border-t border-zinc-200 px-[3%] py-[2.5%]">
        <span className="text-[clamp(5px,0.85vw,9px)] text-zinc-500">
          Free delivery above RM 200
        </span>
        <span className="rounded-full bg-zinc-900 px-[5%] py-[2%] text-[clamp(5px,0.85vw,9px)] text-white">
          Shop now
        </span>
      </div>
    </div>
  );
}

export function PulsePreview({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.pulse;
  const services = [
    { title: "Strategy", desc: "Business advisory" },
    { title: "Operations", desc: "Process optimisation" },
    { title: "Growth", desc: "Market expansion" },
  ];

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#061018] text-white">
      <PreviewNav
        brand="PULSE"
        links={["Services", "Approach", "Insights"]}
        cta="Consult"
      />
      <div className="relative min-h-[38%] flex-1">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061018] via-[#061018]/65 to-[#061018]/15" />
        <div className="absolute inset-x-[5%] bottom-[10%] max-w-[75%]">
          <span className="inline-block h-[2px] w-[10%] bg-accent" />
          <h3
            className={cn(
              "mt-[4%] font-display font-semibold leading-tight",
              large ? "text-3xl sm:text-5xl" : "text-lg sm:text-2xl",
            )}
          >
            Trusted expertise.
          </h3>
          <p className="mt-[2%] text-[clamp(5px,0.9vw,10px)] text-white/50">
            Consulting · Advisory · Measurable results
          </p>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-[2%] px-[3%] py-[2.5%]">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded border border-white/10 bg-white/[0.03] p-[5%]"
          >
            <p className="text-[clamp(5px,0.75vw,8px)] tracking-[0.16em] text-accent">
              {service.title.toUpperCase()}
            </p>
            <p className="mt-[4%] text-[clamp(5px,0.8vw,9px)] text-white/45">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-[2%] p-[3%] pt-0">
        {gallery.map((src) => (
          <PreviewPhoto key={src} src={src} className="aspect-[16/11]" />
        ))}
      </div>
      <PreviewFooter text="Book a consultation · Response within 24h" />
    </div>
  );
}

export function LandingPreview({ large }: { large?: boolean }) {
  const hero = conceptImages.hero.dining;

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#050608] text-white">
      <PreviewNav brand="LAUNCH" links={["Features", "Pricing"]} cta="Start" />
      <div className="relative flex-1">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-[#050608]/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-[8%] text-center">
          <span className="h-[2px] w-[12%] bg-accent" />
          <h3
            className={cn(
              "mt-[5%] font-display font-bold leading-tight",
              large ? "text-3xl sm:text-5xl" : "text-lg sm:text-2xl",
            )}
          >
            Launch faster.
          </h3>
          <p className="mt-[3%] max-w-[80%] text-[clamp(5px,0.9vw,10px)] text-white/45">
            One focused page. One clear action. Built to convert.
          </p>
          <div className="mt-[6%] flex gap-[3%]">
            <span className="rounded-full bg-accent px-[6%] py-[2.5%] text-[clamp(5px,0.85vw,9px)]">
              Get started
            </span>
            <span className="rounded-full border border-white/15 px-[6%] py-[2.5%] text-[clamp(5px,0.85vw,9px)]">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
