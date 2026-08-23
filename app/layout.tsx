import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/ui/SkipLink";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-ink font-sans text-cream">
        <SkipLink />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
