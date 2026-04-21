"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Globe, Code, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
  {
    title: "Anime Streaming",
    category: "Web App",
    description: "A high-performance streaming platform with a modern UI and seamless user experience.",
    tags: ["Next.js", "Tailwind", "API"],
    github: "https://github.com/shubham-king/Hianime",
    demo: "https://github.com/shubham-king/Hianime",
    color: "accent",
    shadow: "hard-shadow-active",
    image: "/assets/project-1.png"
  },
  {
    title: "College Confessions",
    category: "Full Stack",
    description: "An anonymous platform for college students to share thoughts and connect securely.",
    tags: ["Firebase", "React", "Typescript"],
    github: "https://github.com/chaursia/speaksout",
    demo: "https://speaksout.vercel.app/index.html",
    color: "secondary",
    shadow: "hard-shadow-pink",
    image: "/assets/project-2.png"
  },
  {
    title: "Y2matez Tool",
    category: "Utility",
    description: "A fast and reliable YouTube video downloader tool with a clean, responsive interface.",
    tags: ["JavaScript", "APIs", "Tools"],
    github: "https://github.com/shubham-king/y2matez.buzz",
    demo: "https://github.com/shubham-king/y2matez.buzz",
    color: "quaternary",
    shadow: "hard-shadow-active",
    image: "/assets/project-3.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-secondary text-white border-2 border-foreground px-4 py-1 rounded-full hard-shadow-active mb-6">
              <Layers size={16} />
              <span className="font-display font-black text-xs uppercase tracking-widest text-white">The Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-6xl md:text-8xl tracking-tighter">
              Selected <span className="text-secondary italic">Works</span>.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="max-w-md">
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">
              Every project is a chance to push the boundaries of 
              <span className="text-foreground font-bold italic"> code </span> and 
              <span className="text-foreground font-bold italic"> aesthetics</span>.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div 
                whileHover={{ y: -8 }}
                className={`group relative h-full bg-white border-4 border-foreground rounded-[40px] p-8 md:p-12 ${project.shadow} bounce-transition`}
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                  <div>
                    <div className={`inline-block text-${project.color} font-display font-black text-xs uppercase tracking-widest mb-2 px-3 py-1 bg-${project.color}/5 border border-${project.color}/20 rounded-full`}>
                      {project.category}
                    </div>
                    <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="w-14 h-14 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-muted hard-shadow-active transition-all active:translate-y-1"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      className="w-14 h-14 bg-foreground text-white border-2 border-foreground rounded-full flex items-center justify-center hover:bg-accent hard-shadow-active transition-all active:translate-y-1"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                {/* Project Description */}
                <p className="font-sans text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                {/* Project Image Preview (Stylized) */}
                <div className="relative aspect-[16/9] bg-muted rounded-3xl overflow-hidden border-2 border-foreground mb-10 group-hover:border-accent transition-colors">
                   <div className="absolute inset-0 dot-grid opacity-10" />
                   <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                   {/* Placeholder for project image or just a cool icon */}
                   <div className="w-full h-full flex items-center justify-center">
                      <Code size={80} className="text-foreground/10 group-hover:text-accent/20 transition-colors" />
                   </div>
                   
                   {/* "View Detail" Button on Hover */}
                   <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center">
                      <Sparkles size={40} className="mb-4" />
                      <div className="font-display font-black text-2xl uppercase italic mb-2">View Live Project</div>
                      <div className="flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest">
                         Click to explore <ArrowRight size={16} />
                      </div>
                   </div>
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-white px-5 py-2 rounded-full border-2 border-foreground text-sm font-display font-black uppercase tracking-tight group-hover:bg-tertiary transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-32 text-center">
          <ScrollReveal>
            <button className="group relative inline-flex items-center gap-4 bg-tertiary px-12 py-6 rounded-full border-4 border-foreground font-display font-black text-2xl hard-shadow-hover hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#1E293B] transition-all">
              <span>See more experiments</span>
              <div className="bg-white rounded-full p-2 group-hover:rotate-45 transition-transform">
                <Globe size={32} />
              </div>
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
