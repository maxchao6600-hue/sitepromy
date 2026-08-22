import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "SitePro Malaysia — Premium Web Design Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06080f",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#0080ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Site<span style={{ color: "#0080ff" }}>Pro</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#0080ff",
              marginBottom: 18,
            }}
          >
            Malaysia Web Design
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            YOUR IDEA. OUR CRAFT.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.55)",
              marginTop: 16,
            }}
          >
            {SITE.tagline}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.45)" }}>
          {SITE.domain}
        </div>
      </div>
    ),
    size,
  );
}
