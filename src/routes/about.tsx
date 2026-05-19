import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import team from "@/assets/about-team.jpg";
import { Award, Users, Leaf, ShieldCheck } from "lucide-react";

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

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Building your project. Earning your trust.</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            For over a decade, Rite Tech has delivered residential remodeling and construction with a focus on craftsmanship, transparency, and lasting value.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src={team} alt="Our team" loading="lazy" width={1280} height={960} className="rounded-sm shadow-[var(--shadow-soft)] aspect-[4/3] object-cover" />
        <div>
          <h2 className="text-4xl font-bold mb-5">Who we are</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We are certified architects, engineers, and builders united by one belief: every home deserves work that is clean, organized, and built to last.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From single-room remodels to full home renovations, our team manages every detail so you get a smooth process and a result you can be proud of.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Craftsmanship", text: "Precision and pride in every cut, joint, and finish." },
              { icon: Users, title: "Partnership", text: "Clear communication and honest collaboration." },
              { icon: ShieldCheck, title: "Integrity", text: "Licensed, bonded, insured — and accountable." },
              { icon: Leaf, title: "Sustainability", text: "Eco-friendly materials and efficient design." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border p-6 rounded-sm">
                <v.icon className="text-primary size-8 mb-4" />
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
