"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import AnimatedIcon from "@/components/v1/ui/animated-icon";

const contacts = [
  {
    icon: Mail,
    label: "Direct Email",
    value: "divyanshuchaursia@outlook.com",
    href: "mailto:divyanshuchaursia@outlook.com",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    icon: Linkedin,
    label: "Professional Profile",
    value: "Divyanshu chaursia",
    href: "https://www.linkedin.com/in/divyanshuchaursia",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl font-black text-slate-900 font-display mb-8 tracking-tighter"
            >
              Let's build <br /> <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">together.</span>
            </motion.h2>
            <p className="text-slate-500 text-lg mb-10 max-w-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas or original web experiences.
            </p>

            <div className="flex flex-col gap-4">
              {contacts.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50/50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform ${contact.color}`}>
                    <AnimatedIcon icon={contact.icon} size={24} animate="float" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{contact.label}</span>
                    <span className="text-lg font-bold text-slate-900 truncate max-w-[200px] md:max-w-full">{contact.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[3rem] bg-slate-900 text-white relative flex flex-col items-center text-center group shadow-2xl shadow-indigo-100/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-50" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/10 scale-125 relative">
                {/* Corrected centering for the icon */}
                <div className="flex items-center justify-center w-full h-full">
                  <AnimatedIcon icon={Send} size={32} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" animate="none" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Start a Conversation</h3>
              <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                Looking for a frontend developer who cares about every pixel? You've found him.
              </p>
              <a
                href="mailto:divyanshuchaursia@outlook.com"
                className="inline-block px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-sm tracking-tight hover:scale-110 transition-transform active:scale-95 shadow-xl shadow-white/10"
              >
                Send Message
              </a>
            </div>
            {/* Background design */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
