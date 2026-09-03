import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { navLinks } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

/** Floating glassmorphic navbar with scroll blur, active indicator and mobile sheet. */
export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  /* Keep --nav-offset in sync with the real navbar height at every viewport. */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const sync = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-offset", `${Math.round(h + 16)}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-6"
    >
      <motion.nav
        aria-label="Primary"
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.15 }}
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 md:px-7",
          scrolled
            ? "border-border bg-background/60 shadow-[0_18px_60px_-30px_color-mix(in_oklab,var(--nebula)_90%,transparent)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          to="/"
          className="flex items-center group transition-transform hover:scale-105"
        >
          <img
            src="/logo.png"
            alt="Ayoub Rougui Logo"
            className="h-9 w-9 rounded-full object-cover border border-white/20 group-hover:border-neon transition-all duration-300"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors",
                    isActive ? "text-neon" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-neon/40 bg-neon/10"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-neon px-5 py-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-neon-foreground transition-shadow hover:shadow-[0_0_30px_-5px_color-mix(in_oklab,var(--neon)_75%,transparent)] md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-neon hover:text-neon md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <motion.ul
              className="flex h-full flex-col items-start justify-center gap-2 px-10"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  className="w-full"
                  variants={{
                    hidden: reduced ? { opacity: 0 } : { opacity: 0, x: -24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { type: "spring", stiffness: 200, damping: 22 },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-b border-border/60 py-4 font-display text-3xl font-bold tracking-tight transition-colors",
                      active === link.href.slice(1)
                        ? "text-neon"
                        : "text-foreground hover:text-neon",
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
