"use client";

import { cn } from "@/lib/cn";
import { useLanguage, type Language } from "@/lib/i18n";

const options: Array<{ lang: Language; label: string }> = [
  { lang: "en", label: "EN" },
  { lang: "zh", label: "中文" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLanguage } = useLanguage();

  return (
    <div
      className={cn("inline-flex items-center gap-2 text-xs tracking-[0.12em]", className)}
      role="group"
      aria-label="Language"
    >
      {options.map((option, index) => (
        <span key={option.lang} className="inline-flex items-center gap-2">
          {index > 0 ? (
            <span className="text-cream/20" aria-hidden="true">
              |
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLanguage(option.lang)}
            className={cn(
              "min-h-10 px-1 transition-colors duration-300",
              lang === option.lang
                ? "text-cream"
                : "text-cream/40 hover:text-accent",
            )}
            aria-pressed={lang === option.lang}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
