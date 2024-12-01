import type { Metadata } from "next";
import { Toaster } from "§ui/Toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://athe-sv.vercel.app"),
  title: "Student Council Athenaeum Stade",
  description: "Web App for the Studen Council of the Athenaeum Stade",
  authors: [
    {
      name: "Jack Ruder",
      url: "https://github.com/jackatdjl",
    }
  ],
  generator: "Next.js",
  keywords: "ATHE, Athenetz, Athenaeum Stade, Jack Ruder, DJL, Jack@DJL, Robocup, Robocup Stade",
  referrer: "origin-when-cross-origin",
  creator: "Jack Ruder",
  publisher: "Jack@DJL, Vercel, Studen Council of the Athenaeum Stade",
  robots: "index, follow",
  icons: "brand/SV.png",
  applicationName: "Athe-SV",
  manifest: "manifest.json",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://athe-sv.vercel.app/",
    siteName: "Athe-SV",
    title: "Student Council Athenaeum Stade",
    description: "Web App for the Studen Council of the Athenaeum Stade",
    images: [
      {
        url: "/brand/notfound.png",
        width: 0,
        height: 0,
        alt: "404",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jackatdjl",
    creator: "@jackatdjl",
    title: "Student Council Athenaeum Stade",
    description: "Web App for the Studen Council of the Athenaeum Stade",
    images: "/brand/SV.png",
  },
  appleWebApp: {
    capable: true,
    title: "Athe-SV",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "Web App for the Studen Council of the Athenaeum Stade. Made by Jack Ruder // Jack@DJL",
  alternates: {
    canonical: "/",
    languages: {
      en: "/404",
      de: "/",
    },
  },
};

import React from "react";
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

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase,
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body
        className={`bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt duration-700`}
      >
        <link rel="stylesheet" href="https://use.typekit.net/dsa8oou.css"></link>
        <Toaster />
        <div id="recapcha-container"></div>
        {children}
      </body>
    </html>
  );
}
