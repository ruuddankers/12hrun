import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    default: "12h.run | Boutique endurance event in Nederland",
    template: "%s | 12h.run"
  },
  description:
    "12h.run is een Nederlandstalige boutique endurance experience: 12 uur, 12 rondes van 5 km, gebouwd rond ritme, herstel en veerkracht voor Stichting DON.",
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
    title: "12h.run",
    description:
      "12 rondes. 12 uur. Een gedeeld ritme. Een endurance event voor ritme, herstel en veerkracht.",
    url: "https://12h.run",
    siteName: "12h.run",
    locale: "nl_NL",
    type: "website"
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
    <html lang="nl" className={`${benzin.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
