import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import insideImage from "@/assets/inside.jpg";

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={insideImage}
                alt="Inside Pedlar's Inn Cafe"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 lg:pl-8">
            <p className="text-accent uppercase tracking-[0.3em] text-sm">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              A Heritage of
              <span className="block text-gold italic">Warm Hospitality</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nestled within a beautifully restored colonial building in Galle Fort, Pedlar's Inn Cafe offers a unique dining experience where centuries of history blend with contemporary culinary excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our space features original wooden beams, antique furnishings, and a lush green canopy ceiling that creates an enchanting atmosphere. Whether you're seeking a quiet corner for morning coffee or an evening feast under string lights, we invite you to be part of our story.
            </p>
            <Button variant="outline" size="lg" asChild className="mt-4">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
