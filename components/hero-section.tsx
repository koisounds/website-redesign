"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const impactMetrics = [
  "Lifted security score from 79% → 92% in one month.",
  "Cut incident resolution time by 30% via Dev/Ops syncs.",
  "Hardened GCP and kept 99.99% uptime during DDoS campaigns.",
  "Terraform reusable modules shrank provisioning from days to hours.",
  "Disaster recovery playbook reduced outage impact to < 4 hours.",
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section-wrapper pt-20 md:pt-32" id="top">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
        <div className="space-y-8 lg:col-span-7 animate-fade-in">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-secondary backdrop-blur-md transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="h-2 w-2 rounded-full bg-accent-secondary animate-pulse box-shadow-glow" />
            Cloud Engineer · DevSecOps
          </div>

          <div className="space-y-6">
            <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-display font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
              Automating secure, <br />
              <span className="text-gradient-primary relative whitespace-nowrap">
                cloud platforms
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src="/profile.jpg"
                    alt="Alex Galotti"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
                I'm <strong className="text-white">Alex Galotti</strong>, an Austin-based Cloud & DevSecOps engineer.
                I bridge the gap between <span className="text-accent-tertiary">security</span>, <span className="text-accent-secondary">infrastructure</span>, and <span className="text-accent-primary">engineering</span> to ensure functionality never compromises compliance.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <GlassBadge text="📍 Austin, Texas" />
            <a href="mailto:N.alexgalotti@gmail.com">
              <GlassBadge text="✉️ Email" hover />
            </a>
            <a href="https://linkedin.com/in/alex-galotti" target="_blank" rel="noopener noreferrer">
              <GlassBadge text="💼 LinkedIn" hover />
            </a>
          </div>
        </div>

        <div className="glass-card p-8 lg:col-span-5 lg:p-10 animate-slide-up bg-bg-elevated/30">
          <div className="mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
            <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary" />
            <span className="font-display font-bold text-lg tracking-widest uppercase text-white">Impact Snapshot</span>
          </div>
          <ul className="space-y-5">
            {impactMetrics.map((metric, index) => (
              <li key={index} className="flex gap-4 text-base text-text-secondary group">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-primary group-hover:bg-accent-secondary transition-colors duration-300 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <span className="group-hover:text-white transition-colors duration-300">{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GlassBadge({ text, hover = false }: { text: string; hover?: boolean }) {
  return (
    <div
      className={`
        rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-text-secondary backdrop-blur-sm
        ${hover ? 'transition-all duration-300 hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-white hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] cursor-pointer' : ''}
      `}
    >
      {text}
    </div>
  );
}
