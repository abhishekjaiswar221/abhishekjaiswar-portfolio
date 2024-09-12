import React from "react";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import HeaderNavigation from "@/components/navigation/headerNavigation";
import FooterNavigation from "@/components/navigation/footerNavigation";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Abhishek Jaiswar - Web Developer",
  description: "Personal Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen antialiased", noto_sans.className)}>
        <HeaderNavigation />
        {children}
        <FooterNavigation />
      </body>
    </html>
  );
}
