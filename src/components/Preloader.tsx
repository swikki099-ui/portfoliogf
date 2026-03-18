"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check for first visit
    const hasVisited = localStorage.getItem("portfolio_visited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("portfolio_visited", "true");
      // Splash screen duration
      setTimeout(() => setLoading(false), 3000);
    } else {
      setIsFirstVisit(false);
      // Normal preloader simulation
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 800);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  if (isFirstVisit === null) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="master-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: isFirstVisit ? 1.1 : 1.05, 
            filter: "blur(15px)"
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {isFirstVisit ? (
            /* --- SPLASH SCREEN (FIRST VISIT) --- */
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.2, 1, 0.5, 1],
                  scale: [0.95, 1, 0.98, 1]
                }}
                transition={{ 
                  duration: 0.8, 
                  times: [0, 0.1, 0.2, 0.3, 0.5, 1],
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <h1 className="text-8xl md:text-9xl font-black text-slate-900 tracking-[0.2em] font-display uppercase text-center">
                  WELCOME
                </h1>
                {/* Decorative scanning line */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-20 w-full"
                  animate={{ top: ["-20%", "120%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-indigo-600" />
                  <span className="text-sm font-black text-slate-400 uppercase tracking-[0.5em]">Divyanshu Chaursia</span>
                  <span className="h-[2px] w-12 bg-indigo-600" />
                </div>
                <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest animate-pulse">Initializing Portal...</p>
              </motion.div>

              {/* Background ambient light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60" />
            </div>
          ) : (
            /* --- NORMAL PRELOADER (RETURNING VISIT) --- */
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-12 flex flex-col items-center gap-6"
              >
                <motion.div
                  className="relative w-24 h-24 overflow-hidden rounded-2xl shadow-2xl shadow-indigo-100"
                  animate={{ 
                    rotate: [0, 2, -2, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Image 
                    src="/assets/chaursia-logo.png" 
                    alt="Chaursia logo" 
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <h2 className="text-xl font-black text-slate-900 tracking-tighter font-display uppercase">
                    Chaurasia
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="h-[1px] w-6 bg-slate-200" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400">Loading Perfection</span>
                    <span className="h-[1px] w-6 bg-slate-200" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Progress Container */}
              <div className="relative w-64 h-[4px] bg-slate-50 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-[length:200%_100%]"
                  animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{ width: `${progress}%` }}
                />
              </div>

              <motion.p
                className="text-xs font-black text-slate-400 tabular-nums tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
