import { motion, Variants } from "framer-motion";
import {
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaLaravel,
  FaPhp, FaPython, FaJava, FaGithub, FaDocker, FaFigma, FaRobot
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiTailwindcss, SiSymfony,
  SiSpringboot, SiDjango, SiMysql, SiPostgresql, SiN8N
} from "react-icons/si";
import { TbTerminal, TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Architecture",
    skills: [
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Symfony", icon: SiSymfony, color: "#FFFFFF" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Django", icon: SiDjango, color: "#092E20" }, // Wla #44B78B bach yban f dark mode
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ],
  },
  {
    title: "Database, Tools & Automation",
    skills: [
      { name: "n8n", icon: SiN8N, color: "#FF6D5D" },
      { name: "Automation", icon: FaRobot, color: "#00FF08" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "REST APIs", icon: TbApi, color: "#4AF626" },
      { name: "Git & GitHub", icon: FaGithub, color: "#F05032" },
      { name: "SSH", icon: TbTerminal, color: "#FFFFFF" },
    ],
  },
];

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number]
      },
    },
  };

  return (
    <section id="skills" className="relative py-32 z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#140174] rounded-full blur-[150px] opacity-20 pointer-events-none" />

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
          02 — Skills
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-16"
        >
          Stack & Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-6">
              <h3 className="text-xl font-medium text-white border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono tracking-wide bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      className="text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}