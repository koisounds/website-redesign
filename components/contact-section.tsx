export default function ContactSection() {
  return (
    <section className="section-wrapper" id="contact">
      <div className="card relative overflow-hidden p-12 text-center lg:p-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"></div>
        
        <div className="relative space-y-8">
          <div className="space-y-4">
            <h2 className="section-title text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let's Build Together
            </h2>
            <p className="mx-auto max-w-3xl text-xl font-semibold text-slate-300 sm:text-2xl">
              Need a DevSecOps partner who keeps velocity and compliance in sync?
            </p>
          </div>
          
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I help teams automate secure infrastructure, unblock launches, and ensure audits are
            uneventful. Reach out and let's talk about your roadmap.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="mailto:N.alexgalotti@gmail.com"
              className="rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Email Alex
            </a>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-accent/60 bg-accent/10 px-8 py-4 text-sm font-bold text-accent-light transition-all hover:border-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
