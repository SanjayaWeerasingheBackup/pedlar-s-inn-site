import lightsImage from "@/assets/lights.jpg";
import outdoorImage from "@/assets/outdoor-dine.jpg";
import stairsImage from "@/assets/stairs.jpg";

export function Ambiance() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Colonial
            <span className="text-gold italic"> Charm</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6 mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Step into a world where time slows down, surrounded by century-old architecture, warm lighting, and the gentle whisper of heritage.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="h-full min-h-[400px] lg:min-h-[600px] overflow-hidden">
              <img
                src={lightsImage}
                alt="Cafe interior with warm lighting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="h-[300px] lg:h-auto overflow-hidden">
            <img
              src={outdoorImage}
              alt="Outdoor courtyard dining"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="h-[300px] lg:h-auto overflow-hidden">
            <img
              src={stairsImage}
              alt="Colonial staircase with teal accents"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
