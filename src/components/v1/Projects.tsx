"use client";

import React from "react";
import Image from "next/image";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/v1/ui/3d-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anime Streaming Website",
    image: "/assets/project-1.png",
    github: "https://github.com/shubham-king/Hianime",
    demo: "https://github.com/shubham-king/Hianime",
    tag: "Web App",
    description: "A high-performance streaming platform with a modern UI and seamless user experience.",
  },
  {
    title: "College Confessions Platform",
    image: "/assets/project-2.png",
    github: "https://github.com/chaursia/speaksout",
    demo: "https://speaksout.vercel.app/index.html",
    tag: "Full Stack : Prototype",
    description: "An anonymous platform for college students to share thoughts and connect.",
  },
  {
    title: "Y2matez – Youtube Video",
    image: "/assets/project-3.png",
    github: "https://github.com/shubham-king/y2matez.buzz",
    demo: "https://github.com/shubham-king/y2matez.buzz",
    tag: "Tool",
    description: "A fast and reliable YouTube video downloader tool with a clean interface.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-black text-slate-900 font-display mb-6 tracking-tight"
          >
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Creations</span>
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg italic">
            "Everything is designed. Few things are designed well."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <CardContainer key={project.title} className="inter-var">
              <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-3xl p-8 border hover:border-indigo-200 transition-colors duration-500 shadow-xl shadow-slate-100">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                      alt={project.title}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-widest border border-indigo-100">
                      {project.tag}
                    </div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    Source Code →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.demo}
                    target="_blank"
                    className="px-6 py-2 rounded-xl bg-slate-900 dark:bg-white dark:text-black text-white text-xs font-bold shadow-lg hover:bg-slate-800 transition-all"
                  >
                    Live Demo
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
