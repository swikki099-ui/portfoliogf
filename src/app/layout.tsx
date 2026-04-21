import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
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
  // ... rest of metadata remains same or slightly updated
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-background text-foreground selection:bg-secondary selection:text-white">
        {children}
      </body>
    </html>
  );
}
