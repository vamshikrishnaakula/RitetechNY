import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-sm bg-navy text-navy-foreground p-12 md:p-16 text-center">
        <div className="absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">Let's build together</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to bring your vision to life?</h2>
          <p className="max-w-2xl mx-auto opacity-80 mb-8">
            Start your journey with Subh & Labh and transform your space with expert design and construction services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[image:var(--gradient-accent)] text-primary-foreground font-medium rounded-sm hover:opacity-90 transition">
              Get a Free Estimate <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:bg-white/10 font-medium rounded-sm transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
