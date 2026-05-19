import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-20">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-10 rounded-sm bg-[image:var(--gradient-accent)] grid place-items-center font-display font-bold">SL</div>
            <div>
              <div className="font-display font-bold">Subh & Labh</div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">General Contracting</div>
            </div>
          </div>
          <p className="text-sm opacity-80 max-w-md">
            Reliable home remodeling and construction. Building your project, earning your trust.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Our Works</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-primary" /> +1-740-405-1114</li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-primary" /> info@subhandlabh.com</li>
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-primary" /> Serving the tri-state area</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 text-xs opacity-60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Subh & Labh General Contracting. All rights reserved.</span>
          <span>Licensed · Bonded · Insured</span>
        </div>
      </div>
    </footer>
  );
}
