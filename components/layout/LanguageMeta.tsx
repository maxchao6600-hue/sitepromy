"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export function LanguageMeta() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t.meta.description);
    }
  }, [t.meta.description, t.meta.title]);

  return null;
}
