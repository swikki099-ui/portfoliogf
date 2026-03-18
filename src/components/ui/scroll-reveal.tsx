"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  distance?: number;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
  distance = 50,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const directionOffsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const currentOffset = directionOffsets[direction];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        initial={{
          opacity: 0,
          ...currentOffset,
          filter: "blur(10px)",
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }
            : {
                opacity: 0,
                ...currentOffset,
                filter: "blur(10px)",
              }
        }
        transition={{
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
