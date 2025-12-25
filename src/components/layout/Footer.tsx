import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold tracking-wide">
                Pedlar's Inn
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
                Cafe
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A colonial heritage cafe nestled in the heart of Galle Fort, offering artisanal cuisine in an enchanting atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Explore</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-primary-foreground/80 hover:text-gold transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold" />
                <span className="text-sm text-primary-foreground/80">
                  92 Pedlar Street,<br />
                  Galle Fort, Sri Lanka
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm text-primary-foreground/80">
                  +94 91 222 8888
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm text-primary-foreground/80">
                  hello@pedlarsinn.lk
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Monday - Thursday</p>
              <p className="text-gold">8:00 AM - 10:00 PM</p>
              <p className="mt-3">Friday - Sunday</p>
              <p className="text-gold">8:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Pedlar's Inn Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
