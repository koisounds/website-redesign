import type { Skills } from "@/lib/data";

type Props = {
  skills: Skills;
};

export default function SkillsSection({ skills }: Props) {
  return (
    <section className="section-wrapper" id="skills">
      <div className="mb-16">
        <h2 className="section-title text-3xl font-bold text-white sm:text-4xl">Core Toolkit</h2>
        <p className="mt-4 text-lg text-slate-400">
          Technologies and practices I use to build secure, scalable cloud infrastructure
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <div
            key={category.title}
            className="card group p-8 transition-all duration-500 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-gradient-to-r from-accent to-accent-light"></div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-light"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
