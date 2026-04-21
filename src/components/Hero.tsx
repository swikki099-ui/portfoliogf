"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Star, Sparkles, Download, Code2, Heart, MousePointer2 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 1. Dynamic Background Layer */}
      <div className="absolute inset-0 dot-grid -z-10 opacity-30" />
      
      {/* Decorative Blob (Large, soft amber) */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[100px] -z-10"
      />
      
      {/* 2. "Wild Decoration" Layer (Floating Primitives) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Violet Pill */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [15, -15, 15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-32 h-12 bg-accent/20 border-2 border-accent/40 rounded-full backdrop-blur-sm"
        />
        
        {/* Pink Circle */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[15%] w-20 h-20 border-4 border-dashed border-secondary/40 rounded-full"
        />
        
        {/* Emerald Square */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[15%] w-16 h-16 bg-quaternary/10 border-2 border-quaternary/30 rounded-2xl"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 3. Text Side (Stable Grid) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border-2 border-foreground px-4 py-2 rounded-full hard-shadow-active mb-8 animate-wiggle cursor-default">
                <Sparkles size={18} className="text-tertiary fill-tertiary" />
                <span className="font-display font-black text-xs tracking-widest uppercase">
                  Frontend Architect & AI Explorer
                </span>
              </div>

              {/* Huge Headline */}
              <h1 className="font-display font-extrabold text-7xl md:text-8xl lg:text-[110px] leading-[0.9] mb-8 tracking-tighter">
                Crafting <br />
                <span className="text-accent relative inline-block">
                  Digital
                  <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 w-full h-4 text-secondary" 
                    viewBox="0 0 100 20" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </motion.svg>
                </span> <br />
                <span className="italic font-light">Magic</span>.
              </h1>

              <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                I build products that feel as <span className="text-foreground font-bold underline decoration-tertiary decoration-4">good as they look</span>. 
                Focused on Next.js, Framer Motion, and the future of AI interfaces.
              </p>

              {/* Candy Buttons */}
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => scrollTo("#projects")}
                  className="group relative bg-accent text-white px-10 py-5 rounded-full border-2 border-foreground font-display font-black text-xl hard-shadow bounce-transition hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#1E293B] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E293B] flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">See the magic</span>
                  <div className="relative z-10 bg-white rounded-full p-1 group-hover:rotate-45 transition-transform">
                    <ArrowRight size={24} className="text-accent" />
                  </div>
                </button>
                
                <button 
                  onClick={() => scrollTo("#contact")}
                  className="bg-white text-foreground px-10 py-5 rounded-full border-2 border-foreground font-display font-black text-xl hover:bg-quaternary transition-colors bounce-transition active:scale-95 flex items-center gap-3"
                >
                  Hire me
                  <MousePointer2 size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* 4. Image/Asset Side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              style={{ y: y2, scale }}
              className="relative w-full max-w-[500px] aspect-square"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-6 border-4 border-foreground rounded-[60px] -rotate-3 -z-10" />
              <div className="absolute -inset-6 bg-secondary/10 rounded-[60px] rotate-3 -z-20" />
              
              {/* Main Image Block */}
              <div className="relative w-full h-full bg-white border-4 border-foreground rounded-[50px] overflow-hidden hard-shadow-pink group">
                <div className="absolute inset-0 dot-grid opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                
                {/* Real Asset (Using logo as placeholder for now, but in a premium way) */}
                <img 
                  src="/assets/chaursia-logo.png" 
                  alt="Divyanshu" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glass Badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/40 backdrop-blur-md border-2 border-white/50 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-display font-black text-lg text-foreground">Divyanshu Chaursia</div>
                    <div className="font-sans font-bold text-xs text-foreground/70 uppercase">Available for work</div>
                  </div>
                  <div className="w-10 h-10 bg-quaternary rounded-full border-2 border-foreground flex items-center justify-center animate-bounce">
                    <Heart size={20} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Floating "Sticker" Badges */}
              <motion.div
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 bg-tertiary border-4 border-foreground px-6 py-3 rounded-2xl hard-shadow -rotate-12"
              >
                <span className="font-display font-black text-2xl uppercase tracking-tighter italic">3+ Years</span>
              </motion.div>

              <motion.div
                animate={{ rotate: [15, -5, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-accent text-white border-4 border-foreground px-6 py-3 rounded-full hard-shadow rotate-12"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={24} />
                  <span className="font-display font-black text-2xl uppercase">Expert</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-display font-bold text-[10px] tracking-[0.3em] uppercase opacity-40">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
