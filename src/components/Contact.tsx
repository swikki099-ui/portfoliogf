"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Linkedin, MapPin, MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map IDs to formData keys
    const key = id === "name-input" ? "name" : id === "email-input" ? "email" : "message";
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-tertiary/10">
      <div className="absolute inset-0 dot-grid opacity-5" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal type="slide">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent text-white border-2 border-foreground px-4 py-1 rounded-full hard-shadow-active mb-6">
                <MessageSquare size={16} />
                <span className="font-bold text-sm uppercase">Say Hello</span>
              </div>
              
              <h2 className="font-display font-extrabold text-6xl md:text-8xl mb-8 leading-none">
                Let's <span className="text-accent underline decoration-8 decoration-secondary">Connect</span>
              </h2>
              
              <p className="font-sans text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas or original web experiences.
              </p>

              <div className="space-y-6">
                <a href="mailto:divyanshuchaursia@outlook.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white border-2 border-foreground rounded-xl flex items-center justify-center hard-shadow-active group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-muted-foreground uppercase">Email</div>
                    <div className="font-display font-bold text-xl">divyanshuchaursia@outlook.com</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/divyanshuchaursia" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white border-2 border-foreground rounded-xl flex items-center justify-center hard-shadow-active group-hover:bg-quaternary group-hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-muted-foreground uppercase">LinkedIn</div>
                    <div className="font-display font-bold text-xl">Divyanshu Chaursia</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white border-2 border-foreground rounded-xl flex items-center justify-center hard-shadow-active group-hover:bg-tertiary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-muted-foreground uppercase">Focus</div>
                    <div className="font-display font-bold text-xl">Frontend Architecture</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal type="pop" delay={0.2}>
            <div className="bg-white border-4 border-foreground p-10 rounded-[40px] hard-shadow-pink relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary -mr-8 -mt-8 rotate-45 border-b-4 border-foreground" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name-input" className="block font-display font-black text-lg mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input 
                    id="name-input"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white border-2 border-foreground p-4 rounded-xl font-sans focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block font-display font-black text-lg mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input 
                    id="email-input"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white border-2 border-foreground p-4 rounded-xl font-sans focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block font-display font-black text-lg mb-2 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea 
                    id="message-input"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white border-2 border-foreground p-4 rounded-xl font-sans focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-5 rounded-2xl border-2 border-foreground font-display font-black text-2xl flex items-center justify-center gap-3 transition-all ${
                    status === "loading" 
                      ? "bg-muted cursor-not-allowed opacity-70" 
                      : "bg-accent text-white hard-shadow-hover bounce-transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1E293B]"
                  }`}
                >
                  {status === "loading" ? (
                    <>Sending... <Loader2 className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={24} /></>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-quaternary font-bold justify-center"
                    >
                      <CheckCircle size={20} />
                      Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-secondary font-bold justify-center"
                    >
                      <AlertCircle size={20} />
                      {errorMessage || "Failed to send message."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
