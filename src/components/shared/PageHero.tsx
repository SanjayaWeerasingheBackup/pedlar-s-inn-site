interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          {subtitle && (
            <p className="text-cream/80 uppercase tracking-[0.4em] text-sm">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight">
            {title}
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
}
