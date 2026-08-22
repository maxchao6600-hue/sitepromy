import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/ui/SkipLink";
import { SITE } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    images: [{ url: "/logo.jpg", width: 1024, height: 1024, alt: "SitePro — Malaysia Web Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SitePro Malaysia | Professional Web Design & Development",
    description: SITE.description,
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg", sizes: "512x512" },
      { url: "/logo.jpg", type: "image/jpeg", sizes: "1024x1024" },
    ],
    shortcut: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-cream">
        <SkipLink />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
