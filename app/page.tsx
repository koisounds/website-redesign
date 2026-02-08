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
    image: "/aws-logo.png",
    accent: "from-orange-500/20 to-amber-600/10",
    borderHover: "hover:border-orange-500/50",
  },
  {
    name: "GCP",
    description: "Google Cloud Platform — serverless, data, and automation.",
    href: "/projects?cloud=gcp",
    image: "/gcp-logo.png",
    accent: "from-blue-500/20 to-green-500/10",
    borderHover: "hover:border-blue-500/50",
  },
  {
    name: "Microsoft Azure",
    description: "Azure — enterprise cloud, hybrid, and AI services.",
    href: "/projects?cloud=azure",
    image: "/azure-logo.png",
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
    </Layout>
  );
}
