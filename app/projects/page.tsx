import Layout from "@/components/layout";
import ProjectsSection from "@/components/projects-section";
import data from "@/lib/data";
import Link from "next/link";
import type { Project } from "@/lib/data";

const CLOUD_LABELS: Record<string, string> = {
  aws: "AWS",
  gcp: "GCP",
  azure: "Microsoft Azure",
};

function filterProjectsByCloud(projects: Project[], cloud: string | null): Project[] {
  if (!cloud) return projects;
  const normalized = cloud.toLowerCase();
  return projects.filter((p) =>
    p.stack.some(
      (tech) =>
        tech.toLowerCase().includes(normalized) ||
        (normalized === "gcp" && tech.toLowerCase().includes("google")),
    ),
  );
}

export const metadata = {
  title: "Projects | Alex Galotti",
  description: "Selected projects and notable work by Alex Galotti",
};

type Props = { searchParams: Promise<{ cloud?: string }> };

export default async function ProjectsPage({ searchParams }: Props) {
  const params = await searchParams;
  const cloud = params.cloud ?? null;
  const filtered = filterProjectsByCloud(data.projects, cloud);
  const sectionTitle = cloud ? CLOUD_LABELS[cloud.toLowerCase()] ?? "Projects" : "Projects";

  return (
    <Layout>
      <div className="section-wrapper pt-16">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent-light"
            >
              <span>←</span> Back to Home
            </Link>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
              {sectionTitle}
            </h1>
            <p className="mt-4 text-xl text-slate-400 sm:text-2xl">
              {cloud
                ? `Projects using ${CLOUD_LABELS[cloud.toLowerCase()] ?? cloud}`
                : "Notable work and contributions"}
            </p>
          </div>
        </div>
        {filtered.length > 0 ? (
          <ProjectsSection projects={filtered} />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-bg-elevated/50 p-12 text-center">
            <p className="text-lg text-text-secondary mb-6">
              {cloud
                ? `No projects tagged with ${CLOUD_LABELS[cloud.toLowerCase()] ?? cloud} yet. Check back soon.`
                : "No projects match this filter."}
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View all projects
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
