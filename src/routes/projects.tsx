import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/components/CtaBanner";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Works — Rite Tech Construction" },
      { name: "description", content: "A professional construction portfolio showcasing renovation, remodeling, finishing, exterior, and site-related works." },
      { property: "og:title", content: "Our Works" },
      { property: "og:description", content: "Construction portfolio by Rite Tech Construction, built on professional execution and field experience." },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: "Our Works — Rite Tech Construction" },
      { name: "twitter:description", content: "A professional construction portfolio showcasing renovation, remodeling, finishing, and site-related works." },
    ],
    links: [
      { rel: "canonical", href: "/projects" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [items, setItems] = useState<Array<{ img: string; title: string; tag: string }>>([]);

  useEffect(() => {
    const loadGallery = async () => {
      const modules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", { eager: true }) as Record<string, { default: string }>;
      const galleryItems = Object.entries(modules)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([path, mod]) => {
          const fileName = path.split(/[/\\]/).pop() ?? "";
          const title = fileName
            .replace(/\.(jpg|jpeg|png|webp)$/i, "")
            .replace(/[-_]/g, " ")
            .replace(/\b(\w)/g, (match) => match.toUpperCase()) || "Gallery Image";
          return { img: mod.default, title, tag: "Gallery" };
        });
      setItems(galleryItems);
    };

    loadGallery();
  }, []);

  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-3">Our Works</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">Project Showcase</h1>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl leading-relaxed">
            Explore selected construction, renovation, finishing, and site-related works that reflect practical experience, professional coordination, and attention to every detail.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer">
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="size-full object-cover group-hover:scale-105 transition duration-700" />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent p-3 sm:p-6 flex flex-col justify-end text-navy-foreground">
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
