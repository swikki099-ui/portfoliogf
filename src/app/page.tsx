import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero usually has its own entrance animation, but we can layer it */}
      <Hero />
      
      <div className="relative z-10 bg-white">
        <ScrollReveal direction="up" distance={80}>
          <About />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={80} delay={0.1}>
          <Experience />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={80} delay={0.1}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={80} delay={0.1}>
          <SocialLinks />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={80} delay={0.1}>
          <Contact />
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}
