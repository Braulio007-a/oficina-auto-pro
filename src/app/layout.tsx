import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import { business } from "@/content/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});

const description =
  "Kits frontais, jantes, faróis e farolins novos para várias marcas de automóveis. Material em stock e importação por encomenda. Contacto: 939 666 660.";

export const metadata: Metadata = {
  // No public domain yet: set SITE_URL when the site is published.
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  title: `${business.name} | Kits frontais, jantes e faróis`,
  description,
  applicationName: business.name,
  openGraph: {
    title: business.name,
    description,
    locale: "pt_AO",
    type: "website",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#161618",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
