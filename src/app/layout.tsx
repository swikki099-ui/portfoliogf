import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/ui/custom-cursor";
import Particles from "@/components/ui/particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divyanshu Chaursia | Frontend Developer",
  description:
    "Portfolio of Divyanshu Chaurasia – Professional Frontend Developer specializing in modern, responsive websites and applications.",
  keywords: ["Divyanshu Chaurasia", "web developer", "frontend developer", "portfolio", "React", "Next.js"],
  authors: [{ name: "Divyanshu Chaurasia" }],
  robots: "index, follow",
  manifest: "/assets/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "Divyanshu Chaursia | Frontend Developer",
    description: "Professional Frontend Developer specializing in modern, responsive websites.",
    type: "website",
    images: [{ url: "/assets/chaursia-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Chaursia | Frontend Developer",
    description: "Professional Frontend Developer specializing in modern, responsive websites.",
    images: ["/assets/chaursia-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="relative">
        <CustomCursor />
        <Particles
          className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
          quantity={80}
          staticity={50}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
