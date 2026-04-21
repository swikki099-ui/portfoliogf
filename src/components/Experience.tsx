"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  GitBranch, 
  Layout, 
  Settings2, 
  Layers, 
  Cpu, 
  Briefcase,
  Star,
  Check
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const skills = [
  { name: "HTML", icon: Layout, color: "text-orange-500", bg: "bg-orange-50", category: "Core" },
  { name: "CSS", icon: Layers, color: "text-blue-500", bg: "bg-blue-50", category: "Core" },
  { name: "JS/TS", icon: Code2, color: "text-yellow-500", bg: "bg-yellow-50", category: "Core" },
  { name: "Next JS", icon: Settings2, color: "text-green-600", bg: "bg-green-50", category: "Framework" },
  { name: "React", icon: Cpu, color: "text-sky-500", bg: "bg-sky-50", category: "Framework" },
  { name: "SQL", icon: Database, color: "text-indigo-500", bg: "bg-indigo-50", category: "Database" },
  { name: "MongoDB", icon: Database, color: "text-emerald-500", bg: "bg-emerald-50", category: "Database" },
  { name: "Git", icon: GitBranch, color: "text-orange-600", bg: "bg-orange-50", category: "Tools" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-tertiary/5 overflow-hidden">
      {/* Background Dot Pattern (Accent color) */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Skills Arsenal */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-accent text-white border-2 border-foreground px-4 py-1 rounded-full hard-shadow-active mb-6">
                <Briefcase size={16} />
                <span className="font-display font-black text-xs uppercase tracking-widest">Skill Arsenal</span>
              </div>
              <h2 className="font-display font-extrabold text-5xl md:text-7xl mb-12 tracking-tighter">
                Tools of <br /> the <span className="text-accent underline decoration-8 decoration-accent/20">Trade</span>.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 0.05}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="group bg-white border-2 border-foreground p-6 rounded-3xl hard-shadow-hover bounce-transition relative overflow-hidden h-full"
                  >
                    {/* Category Label (Glass style) */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-muted border border-foreground/10 rounded-full text-[8px] font-black uppercase tracking-widest text-muted-foreground">
                      {skill.category}
                    </div>

                    <div className={`w-14 h-14 ${skill.bg} border-2 border-foreground rounded-2xl flex items-center justify-center mb-4 hard-shadow-active group-hover:bg-foreground group-hover:text-white transition-colors`}>
                      <skill.icon size={28} className={skill.color + " group-hover:text-white"} />
                    </div>
                    <span className="font-display font-black text-xl uppercase tracking-tighter">{skill.name}</span>
                    
                    {/* Small Checkmark */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 bg-quaternary border-2 border-foreground rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Side: Highlights / Timeline Card */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.4} type="slide">
              <div className="relative">
                {/* Decoration under card */}
                <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-[50px] -z-10" />
                
                <div className="bg-white border-4 border-foreground p-12 rounded-[50px] h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-tertiary border-4 border-foreground rounded-full flex items-center justify-center hard-shadow-active mb-8 animate-bounce">
                      <Star size={32} fill="white" className="text-white" />
                    </div>
                    
                    <h3 className="font-display font-black text-4xl mb-6 tracking-tighter uppercase italic">
                      High Impact <br/> Engineering
                    </h3>
                    
                    <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
                      With <span className="text-foreground font-bold italic">3+ years</span> of professional experience, 
                      I've built systems that serve thousands of users, focusing on 
                      accessibility, speed, and interactive delight.
                    </p>

                    <ul className="space-y-4">
                      {[
                        "Modern UI/UX Implementation",
                        "Frontend Architecture Design",
                        "Performance Optimization",
                        "Interactive Animations"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-quaternary border-2 border-foreground rounded-full flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-white" />
                          </div>
                          <span className="font-display font-bold text-sm uppercase tracking-wide">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12 p-6 bg-muted border-2 border-dashed border-foreground rounded-3xl">
                     <div className="flex items-center gap-4">
                        <div className="font-display font-black text-4xl text-accent">3+</div>
                        <div className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground leading-tight">
                           Years of <br/> Crafting Excellence
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
