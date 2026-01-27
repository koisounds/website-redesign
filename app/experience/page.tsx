import Layout from "@/components/layout";
import ExperienceSection from "@/components/experience-section";
import TimelineSection from "@/components/timeline-section";
import data from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Experience | Alex Galotti",
  description: "Professional experience and career timeline of Alex Galotti",
};

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="section-wrapper">
        <div className="mb-20">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-white"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </Link>
          <h1 className="text-display mb-4 text-white">
            Experience
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            My professional journey and track record in <span className="text-white font-medium">cloud engineering</span>.
          </p>
        </div>
        <ExperienceSection experience={data.experience.slice(0, 1)} />
        <div className="mt-32">
          <TimelineSection timeline={data.experience} />
        </div>
      </div>
    </Layout>
  );
}
