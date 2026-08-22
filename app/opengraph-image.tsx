import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "SitePro Malaysia — From Idea to Website, Fast.";
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
          background: "#0a0b0e",
          color: "#f6f4ee",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 42,
              height: 42,
              background: "#1ed6a8",
              color: "#0a0b0e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            SITEPRO
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#1ed6a8",
              marginBottom: 18,
            }}
          >
            Malaysia Web Design
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 650,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            {SITE.tagline}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "rgba(246,244,238,0.55)" }}>
          {SITE.domain}
        </div>
      </div>
    ),
    size,
  );
}
