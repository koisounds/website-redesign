import Layout from "@/components/layout";
import data, { type Project } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return data.projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug!,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Alex Galotti`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) {
    notFound();
  }

  const isWafProject = project.slug === "aws-waf-attack-defense";

  return (
    <Layout>
      <div className="section-wrapper pt-16">
        <div className="mb-12">
          <Link
            href="/projects"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent-light"
          >
            <span>←</span> Back to Projects
          </Link>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 text-xl text-slate-400 sm:text-2xl">{project.description}</p>
        </div>

        <div className="space-y-12">
          {/* Tech Stack */}
          <div className="card p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-accent-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* WAF project: PDF content + images */}
          {isWafProject && (
            <>
              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Architecture</h2>
                <p className="text-lg leading-relaxed text-slate-300 mb-4">
                  To Start off we&apos;re going to build the architecture diagram for this. The first stage Represents
                  attackers, using sequel injection, tools, brute force, traffic floods, or DDoS attempts, and the
                  app being scanned for vulnerabilities.
                </p>
                <p className="text-lg leading-relaxed text-slate-300 mb-4">
                  Route 53 is for DNS and routes the URL to the load balancer. So when the user types in the
                  address, it&apos;ll point to the ALB.
                </p>
                <p className="text-lg leading-relaxed text-slate-300 mb-4">
                  The ACM certificate provides SSL so the url connects securely. It is attached to the load balancer.
                  The load balancer manages the requests and routes them to the app.
                </p>
                <p className="text-lg leading-relaxed text-slate-300 mb-4">
                  The AWS WAF is what evaluates for attacks and will scan for SQL injections, XSS, bad IPs,
                  traffic floods and will give a 403 forbidden if detected, so the user does not make it to the
                  backend.
                </p>
                <p className="text-lg leading-relaxed text-slate-300 mb-6">
                  ECR is the container registry.
                  We will set up a docker CI/CD pipeline for this as well.
                </p>
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <Image
                    src="/projects/waf-architecture.png"
                    alt="AWS WAF architecture diagram"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Objective</h2>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">✅ Deployed web application behind HTTPS load balancer</li>
                  <li className="flex items-center gap-3">✅ WAF rules blocking OWASP Top 10 payload patterns</li>
                  <li className="flex items-center gap-3">✅ Rate limiting + IP reputation style blocking</li>
                  <li className="flex items-center gap-3">✅ Bot-style traffic simulation and brute force detection</li>
                  <li className="flex items-center gap-3">✅ Centralized logging and security event dashboards</li>
                  <li className="flex items-center gap-3">✅ Alerting when suspicious patterns exceed thresholds</li>
                  <li className="flex items-center gap-3">✅ Auto rollback / redeploy via CI/CD pipeline</li>
                </ul>
              </div>

              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Simulated Attacks</h2>
                <ul className="space-y-2 text-slate-300">
                  <li>● SQL injection payloads</li>
                  <li>● XSS payloads</li>
                  <li>● Directory traversal attempts</li>
                  <li>● Credential stuffing simulation</li>
                  <li>● Request floods (DoS-style behavior)</li>
                  <li>● Malicious user-agent scanning patterns</li>
                </ul>
              </div>

              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Defensive Controls</h2>
                <ul className="space-y-2 text-slate-300">
                  <li>● WAF preconfigured rules (OWASP ruleset)</li>
                  <li>● Custom deny rules (regex + header inspection)</li>
                  <li>● Rate limiting rules</li>
                  <li>● Geo restrictions (optional)</li>
                  <li>● Block-by-ASN / IP allowlists (optional)</li>
                </ul>
              </div>

              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Measurable Results</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="py-3 pr-6 text-white font-semibold">Attack Type</th>
                        <th className="py-3 pr-6 text-white font-semibold">Before WAF</th>
                        <th className="py-3 text-white font-semibold">After WAF</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/10">
                        <td className="py-3 pr-6">SQLi payload</td>
                        <td className="py-3 pr-6">200 OK</td>
                        <td className="py-3">403 blocked</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 pr-6">XSS payload</td>
                        <td className="py-3 pr-6">200 OK</td>
                        <td className="py-3">403 blocked</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 pr-6">Flood traffic</td>
                        <td className="py-3 pr-6">Service degraded</td>
                        <td className="py-3">Rate limited + stable</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 pr-6">Scanner behavior</td>
                        <td className="py-3 pr-6">Logged but allowed</td>
                        <td className="py-3">Blocked by rule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">CI/CD Pipeline</h2>
                <p className="mb-4 text-slate-300">GitHub Actions automatically:</p>
                <ul className="space-y-2 text-slate-300">
                  <li>● Builds and tags container images</li>
                  <li>● Runs vulnerability scans (Trivy)</li>
                  <li>● Runs IaC security scans (Checkov/tfsec)</li>
                  <li>● Deploys infrastructure via Terraform</li>
                  <li>● Deploys application and validates health check</li>
                </ul>
              </div>

              <div className="card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Terraform</h2>
                <p className="text-lg leading-relaxed text-slate-300 mb-4">
                  Lets create our terraform directory.
                  First, the modules folder. This will keep our terraform infrastructure components. We are going to use
                </p>
                <ul className="space-y-1 text-slate-300 font-mono mb-6">
                  <li>network/</li>
                  <li>alb/</li>
                  <li>ecs/</li>
                  <li>waf/</li>
                  <li>logging/</li>
                  <li>iam/</li>
                </ul>
                <p className="text-lg leading-relaxed text-slate-300">
                  Terraform is great because we dont have to click through the console, and as long as we keep
                  our state file in order, this project is reproducible with whatever parameters we put in, its
                  declarative, so it wont stack resources when we update it. We can deploy it, then destroy it when
                  we&apos;re done, without going through the insanity of clicking through the aws console and deleting
                  everything.
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30">
                <Image
                  src="/projects/waf-terraform-directory.png"
                  alt="WAF_ATTACK Terraform directory structure: .github/workflows, app, attack-scripts, terraform/envs (dev, prod), terraform/modules (alb, ecs, iam, logging, network, waf), README.md"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <div className="card p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://github.com/koisounds/WAF_attack_sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View on GitHub
                </Link>
              </div>
            </>
          )}

          {/* Project Details (default for non-WAF projects) */}
          {project.details && !isWafProject && (
            <>
              {/* Overview */}
              {project.details.overview && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Overview</h2>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {project.details.overview}
                  </p>
                </div>
              )}

              {/* Challenges */}
              {project.details.challenges && project.details.challenges.length > 0 && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Challenges</h2>
                  <ul className="space-y-4">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-1.5 flex-shrink-0 text-accent">▹</span>
                        <span className="text-base leading-relaxed text-slate-300">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {project.details.solutions && project.details.solutions.length > 0 && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Solutions</h2>
                  <ul className="space-y-4">
                    {project.details.solutions.map((solution, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-1.5 flex-shrink-0 text-accent">▹</span>
                        <span className="text-base leading-relaxed text-slate-300">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.details.results && project.details.results.length > 0 && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Results</h2>
                  <ul className="space-y-4">
                    {project.details.results.map((result, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-1.5 flex-shrink-0 text-accent">▹</span>
                        <span className="text-base leading-relaxed text-slate-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture */}
              {project.details.architecture && (
                <div className="card p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-white">Architecture</h2>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {project.details.architecture}
                  </p>
                </div>
              )}
            </>
          )}

          {/* GitHub link (if provided) */}
          {project.githubUrl && (
            <div className="card p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </Link>
            </div>
          )}

          {/* External Link (if provided) */}
          {project.link && !project.githubUrl && (
            <div className="card p-8 lg:p-10 text-center">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Project
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
