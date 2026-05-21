import { Link, useLocation } from "@tanstack/react-router";
import { MoreVertical, Phone, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Our Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const initGoogleTranslate = () => {
    const mount = document.getElementById("google_translate_element");

    if (!mount || mount.childElementCount > 0 || !window.google?.translate) {
      return;
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
      },
      "google_translate_element",
    );
  };

  const handleTranslateClick = () => {
    const combo = document.querySelector<HTMLSelectElement>(
      "#google_translate_element select.goog-te-combo",
    );

    if (combo) {
      combo.focus();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isVisible) return;

    window.googleTranslateElementInit = initGoogleTranslate;

    if (window.google?.translate) {
      initGoogleTranslate();
      return;
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-white/10 backdrop-blur-md"
          style={{ pointerEvents: isVisible ? "auto" : "none" }}
        >
      <div className="bg-navy text-navy-foreground text-sm container mx-auto px-4">
            <div className="container mx-auto px-6 py-2 flex items-center justify-between gap-3">
              <a href="tel:+12126710950" className="flex items-center gap-2 hover:text-primary transition">
                <Phone className="size-3.5" /> +1-212-671-0950
              </a>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-navy-foreground/70">Licensed · Bonded · Insured</span>
                {/* <div className="change_langOuter flex items-center gap-1.5" aria-label="Translate website">
                  <div id="google_translate_element" className="cursor-pointer" />
                  <button
                    type="button"
                    onClick={handleTranslateClick}
                    className="change-lang-trigger flex items-center gap-1.5 text-navy-foreground hover:text-primary transition"
                    aria-label="Open language selector"
                  >
                    <MoreVertical className="size-3.5 text-primary" aria-hidden="true" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Rite Tech Construction"
                  className="h-14 w-auto rounded-sm shadow-lg"
                />
              </Link>

              <div className="hidden lg:flex items-center gap-8">
                {nav.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-body text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                      location.pathname === link.to
                        ? "text-primary"
                        : "text-black hover:text-gold focus:text-black/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                  ))}
      
                <a
                  href="tel:+12126710950"
                  className="flex items-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-2.5 rounded-md font-body text-sm font-semibold tracking-wide transition-transform hover:scale-105px-6 py-3 bg-[image:var(--gradient-accent)] rounded-sm font-medium hover:opacity-90 transition"
                >
                  <Phone className="w-4 h-4" />
                  Get Free Estimate
                </a>
              </div>
               
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden rounded-md p-2 text-black transition-colors hover:bg-black/5 hover:text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:hidden bg-white border-t border-black/10 shadow-lg"
              >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                  {nav.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`rounded-md px-2 py-2 font-body text-sm font-medium tracking-wider uppercase transition-colors ${
                        location.pathname === link.to
                          ? "bg-black/5 text-primary"
                          : "text-black hover:bg-black/5 hover:text-primary focus:bg-black/5 focus:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="tel:+12126710950"
                    className="flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-3 rounded-md font-body text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
