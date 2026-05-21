import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import team from "@/assets/about-team.jpg";
import Jakeer from "@/assets/gallery/alzaam_asset_002.jpg";
import Jawaad from "@/assets/gallery/Jawad_md.jpg";
import { Award, Users, Leaf, ShieldCheck, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rite Tech Construction" },
      { name: "description", content: "Decades of trusted construction experience. Skilled craftsmen, sustainable design, and a clean process from start to finish." },
      { property: "og:title", content: "About Rite Tech" },
      { property: "og:description", content: "Trusted general contractors building futures." },
    ],
  }),
  component: AboutPage,
});

const whyChoose = [
  "15+ years of construction and site development expertise",
  "Licensed, bonded, and insured project delivery",
  "Transparent pricing, documentation, and timelines",
  "Prime locations with thoughtful planning and permitting",
  "Client-first service from kickoff through handover",
  "Sustainable building practices for long-term value",
];

const directors = [
  {
    name: "Mr. Jawad Khan",
    title: "Managing Director",
    quote:
      "Our focus is simple: build every project with craftsmanship and clear communication. We make sure every client understands the process, the schedule, and the quality we deliver.",
  },
  {
    name: "Mr. Jakeer Khan",
    title: "Co-Managing Director",
    quote:
      "We are committed to creating dependable, beautifully finished spaces. From planning to final walkthrough, our team keeps the experience professional, efficient, and reliable.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">About Us</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Two leaders. One promise: honest, high-quality construction.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            Rite Tech is led by a dedicated management team that combines deep industry experience with a customer-first approach. Together, they guide every project toward timely delivery, clear communication, and long-lasting results.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <h2 className="text-4xl font-bold mb-5">Our story</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Rite Tech began with a vision to make construction and renovation simple, reliable, and transparent. Over the years, we have grown into a trusted local partner for homeowners, investors, and developers by keeping every project organized from first estimate to final handover.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We deliver tailored construction solutions for residential remodeling, site development, and premium plot projects. Our strength comes from disciplined execution, strong trade coordination, and a commitment to do the job right the first time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Our mission</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deliver exceptional construction and land investments with honesty, quality, and a smooth client experience.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Our vision</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Become the most trusted home construction partner in our region through consistent delivery and lasting customer trust.
              </p>
            </div>
          </div>
        </div>
        <img
          src={team}
          alt="Rite Tech team"
          loading="lazy"
          width={1280}
          height={960}
          className="rounded-sm shadow-[var(--shadow-soft)] aspect-[4/3] object-cover"
        />
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why choose Rite Tech?</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3 rounded-sm border border-border bg-card p-4"
              >
                <CheckCircle className="text-primary size-5 mt-1" />
                <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Meet the team</p>
          <h2 className="text-4xl font-bold">Our Managing Directors</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm mb-4 flex items-center justify-left">
                  <img
                    src={index === 0 ? Jawaad : Jakeer}
                    alt={director.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-[50%] h-auto object-cover rounded-sm"
                  />
                </div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-semibold mb-3">{director.title}</p>
              <h3 className="text-2xl font-bold mb-4">{director.name}</h3>
              <blockquote className="text-muted-foreground leading-relaxed italic">“{director.quote}”</blockquote>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
