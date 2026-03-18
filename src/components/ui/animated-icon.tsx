"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  animate?: "pulse" | "float" | "spin" | "none";
}

export default function AnimatedIcon({
  icon: Icon,
  size = 24,
  className,
  animate = "float",
}: AnimatedIconProps) {
  const animations: any = {
    float: {
      y: [0, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    spin: {
      rotate: [0, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
    none: {},
  };

  return (
    <motion.div
      animate={animations[animate]}
      className={cn("flex items-center justify-center", className)}
    >
      <Icon size={size} />
    </motion.div>
  );
}
