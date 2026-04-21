import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Each component now handles its own internal spacing and reveal logic */}
      <Hero />
      
      <About />
      
      <Experience />
      
      <Projects />
      
      <SocialLinks />
      
      <Contact />

      <Footer />
    </main>
  );
}
