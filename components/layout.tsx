"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header
        className={`fixed top-4 left-0 right-0 mx-auto max-w-5xl z-50 transition-all duration-300 rounded-full px-6 ${scrolled
            ? "bg-bg-elevated/80 backdrop-blur-xl border border-white/10 shadow-lg py-2"
            : "bg-transparent border border-transparent py-6"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
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

          <nav className="hidden md:flex gap-1" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white ${isActive
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

          <div className="flex items-center gap-2">
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
                Connect
              </Link>
            </div>
          </div>
        </div>
      </header>

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
