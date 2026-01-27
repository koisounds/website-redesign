import Layout from "@/components/layout";
import ProjectsSection from "@/components/projects-section";
import data from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Projects | Alex Galotti",
  description: "Selected projects and notable work by Alex Galotti",
};

export default function ProjectsPage() {
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
              Projects
            </h1>
            <p className="mt-4 text-xl text-slate-400 sm:text-2xl">
              Notable work and contributions
            </p>
          </div>
        </div>
        <ProjectsSection projects={data.projects} />
      </div>
    </Layout>
  );
}
