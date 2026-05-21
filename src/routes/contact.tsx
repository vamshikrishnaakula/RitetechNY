import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rite Tech Construction" },
      { name: "description", content: "Get a free estimate. Call +1-212-671-0950 or email info@ritetechconstruction.com." },
      { property: "og:title", content: "Contact Rite Tech" },
      { property: "og:description", content: "Reach our team for a free estimate." },
      { property: "og:url", content: "https://ritetechconstruction.com/contact" },
      { name: "twitter:title", content: "Contact Rite Tech Construction" },
      { name: "twitter:description", content: "Get a free estimate. Call +1-212-671-0950 or email info@ritetechconstruction.com." },
    ],
    links: [
      { rel: "canonical", href: "https://ritetechconstruction.com/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get a Free Estimate</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Tell us about your project. We'll get back within one business day with next steps.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6">
          {[
            { icon: Phone, label: "Phone", value: "+1-212-671-0950" },
            { icon: Mail, label: "Email", value: "info@ritetechconstruction.com" },
            { icon: MapPin, label: "Service Area", value: "New York City" },
            { icon: Clock, label: "Hours", value: "Mon–Sat · 8am–6pm" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 items-start p-5 bg-card border border-border rounded-sm">
              <div className="size-11 grid place-items-center bg-[image:var(--gradient-accent)] text-primary-foreground rounded-sm shrink-0">
                <c.icon className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="font-semibold mt-0.5">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 bg-card border border-border rounded-sm p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name"><input required className="input" placeholder="Jane Doe" /></Field>
            <Field label="Email"><input required type="email" className="input" placeholder="jane@email.com" /></Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Phone"><input className="input" placeholder="(555) 555-5555" /></Field>
            <Field label="Project type">
              <select className="input">
                <option>Kitchen Remodel</option>
                <option>Bathroom Remodel</option>
                <option>Full Home Renovation</option>
                <option>Flooring</option>
                <option>Addition / Exterior</option>
                <option>Other</option>
              </select>
            </Field>
          </div>
          <Field label="Tell us about your project">
            <textarea required rows={5} className="input resize-none" placeholder="Scope, timeline, budget range..." />
          </Field>
          <button type="submit" className="w-full sm:w-auto px-7 py-3.5 bg-[image:var(--gradient-accent)] text-primary-foreground font-medium rounded-sm hover:opacity-90 transition">
            {sent ? "Thanks — we'll be in touch!" : "Request Estimate"}
          </button>
        </form>
      </section>

      <style>{`.input{width:100%;padding:.7rem .9rem;border:1px solid var(--color-border);border-radius:.25rem;background:var(--color-background);font-size:.95rem;outline:none;transition:border-color .2s}.input:focus{border-color:var(--color-primary)}`}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-2">{label}</span>
      {children}
    </label>
  );
}
