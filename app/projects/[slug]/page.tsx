import Layout from "@/components/layout";
import data, { type Project } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return data.projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug!,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Alex Galotti`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="section-wrapper pt-16">
        <div className="mb-12">
          <Link
            href="/projects"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent-light"
          >
            <span>←</span> Back to Projects
          </Link>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 text-xl text-slate-400 sm:text-2xl">{project.description}</p>
        </div>

        <div className="space-y-12">
          {/* Tech Stack */}
          <div className="card p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-accent-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          {project.details && (
            <>
              {/* Overview */}
              {project.details.overview && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Overview</h2>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {project.details.overview}
                  </p>
                </div>
              )}

              {/* Challenges */}
              {project.details.challenges && project.details.challenges.length > 0 && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Challenges</h2>
                  <ul className="space-y-4">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-1.5 flex-shrink-0 text-accent">▹</span>
                        <span className="text-base leading-relaxed text-slate-300">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {project.details.solutions && project.details.solutions.length > 0 && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Solutions</h2>
                  <ul className="space-y-4">
                    {project.details.solutions.map((solution, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-1.5 flex-shrink-0 text-accent">▹</span>
                        <span className="text-base leading-relaxed text-slate-300">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.details.results && project.details.results.length > 0 && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Results</h2>
                  <ul className="space-y-4">
                    {project.details.results.map((result, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-1.5 flex-shrink-0 text-accent">▹</span>
                        <span className="text-base leading-relaxed text-slate-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture */}
              {project.details.architecture && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Architecture</h2>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {project.details.architecture}
                  </p>
                </div>
              )}
            </>
          )}

          {/* External Link (if provided) */}
          {project.link && (
            <div className="card p-8 lg:p-10 text-center">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Project
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
