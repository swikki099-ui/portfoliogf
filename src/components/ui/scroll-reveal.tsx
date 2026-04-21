"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: "pop" | "slide";
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  type = "pop",
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const variants = {
    pop: {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
    },
    slide: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
  };

  const selectedVariant = variants[type];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        initial={selectedVariant.initial}
        animate={isInView ? selectedVariant.animate : selectedVariant.initial}
        transition={{
          duration: 0.5,
          delay,
          type: "spring",
          bounce: 0.4,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
