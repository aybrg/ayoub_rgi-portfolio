import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolioData";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Ayoub Rougui" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Case Study | Ayoub Rougui` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.title} — Case Study` },
        { property: "og:description", content: project.description },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectCaseStudy,
});

function ProjectNotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-48 text-center">
        <h1 className="font-display text-5xl font-bold">Project not found</h1>
        <Link to="/" className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-neon">
          Back home
        </Link>
      </div>
    </Layout>
  );
}

function ProjectCaseStudy() {
  const { project } = Route.useLoaderData();

  const blocks = [
    { label: "Problem", body: project.caseStudy.problem },
    { label: "Solution", body: project.caseStudy.solution },
    { label: "Architecture", body: project.caseStudy.architecture },
  ];

  return (
    <Layout>
      <article className="relative mx-auto max-w-4xl px-6 pb-32 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] blur-[150px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--nebula) 80%, transparent), transparent 70%)",
          }}
        />
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-neon"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>
          <p className="mt-10 font-display text-xs uppercase tracking-[0.32em] text-neon">
            {project.type}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:border-neon hover:text-neon"
            >
              {t}
            </span>
          ))}
        </Reveal>

        {project.image && (
          <Reveal delay={0.1}>
            <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        )}

        <div className="mt-20 space-y-14">
          {blocks.map((block, i) => (
            <Reveal key={block.label} delay={i * 0.05}>
              <div className="border-l border-border pl-6 md:pl-10">
                <h2 className="font-display text-xs uppercase tracking-[0.32em] text-neon">
                  {block.label}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {block.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </article>
    </Layout>
  );
}
