import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import insideImage from "@/assets/inside.jpg";
import lightsImage from "@/assets/lights.jpg";
import stairsImage from "@/assets/stairs.jpg";
import dishViewImage from "@/assets/dish-view.jpg";

const About = () => {
  return (
    <Layout>
      <PageHero
        title="Our Story"
        subtitle="About Us"
        backgroundImage={lightsImage}
      />

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-accent uppercase tracking-[0.3em] text-sm">
                Est. 1850
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                A Legacy of
                <span className="block text-gold italic">Heritage & Flavor</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                Pedlar's Inn Cafe occupies a magnificent colonial-era building that has stood at the heart of Galle Fort for over 170 years. Originally a merchant's residence, its walls have witnessed centuries of trade, culture, and transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we honor this heritage by preserving the building's authentic character—from the original wooden shutters and terracotta tiles to the hand-carved pillars and vintage furnishings. Every corner tells a story, every meal is a celebration of our roots.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of passionate chefs blend traditional Sri Lankan recipes with international influences, using locally-sourced ingredients to create dishes that are both familiar and extraordinary.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={insideImage}
                  alt="Interior of Pedlar's Inn Cafe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={dishViewImage}
                  alt="Dining at Pedlar's Inn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-accent uppercase tracking-[0.3em] text-sm">
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Farm to Table,
                <span className="block text-gold italic">Heart to Soul</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe that great food starts with great ingredients. That's why we work closely with local farmers, fishermen, and artisans to source the freshest produce and seafood.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our menu changes with the seasons, ensuring that every dish celebrates the best of what Sri Lanka has to offer. From the spices of Matara to the seafood of Mirissa, our ingredients travel short distances but carry centuries of tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Our
              <span className="text-gold italic"> Values</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Heritage",
                description:
                  "We honor the history of our building and the traditions of Sri Lankan cuisine, preserving what makes this place special.",
              },
              {
                title: "Quality",
                description:
                  "From ingredients to service, we hold ourselves to the highest standards. Every detail matters.",
              },
              {
                title: "Community",
                description:
                  "We're not just a cafe—we're a gathering place. We support local producers and welcome guests as family.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <h3 className="font-display text-2xl text-foreground">
                  {value.title}
                </h3>
                <div className="w-8 h-0.5 bg-gold mx-auto" />
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Come Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground leading-tight mb-8">
            We Can't Wait to
            <span className="block text-gold italic">Welcome You</span>
          </h2>
          <div className="aspect-video max-w-4xl mx-auto overflow-hidden">
            <img
              src={stairsImage}
              alt="Pedlar's Inn interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
