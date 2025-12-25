import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fishImage from "@/assets/fish.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import pastaImage from "@/assets/pasta-salad.jpg";

const dishes = [
  {
    name: "Fresh Seafood",
    description: "Locally caught fish prepared with traditional recipes",
    image: fishImage,
  },
  {
    name: "Artisan Pizza",
    description: "Wood-fired pizzas with fresh, seasonal toppings",
    image: pizzaImage,
  },
  {
    name: "Signature Pasta",
    description: "Handcrafted pasta with house-made sauces",
    image: pastaImage,
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Signature
            <span className="text-gold italic"> Dishes</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="group relative overflow-hidden bg-background"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-2xl text-cream mb-2">
                  {dish.name}
                </h3>
                <p className="text-cream/80 text-sm">{dish.description}</p>
              </div>
              {/* Always visible title */}
              <div className="p-6 text-center">
                <h3 className="font-display text-xl text-foreground">
                  {dish.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
