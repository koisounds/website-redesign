import Layout from "@/components/layout";
import ContactSection from "@/components/contact-section";
import Link from "next/link";

export const metadata = {
  title: "Contact | Alex Galotti",
  description: "Get in touch with Alex Galotti",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="section-wrapper pt-16">
        <div className="mb-12">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent-light"
          >
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            Contact
          </h1>
          <p className="mt-4 text-xl text-slate-400 sm:text-2xl">
            Let's build resilient cloud platforms together
          </p>
        </div>
        <ContactSection />
      </div>
    </Layout>
  );
}
