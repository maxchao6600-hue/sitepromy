"use client";

import { conceptImages } from "@/lib/images";
import { useLanguage } from "@/lib/i18n";
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

const ORBIT_PRODUCTS = [
  { name: "ORBIT STUDIO", price: "RM 1,299", srcIndex: 0 },
  { name: "ORBIT MINI", price: "RM 499", srcIndex: 1 },
  { name: "ORBIT AIR", price: "RM 699", srcIndex: 2 },
] as const;

export function FormPreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.form;
  const shared = t.concepts.shared;
  const { hero, project, material } = conceptImages.form;
  const projectImages = [project, material];

  return (
    <PreviewRoot className="bg-[#0e0e0e] text-white">
      <div className="h-[3px] shrink-0 bg-[#e8a020]" />
      <PreviewNav brand="FORM" links={copy.nav} cta={shared.contact} />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent"
      >
        <PreviewEyebrow className="text-[#e8a020]">{copy.eyebrow}</PreviewEyebrow>
        <PreviewTitle large={large}>FORM</PreviewTitle>
        <PreviewBody className="text-white/65">{copy.body}</PreviewBody>
        <PreviewButton variant="outline" className="border-white/25 text-white">
          {copy.cta}
        </PreviewButton>
      </PreviewHero>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-[#e8a020]">{copy.projects}</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-2 gap-[3%]">
          {copy.projectLabels.map((label, index) => (
            <div key={label}>
              <PreviewPhoto
                src={projectImages[index]}
                className="aspect-[16/11]"
                alt={label}
              />
              <p className="mt-[0.5em] text-[0.75em] tracking-[0.12em] text-white/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-3 gap-[2.5%] border-t border-white/10 px-[4%] py-[3.5%]">
        {copy.services.map((service) => (
          <div key={service} className="border border-white/10 p-[5%]">
            <p className="text-[0.75em] tracking-[0.14em] text-[#e8a020]">{service}</p>
            <p className="mt-[0.6em] text-[0.72em] leading-relaxed text-white/45">
              {copy.serviceBody}
            </p>
          </div>
        ))}
      </section>

      <PreviewFooter text={copy.footer} />
    </PreviewRoot>
  );
}

export function MonoPreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.mono;
  const shared = t.concepts.shared;
  const { hero, gallery, caseStudy } = conceptImages.mono;

  return (
    <PreviewRoot className="bg-[#080a10] text-white">
      <PreviewNav brand="MONO" links={copy.nav} cta={shared.contact} />

      <section className="grid shrink-0 grid-cols-[1fr_46%] border-b border-white/10">
        <div className="flex flex-col justify-center px-[5%] py-[6%]">
          <PreviewEyebrow className="text-white/45">{copy.eyebrow}</PreviewEyebrow>
          <PreviewTitle large={large}>MONO</PreviewTitle>
          <PreviewBody className="text-white/60">{copy.body}</PreviewBody>
          <PreviewButton variant="outline" className="border-white/20 text-white">
            {copy.cta}
          </PreviewButton>
        </div>
        <PreviewPhoto src={hero} className="min-h-[140px]" alt="Mono workspace" priority={large} />
      </section>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-accent">{shared.services}</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-4 gap-[2%]">
          {copy.serviceItems.map((item) => (
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
            <PreviewEyebrow className="text-accent">{copy.leadership}</PreviewEyebrow>
            <p className="mt-[0.5em] font-display text-[1.05em] leading-snug">
              {copy.leadershipBody}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[3%]">
            {gallery.map((src) => (
              <PreviewPhoto key={src} src={src} className="aspect-[4/3]" alt="Office environment" />
            ))}
          </div>
        </div>
      </section>

      <PreviewFooter text={copy.footer} />
    </PreviewRoot>
  );
}

export function OrbitPreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.orbit;
  const shared = t.concepts.shared;
  const { hero, gallery } = conceptImages.orbit;

  return (
    <PreviewRoot className="bg-[#0a0a0c] text-white">
      <PreviewNav brand="ORBIT" links={copy.nav} cta={shared.shop} />

      <section className="grid shrink-0 grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] border-b border-white/10">
        <div className="flex flex-col justify-center px-[4%] py-[6%]">
          <PreviewEyebrow className="text-white/40">{copy.eyebrow}</PreviewEyebrow>
          <PreviewTitle large={large}>ORBIT ONE</PreviewTitle>
          <PreviewBody className="text-white/55">{copy.tagline}</PreviewBody>
          <PreviewBody className="max-w-[95%] text-[0.82em] text-white/45">{copy.body}</PreviewBody>
          <PreviewButton variant="underline" className="border-white/30 text-white">
            {copy.cta}
          </PreviewButton>
        </div>
        <PreviewPhoto
          src={hero}
          priority={large}
          className="min-h-[220px]"
          alt="Orbit One premium audio product"
        />
      </section>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-white/35">{copy.line}</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[3%]">
          {ORBIT_PRODUCTS.map((product, index) => (
            <article
              key={product.name}
              className="flex min-w-0 flex-col border border-white/10 bg-white/[0.02] p-[4%]"
            >
              <PreviewPhoto
                src={gallery[product.srcIndex]}
                className="aspect-square bg-[#111]"
                alt={product.name}
              />
              <p className="mt-[0.6em] text-[0.88em] font-medium">{product.name}</p>
              <p className="mt-[0.2em] text-[0.78em] text-white/45">
                {copy.products[index].note}
              </p>
              {copy.products[index].tagline ? (
                <p className="mt-[0.2em] text-[0.72em] text-white/35">
                  {copy.products[index].tagline}
                </p>
              ) : null}
              <p className="mt-[0.35em] text-[0.82em] font-semibold">{product.price}</p>
              <PreviewButton
                variant="outline"
                className="mt-[0.5em] border-white/15 px-[1em] py-[0.45em] text-[0.72em] text-white/70"
              >
                {shared.view}
              </PreviewButton>
            </article>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-3 gap-[2.5%] border-y border-white/10 px-[4%] py-[3%]">
        {copy.specs.map((spec) => (
          <div key={spec.label} className="min-w-0">
            <p className="text-[0.72em] tracking-[0.14em] text-white/35 uppercase">
              {spec.label}
            </p>
            <p className="mt-[0.35em] text-[0.78em] leading-relaxed text-white/50">
              {spec.value}
            </p>
          </div>
        ))}
      </section>

      <div className="flex shrink-0 flex-row items-center justify-between gap-2 px-[4%] py-[3%]">
        <span className="text-[0.78em] text-white/40">{copy.pricingNote}</span>
        <PreviewButton className="mt-0 w-fit bg-white px-[1.4em] py-[0.6em] text-[#0a0a0c]">
          {copy.shopCta}
        </PreviewButton>
      </div>

      <PreviewFooter text={copy.footer} />
    </PreviewRoot>
  );
}

export function PulsePreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.pulse;
  const shared = t.concepts.shared;
  const { hero, gallery } = conceptImages.pulse;

  return (
    <PreviewRoot className="bg-[#061018] text-white">
      <PreviewNav brand="PULSE" links={copy.nav} cta={shared.contact} />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#061018] via-[#061018]/70 to-[#061018]/10"
      >
        <span className="inline-block h-[2px] w-[2.5em] bg-accent" />
        <PreviewTitle large={large} className="mt-[0.6em]">
          PULSE
        </PreviewTitle>
        <PreviewBody className="max-w-[90%] text-white/60">{copy.body}</PreviewBody>
        <PreviewButton className="bg-accent text-white">{copy.cta}</PreviewButton>
      </PreviewHero>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-accent">{shared.services}</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[2.5%]">
          {copy.serviceItems.map((service) => (
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

      <PreviewFooter text={copy.footer} />
    </PreviewRoot>
  );
}

export function LandingPreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.landing;
  const shared = t.concepts.shared;
  const hero = conceptImages.hero.dining;

  return (
    <PreviewRoot className="bg-[#050608] text-white">
      <PreviewNav brand="LAUNCH" links={copy.nav} cta={shared.book} />

      <section className="relative shrink-0">
        <PreviewPhoto src={hero} className="aspect-[16/10] min-h-[140px]" priority={large} />
        <div className="absolute inset-0 bg-[#050608]/78" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
          <span className="h-[2px] w-[2.5em] bg-accent" />
          <PreviewTitle large={large} className="mt-[0.7em]">
            {copy.title}
          </PreviewTitle>
          <PreviewBody className="mx-auto max-w-[80%] text-white/50">{copy.body}</PreviewBody>
          <div className="mt-[1em] flex flex-wrap justify-center gap-[0.6em]">
            <PreviewButton className="mt-0 bg-accent text-white">{copy.primary}</PreviewButton>
            <PreviewButton variant="outline" className="mt-0 border-white/15 text-white">
              {copy.secondary}
            </PreviewButton>
          </div>
        </div>
      </section>
    </PreviewRoot>
  );
}
