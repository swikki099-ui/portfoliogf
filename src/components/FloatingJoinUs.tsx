"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingJoinUs() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <Link
        href="https://neurodev.in"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-display text-sm font-bold uppercase tracking-widest overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1"
      >
        <span className="relative z-10">Join Us</span>
        <motion.span
          className="relative z-10"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          →
        </motion.span>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </Link>
    </motion.div>
  );
}
