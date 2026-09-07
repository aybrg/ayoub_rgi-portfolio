import { motion, Variants } from "framer-motion";
import { Code2, Database, Terminal, Layers } from "lucide-react";

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
          01 — Academic & Technical Background
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-16"
        >
          The Engineering Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an engineering student in the <span className="text-white font-medium">3IIR program at EMSI</span>, currently advancing through the core engineering cycles. My academic journey is built on a rigorous progression from system fundamentals to advanced software architecture.
            </p>
            <p>
              During my initial engineering semesters , I established a strong foundation in <span className="text-white font-medium">Object-Oriented Programming (C++, Python)</span>, algorithmic logic, and relational database administration, writing complex procedures in T-SQL and PL/SQL. I also mastered OS fundamentals through Linux shell scripting.
            </p>
            <p>
              Moving into the advanced cycles, my focus shifted towards full-stack engineering and system design. I architect scalable applications using <span className="text-white font-medium">React, Laravel, and Django</span>, model complex systems via UML, and actively explore how AI and Machine Learning transform modern engineering workflows.
            </p>
          </motion.div>

          {/* Right Column: S5-S8 Curriculum Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 1: OOP & Algo (S5/S6 focus) */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Code2 className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">Core Programming</h3>
              <p className="relative z-10 text-sm text-white/60">Mastering Object-Oriented paradigms, algorithms, and data structures using C++ and Python.</p>
            </div>

            {/* Card 2: Databases (S5/S6 focus) */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Database className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">Database Architecture</h3>
              <p className="relative z-10 text-sm text-white/60">Designing relational schemas and writing advanced T-SQL/PL/SQL procedures on SQL Server.</p>
            </div>

            {/* Card 3: Web Architectures (S7/S8 focus) */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Layers className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">System Engineering</h3>
              <p className="relative z-10 text-sm text-white/60">Modeling via UML diagrams and building full-stack applications with React, Laravel, and Django.</p>
            </div>

            {/* Card 4: Systems & AI (S7/S8 focus) */}
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(0,255,8,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Terminal className="relative z-10 size-8 text-[var(--neon)] mb-4" />
              <h3 className="relative z-10 text-white font-medium mb-2">Systems & AI</h3>
              <p className="relative z-10 text-sm text-white/60">Navigating Linux shell scripting (Awk) and integrating machine learning concepts into workflows.</p>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}