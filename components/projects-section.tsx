import type { Project } from "@/lib/data";
import Link from "next/link";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="section-wrapper" id="projects">
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => {
          const href = project.slug
            ? `/projects/${project.slug}`
            : project.link || "#";
          const isExternal = !!project.link && !project.slug;

          return (
            <Link
              key={project.name}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="card group relative block overflow-hidden p-10 transition-all duration-500 hover:scale-[1.02] hover:cursor-pointer lg:p-12"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 transition-all group-hover:from-accent/5 group-hover:to-transparent"></div>

              <div className="relative space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-accent-light sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light transition-all group-hover:border-accent/50 group-hover:bg-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-all group-hover:gap-3">
                  View details
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
