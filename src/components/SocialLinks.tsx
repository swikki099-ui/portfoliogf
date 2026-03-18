"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send as Telegram,
  Code2 as LeetCode,
  ExternalLink
} from "lucide-react";
import AnimatedIcon from "@/components/ui/animated-icon";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/divyanshuchaursia",
    color: "group-hover:text-blue-600",
    bg: "group-hover:bg-blue-50",
    label: "Professional",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/chaursia",
    color: "group-hover:text-slate-900",
    bg: "group-hover:bg-slate-100",
    label: "Full Code",
  },
  {
    name: "LeetCode",
    icon: LeetCode,
    href: "https://leetcode.com/u/divyanshuchaursia/",
    color: "group-hover:text-orange-500",
    bg: "group-hover:bg-orange-50",
    label: "Algorithm",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/chaursiadivyanshu",
    color: "group-hover:text-pink-600",
    bg: "group-hover:bg-pink-50",
    label: "Life",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-50",
    label: "X",
  },
  {
    name: "Telegram",
    icon: Telegram,
    href: "https://t.me/divyanshuchaursia",
    color: "group-hover:text-sky-500",
    bg: "group-hover:bg-sky-50",
    label: "Chat",
  },
];

export default function SocialLinks() {
  return (
    <section id="social" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 font-display mb-6 tracking-tight"
          >
            Digital <span className="text-indigo-600">Footprint.</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Find me where I share code, talk about tech, or document my journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${social.bg} ${social.color} mb-6 relative z-10`}>
                <AnimatedIcon icon={social.icon} size={28} animate="float" />
              </div>

              <div className="relative z-10">
                <span className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">{social.label}</span>
                <span className="block text-lg font-black text-slate-900">{social.name}</span>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                <ExternalLink size={14} className="text-slate-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
