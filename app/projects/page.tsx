import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import ProjectCursor from "@/components/ProjectCursor";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-zinc-100 md:px-16">
      <ProjectCursor />
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Projects
        </h1>
        <p className="mt-3 text-lg text-zinc-400">
          Playground - Small MVP to Production Apps
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/40"
              data-project-card={project.title}
              key={project.id}
            >
              <div className="relative aspect-16/10 bg-zinc-800">
                <Image
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute right-3 top-3 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 border-t border-zinc-800 pt-4">
                  <Link
                    className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950"
                    href={`/projects/${project.slug}`}
                  >
                    Details
                  </Link>
                  {project.links.github && (
                    <a
                      className="rounded-lg border border-zinc-700 px-4 py-2 text-sm"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
