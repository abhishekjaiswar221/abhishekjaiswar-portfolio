import React, { FC, ReactNode } from "react";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { noto_sans } from "@/lib/fonts";
import NextTopLoader from "nextjs-toploader";
import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderNavigation from "@/components/navigation/headerNavigation";
import FooterNavigation from "@/components/navigation/footerNavigation";

export const runtime = "edge";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Abhishek Jaiswar | Web Developer",
    template: "%s - Abhishek Jaiswar | Web Developer",
  },
  description: "Personal Portfolio Website",
  metadataBase: new URL("https://abhishekjaiswar.pages.dev"),

  // Keywords
  keywords: [
    "abhishek",
    "abhishek portfolio",
    "abhishek website",
    "abhishek jaiswar",
    "abhishek jaiswar website",
    "abhishek jaiswar portfolio",
    "abhishek jaiswar portfolio website",
    "abhishek d jaiswar",
    "abhishek d jaiswar website",
    "abhishek d jaiswar portfolio",
    "abhishek d jaiswar portfolio website",
    "abhishek web developer portfolio",
    "abhishek jaiswar web developer portfolio",
    "abhishek d jaiswar web developer portfolio",
  ],

  // Icons
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon-16x16.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
      },
    ],
  },

  // Open Graph
  openGraph: {
    url: "https://abhishekjaiswar.pages.dev",
    title: "Abhishek Jaiswar | Web Developer",
    description: "Personal Portfolio Website",
    siteName: "Abhishek Jaiswar | Web Developer",
    images: "https://abhishekjaiswar.pages.dev/images/portfolio.png",
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jaiswar | Web Developer",
    description: "Personal Portfolio Website",
    creator: "@abhishekjaiswar221",
    site: "@abhishekjaiswar221",
    images: [
      {
        url: "https://abhishekjaiswar.pages.dev/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Jaiswar | Web Developer",
      },
    ],
  },

  // Apple Web App
  appleWebApp: {
    title: "Abhishek Jaiswar - Web Developer",
    statusBarStyle: "default",
    capable: true,
  },

  // Alternates
  alternates: {
    canonical: "https://abhishekjaiswar.pages.dev",
  },

  // Category
  category: "technology",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-zinc-900 text-zinc-200 antialiased",
          noto_sans.className
        )}
      >
        <NextTopLoader
          color="#6366f1"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <HeaderNavigation />
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <FooterNavigation />
      </body>
    </html>
  );
};

export default RootLayout;
