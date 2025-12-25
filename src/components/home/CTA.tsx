import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cappuccinoImage from "@/assets/cappuccino.jpg";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={cappuccinoImage}
          alt="Coffee at Pedlar's Inn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-gold uppercase tracking-[0.3em] text-sm">
            Reserve Your Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
            Join Us for an
            <span className="block italic">Unforgettable Meal</span>
          </h2>
          <p className="text-cream/80 text-lg">
            Whether it's a romantic dinner, a family celebration, or a quiet afternoon with a book, we're here to make it memorable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Make a Reservation</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
