import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowRight, HardHat, Hammer, Headphones, Leaf, CheckCircle2, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import bath from "@/assets/project-bath.jpg";
import floor from "@/assets/project-floor.jpg";
import home from "@/assets/project-home.jpg";
import exterior from "@/assets/project-exterior.jpg";
import smart from "@/assets/project-smart.jpg";
import team from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  { img: kitchen, title: "Kitchen Remodel", text: "Complete kitchen remodels from layout to finish — cabinetry, countertops, tile, plumbing, and finishing details." },
  { img: bath, title: "Bathroom Remodeling", text: "Tile showers, vanities, plumbing upgrades, waterproofing, and ventilation — done right the first time." },
  { img: floor, title: "Flooring & Tile Work", text: "Tile, hardwood, LVP, and specialty flooring with proper surface prep for long-term durability." },
  { img: home, title: "Full Home Renovation", text: "Demolition, framing, mechanical coordination, and finish work managed end to end." },
  { img: exterior, title: "Structural & Exterior", text: "Framing changes, additions, decks, and exterior upgrades to code and built to last." },
  { img: smart, title: "Smart Solutions", text: "Value engineering, trade coordination, and efficient sequencing for better results." },
];

const testimonials = [
  { name: "Dawn J. Fox", role: "Real Estate Developer", quote: "Exceptional quality, timely delivery, and professional execution throughout the project." },
  { name: "Jessica Black", role: "Architect", quote: "Their sustainable approach and attention to detail truly elevate every project." },
  { name: "Stephan Paul", role: "Business Owner", quote: "Reliable team, transparent process, and outstanding construction results." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Top notice bar */}
      <div className="bg-primary text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide">
        Interior Design Services Provided
      </div>

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center">
        <img src={hero} alt="Modern home interior under construction" className="absolute inset-0 size-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-6 text-navy-foreground max-w-4xl">
          <p className="inline-block bg-primary/90 px-4 py-1.5 text-xs uppercase tracking-[0.2em] mb-6 rounded-sm">General Contracting</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Reliable Home Remodeling <span className="text-primary">& Construction</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-10">
            Your home deserves work that's clean, organized, and built to last. We handle every step — from planning to the final walkthrough — delivering results you can trust.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-[image:var(--gradient-accent)] text-primary-foreground font-medium rounded-sm hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              Get a Free Estimate <ArrowRight className="size-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-4 border border-white/40 hover:bg-white/10 font-medium rounded-sm transition">
              Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold">Licensed, Bonded, and Insured</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: HardHat, title: "Skilled Professionals", text: "Certified architects, engineers, and builders bring decades of experience — trusted expertise from design to completion." },
            { icon: Hammer, title: "Superior Craftsmanship", text: "Every structure we build uses precision, premium materials, and attention to detail — ensuring durability and lasting value." },
            { icon: Headphones, title: "Always Available", text: "Whether it's a question, an update, or emergency assistance, our team is available 24/7 to keep your project on track." },
          ].map((p) => (
            <div key={p.title} className="group p-8 bg-card border border-border rounded-sm hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all">
              <div className="size-14 grid place-items-center bg-[image:var(--gradient-accent)] text-primary-foreground rounded-sm mb-6">
                <p.icon className="size-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={team} alt="Construction team" loading="lazy" width={1280} height={960} className="rounded-sm shadow-[var(--shadow-soft)] aspect-[4/3] object-cover" />
          </div>
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Rite Tech</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Transforming Space, Building Futures</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We deliver innovative construction solutions with quality craftsmanship and sustainable design — projects built to last.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground mt-1">Construction Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground mt-1">Completed Projects</div>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-navy-foreground font-medium rounded-sm hover:bg-primary transition">
              Learn More <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Our Works</p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">Project Showcase</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Explore our most innovative architectural and construction achievements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-[var(--shadow-soft)] transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="size-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.text}</p>
                <Link to="/projects" className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-3 transition-all">
                  Explore <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative py-24 bg-navy text-navy-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={home} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-6 max-w-3xl">
          <Leaf className="size-12 text-primary mb-6" />
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Rite Tech</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Environmentally Responsible Building Practices</h2>
          <p className="opacity-80 text-lg mb-8">
            Our commitment to sustainable design integrates eco-friendly materials, energy efficiency, and innovative green technologies into every project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-6 py-3 bg-[image:var(--gradient-accent)] rounded-sm font-medium hover:opacity-90 transition">Sustainability Report</Link>
            <Link to="/about" className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-sm font-medium transition">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">Hear from businesses and individuals who have experienced our exceptional service.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border p-8 rounded-sm">
              <Quote className="text-primary mb-4" />
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="size-11 rounded-full bg-[image:var(--gradient-accent)] grid place-items-center text-primary-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold">From Plan to Final Walkthrough</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Consultation", "Design & Planning", "Construction", "Final Walkthrough"].map((step, i) => (
              <div key={step} className="bg-card p-6 rounded-sm border border-border">
                <div className="text-5xl font-display font-bold text-primary/30 mb-3">0{i + 1}</div>
                <h3 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> {step}</h3>
                <p className="text-sm text-muted-foreground">A clear, transparent step in our delivery process.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
