import { faqs } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

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
    <section id="faq" className="scroll-mt-20 bg-paper-2 py-20 text-ink sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-mist">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Questions, answered clearly.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-1 text-left font-display text-lg font-semibold tracking-tight marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-base leading-none text-ink/50 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-7 text-ink/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
