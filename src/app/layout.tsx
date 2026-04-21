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
  metadataBase: new URL('https://chaursia.in'),
  title: {
    default: "Divyanshu Chaursia | Frontend Architect & AI Explorer",
    template: "%s | Divyanshu Chaursia"
  },
  description: "Divyanshu Chaursia is a Frontend Developer specializing in React, Next.js, and modern web architectures. Building intelligent, responsive, and high-performance digital experiences.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "Web Developer", "UI/UX", "Portfolio", "Divyanshu Chaursia", "AI Enthusiast", "JavaScript", "TypeScript"],
  authors: [{ name: "Divyanshu Chaursia", url: "https://d" }],
  creator: "Divyanshu Chaursia",
  publisher: "Divyanshu Chaursia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Divyanshu Chaursia | Frontend Architect",
    description: "Frontend Developer specializing in React, Next.js, and modern web architectures.",
    url: 'https://chaursia.in',
    siteName: 'Divyanshu Chaursia Portfolio',
    images: [
      {
        url: '/assets/chaursia-logo.png', // Assuming this is the logo used in Hero
        width: 1200,
        height: 630,
        alt: 'Divyanshu Chaursia Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Divyanshu Chaursia | Frontend Architect",
    description: "Frontend Developer specializing in React, Next.js, and modern web architectures.",
    creator: '@divyanshuchaursia', // Update with actual handle if known
    images: ['/assets/chaursia-logo.png'],
  },
  verification: {
    google: 'googlea085751169a17bd8', // Using the verification string found in workspace
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
