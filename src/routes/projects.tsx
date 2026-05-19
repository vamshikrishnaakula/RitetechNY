import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import kitchen from "@/assets/project-kitchen.jpg";
import bath from "@/assets/project-bath.jpg";
import floor from "@/assets/project-floor.jpg";
import home from "@/assets/project-home.jpg";
import exterior from "@/assets/project-exterior.jpg";
import smart from "@/assets/project-smart.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Works — Subh & Labh General Contracting" },
      { name: "description", content: "A showcase of our most innovative architectural and construction achievements." },
      { property: "og:title", content: "Our Works" },
      { property: "og:description", content: "Project showcase by Subh & Labh General Contracting." },
    ],
  }),
  component: ProjectsPage,
});

const items = [
  { img: kitchen, title: "Modern Kitchen Remodel", tag: "Kitchen" },
  { img: bath, title: "Luxury Bath Suite", tag: "Bathroom" },
  { img: floor, title: "White Oak Flooring", tag: "Flooring" },
  { img: home, title: "Open Concept Living", tag: "Renovation" },
  { img: exterior, title: "Timber Frame Addition", tag: "Exterior" },
  { img: smart, title: "Smart Floor Planning", tag: "Design" },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Our Works</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Showcase</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Explore our most innovative architectural and construction achievements — built with precision, premium materials, and attention to every detail.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer">
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="size-full object-cover group-hover:scale-105 transition duration-700" />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent p-6 flex flex-col justify-end text-navy-foreground">
                <span className="text-xs uppercase tracking-widest text-primary mb-1">{p.tag}</span>
                <span className="text-xl font-bold">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
