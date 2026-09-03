export type Project = {
  slug: string;
  title: string;
  type: string;
  tech: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
  };
};

export type Experience = {
  company: string;
  role: string;
};

export const profile = {
  name: "Ayoub Rougui",
  tagline: "Développeur Web & Web Designer (WordPress / React) | 4th-Year Engineering Student",
  bio: "I am an engineering student and Full-Stack Developer combining technical architecture with modern design to build scalable digital products, specializing in React, Laravel, and WordPress.",
};

export const skills: string[] = [
  "React.js",
  "Laravel",
  "PHP",
  "Tailwind CSS",
  "Symfony",
  "Django",
  "MySQL",
  "Python",
  "C++",
  "WordPress",
  "Git/GitHub",
  "UML/Mermaid.js",
  "n8n",
  "Workflow Automation",
];

export const experience: Experience[] = [
  { company: "Union IT Services", role: "Développeur Web" },
  { company: "Fiverr", role: "Développeur Web Freelance" },
];

export const projects: Project[] = [
  {
    slug: "smart-attendance-system",
    title: "Smart Attendance System (S.A.S)",
    type: "Full-Stack Web Application",
    tech: ["Laravel", "React", "Dynamic QR Codes"],
    description:
      "An automated attendance and document analysis platform utilizing dynamic QR code verification.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "Manual attendance tracking and paper document handling created fraud risk, long queues and no reliable audit trail for administrators.",
      solution:
        "A dynamic QR code engine that rotates tokens on a short interval, paired with a document analysis pipeline that validates and archives submissions automatically.",
      architecture:
        "Laravel REST API with signed, time-boxed QR tokens; React client for scanning and dashboards; MySQL for sessions, attendance records and document metadata.",
    },
  },
  {
    slug: "boardsland-platform",
    title: "BoardsLand Platform",
    type: "Full-Stack E-commerce & Artist Portal",
    tech: ["React", "Laravel", "REST API", "MySQL"],
    description:
      "A modern web platform and artist portal with secure server authentication and automated remote repository backups.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "Artists needed a self-service portal to publish and sell work, while the business needed a hardened storefront with dependable backups.",
      solution:
        "A decoupled storefront plus a role-based artist portal, with secure server authentication and scheduled automated backups to a remote repository.",
      architecture:
        "React SPA consuming a Laravel REST API, MySQL persistence, token-based auth with role guards, and cron-driven backup jobs pushing to remote storage.",
    },
  },
  {
    slug: "headless-ecommerce-redesign",
    title: "Headless E-Commerce Redesign",
    type: "E-commerce Architecture",
    tech: ["Magento 2.4.7", "React", "API Integration"],
    description:
      "Redesigned a legacy e-commerce platform using a headless architecture with automated product insertion capabilities.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "A legacy Magento storefront was slow to iterate on, hard to theme, and required manual catalog entry for every new product.",
      solution:
        "Kept Magento as the commerce backend and rebuilt the storefront as a headless React front end, adding an automated product insertion pipeline.",
      architecture:
        "Magento 2.4.7 as the commerce core exposed through its REST/GraphQL APIs, a React presentation layer, and scripted bulk product ingestion jobs.",
    },
  },
  {
    slug: "casa-creations",
    title: "Casa Creations",
    type: "SMMA Management Platform",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    description:
      "A complete platform designed to manage clients, services, freelancers, orders, and tasks for an SMMA agency.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "Agency operations were spread across spreadsheets and chat, so order status, freelancer workload and client deliverables were impossible to track.",
      solution:
        "A single operations platform modelling clients, services, freelancers, orders and tasks with clear ownership and status flows.",
      architecture:
        "Laravel MVC application with Eloquent models for each domain entity, MySQL relational schema, Bootstrap admin interface and role-scoped access.",
    },
  },
  {
    slug: "whatsapp-chatbot-automation",
    title: "WhatsApp AI Chatbot",
    type: "Workflow Automation & AI",
    tech: ["n8n", "WhatsApp Cloud API", "Node.js", "LLM Integration"],
    description:
      "An automated conversational assistant built on WhatsApp to handle customer support inquiries and streamline booking flows using n8n.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "Businesses struggle with high volumes of repetitive inquiries on WhatsApp, leading to delayed responses and lost leads.",
      solution:
        "Implemented an advanced chatbot utilizing n8n to automate conversational workflows, answer FAQs instantly via AI, and route complex questions to human agents.",
      architecture:
        "Event-driven architecture using WhatsApp Cloud API webhooks connected to n8n workflows, integrated with an LLM for intent recognition, and storing conversation states in a database.",
    },
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
