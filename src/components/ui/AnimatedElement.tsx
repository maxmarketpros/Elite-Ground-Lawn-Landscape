"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fade" | "slideUp" | "scale" | "translateBadge";

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  },
  translateBadge: {
    initial: { opacity: 0, x: 30, y: -30 },
    animate: { opacity: 1, x: 0, y: 0 },
  },
};

export default function AnimatedElement({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.6,
  className = "",
  y,
}: AnimatedElementProps) {
  const variant = variants[animation];
  const initial = y !== undefined ? { ...variant.initial, y } : variant.initial;

  return (
    <motion.div
      initial={initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
