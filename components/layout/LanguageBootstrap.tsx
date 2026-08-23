import { LANGUAGE_STORAGE_KEY } from "@/lib/i18n";

export function LanguageBootstrap() {
  const script = `(function(){try{var p=new URLSearchParams(location.search);var lang=p.get("lang");if(lang!=="en"&&lang!=="zh"){lang=localStorage.getItem("${LANGUAGE_STORAGE_KEY}");}if(lang!=="zh")lang="en";document.documentElement.lang=lang==="zh"?"zh-MY":"en-MY";document.documentElement.dataset.lang=lang;}catch(e){document.documentElement.lang="en-MY";document.documentElement.dataset.lang="en";}})();`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
