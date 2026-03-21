"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code2,
  Terminal,
  Database,
  GitBranch,
  Layout,
  Settings2,
  Layers,
  Cpu,
  Briefcase
} from "lucide-react";
import AnimatedIcon from "@/components/ui/animated-icon";

const frontendSkills = [
  { name: "HTML", icon: Layout, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "CSS", icon: Layers, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "SASS", icon: Settings2, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-500", bg: "bg-yellow-50" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Material UI", icon: Cpu, color: "text-sky-500", bg: "bg-sky-50" },
];

const backendSkills = [
  { name: "PostgreSQL", icon: Database, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Next JS", icon: Settings2, color: "text-green-600", bg: "bg-green-50" },
  { name: "MongoDB", icon: Database, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "Git", icon: GitBranch, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-black text-slate-900 font-display mb-6 tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Arsenal</span>
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            A comprehensive overview of my tech stack and the tools I use to build scalable products.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Main Bento Card - Frontend */}
          <div className="md:col-span-4 lg:col-span-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:bg-slate-100 transition-colors duration-500">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AnimatedIcon icon={Layout} className="text-indigo-600" size={32} animate="float" />
                <h3 className="text-2xl font-bold text-slate-900">Frontend Development</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group/skill"
                  >
                    <AnimatedIcon icon={skill.icon} className={cn("mb-3", skill.color)} size={24} animate="pulse" />
                    <span className="text-xs font-bold text-slate-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Bento Card - Backend */}
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-indigo-600 flex flex-col justify-between text-white overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Backend & Tools</h3>
              <div className="flex flex-col gap-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover/item:bg-white/20 transition-colors">
                      <AnimatedIcon icon={skill.icon} size={18} animate="float" />
                    </div>
                    <span className="font-semibold text-white/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="mt-10 relative z-10">
              <p className="text-sm font-medium text-indigo-100/70">Building solid foundations for modern applications.</p>
            </div>
          </div>

          {/* Experience Stat Card */}
          <div className="md:col-span-4 lg:col-span-3 p-8 rounded-3xl border-2 border-slate-50 flex items-center justify-between group hover:border-slate-100 transition-colors">
            <div className="flex flex-col">
              <span className="text-6xl font-black text-slate-900 mb-1">3+</span>
              <span className="text-lg font-bold text-slate-500 uppercase tracking-widest">Years of Experience</span>
            </div>
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
              <AnimatedIcon icon={Briefcase} size={28} animate="float" />
            </div>
          </div>

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-3 p-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex flex-col justify-center items-center text-center group cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <h4 className="text-2xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">Ready to Build?</h4>
            <p className="text-indigo-100 text-sm font-medium">Let's turn your ideas into functional products.</p>
            <div className="mt-6 flex items-center gap-2 px-6 py-3 bg-white rounded-full text-indigo-600 font-bold text-sm">
              Get in Touch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

