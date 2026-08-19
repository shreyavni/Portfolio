import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects-data";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-zinc-100 md:px-16">
      <article className="mx-auto max-w-6xl">
        <Link
          className="text-sm text-zinc-400 transition-colors hover:text-white"
          href="/projects"
        >
          Back to projects
        </Link>
        <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                {project.title}
              </h1>
              <span className="rounded-full bg-emerald-950/70 px-3 py-1 text-xs text-emerald-400">
                {project.status}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-xl text-zinc-400">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {project.links.visit && (
              <a
                className="rounded-lg bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950"
                href={project.links.visit}
                target="_blank"
                rel="noreferrer"
              >
                Visit Live
              </a>
            )}
            {project.links.howIBuilt && (
              <a
                className="rounded-lg border border-zinc-700 px-5 py-3 text-sm"
                href={project.links.howIBuilt}
                target="_blank"
                rel="noreferrer"
              >
                How I Built
              </a>
            )}
          </div>
        </div>
        <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div>
            <section>
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                {project.detailedDescription}
              </p>
            </section>
            <section className="mt-12">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 text-zinc-300"
                    key={feature}
                  >
                    <span className="mr-3 text-blue-400">●</span>
                    {feature}
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-12">
              <h2 className="text-2xl font-bold">Learning Outcomes</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.learningOutcomes.map((outcome, index) => (
                  <div
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 text-zinc-300"
                    key={outcome}
                  >
                    <span className="mr-3 text-emerald-400">{index + 1}</span>
                    {outcome}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside className="space-y-6">
            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h2 className="text-2xl font-bold">Tech Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-300"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h2 className="text-2xl font-bold">Project Links</h2>
              <div className="mt-5 grid gap-3">
                {project.links.github && (
                  <a
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-300 hover:text-white"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Source Code
                  </a>
                )}
                {project.links.visit && (
                  <a
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-300 hover:text-white"
                    href={project.links.visit}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </section>
            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h2 className="text-2xl font-bold">Project Info</h2>
              <p className="mt-6 text-sm text-zinc-500">Author</p>
              <div className="mt-2 flex items-center gap-3">
                <Image
                  src={project.authorAvatar}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span>{project.author}</span>
              </div>
              <p className="mt-6 text-sm text-zinc-500">Status</p>
              <p className="mt-2 capitalize text-emerald-400">
                {project.status}
              </p>
              <p className="mt-6 text-sm text-zinc-500">Category</p>
              <p className="mt-2 text-zinc-300">{project.tags[0]}</p>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
