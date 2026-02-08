"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const navigation = [
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const cloudNav = [
  { name: "AWS", href: "/projects?cloud=aws", icon: "aws", image: "/aws-logo.png" },
  { name: "GCP", href: "/projects?cloud=gcp", icon: "gcp", image: "/gcp-logo.png" },
  { name: "Azure", href: "/projects?cloud=azure", icon: "azure", image: "/azure-logo.png" },
] as const;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function HeaderFallback() {
  return (
    <header className="fixed top-4 left-0 right-0 mx-auto max-w-5xl z-50 rounded-full px-6 bg-transparent border border-transparent py-6">
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="hidden md:flex items-center gap-4 flex-1 min-w-0">
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0" aria-label="Home">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent-secondary/50">
              <Image src="/profile.jpg" alt="Alex Galotti" width={40} height={40} className="h-full w-full object-cover" priority />
            </div>
            <span className="text-lg font-bold font-display text-white/90">Alex Galotti</span>
          </Link>
          <span className="h-6 w-px bg-white/20 flex-shrink-0" aria-hidden />
          <nav className="flex items-center gap-1 flex-shrink-0" aria-label="Cloud projects">
            {cloudNav.map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-secondary rounded-full hover:text-white" title={`${item.name} projects`}>
                <Image src={item.image} alt="" width={20} height={20} className="flex-shrink-0 object-contain w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <span className="h-6 w-px bg-white/20 flex-shrink-0" aria-hidden />
          <nav className="flex items-center gap-1 flex-1 justify-center min-w-0" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="flex-shrink-0 px-4 py-2 text-sm font-medium text-text-secondary rounded-full hover:text-white">{item.name}</Link>
            ))}
          </nav>
        </div>
        <div className="flex md:hidden items-center flex-shrink-0">
          <Link href="/" className="group flex items-center gap-3" aria-label="Home">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent-secondary/50">
              <Image src="/profile.jpg" alt="Alex Galotti" width={40} height={40} className="h-full w-full object-cover" priority />
            </div>
            <span className="text-lg font-bold font-display text-white/90">Alex Galotti</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <SocialLink href="https://github.com/koisounds" label="GitHub" icon={<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />} />
          <div className="hidden sm:block">
            <Link href="https://www.linkedin.com/in/alex-galotti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/50 bg-accent-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-secondary transition-all hover:bg-accent-secondary hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <LinkedInIcon className="h-4 w-4" />
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cloudParam = searchParams.get("cloud");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
        className={`fixed top-4 left-0 right-0 mx-auto max-w-5xl z-50 transition-all duration-300 rounded-full px-6 ${scrolled
            ? "bg-bg-elevated/80 backdrop-blur-xl border border-white/10 shadow-lg py-2"
            : "bg-transparent border border-transparent py-6"
          }`}
      >
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Three subsections: Name | Clouds | Main nav */}
          <div className="hidden md:flex items-center gap-4 flex-1 min-w-0">
            {/* Subsection 1: Name */}
            <Link
              href="/"
              className="group flex items-center gap-3 flex-shrink-0"
              aria-label="Home"
            >
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent-secondary/50 group-hover:border-accent-primary transition-colors duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Alex Galotti"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <span className={`text-lg font-bold font-display tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white/90'}`}>
                Alex Galotti
              </span>
            </Link>

            <span className="h-6 w-px bg-white/20 flex-shrink-0" aria-hidden />

            {/* Subsection 2: Cloud providers */}
            <nav className="flex items-center gap-1 flex-shrink-0" aria-label="Cloud projects">
              {cloudNav.map((item) => {
                const isCloudActive = pathname === "/projects" && cloudParam === item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white ${isCloudActive ? "text-white" : "text-text-secondary"}`}
                    title={`${item.name} projects`}
                  >
                    {isCloudActive && (
                      <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                    )}
                    <Image
                      src={item.image}
                      alt=""
                      width={20}
                      height={20}
                      className="flex-shrink-0 object-contain w-5 h-5"
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <span className="h-6 w-px bg-white/20 flex-shrink-0" aria-hidden />

            {/* Subsection 3: Skills, Experience, Projects, Contact */}
            <nav className="flex items-center gap-1 flex-1 justify-center min-w-0" aria-label="Main navigation">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white ${isActive
                        ? "text-white"
                        : "text-text-secondary"
                      }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile: name only */}
          <div className="flex md:hidden items-center flex-shrink-0">
            <Link href="/" className="group flex items-center gap-3" aria-label="Home">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent-secondary/50 group-hover:border-accent-primary transition-colors duration-300">
                <Image src="/profile.jpg" alt="Alex Galotti" width={40} height={40} className="h-full w-full object-cover" priority />
              </div>
              <span className="text-lg font-bold font-display text-white/90">Alex Galotti</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <SocialLink href="https://github.com/koisounds" label="GitHub" icon={
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            } />
            <div className="hidden sm:block">
              <Link
                href="https://www.linkedin.com/in/alex-galotti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/50 bg-accent-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-secondary transition-all hover:bg-accent-secondary hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <LinkedInIcon className="h-4 w-4" />
                Connect
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<HeaderFallback />}>
        <Header />
      </Suspense>

      <main className="space-y-24 pb-24 pt-8 md:space-y-32 md:pb-32 md:pt-12 min-h-screen">
        {children}
      </main>

      <footer className="border-t border-white/5 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-tertiary/5 to-transparent pointer-events-none" />
        <p className="text-sm text-text-secondary relative z-10">
          © {new Date().getFullYear()} Alex Galotti. Building the future of cloud.
        </p>
        <div className="mt-8 flex justify-center relative z-10">
          <div className="group relative">
            <div className="absolute -inset-4 bg-accent-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/dog-easter-egg.png"
              alt="🐕"
              width={60}
              height={60}
              className="opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 grayscale group-hover:grayscale-0"
              unoptimized
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-text-secondary transition-colors hover:text-white"
      aria-label={label}
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </Link>
  );
}
