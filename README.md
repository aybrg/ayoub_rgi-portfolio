# Ayoub's Digital Canvas

Build a premium futuristic dark-only full-stack developer portfolio in React + Vite, Tailwind CSS, and Framer Motion. Start with the foundational code, ensuring a clean scalable structure: components/, sections/, pages/, data/, assets/. Create data/portfolioData.js first and make UI map from it. Include this data exactly: Name Ayoub Rougui; tagline Full-Stack Developer | 3IIR Engineering Student at EMSI | Freelance Developer; bio "I am an engineering student and Full-Stack Developer combining technical architecture with modern design to build scalable digital products. Experienced in freelance development and enterprise IT solutions."; skills React.js, Laravel, PHP, Tailwind CSS, Symfony, Django, MySQL, Python, C++, WordPress, Git/GitHub, UML/Mermaid.js; experience Union IT Services (Web Developer), Fiverr (Freelance Full-Stack Developer). Projects: Smart Attendance System (S.A.S), type Full-Stack Web Application, tech Laravel React Dynamic QR Codes, description "An automated attendance and document analysis platform utilizing dynamic QR code verification."; BoardsLand Platform, type Full-Stack E-commerce & Artist Portal, tech React Laravel REST API MySQL, description "A modern web platform and artist portal with secure server authentication and automated remote repository backups."; Headless E-Commerce Redesign, type E-commerce Architecture, tech Magento 2.4.7 React API Integration, description "Redesigned a legacy e-commerce platform using a headless architecture with automated product insertion capabilities."; Casa Creations, type SMMA Management Platform, tech Laravel PHP MySQL Bootstrap, description "A complete platform designed to manage clients, services, freelancers, orders, and tasks for an SMMA agency." Every project must include empty liveUrl and githubUrl strings; add slug and case-study fields (problem, solution, architecture) to enable dynamic /projects/:slug routes.

Implement the main layout wrapper plus Hero section now, and include a polished floating glassmorphic navbar so the hero feels complete. Hero: huge typography AYOUB ROUGUI / FULL-STACK DEVELOPER, deep near-black visual base, subtle grain/noise texture, #140174 and #00FF08 animated glowing orbs, mouse-following radial glow, CTAs View My Work and Let's Talk. Navbar logo AYOUB.ROUGUI, links Home About Skills Projects Experience Contact, active indicators, blur-on-scroll, an animated accessible mobile menu. Use premium typography (Inter/Space Grotesk/Manrope), large bold text and ample negative space. Strict color usage: #00FF08 only CTAs, active states, hover borders/highlight text, #140174 for atmospheric gradients/glows. Motion must be intentional: springs, CTA magnetic interactions, custom cursor glow, word-by-word heading reveal, whileInView patterns where appropriate, GPU-friendly transforms/opacity, and honors prefers-reduced-motion. Do not produce a generic template. Set up reusable utilities/components needed for these effects. Add placeholder section anchors for the rest of the future one-page portfolio and scaffold React Router with reusable /projects/:slug case study routes. Ensure the app builds successfully.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3d9a41fc-bfae-4b4b-9791-1d5fbc9ad77f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
