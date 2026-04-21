"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, ChevronDown, Download, Mail } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/v1/ui/3d-card";
import { TextGenerateEffect } from "@/components/v1/ui/text-generate-effect";
import Particles from "@/components/v1/ui/particles";
import AnimatedIcon from "@/components/v1/ui/animated-icon";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Interactive Particles Background */}
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        quantity={100}
        staticity={30}
        ease={20}
      />

      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 w-full relative z-10">
        {/* Text Side - More Prominent */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Name - HUGE and Impactful */}
          <div className="relative group mb-2">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.8] font-display tracking-tighter">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                Divyanshu
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500"
              >
                Chaursia
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-xl"
          >
            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-10 leading-relaxed">
              A <span className="text-slate-900 font-bold">Frontend Developer & AI Enthusiast</span> dedicated to building intelligent, fast, and reliable digital products, staying ahead with the latest <span className="text-indigo-600 font-bold">AI innovations</span>.
            </p>
          </motion.div>

          {/* Buttons with Animated Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
          >
            <a
              href="/assets/resume-example.pdf"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all duration-300 shadow-2xl shadow-slate-200 group"
            >
              <AnimatedIcon icon={Download} size={18} animate="pulse" />
              Download CV
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-slate-200 text-slate-900 text-sm font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 group"
            >
              <AnimatedIcon icon={Mail} size={18} className="group-hover:scale-110 transition-transform" />
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons - Animated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex items-center gap-8"
          >
            <a
              href="https://www.linkedin.com/in/divyanshuchaursia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                <AnimatedIcon icon={Linkedin} size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/chaursia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-all duration-300">
                <AnimatedIcon icon={Github} size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">Github</span>
            </a>
          </motion.div>
        </div>

        {/* 3D Image side - More Balanced */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <CardContainer className="inter-var">
            <CardBody className="bg-white/40 backdrop-blur-sm relative group/card border-slate-100 w-auto sm:w-[32rem] h-auto rounded-[2.5rem] p-10 border shadow-2xl shadow-indigo-100/50 transition-all duration-500 hover:border-indigo-200">
              <CardItem translateZ="100" className="w-full relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                   <Image
                    src="/assets/chaursia-logo.png"
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                    alt="Divyanshu Chaurasia"
                    priority
                  />
                  {/* Glass overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>
              </CardItem>
              
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <CardItem translateZ="60" className="text-2xl font-black text-slate-900">
                     DC Portfolio
                  </CardItem>
                  <CardItem translateZ="50" className="text-slate-500 text-sm font-medium mt-1">
                     Frontend Architecture & UI/UX
                  </CardItem>
                </div>
                <CardItem translateZ="80">
                   <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xl">
                      <ChevronDown size={20} className="animate-bounce" />
                   </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-300 hover:text-indigo-600 transition-colors group"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase font-black">Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
