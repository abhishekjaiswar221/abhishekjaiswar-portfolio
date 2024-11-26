import React, { FC, ReactNode } from "react";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import HeaderNavigation from "@/components/navigation/headerNavigation";
import FooterNavigation from "@/components/navigation/footerNavigation";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Abhishek Jaiswar - Web Developer",
  description: "Personal Portfolio",
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
        <Toaster />
        <FooterNavigation />
      </body>
    </html>
  );
};

export default RootLayout;
