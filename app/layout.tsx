import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { AppShell } from "@/components/layout/AppShell";
import type { Language } from "@/lib/i18n";
import { getHtmlLang } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SitePro Malaysia | Professional Web Design & Development",
    template: "%s | SitePro Malaysia",
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  category: "Web Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const langHeader = headerStore.get("x-sitepro-lang");
  const initialLang: Language = langHeader === "zh" ? "zh" : "en";

  return (
    <html
      lang={getHtmlLang(initialLang)}
      data-lang={initialLang}
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-ink font-sans text-cream">
        <AppShell initialLang={initialLang}>{children}</AppShell>
      </body>
    </html>
  );
}
