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
      { name: "description", content: "Architecture, design & engineering, construction management, and full renovation services for residential projects." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Comprehensive construction and design services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { img: smart, title: "Architecture and Planning", text: "Smart layouts that set the foundation. Space planning, drawing coordination, and permit-ready documentation focused on function, code compliance, and realistic execution." },
  { img: home, title: "Design and Engineering", text: "Buildable design with technical clarity. We align design intent with structural and engineering requirements so what's planned can be built without surprises." },
  { img: kitchen, title: "Construction Management", text: "Clear control from start to finish. Scheduling, trade coordination, inspections, and on-site execution keep the project moving smoothly with full accountability." },
  { img: floor, title: "Renovation and Remodeling", text: "Well-executed work, delivered properly. Kitchen remodels, bathroom remodels, and full home renovations coordinated under one process for consistent quality." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Comprehensive Construction and Design Services</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            From initial planning to final build, we provide a structured approach that keeps residential projects organized, efficient, and well executed.
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
