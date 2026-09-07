import { motion, Variants } from "framer-motion";
import { Mail, Phone, Github, Globe, Linkedin, MessageCircle } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";

export function Contact() {
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

    const contacts = [
        {
            icon: <MessageCircle className="size-6" />,
            label: "WhatsApp",
            value: "+212 68 02 61 302",
            href: "https://wa.me/212680261302"
        },
        {
            icon: <Mail className="size-6" />,
            label: "Email",
            value: "ayoubrrrougui@gmail.com",
            href: "mailto:ayoubrrrougui@gmail.com"
        },
        {
            icon: <Github className="size-6" />,
            label: "GitHub",
            value: "aybrg",
            href: "https://github.com/aybrg"
        },
        {
            icon: <Linkedin className="size-6" />,
            label: "LinkedIn",
            value: "Ayoub Rougui",
            href: "https://www.linkedin.com/in/ayoub-rougui-92a532310/"
        }
    ];

    return (
        <section id="contact" className="relative py-32 z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-[var(--neon)] font-mono text-sm tracking-wider uppercase mb-4 text-center"
                >
                    05 — Contact
                </motion.p>
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-8 text-center"
                >
                    Let's Build Something
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg"
                >
                    I am currently open to new opportunities. Que vous ayez une question, un projet en tête ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            variants={itemVariants}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 p-4 rounded-full bg-white/5 border border-white/10 text-[var(--neon)] mb-6 group-hover:scale-110 group-hover:bg-[var(--neon)]/10 transition-transform duration-500">
                                {contact.icon}
                            </div>
                            <h3 className="relative z-10 text-xl font-semibold text-white mb-2">{contact.label}</h3>
                            <p className="relative z-10 text-muted-foreground group-hover:text-white transition-colors duration-300 break-all w-full">
                                {contact.value}
                            </p>
                        </motion.a>
                    ))}
                </div>

                <motion.div variants={itemVariants} className="flex justify-center">
                    <MagneticButton>
                        <a href="mailto:ayoubrrrougui@gmail.com" className="inline-block">
                            Say Hello
                        </a>
                    </MagneticButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
