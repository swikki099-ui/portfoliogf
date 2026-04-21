"use client";

import React from "react";
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 border-t-4 border-foreground bg-white relative overflow-hidden">
      {/* Decoration: Marquee Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-secondary py-2 border-b-4 border-foreground">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] gap-10">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display font-black text-xl text-white uppercase tracking-tighter">
              Let's create something together • Open for collaboration • Design meets code
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="font-display font-black text-4xl mb-4">DIVYANSHU</div>
            <p className="font-sans text-muted-foreground max-w-sm">
              Creating digital joy through bold design and robust engineering. 
              Based in the Milky Way, working globally.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/chaursia", color: "hover:bg-foreground" },
                { icon: Twitter, href: "#", color: "hover:bg-[#1DA1F2]" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/divyanshuchaursia", color: "hover:bg-[#0077B5]" },
                { icon: Instagram, href: "#", color: "hover:bg-[#E4405F]" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-12 h-12 bg-white border-2 border-foreground rounded-full flex items-center justify-center hard-shadow-active transition-all hover:-translate-y-1 ${social.color} hover:text-white`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 font-display font-bold text-lg hover:text-accent transition-colors"
            >
              Back to top
              <div className="w-10 h-10 bg-tertiary border-2 border-foreground rounded-full flex items-center justify-center hard-shadow-active group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={20} />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t-2 border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
          <div>© 2026 DIVYANSHU CHAURSIA</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="/v1" className="bg-foreground text-white px-3 py-1 rounded-full hard-shadow-active hover:bg-accent transition-colors">Switch to V1</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
