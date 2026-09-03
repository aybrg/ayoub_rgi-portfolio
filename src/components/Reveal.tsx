import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** whileInView fade+rise wrapper for scroll-triggered section content. */
export function Reveal({ children, className, delay = 0, y = 28 }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduced
          ? { duration: 0.25, delay }
          : { type: "spring", stiffness: 120, damping: 22, mass: 0.8, delay }
      }
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
