import Layout from "@/components/layout";
import SkillsSection from "@/components/skills-section";
import data from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Skills | Alex Galotti",
  description: "Core toolkit and technologies used by Alex Galotti",
};

export default function SkillsPage() {
  return (
    <Layout>
      <div className="section-wrapper pt-16">
        <div className="mb-12">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent-light"
          >
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            Skills
          </h1>
          <p className="mt-4 text-xl text-slate-400 sm:text-2xl">
            Technologies and practices I use to build secure, scalable cloud infrastructure
          </p>
        </div>
        <SkillsSection skills={data.skills} />
      </div>
    </Layout>
  );
}
