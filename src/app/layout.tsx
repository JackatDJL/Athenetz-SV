import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from ">/sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://athe-sv.vercel.app"),
  title: "Student Council Athenaeum Stade",
  description: "Web App for the Studen Council of the Athenaeum Stade",
  authors: [
    {
      name: "Jack Ruder",
      url: "https://github.com/jackatdjl",
    },
  ],
  generator: "Next.js",
  keywords:
    "ATHE, Athenetz, Athenaeum Stade, Jack Ruder, DJL, Jack@DJL, Robocup, Robocup Stade",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body className={`bg-background text-foreground duration-200`}>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/dsa8oou.css"
        ></link>
        <Toaster />
        <div id="recapcha-container"></div>
        {children}
      </body>
    </html>
  );
}
