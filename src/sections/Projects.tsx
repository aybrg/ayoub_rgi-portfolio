import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolioData";

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#140174] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[#00FF08] font-mono text-sm tracking-wider uppercase mb-4"
        >
          03 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Selected Work
        </motion.h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Project Image Container */}
            <div className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#00FF08]/50 transition-colors duration-500 shadow-2xl group-hover:shadow-[0_0_40px_-15px_rgba(0,255,8,0.3)] ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#140174]/40 to-transparent z-10 mix-blend-overlay" />
              
              {/* Replace this div with an actual <img src={project.image} /> when you have screenshots */}
              <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-700 ease-out">
                <span className="text-2xl font-mono">{project.title} Preview</span>
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:col-span-5 flex flex-col items-start z-20">
              <span className="text-white/40 font-mono text-sm mb-4">
                {String(index + 1).padStart(2, '0')} — {project.type}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-[#00FF08] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wide bg-white/5 text-white/80 border border-white/10 group-hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="inline-flex items-center gap-3 text-white font-medium hover:text-[#00FF08] transition-colors"
                >
                  View Case Study
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>

                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white/50 hover:text-white transition-colors text-sm font-mono"
                  >
                    Live Site ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white/50 hover:text-white transition-colors text-sm font-mono"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}