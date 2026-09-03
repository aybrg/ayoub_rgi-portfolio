import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
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
                ease: [0.21, 0.47, 0.32, 0.98]
            },
        },
    };

    const experiences = [
        {
            role: "Développeur Web",
            company: "Union IT Services",
            location: "Casablanca (Hybride)",
            date: "En cours",
            description: [
                "Développement, maintenance et refonte d'interfaces web performantes en équipe.",
                "Refonte Plateforme E-commerce : Développement d'interfaces modernes (React Headless) et automatisation de l'intégration des catalogues produits, avec un focus sur le parcours d'achat (conversion).",
                "Application Web de Location de Voitures : Conception complète (UI/UX) et développement métier d'une plateforme de réservation fluide et responsive.",
                "Sécurisation, mise à jour des plateformes existantes et optimisation continue pour garantir une navigation fluide."
            ]
        },
        {
            role: "Développeur Web Freelance",
            company: "Fiverr",
            location: "Remote",
            date: "En cours",
            description: [
                "Conception et développement complet de sites vitrines et e-commerce sur mesure (WordPress/Elementor, React).",
                "Création de maquettes UI/UX modernes et intégration Front-End propre, responsive et optimisée.",
                "Optimisation de la vitesse des sites, du SEO technique et amélioration continue de l'expérience utilisateur.",
                "Gestion autonome des projets, respect des délais et communication client.",
                "Création de Sites Vitrines (Divers) : Utilisation avancée de WordPress et Elementor avec des widgets personnalisés (Custom CSS) pour des entreprises locales."
            ]
        }
    ];

    return (
        <section id="experience" className="relative py-32 z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
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
                    04 — Experience
                </motion.p>
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-16"
                >
                    Where I've Built
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--neon)] mb-6">
                                        <span className="flex items-center gap-1.5"><Briefcase className="size-4" /> {exp.company}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="size-4" /> {exp.location}</span>
                                        <span className="flex items-center gap-1.5"><Calendar className="size-4" /> {exp.date}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                                <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-[var(--neon)]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
