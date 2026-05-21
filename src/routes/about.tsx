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
      { name: "description", content: "Professional builder portfolio with long-term Oman construction industry experience and American-standard project execution." },
      { property: "og:title", content: "About Rite Tech" },
      { property: "og:description", content: "Experienced construction leadership, professional workmanship, and disciplined project delivery." },
      { property: "og:url", content: "https://ritetechconstruction.com/about" },
      { name: "twitter:title", content: "About Rite Tech Construction" },
      { name: "twitter:description", content: "Professional builder portfolio with long-term Oman construction industry experience and American-standard project execution." },
    ],
    links: [
      { rel: "canonical", href: "https://ritetechconstruction.com/about" },
    ],
  }),
  component: AboutPage,
});

const whyChoose = [
  "15+ years of practical construction and site delivery experience",
  "Strong exposure to Oman construction industry practices",
  "American-standard quality expectations and client communication",
  "Residential, commercial, renovation, and finishing capability",
  "Transparent scope, scheduling, documentation, and handover",
  "Professional workmanship focused on durability and long-term value",
];

const directors = [
  {
    name: "Mr. Jawad Khan",
    title: "Managing Director",
    quote:
      "My focus is simple: deliver every project, discipline, and clear communication. Clients should understand the scope, schedule, quality expectations, and progress at every stage.",
  },
  {
    name: "Mr. Jakeer Khan",
    title: "Co-Managing Director",
    quote:
      "We are committed to dependable construction and clean finishing. From planning to final walkthrough, we keep the work organized, practical, professional, and reliable.",
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
            Professional building experience shaped by Oman and American construction standards.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            Rite Tech represents a professional construction portfolio built on years of field experience, disciplined execution, and a commitment to quality work across construction, renovation, remodeling, and finishing projects.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <h2 className="text-4xl font-bold mb-5">Our story</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Rite Tech was created to present construction work with the seriousness it deserves: clear planning, professional coordination, durable methods, and reliable delivery. The portfolio reflects hands-on experience developed through the Oman construction industry and strengthened by American project standards.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We support construction-related works including residential improvements, commercial upgrades, remodeling, structural coordination, masonry, flooring, tile, exterior works, and interior finishing. Our strength is practical execution and the ability to keep projects organized from first discussion to final handover.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Our mission</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deliver professional construction services with honesty, quality workmanship, clear communication, and a smooth client experience.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Our vision</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build a portfolio recognized for professionalism, reliable execution, and construction quality across every project category.
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
