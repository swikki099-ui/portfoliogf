"use client";

import React from "react";
import { Github, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const socialLinks = [
  { name: "Github", icon: Github, href: "https://github.com/chaursia", color: "bg-accent" },
  { name: "Linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/divyanshuchaursia", color: "bg-tertiary" },
  // Adding placeholders for others or keeping it focused
  { name: "Twitter", icon: Twitter, href: "#", color: "bg-secondary" },
  { name: "Instagram", icon: Instagram, href: "#", color: "bg-quaternary" },
];

export default function SocialLinks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-white border-2 border-foreground px-4 py-1 rounded-full hard-shadow-active mb-8">
            <MessageCircle size={16} />
            <span className="font-bold text-sm uppercase">Stay Connected</span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl mb-12">
            Find Me <span className="text-accent italic">Online</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <ScrollReveal key={social.name} delay={index * 0.1}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4"
              >
                <div className={`w-24 h-24 ${social.color} border-4 border-foreground rounded-[30px] flex items-center justify-center hard-shadow bounce-transition group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[12px_12px_0px_0px_#1E293B] group-hover:rotate-6`}>
                  <social.icon size={40} className="text-white" />
                </div>
                <span className="font-display font-black text-xl uppercase tracking-tighter group-hover:text-accent transition-colors">
                  {social.name}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Decorative Dots */}
      <div className="absolute bottom-0 right-0 w-32 h-32 dot-grid opacity-20 -z-10" />
      <div className="absolute top-0 left-0 w-32 h-32 dot-grid opacity-20 -z-10" />
    </section>
  );
}
