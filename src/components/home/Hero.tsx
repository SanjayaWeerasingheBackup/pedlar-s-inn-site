import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-night.jpg";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pedlar's Inn Cafe at night"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-cream/80 uppercase tracking-[0.4em] text-sm animate-fade-up opacity-0">
            Welcome to
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-semibold leading-tight animate-fade-up opacity-0 animation-delay-200">
            Pedlar's Inn
            <span className="block text-gold italic font-normal text-4xl md:text-5xl lg:text-6xl mt-2">
              Cafe
            </span>
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-xl mx-auto leading-relaxed animate-fade-up opacity-0 animation-delay-400">
            A colonial heritage cafe in the heart of Galle Fort, where history meets culinary artistry
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up opacity-0 animation-delay-600">
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
