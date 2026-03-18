"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Glass Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full z-[10000] pointer-events-none mix-blend-difference hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      
      {/* Dynamic Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full z-[10001] pointer-events-none hidden md:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -4,
          top: -4,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
}
