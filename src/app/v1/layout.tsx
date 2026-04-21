"use client";

import React from "react";
import { Inter, Outfit } from "next/font/google";
import "@/app/globals.css"; // We might need a v1-specific CSS if we want to be perfect
import Preloader from "@/components/v1/Preloader";
import CustomCursor from "@/components/v1/ui/custom-cursor";
import Particles from "@/components/v1/ui/particles";
import FloatingJoinUs from "@/components/v1/FloatingJoinUs";

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

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${outfit.variable} v1-theme`}>
      <CustomCursor />
      <Particles
        className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
        quantity={80}
        staticity={50}
      />
      <Preloader />
      <FloatingJoinUs />
      {children}
      
      <style jsx global>{`
        .v1-theme {
          --font-sans: 'Inter', sans-serif;
          --background: #ffffff;
          --foreground: #0a0a0a;
        }
        .v1-theme body {
          background: #ffffff !important;
          color: #0a0a0a !important;
          font-family: var(--font-sans) !important;
          cursor: none !important;
        }
        .v1-theme * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
