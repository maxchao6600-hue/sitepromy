import type { NextConfig } from "next";

const htmlCacheControl =
  "public, max-age=0, s-maxage=300, stale-while-revalidate=60";
const staticCacheControl = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: htmlCacheControl }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: staticCacheControl }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: staticCacheControl }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};

export default nextConfig;
