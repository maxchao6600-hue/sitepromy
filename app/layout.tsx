import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { LanguageBootstrap } from "@/components/layout/LanguageBootstrap";
import type { Language } from "@/lib/i18n";
import { SITE } from "@/lib/site";
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
  keywords: [
    "Malaysia web design",
    "web design Malaysia",
    "website design Malaysia",
    "website development Malaysia",
    "professional website design",
    "business website Malaysia",
    "ecommerce website Malaysia",
    "custom website Malaysia",
  ],
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.fullName,
    title: "SitePro Malaysia | Professional Web Design & Development",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SitePro Malaysia | Professional Web Design & Development",
    description: SITE.description,
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
      lang={initialLang === "zh" ? "zh-MY" : "en-MY"}
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <LanguageBootstrap />
      </head>
      <body className="min-h-full overflow-x-clip bg-ink font-sans text-cream">
        <AppShell initialLang={initialLang}>{children}</AppShell>
      </body>
    </html>
  );
}
