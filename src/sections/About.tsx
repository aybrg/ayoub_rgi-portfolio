import { motion, Variants } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Zap } from "lucide-react";

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number]
      },
    },
  };

  return (
    <section id="about" className="relative py-32 z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#140174] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-[var(--neon)] font-mono text-sm tracking-wider uppercase mb-4"
        >
          01 — About
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-16"
        >
          The Engineer Behind The Code
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an engineering student in my <span className="text-white font-medium">4th year at EMSI (3IIR program)</span>, passionate about designing modern, performant, and conversion-oriented websites.
            </p>
            <p>
              With practical experience both as a freelancer on Fiverr and in an enterprise environment at <span className="text-white font-medium">Union IT Services</span>, I combine Front-End development (<span className="text-white font-medium">React, Tailwind</span>) with excellent mastery of CMS (<span className="text-white font-medium">WordPress, Elementor</span>) to create ergonomic UI/UX interfaces.
            </p>
            <p>
              Autonomous, rigorous, and accustomed to modern web standards, my goal is always to write clean code and I am perfectly structured for collaboration in a hybrid format.
            </p>
          </motion.div>

          {/* Right Column: Traits/Dev Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 1 */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MonitorSmartphone className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">UI/UX & Design</h3>
              <p className="relative z-10 text-sm text-white/60">Designing modern mockups in Figma and creating fully responsive, user-centered layouts.</p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Code2 className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">Front-End & CMS</h3>
              <p className="relative z-10 text-sm text-white/60">Building custom vitrine and e-commerce sites using React.js, Tailwind CSS, and WordPress.</p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Server className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">Back-End Logic</h3>
              <p className="relative z-10 text-sm text-white/60">Developing secure business logic and maintaining platforms using PHP, Laravel, and Magento.</p>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Zap className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">Performance & SEO</h3>
              <p className="relative z-10 text-sm text-white/60">Optimizing loading speed, implementing technical SEO, and securing web platforms.</p>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}