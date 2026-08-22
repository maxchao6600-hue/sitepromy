import { conceptImages } from "@/lib/images";
import {
  PreviewBody,
  PreviewButton,
  PreviewEyebrow,
  PreviewFooter,
  PreviewHero,
  PreviewNav,
  PreviewPhoto,
  PreviewRoot,
  PreviewTitle,
} from "@/components/previews/shared";

export function FormPreview({ large }: { large?: boolean }) {
  const { hero, project, material } = conceptImages.form;

  return (
    <PreviewRoot className="bg-[#0e0e0e] text-white">
      <div className="h-[3px] shrink-0 bg-[#e8a020]" />
      <PreviewNav brand="FORM" links={["Projects", "Studio", "Contact"]} cta="Enquire" />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent"
      >
        <PreviewEyebrow className="text-[#e8a020]">Architecture · Construction</PreviewEyebrow>
        <PreviewTitle large={large}>FORM</PreviewTitle>
        <PreviewBody className="text-white/65">Built with intent.</PreviewBody>
        <PreviewButton variant="outline" className="border-white/25 text-white">
          View Projects
        </PreviewButton>
      </PreviewHero>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-[#e8a020]">Projects</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-2 gap-[3%]">
          <div>
            <PreviewPhoto src={project} className="aspect-[16/11]" alt="Residential project" />
            <p className="mt-[0.5em] text-[0.75em] tracking-[0.12em] text-white/45">
              Architecture · Residential
            </p>
          </div>
          <div>
            <PreviewPhoto src={material} className="aspect-[16/11]" alt="Material study" />
            <p className="mt-[0.5em] text-[0.75em] tracking-[0.12em] text-white/45">
              Interiors · Material studies
            </p>
          </div>
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-3 gap-[2.5%] border-t border-white/10 px-[4%] py-[3.5%]">
        {["Architecture", "Interiors", "Delivery"].map((service) => (
          <div key={service} className="border border-white/10 p-[5%]">
            <p className="text-[0.75em] tracking-[0.14em] text-[#e8a020]">{service}</p>
            <p className="mt-[0.6em] text-[0.72em] leading-relaxed text-white/45">
              Space, structure and material led from concept to completion.
            </p>
          </div>
        ))}
      </section>

      <PreviewFooter text="Studio · Projects · Global" />
    </PreviewRoot>
  );
}

export function MonoPreview({ large }: { large?: boolean }) {
  const { hero, gallery, caseStudy } = conceptImages.mono;

  return (
    <PreviewRoot className="bg-[#080a10] text-white">
      <PreviewNav brand="MONO" links={["Services", "Leadership", "About"]} cta="Contact" />

      <section className="grid shrink-0 grid-cols-[1fr_46%] border-b border-white/10">
        <div className="flex flex-col justify-center px-[5%] py-[6%]">
          <PreviewEyebrow className="text-white/45">Corporate · Strategy</PreviewEyebrow>
          <PreviewTitle large={large}>MONO</PreviewTitle>
          <PreviewBody className="text-white/60">Clarity builds confidence.</PreviewBody>
          <PreviewButton variant="outline" className="border-white/20 text-white">
            View Services
          </PreviewButton>
        </div>
        <PreviewPhoto src={hero} className="min-h-[140px]" alt="Mono workspace" priority={large} />
      </section>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-accent">Services</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-4 gap-[2%]">
          {["Strategy", "Services", "Leadership", "Results"].map((item) => (
            <div key={item} className="border border-white/10 p-[6%]">
              <p className="text-[0.75em] tracking-[0.12em] text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-[1.15fr_1fr] gap-[3%] px-[4%] pb-[3.5%]">
        <PreviewPhoto src={caseStudy} className="aspect-[16/10]" alt="Corporate case study" />
        <div className="flex flex-col justify-between py-[1%]">
          <div>
            <PreviewEyebrow className="text-accent">Leadership</PreviewEyebrow>
            <p className="mt-[0.5em] font-display text-[1.05em] leading-snug">
              Enterprise platform redesign for global teams
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[3%]">
            {gallery.map((src) => (
              <PreviewPhoto key={src} src={src} className="aspect-[4/3]" alt="Office environment" />
            ))}
          </div>
        </div>
      </section>

      <PreviewFooter text="Global offices · Since 2012" />
    </PreviewRoot>
  );
}

export function OrbitPreview({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.orbit;
  const products = [
    { src: gallery[0], name: "ORBIT ONE", price: "$299", note: "Everyday precision" },
    { src: gallery[1], name: "ORBIT TWO", price: "$399", note: "Sapphire crystal" },
    { src: gallery[2], name: "ORBIT PRO", price: "$599", note: "Automatic movement" },
  ];

  return (
    <PreviewRoot className="bg-[#f7f7f5] text-zinc-900">
      <PreviewNav
        brand="ORBIT"
        dark={false}
        links={["Collection", "Technology", "About"]}
        cta="Cart"
      />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#f7f7f5] via-[#f7f7f5]/35 to-transparent"
      >
        <PreviewEyebrow className="text-zinc-500">Premium Watches</PreviewEyebrow>
        <PreviewTitle large={large}>ORBIT</PreviewTitle>
        <PreviewBody className="max-w-[90%] text-zinc-600">
          Precision in motion. Modern timepieces engineered around precision, material
          and everyday movement.
        </PreviewBody>
        <PreviewButton className="bg-zinc-900 text-white">Explore Collection</PreviewButton>
      </PreviewHero>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <div className="mb-[2%] flex items-end justify-between gap-[3%]">
          <PreviewEyebrow className="text-zinc-500">Collection</PreviewEyebrow>
          <span className="text-[0.72em] tracking-[0.12em] text-zinc-400">01 / 02 / 03</span>
        </div>
        <div className="grid grid-cols-3 gap-[3%]">
          {products.map((product, index) => (
            <article key={product.name} className="min-w-0">
              <PreviewPhoto src={product.src} className="aspect-square bg-white" alt={product.name} />
              <p className="mt-[0.55em] text-[0.72em] tracking-[0.16em] text-zinc-400">
                0{index + 1}
              </p>
              <p className="mt-[0.2em] text-[0.88em] font-medium">{product.name}</p>
              <p className="mt-[0.15em] text-[0.82em] font-semibold">{product.price}</p>
              <p className="mt-[0.2em] text-[0.72em] text-zinc-500">{product.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-3 gap-[2.5%] border-y border-zinc-200 px-[4%] py-[3%]">
        {[
          { label: "Movement", value: "Quartz & automatic calibres" },
          { label: "Materials", value: "Steel, ceramic & sapphire" },
          { label: "Design", value: "Built for daily wear" },
        ].map((spec) => (
          <div key={spec.label} className="min-w-0">
            <p className="text-[0.72em] tracking-[0.14em] text-zinc-400 uppercase">{spec.label}</p>
            <p className="mt-[0.35em] text-[0.78em] leading-relaxed text-zinc-600">{spec.value}</p>
          </div>
        ))}
      </section>

      <div className="flex shrink-0 items-center justify-between px-[4%] py-[3%]">
        <span className="text-[0.78em] text-zinc-500">Free shipping on orders above $200</span>
        <PreviewButton className="mt-0 bg-zinc-900 px-[1.6em] py-[0.65em] text-white">
          Shop Watches
        </PreviewButton>
      </div>

      <PreviewFooter text="Precision timepieces · Worldwide delivery" dark={false} />
    </PreviewRoot>
  );
}

export function PulsePreview({ large }: { large?: boolean }) {
  const { hero, gallery } = conceptImages.pulse;

  return (
    <PreviewRoot className="bg-[#061018] text-white">
      <PreviewNav brand="PULSE" links={["Services", "Approach", "Insights"]} cta="Consult" />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#061018] via-[#061018]/70 to-[#061018]/10"
      >
        <span className="inline-block h-[2px] w-[2.5em] bg-accent" />
        <PreviewTitle large={large} className="mt-[0.6em]">
          PULSE
        </PreviewTitle>
        <PreviewBody className="max-w-[90%] text-white/60">
          Expertise that moves business forward.
        </PreviewBody>
        <PreviewButton className="bg-accent text-white">Book a Consultation</PreviewButton>
      </PreviewHero>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-accent">Services</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[2.5%]">
          {[
            { title: "Strategy", desc: "Growth planning and market positioning" },
            { title: "Advisory", desc: "Executive guidance for complex decisions" },
            { title: "Results", desc: "Measurable outcomes across operations" },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded border border-white/10 bg-white/[0.03] p-[5%]"
            >
              <p className="text-[0.75em] tracking-[0.14em] text-accent">{service.title}</p>
              <p className="mt-[0.45em] text-[0.78em] leading-relaxed text-white/50">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-2 gap-[3%] px-[4%] pb-[3.5%]">
        {gallery.map((src) => (
          <PreviewPhoto key={src} src={src} className="aspect-[16/11]" alt="Pulse workspace" />
        ))}
      </section>

      <PreviewFooter text="Book a consultation · Response within 24h" />
    </PreviewRoot>
  );
}

export function LandingPreview({ large }: { large?: boolean }) {
  const hero = conceptImages.hero.dining;

  return (
    <PreviewRoot className="bg-[#050608] text-white">
      <PreviewNav brand="LAUNCH" links={["Features", "Pricing"]} cta="Start" />

      <section className="relative shrink-0">
        <PreviewPhoto src={hero} className="aspect-[16/10] min-h-[140px]" priority={large} />
        <div className="absolute inset-0 bg-[#050608]/78" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
          <span className="h-[2px] w-[2.5em] bg-accent" />
          <PreviewTitle large={large} className="mt-[0.7em]">
            Launch faster.
          </PreviewTitle>
          <PreviewBody className="mx-auto max-w-[80%] text-white/50">
            One focused page. One clear action. Built to convert.
          </PreviewBody>
          <div className="mt-[1em] flex flex-wrap justify-center gap-[0.6em]">
            <PreviewButton className="mt-0 bg-accent text-white">Get started</PreviewButton>
            <PreviewButton variant="outline" className="mt-0 border-white/15 text-white">
              Learn more
            </PreviewButton>
          </div>
        </div>
      </section>
    </PreviewRoot>
  );
}
