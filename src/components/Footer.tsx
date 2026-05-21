import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-20">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="bg-white/95 inline-block p-3 rounded-sm mb-5">
            <img src={logo} alt="Rite Tech Construction" className="h-16 w-auto" />
          </div>
          <p className="text-sm opacity-80 max-w-md">
            Rite Tech Construction is a professional builder portfolio shaped by Oman construction industry experience, American-standard execution, and dependable workmanship.
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
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-primary shrink-0" /><span>+1-212-671-0950</span></li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-primary shrink-0" /><span>info@ritetechconstruction.com</span></li>
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-primary shrink-0" /><span>New York, NY</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 text-xs opacity-60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Rite Tech Construction. All rights reserved.</span>
          <span>Licensed · Bonded · Insured</span>
        </div>
      </div>
    </footer>
  );
}
