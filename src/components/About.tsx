"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Palette, Cpu, Rocket, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { label: "Years Experience", value: "3+", color: "bg-accent" },
  { label: "Projects Built", value: "15+", color: "bg-secondary" },
  { label: "Tech Stack", value: "10+", color: "bg-tertiary" },
  { label: "AI Enthusiasm", value: "100%", color: "bg-quaternary" },
];

const cards = [
  {
    title: "The Vision",
    description: "Dedicated to building intelligent, fast, and reliable digital products while staying ahead with the latest AI innovations.",
    icon: Palette,
    color: "bg-secondary",
    decoration: "circle"
  },
  {
    title: "The Craft",
    description: "Expertise in Frontend Architecture and UI/UX using modern tools like Next.js, React, and TypeScript.",
    icon: Cpu,
    color: "bg-accent",
    decoration: "square"
  },
  {
    title: "The Goal",
    description: "Creating seamless user experiences that combine robust engineering with delightful design patterns.",
    icon: Rocket,
    color: "bg-quaternary",
    decoration: "triangle"
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full dot-grid opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-muted border-2 border-foreground px-4 py-1 rounded-full hard-shadow-active mb-6">
              <User size={16} />
              <span className="font-display font-black text-xs uppercase tracking-widest">The Background</span>
            </div>
            <h2 className="font-display font-extrabold text-6xl md:text-8xl mb-8 tracking-tighter">
              A story of <span className="text-secondary italic">pixels</span> & <span className="text-accent underline decoration-8 decoration-tertiary/30">logic</span>.
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm Divyanshu, a developer who believes that software should be as 
              expressive as it is efficient. I bridge the gap between design and 
              performance with a playful touch.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.15}>
              <motion.div 
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
                className="group relative bg-white border-4 border-foreground p-10 rounded-[40px] hard-shadow-hover bounce-transition h-full"
              >
                {/* Icon Container */}
                <div className={`w-20 h-20 ${card.color} border-4 border-foreground rounded-2xl flex items-center justify-center hard-shadow-active mb-8 group-hover:rotate-6 transition-transform relative`}>
                  <card.icon size={40} className="text-white" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-3 -right-3"
                  >
                    <Sparkles size={20} className="text-tertiary fill-tertiary" />
                  </motion.div>
                </div>
                
                <h3 className="font-display font-black text-3xl mb-4 uppercase tracking-tighter">{card.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Geometric Decoration in Card */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  {card.decoration === "circle" && <div className="w-12 h-12 rounded-full border-4 border-foreground" />}
                  {card.decoration === "square" && <div className="w-12 h-12 border-4 border-foreground rotate-45" />}
                  {card.decoration === "triangle" && (
                    <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[40px] border-b-foreground" />
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section with Pop-in effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.5 + index * 0.1}>
              <div className="relative group">
                <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 rounded-3xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="bg-white border-4 border-foreground p-8 rounded-3xl text-center">
                  <motion.div 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="font-display font-black text-5xl md:text-6xl mb-2 text-foreground"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="font-display font-bold text-xs text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Floating Squiggle */}
      <div className="absolute top-1/4 -right-12 w-48 h-48 opacity-10 -z-10 rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
           <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="6" />
        </svg>
      </div>
    </section>
  );
}
