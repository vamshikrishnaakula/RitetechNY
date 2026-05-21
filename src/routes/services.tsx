import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import smart from "@/assets/project-smart.jpg";
import home from "@/assets/project-home.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import floor from "@/assets/project-floor.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rite Tech Construction" },
      { name: "description", content: "Professional construction services including planning, renovation, remodeling, structural coordination, flooring, finishing, and project management." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Construction-related services delivered with field experience, clear coordination, and professional workmanship." },
      { property: "og:url", content: "https://ritetechconstruction.com/services" },
      { name: "twitter:title", content: "Services — Rite Tech Construction" },
      { name: "twitter:description", content: "Professional construction, renovation, remodeling, finishing, and project coordination services." },
    ],
    links: [
      { rel: "canonical", href: "https://ritetechconstruction.com/services" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { img: smart, title: "Project Planning and Coordination", text: "Practical planning that turns an idea into an executable scope. We coordinate drawings, materials, trades, timelines, and site requirements before work begins." },
  { img: home, title: "Construction and Structural Works", text: "Professional support for building works, structural coordination, masonry, framing, concrete-related works, exterior improvements, and site execution." },
  { img: kitchen, title: "Renovation and Remodeling", text: "Kitchen upgrades, bathroom renovations, full home improvements, layout changes, and interior transformations managed with proper sequencing and workmanship." },
  { img: floor, title: "Finishing, Flooring, and Tile Works", text: "Clean finishing work including flooring, tile, surface preparation, painting coordination, fixtures, detailing, and final presentation ready for handover." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Construction Services for Every Stage</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            From early planning to final finishing, Rite Tech provides construction-related services shaped by Oman industry experience, American quality expectations, and practical site knowledge.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 space-y-16">
        {services.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <img src={s.img} alt={s.title} loading="lazy" width={1280} height={960} className="rounded-sm shadow-[var(--shadow-soft)] aspect-[4/3] object-cover" />
            </div>
            <div>
              <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">0{i + 1}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
