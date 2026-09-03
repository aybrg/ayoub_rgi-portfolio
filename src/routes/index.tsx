import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { SectionAnchor } from "@/components/SectionAnchor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayoub Rougui — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer and engineering student at EMSI building scalable web platforms with React, Laravel and modern architecture.",
      },
      { property: "og:title", content: "Ayoub Rougui — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Freelance Full-Stack Developer crafting scalable digital products with React, Laravel and thoughtful design.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
    </Layout>
  );
}