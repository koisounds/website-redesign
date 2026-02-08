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
        {/* Featured project — no gap from hero */}
        <section className="pt-0 pb-6 md:pb-12 relative z-10">
          <h2 className="section-title mb-8">Featured project</h2>
          <div className="glass-card p-8 lg:p-10 flex flex-col md:flex-row md:items-center gap-8 border border-white/10 hover:border-orange-500/30 transition-colors duration-500 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
            <Link href="/projects/aws-waf-attack-defense" className="relative z-10 flex flex-1 gap-6 md:gap-8 min-w-0">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/aws-logo.png"
                  alt=""
                  width={56}
                  height={56}
                  className="object-contain w-14 h-14"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-glow transition-all">
                  AWS WAF Attack Defense & CI/CD Pipeline
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Web application behind HTTPS ALB with AWS WAF blocking OWASP Top 10, rate limiting, and IP reputation rules. Simulated SQLi, XSS, floods, and scanner traffic; full Terraform + GitHub Actions CI/CD with Trivy, Checkov, and auto rollback.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                  View project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            <a
              href="https://github.com/koisounds/WAF_attack_sim"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </section>

        {/* Explore by cloud */}
        <section className="section-wrapper pt-8 pb-6 md:pb-12 relative z-10">
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
