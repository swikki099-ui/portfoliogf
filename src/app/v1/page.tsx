import React from "react";
import Navbar from "@/components/v1/Navbar";
import Hero from "@/components/v1/Hero";
import About from "@/components/v1/About";
import Experience from "@/components/v1/Experience";
import Projects from "@/components/v1/Projects";
import Contact from "@/components/v1/Contact";
import SocialLinks from "@/components/v1/SocialLinks";
import Footer from "@/components/v1/Footer";
import { ScrollReveal } from "@/components/v1/ui/scroll-reveal";

export default function HomeV1() {
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
