import type { Metadata } from "next";
import { Toaster } from "@/components/ui/Toast";
import { Oxanium, Bungee_Spice } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

const bungeeSpice = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee-spice",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://athenetz-sv.vercel.app'),
  title: "Athenetz SV WEB",
  description: "Web Frontend for SV Database and more",
  authors: [{
    name: "Jack Ruder",
    url: "https://github.com/derjacklive",
  },
  {
    name: "Actualy no one Else",
    url: "https://www.youtube.com/watch?v=hvL1339luv0",
  },
  ],
  generator: "Next.js",
  keywords: "Frontend, DerJackLive, DJL",
  referrer: "origin-when-cross-origin",
  creator: "Jack Ruder",
  publisher: "DerJackLive, Vercel",
  robots: "index, follow",
  icons: "brand/main/icon-512x512.png",
  applicationName: "Athenetz SV",
  manifest: "manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://athenetz-sv.vercel.app/",
    siteName: "Athenetz-SV",
    title: "Athenetz-SV",
    description: "Web Frontend for Athenetz-SV",
    images: [
      {
        url: "/brand/main/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "NoPlus Web Logo",
      },
      {
        url: "/brand/main/icon-192x192.png",
        width: 192,
        height: 192,
        alt: "NoPlus Web Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@derjacklive",
    creator: "@derjacklive",
    title: "Athenetz-SV",
    description: "Web Frontend for NoPlus",
    images: "/brand/main/icon-512x512.png",
  },
  appleWebApp: {
    capable: true,
    title: "Athenetz-SV",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract: "Web Frontend for NoPlus. By DerJackLive. NoPlus is a Project by DJL made to Learn and Explore the World of Unity and The Web",
  alternates: {
    canonical: '/'
  }
};

import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics/>
      <body className={`${oxanium.variable} ${bungeeSpice.variable} font-oxanium bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt`}>
        <Toaster />
        <div id="recapcha-container"></div>
        {children}
      </body>
    </html>
  );
}
