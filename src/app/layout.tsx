import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/ui/custom-cursor";
import Particles from "@/components/ui/particles";
import FloatingJoinUs from "@/components/FloatingJoinUs";

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
  title: "Divyanshu Chaursia | Frontend Developer & AI Enthusiast",
  description:
    "Divyanshu Chaursia – Frontend Developer with expertise in AI technologies and modern web development. Updated with the latest AI trends to build intelligent, responsive, and high-performance digital experiences.",
  keywords: [
    "Divyanshu Chaursia", 
    "web developer", 
    "frontend developer", 
    "portfolio", 
    "React", 
    "Next.js", 
    "AI", 
    "Artificial Intelligence", 
    "Machine Learning Enthusiast", 
    "Intelligent UI"
  ],
  authors: [{ name: "Divyanshu Chaurasia" }],
  robots: "index, follow",
  manifest: "/assets/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "Divyanshu Chaursia | Frontend Developer & AI Enthusiast",
    description: "Frontend Developer specializing in AI-enhanced modern web applications.",
    type: "website",
    images: [{ url: "/assets/chaursia-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Chaursia | Frontend Developer & AI Enthusiast",
    description: "Frontend Developer specializing in AI-enhanced modern web applications.",
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
        <FloatingJoinUs />
        {children}
      </body>
    </html>
  );
}
