import type { ExperienceItem } from "@/lib/data";

export default function TimelineSection({ timeline }: { timeline: ExperienceItem[] }) {
  return (
    <section className="section-wrapper" id="timeline">
      <div className="mb-16">
        <h2 className="section-title text-3xl font-bold text-white sm:text-4xl">
          Career Timeline
        </h2>
        <p className="mt-4 text-lg text-slate-400">My professional journey</p>
      </div>
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent lg:block"></div>
        
        {timeline.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="card group relative ml-0 space-y-6 p-8 lg:ml-16 lg:p-10"
          >
            {/* Timeline dot */}
            <div className="absolute -left-4 top-8 hidden h-8 w-8 rounded-full border-4 border-slate-950 bg-accent shadow-lg shadow-accent/30 lg:block"></div>
            
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">{item.role}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-semibold text-slate-400">{item.company}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{item.location}</span>
                </div>
              </div>
              <span className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                {item.dateRange}
              </span>
            </header>
            
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{item.summary}</p>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {item.highlights.map((bullet, bulletIndex) => (
                <div
                  key={bulletIndex}
                  className="flex gap-3 rounded-lg border border-slate-800/50 bg-slate-900/30 p-3 transition-all hover:border-accent/20"
                >
                  <span className="mt-0.5 flex-shrink-0 text-accent">▹</span>
                  <span className="text-sm text-slate-300">{bullet}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
