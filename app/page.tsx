import HeroSection from "@/components/hero-section";
// Trigger rebuild: 2026-01-27
import Image from "next/image";
import Layout from "@/components/layout";
import Link from "next/link";

const CLOUD_PROVIDERS = [
  {
    name: "AWS",
    description: "Amazon Web Services — infrastructure, serverless, and security.",
    href: "/projects?cloud=aws",
    image: "/aws-logo.svg",
    accent: "from-orange-500/20 to-amber-600/10",
    borderHover: "hover:border-orange-500/50",
  },
  {
    name: "GCP",
    description: "Google Cloud Platform — serverless, data, and automation.",
    href: "/projects?cloud=gcp",
    image: "/gcp-logo.svg",
    accent: "from-blue-500/20 to-green-500/10",
    borderHover: "hover:border-blue-500/50",
  },
  {
    name: "Microsoft Azure",
    description: "Azure — enterprise cloud, hybrid, and AI services.",
    href: "/projects?cloud=azure",
    image: "/azure-logo.svg",
    accent: "from-sky-500/20 to-blue-600/10",
    borderHover: "hover:border-sky-500/50",
  },
] as const;

export default function Home() {
  return (
    <Layout>
      <div>
        <HeroSection />
        {/* Cloud provider project cards — no gap from hero */}
        <section className="pt-0 pb-6 md:pb-12 relative z-10">
        <h2 className="section-title mb-8">Explore by cloud</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLOUD_PROVIDERS.map((cloud) => (
            <Link key={cloud.name} href={cloud.href} className="group block h-full">
              <div
                className={`
                  glass-card h-full p-8 flex flex-col overflow-hidden
                  transition-all duration-500 ${cloud.borderHover}
                `}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cloud.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={cloud.image}
                      alt=""
                      width={48}
                      height={48}
                      className="object-contain w-12 h-12"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-glow transition-all">
                    {cloud.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed flex-1">
                    {cloud.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                    View projects
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </section>
      </div>

      {/* Contact Banner */}
      <section className="section-wrapper pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg p-8 md:p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-transparent to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <h2 className="relative z-10 text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to scale securely?
          </h2>
          <p className="relative z-10 text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Let's collaborate on building resilient, compliant, and high-performance cloud infrastructure.
          </p>

          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center gap-3 rounded-full bg-white text-bg px-8 py-4 text-base font-bold transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get In Touch
            <span>→</span>
          </Link>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />
        </div>
      </section>
    </Layout>
  );
}
