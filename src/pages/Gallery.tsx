import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { X } from "lucide-react";
import heroNight from "@/assets/hero-night.jpg";
import inside from "@/assets/inside.jpg";
import lights from "@/assets/lights.jpg";
import outdoorDine from "@/assets/outdoor-dine.jpg";
import fish from "@/assets/fish.jpg";
import pizza from "@/assets/pizza.jpg";
import pastaSalad from "@/assets/pasta-salad.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import dishView from "@/assets/dish-view.jpg";
import stairs from "@/assets/stairs.jpg";

const galleryImages = [
  { src: heroNight, alt: "Pedlar's Inn at night", category: "ambiance" },
  { src: inside, alt: "Cozy interior seating", category: "ambiance" },
  { src: lights, alt: "Warm chandelier lighting", category: "ambiance" },
  { src: outdoorDine, alt: "Garden courtyard dining", category: "ambiance" },
  { src: stairs, alt: "Colonial staircase", category: "ambiance" },
  { src: fish, alt: "Fresh grilled fish", category: "food" },
  { src: pizza, alt: "Artisan pizza", category: "food" },
  { src: pastaSalad, alt: "Pasta with salad", category: "food" },
  { src: cappuccino, alt: "Signature cappuccino", category: "food" },
  { src: dishView, alt: "Dinner with a view", category: "food" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "ambiance" | "food">("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="Visual Journey"
        backgroundImage={stairs}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "ambiance", "food"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as typeof filter)}
                className={`px-6 py-2 text-sm uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-cream text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
