"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import AnimatedIcon from "@/components/ui/animated-icon";

const stats = [
  {
    icon: Briefcase,
    title: "Experience",
    value: "3+ years",
    sub: "Frontend Development",
    color: "indigo",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech",
    sub: "Bachelors Degree",
    color: "violet",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {/* Header */}
          <div className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              About Me
            </h2>
            <p className="text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-8">
              Passion for building <span className="text-indigo-600">exceptional</span> digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Context Text */}
            <div className="text-sm prose prose-sm dark:prose-invert">
              <p className="text-slate-600 leading-relaxed mb-4">
                I'm a web developer focused on building fast, reliable, and clean digital products. I care about execution
                more than ideas, and I approach every project with a clear goal: ship something that actually works.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                I work across Frontend design, UI/UX decisions, and backend logic where necessary, and I constantly strive to
                improve my skills and stay up-to-date with the latest trends in the industry.
              </p>
              
              <div className="flex gap-4 mt-8">
                {stats.map((stat) => (
                  <div key={stat.title} className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <AnimatedIcon icon={stat.icon} size={20} className="text-slate-900" animate="float" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.title}</span>
                      <span className="text-lg font-bold text-slate-900">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image (Secondary) */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-indigo-100"
              >
                <Image
                  src="/assets/about-pic.png"
                  alt="About Divyanshu"
                  width={500}
                  height={500}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              {/* Decorative Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-xl border border-slate-50 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-xs font-bold text-slate-800">Problem Solver</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
}
