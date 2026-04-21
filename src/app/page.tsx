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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Divyanshu Chaursia',
    jobTitle: 'Frontend Architect',
    url: 'https://chaursia.in',
    sameAs: [
      'https://github.com/chaursia',
      'https://www.linkedin.com/in/divyanshuchaursia'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Frontend Web Development' // Adjust if specific college is known
    },
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Architecture', 'UI/UX Design', 'Tailwind CSS']
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
