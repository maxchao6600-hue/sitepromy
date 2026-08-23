"use client";

import { conceptImages } from "@/lib/images";
import { useLanguage } from "@/lib/i18n";
import {
  PreviewBody,
  PreviewButton,
  PreviewEyebrow,
  PreviewFooter,
  PreviewHero,
  PreviewHeroSide,
  PreviewNav,
  PreviewPhoto,
  PreviewRoot,
  PreviewTitle,
} from "@/components/previews/shared";

export function AtelierPreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.atelier;
  const shared = t.concepts.shared;
  const { hero, gallery, story } = conceptImages.atelier;

  return (
    <PreviewRoot className="bg-[#120e0a] text-[#f4eadc]">
      <PreviewNav brand="ATELIER" links={copy.nav} cta={shared.book} />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#120e0a] via-[#120e0a]/55 to-transparent"
      >
        <PreviewEyebrow className="text-[#c9a882]">{copy.eyebrow}</PreviewEyebrow>
        <PreviewTitle large={large}>ATELIER</PreviewTitle>
        <PreviewBody className="max-w-[85%] text-[#f4eadc]/70">{copy.body}</PreviewBody>
        <PreviewButton className="bg-[#b85c32] text-[#f4eadc]">{copy.cta}</PreviewButton>
      </PreviewHero>

      <section className="shrink-0 border-t border-[#f4eadc]/10 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-[#c9a882]">{copy.signature}</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[2.5%]">
          {copy.dishes.map((dish, index) => (
            <div key={dish.name} className="min-w-0">
              <PreviewPhoto src={gallery[index]} className="aspect-[4/5]" alt={dish.name} />
              <p className="mt-[0.5em] text-[0.82em] font-medium">{dish.name}</p>
              <p className="mt-[0.25em] text-[0.72em] leading-relaxed text-[#f4eadc]/55">
                {dish.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-[1fr_42%] gap-[3%] border-t border-[#f4eadc]/10 px-[4%] py-[3.5%]">
        <div className="flex flex-col justify-center pr-[2%]">
          <PreviewEyebrow className="text-[#c9a882]">{copy.kitchen}</PreviewEyebrow>
          <PreviewBody className="text-[#f4eadc]/60">{copy.kitchenBody}</PreviewBody>
        </div>
        <PreviewPhoto src={story} className="aspect-[4/3]" alt="Atelier dining room" />
      </section>

      <PreviewFooter text={copy.footer} />
    </PreviewRoot>
  );
}

export function NovaPreview({ large }: { large?: boolean }) {
  const { t } = useLanguage();
  const copy = t.concepts.nova;
  const shared = t.concepts.shared;
  const { hero, gallery, collection } = conceptImages.nova;

  return (
    <PreviewRoot className="bg-[#faf8f5] text-[#111]">
      <PreviewNav
        brand="NØVA"
        dark={false}
        links={copy.nav}
        cta={shared.shop}
      />

      <PreviewHeroSide
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/45 to-transparent"
        side="left"
      >
        <PreviewEyebrow className="text-zinc-500">{copy.eyebrow}</PreviewEyebrow>
        <PreviewTitle large={large} className="font-light tracking-[0.22em]">
          NØVA
        </PreviewTitle>
        <PreviewBody className="text-zinc-600">{copy.body}</PreviewBody>
        <PreviewButton variant="underline" className="border-[#111] text-[#111]">
          {copy.cta}
        </PreviewButton>
      </PreviewHeroSide>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-zinc-400">{copy.lookbook}</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[2.5%]">
          {gallery.map((src, i) => (
            <div key={src} className="min-w-0">
              <PreviewPhoto src={src} className="aspect-[3/4]" alt={`Look ${i + 1}`} />
              <p className="mt-[0.5em] text-[0.75em] tracking-[0.14em] text-zinc-500">
                {copy.looks[i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-2 gap-[3%] border-t border-black/8 px-[4%] py-[3.5%]">
        <PreviewPhoto src={collection} className="aspect-[16/11]" alt="Nova editorial" />
        <div className="flex flex-col justify-center">
          <PreviewEyebrow className="text-zinc-400">{copy.studio}</PreviewEyebrow>
          <p className="mt-[0.5em] font-display text-[1.15em] font-medium leading-tight">
            {copy.studioBody}
          </p>
          <PreviewButton className="bg-[#111] text-white">{copy.lookbook}</PreviewButton>
        </div>
      </section>

      <PreviewFooter text={copy.footer} dark={false} />
    </PreviewRoot>
  );
}
