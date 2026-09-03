import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WordReveal } from "@/components/WordReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { profile } from "@/data/portfolioData";

export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.35);
  const gx = useSpring(mx, { stiffness: 60, damping: 20 });
  const gy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduced, mx, my]);

  const glowX = useTransform(gx, (v) => `${v * 100}%`);
  const glowY = useTransform(gy, (v) => `${v * 100}%`);
  const mouseGlow = useMotionTemplate`radial-gradient(650px circle at ${glowX} ${glowY}, color-mix(in oklab, var(--nebula) 55%, transparent), transparent 62%)`;

  const orbTransition = { duration: 16, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36"
    >
      {/* Atmospheric nebula orbs (#140174) + accent halo (#00FF08) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-10%] size-[42rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--nebula) 90%, transparent) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={reduced ? {} : { x: [0, 70, -30, 0], y: [0, 50, -20, 0], opacity: [0.7, 1, 0.75, 0.7] }}
        transition={orbTransition}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-[-15%] size-[36rem] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--nebula) 80%, transparent) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={reduced ? {} : { x: [0, -60, 20, 0], y: [0, -40, 30, 0], opacity: [0.6, 0.95, 0.65, 0.6] }}
        transition={{ ...orbTransition, duration: 20 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-[18%] size-64 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--neon) 22%, transparent) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={reduced ? {} : { scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mouse-following radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: mouseGlow }}
      />

      {/* Grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* TOP ROW: Text + Image */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Left Side: Name and Title */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-white/[0.02] px-4 py-2 font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-md"
            >
              <span className="size-1.5 rounded-full bg-neon shadow-[0_0_12px_var(--neon)]" />
              Available for freelance work
            </motion.p>

            <h1 className="font-display font-bold leading-[0.86] tracking-[-0.04em]">
              <WordReveal
                text="AYOUB ROUGUI"
                as="span"
                className="block text-[clamp(2.5rem,7vw,8rem)] text-foreground"
              />
              <WordReveal
                text="FULL-STACK DEVELOPER"
                as="span"
                delay={0.25}
                className="mt-4 block text-[clamp(1.4rem,3.5vw,3.5rem)] text-muted-foreground"
              />
            </h1>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 100, damping: 20 }}
            className="group relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
          >
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
            {/* Neon tint on hover */}
            <div className="absolute inset-0 z-20 bg-[var(--neon)] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-10" />

            <img
              src="/profile.png"
              alt="Ayoub Rougui"
              className="h-auto w-full object-contain transition-all duration-700 group-hover:scale-105"
            />
          </motion.div>

        </div>

        {/* BOTTOM ROW: Bio and Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-12 flex max-w-2xl flex-col gap-8"
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.bio}
          </p>
          <p className="font-display text-xs uppercase leading-relaxed tracking-[0.22em] text-foreground/70">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, type: "spring", stiffness: 120, damping: 20 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">View My Work</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Let&apos;s Talk
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-neon"
        >
          <motion.span
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown className="size-4" />
          </motion.span>
          Scroll
        </motion.a>
      </div>
    </section>
  );
}