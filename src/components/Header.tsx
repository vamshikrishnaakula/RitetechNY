import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Our Works" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="bg-navy text-navy-foreground text-sm">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <a href="tel:+17404051114" className="flex items-center gap-2 hover:text-primary transition">
            <Phone className="size-3.5" /> +1-740-405-1114
          </a>
          <span className="hidden sm:inline text-navy-foreground/70">Licensed · Bonded · Insured</span>
        </div>
      </div>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-10 rounded-sm bg-[image:var(--gradient-accent)] grid place-items-center text-primary-foreground font-display font-bold">SL</div>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight">Subh & Labh</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">General Contracting</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium hover:text-primary transition" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex items-center px-5 py-2.5 bg-[image:var(--gradient-accent)] text-primary-foreground font-medium text-sm rounded-sm hover:opacity-90 transition shadow-[var(--shadow-glow)]">
            Free Estimate
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm py-2" activeProps={{ className: "text-primary font-semibold" }}>{n.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
