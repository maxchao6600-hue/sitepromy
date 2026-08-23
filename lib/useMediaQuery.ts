"use client";

import { useSyncExternalStore } from "react";

export const PORTRAIT_MOBILE_QUERY = "(max-width: 600px) and (orientation: portrait)";

export function useMediaQuery(query: string, serverFallback = false) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => serverFallback,
  );
}

export function usePortraitMobile(serverFallback = false) {
  return useMediaQuery(PORTRAIT_MOBILE_QUERY, serverFallback);
}
