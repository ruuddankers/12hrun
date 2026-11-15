import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import localFont from "next/font/local";
import { BottomNav } from "@/components/sections/bottom-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap"
});

const benzin = localFont({
  src: "../public/fonts/Benzin-Bold.ttf",
  variable: "--font-benzin",
  weight: "700",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://12h.run"),
  title: {
    default: "12HVBE | 12 uur van Berkel-Enschot",
    template: "%s | 12HVBE"
  },
  description:
    "12H van Berkel-Enschot is een boutique endurance event: 12 uur, 12 rondes van 6 km, gebouwd rond ritme, herstel en veerkracht voor Stichting DON.",
  keywords: [
    "endurance running event",
    "ultra running Nederland",
    "boutique running event",
    "backyard ultra geinspireerd",
    "charity endurance event",
    "Type 1 Diabetes fundraiser",
    "Stichting DON"
  ],
  openGraph: {
    title: "12H van Berkel-Enschot",
    description:
      "6 km per uur. 12 uur lang. 72 km hardlopen. 1 gezamenlijk doel.",
    url: "https://12h.run",
    siteName: "12HVBE",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "12H van Berkel-Enschot"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "12H van Berkel-Enschot",
    description:
      "6 km per uur. 12 uur lang. 72 km hardlopen. 1 gezamenlijk doel.",
    images: ["/social-preview.jpg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${benzin.variable} ${inter.variable} ${caveat.variable}`}>
      <body>
        <div className="pb-28">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
