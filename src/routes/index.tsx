import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import StatCounter from "@/components/ui/StatCounter";
import { ArrowRight, HardHat, Hammer, Headphones, Leaf, CheckCircle2, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import {
Shield, Users, Award, Building, Search, MapPin, Home,
  Handshake, FileCheck, Eye, TrendingUp, ChevronRight, Star, HelpCircle,
} from "lucide-react";
import kitchen from "@/assets/project-kitchen.jpg";
import bath from "@/assets/project-bath.jpg";
import { motion } from "framer-motion";
import floor from "@/assets/project-floor.jpg";
import home from "@/assets/project-home.jpg";
import exterior from "@/assets/project-exterior.jpg";
import smart from "@/assets/project-smart.jpg";
import team from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rite Tech Construction — Home Remodeling & Construction" },
      { name: "description", content: "Professional construction portfolio backed by long-term experience in the Oman construction industry and American-standard project delivery." },
      { property: "og:title", content: "Rite Tech Construction — Home Remodeling & Construction" },
      { property: "og:description", content: "Construction, renovation, remodeling, structural work, finishing, and project coordination delivered with professional standards and proven field experience." },
      { property: "og:url", content: "" },
      { name: "twitter:title", content: "Rite Tech Construction — Home Remodeling & Construction" },
      { name: "twitter:description", content: "Experienced builder delivering construction, renovation, remodeling, and finishing services with discipline, quality, and accountability." },
    ],
    links: [
      { rel: "canonical", href: "" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Users, value: "1500+", label: "Clients Served" },
  { icon: Building, value: "250+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Years in Construction" },
  { icon: Shield, value: "100%", label: "Professional Commitment" },
];

const projects = [
  { img: kitchen, title: "Kitchen Remodel", text: "Complete kitchen remodels from layout to finish — cabinetry, countertops, tile, plumbing, and finishing details." },
  { img: bath, title: "Bathroom Remodeling", text: "Tile showers, vanities, plumbing upgrades, waterproofing, and ventilation — done right the first time." },
  { img: floor, title: "Flooring & Tile Works", text: "Surface preparation, tile, hardwood, LVP, and specialty flooring installed for long-term strength and clean presentation." },
  { img: home, title: "Full Home Renovation", text: "Demolition, framing, mechanical coordination, and finish work managed end to end." },
  { img: exterior, title: "Structural & Exterior", text: "Framing changes, additions, decks, and exterior upgrades to code and built to last." },
  { img: smart, title: "Project Coordination", text: "Planning, trade coordination, value engineering, and sequencing shaped by real field experience across construction environments." },
];

const testimonials = [
  { name: "Dawn J. Fox", role: "Property Owner", quote: "The work was handled with discipline, clean communication, and a strong understanding of construction quality." },
  { name: "Jessica Black", role: "Design Professional", quote: "Rite Tech understands how to turn design intent into buildable, well-finished results." },
  { name: "Stephan Paul", role: "Business Owner", quote: "Reliable coordination, professional site management, and a result that matched the commitment." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Top notice bar */}

      {/* Hero */}
          

        {/* About Intro */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-3"
              >
                Who We Are
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
              >
                Professional Construction Built on Field Experience
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-body leading-relaxed mb-4"
              >
                Rite Tech Construction is a professional builder portfolio shaped by years of practical site experience, disciplined project coordination, and a strong understanding of construction quality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground font-body leading-relaxed"
              >
                Our work reflects long-term exposure to the Oman construction industry and American construction expectations, bringing together durable execution, clear communication, and dependable finishing standards.
              </motion.p>
            </div>
             <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Standards from Start to Handover</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Construction Experience You Can Trust</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We deliver innovative construction solutions with quality and sustainable design — projects built to last.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground mt-1">Skilled Trade Network</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground mt-1">Portfolio Works</div>
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
            A selected look at construction, renovation, finishing, and improvement works completed with practical skill and attention to detail.
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
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Built Responsibly</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Practical, Durable, and Responsible Construction</h2>
          <p className="opacity-80 text-lg mb-8">
            Our commitment to sustainable design integrates eco-friendly materials, energy efficiency, and innovative green technologies into every project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-6 py-3 bg-[image:var(--gradient-accent)] rounded-sm font-medium hover:opacity-90 transition">Start a Project</Link>
            <Link to="/about" className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-sm font-medium transition">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">Client feedback reflects the values behind our portfolio: professionalism, reliability, and construction quality.</p>
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
                <p className="text-sm text-muted-foreground">A defined stage managed with clear communication, documentation, and accountability.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
