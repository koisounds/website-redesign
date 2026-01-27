import type { ExperienceItem } from "@/lib/data";

export default function ExperienceSection({
  experience,
}: {
  experience: ExperienceItem[];
}) {
  if (!experience.length) return null;

  const [currentRole] = experience;

  return (
    <section className="section-wrapper" id="experience">
      <div className="mb-16">
        <h2 className="section-title text-3xl font-bold text-white sm:text-4xl">Current Focus</h2>
        <p className="mt-4 text-lg text-slate-400">What I'm working on right now</p>
      </div>
      <div className="card group space-y-8 p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-wider text-accent-light">
              {currentRole.company}
            </span>
          </div>
          <span className="text-slate-500">•</span>
          <span className="text-sm font-medium text-slate-400">{currentRole.location}</span>
          <span className="text-slate-500">•</span>
          <span className="text-sm font-medium text-slate-400">{currentRole.dateRange}</span>
        </div>
        <div>
          <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{currentRole.role}</h3>
          <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
            {currentRole.summary}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {currentRole.highlights.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-lg border border-slate-800/50 bg-slate-900/30 p-4 transition-all hover:border-accent/30 hover:bg-accent/5"
            >
              <span className="mt-1 flex-shrink-0 text-accent">▹</span>
              <span className="text-sm leading-relaxed text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
