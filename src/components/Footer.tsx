"use client";

import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-50 py-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                  <span className="font-bold text-xs italic">DC</span>
                </div>
                <span className="text-2xl font-black text-slate-900 font-display uppercase tracking-widest">Chaursia</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">Crafting pixel-perfect digital experiences.</p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-2">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
                >
                  {l.label}
                </button>
              ))}
            </nav>
         </div>

         <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">
               © 2025 Chaursia Portfolio
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em]">Designed for Perfection</span>
            </div>
         </div>
      </div>
    </footer>
  );
}
