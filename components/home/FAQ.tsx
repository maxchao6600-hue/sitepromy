import { faqs } from "@/lib/site";
import { MotionReveal } from "@/components/ui/Motion";

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/[0.06] bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-main section-pad">
        <MotionReveal className="max-w-2xl">
          <p className="eyebrow text-accent">FAQ</p>
          <h2 className="heading-display mt-5 text-[clamp(2rem,5vw,3.5rem)]">
            Common questions.
          </h2>
        </MotionReveal>

        <div className="mt-12 divide-y divide-white/[0.06]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-1 text-left font-display text-lg font-semibold tracking-tight marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-muted transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-7 text-cream/55">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
