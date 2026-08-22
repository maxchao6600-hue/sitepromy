import { ImageResponse } from "next/og";

export const alt = "SitePro Malaysia — Premium Web Design Studio";
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
          background: "#050608",
          color: "#f7f6f3",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
            <rect x="1" y="1" width="38" height="38" rx="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M20 4L32 11v10L20 34 8 21V11L20 4Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.25" />
            <path d="M14 14c2-2 5-2 7 0 2 2 2 5 0 7-2 2-5 2-7 0M22 15c2 2 2 5 0 7-2 2-5 2-7 0" stroke="#0080FF" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 28, fontWeight: 700, display: "flex" }}>
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
            Malaysia Web Design Studio
          </div>
          <div
            style={{
              fontSize: 58,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            WE BUILD WEBSITES THAT MOVE.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "rgba(247,246,243,0.45)" }}>
          sitepromy.com
        </div>
      </div>
    ),
    size,
  );
}
