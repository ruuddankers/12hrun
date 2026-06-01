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
    default: "12H Run Berkel-Enschot",
    template: "%s | 12H Run Berkel-Enschot"
  },
  description:
    "12H Run Berkel-Enschot is een boutique endurance event: 12 uur, 12 rondes van 5 km, gebouwd rond ritme, herstel en veerkracht voor Stichting DON.",
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
    title: "12H Run Berkel-Enschot",
    description:
      "12 uur lang. 5 km per uur. 60 km run.",
    url: "https://12h.run",
    siteName: "12H Run Berkel-Enschot",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "12H Run Berkel-Enschot"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "12H Run Berkel-Enschot",
    description:
      "12 uur lang. 5 km per uur. 60 km run.",
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
