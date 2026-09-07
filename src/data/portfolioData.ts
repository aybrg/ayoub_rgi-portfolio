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
  image?: string;
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
    slug: "librax-platform",
    title: "LibraX – Digital Resource & Automation Platform",
    type: "Backend Architecture & Task Queues",
    tech: [
      "Django",
      "Python",
      "Celery",
      "Redis",
      "MySQL"
    ],
    description:
      "A high-performance digital resource management system built for my academic soutenance, utilizing distributed task queues to handle heavy background processing.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "Traditional resource platforms suffer from synchronous blocking during heavy operations—such as sending bulk email notifications for due dates, generating PDF reports, or processing large datasets—which freezes the user interface.",
      solution:
        "Decoupled resource-intensive tasks from the main request-response cycle. Implemented a distributed task queue to handle automated reminders and data processing asynchronously, ensuring a zero-latency, seamless user experience.",
      architecture:
        "Built on a robust Python/Django core with optimized ORM queries. Redis acts as both a rapid cache and a message broker for Celery workers, while MySQL ensures ACID-compliant relational data management."
    },
    image: "/Capture d'écran 2026-08-31 194645.png",
  },
  {
    slug: "boardsland-platform",
    title: "BoardsLand – Custom Skateboard & Art Marketplace",
    type: "Full-Stack E-commerce & Marketplace",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Laravel",
      "MySQL",
    ],
    description:
      "A modern e-commerce and marketplace platform dedicated to custom skateboards and independent artists with dynamic pricing and real-time customization.",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem:
        "Bridging the gap between urban street culture and digital art required a scalable platform where users could customize board dimensions while artists could safely sell exclusive artworks.",
      solution:
        "Developed a dual-role ecosystem for shoppers and artists, featuring a custom commission engine, dynamic pricing calculations based on board dimensions, and stringent Role-Based Access Control.",
      architecture:
        "React.js and Vite frontend with Framer Motion UI effects. Laravel (PHP 8.x) backend exposing a REST API secured by Sanctum, using MySQL and local/cloud storage for base64 design uploads.",
    },
    image: "/boardsland.png",
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
    image: "/headless-ecommerce-mockup.png",
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
    image: "/whatsapp-chatbot-mockup.png",
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
