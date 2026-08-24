"use client";

import { StudioExternalLink } from "@/components/ui/StudioExternalLink";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

type PreferWhatsAppProps = {
  prompt?: string;
  className?: string;
};

/** Secondary CTA — never replaces Start a Project. */
export function PreferWhatsApp({ prompt, className }: PreferWhatsAppProps) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      <p className="text-sm text-cream/50">{prompt ?? t.contactPage.preferWhatsApp}</p>
      <StudioExternalLink
        href={SITE.whatsappUrl}
        label={t.footer.whatsappLink}
        ariaLabel={t.footer.whatsappAria}
        className="mt-2"
      />
    </div>
  );
}
