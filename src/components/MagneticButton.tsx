import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "neon" | "ghost";
  className?: string;
  strength?: number;
};

/**
 * Magnetic CTA: the element eases toward the pointer inside its hit area.
 * Transform-only (GPU friendly) and inert under prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "neon",
  className,
  strength = 18,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 });

  const handleMove = (e: React.PointerEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * strength);
    y.set(((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    neon: "bg-neon text-neon-foreground shadow-[0_0_35px_-6px_color-mix(in_oklab,var(--neon)_65%,transparent)] hover:shadow-[0_0_55px_-4px_color-mix(in_oklab,var(--neon)_80%,transparent)]",
    ghost:
      "border border-border bg-white/[0.02] text-foreground backdrop-blur-md hover:border-neon hover:text-neon",
  } as const;

  const inner = <span className="relative z-10">{children}</span>;

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, willChange: "transform" }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={cn(base, variants[variant], className)}>
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={cn(base, variants[variant], className)}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
