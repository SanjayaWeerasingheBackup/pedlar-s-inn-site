import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import fishImage from "@/assets/fish.jpg";

const menuCategories = {
  starters: [
    { name: "Soup of the Day", description: "Chef's daily creation with artisan bread", price: "850" },
    { name: "Garlic Prawns", description: "Tiger prawns sautéed in butter, garlic, and white wine", price: "1,650" },
    { name: "Bruschetta Trio", description: "Tomato basil, mushroom, and olive tapenade", price: "950" },
    { name: "Devilled Calamari", description: "Crispy calamari with Sri Lankan spices", price: "1,200" },
    { name: "Garden Salad", description: "Fresh mixed greens with house vinaigrette", price: "750" },
  ],
  mains: [
    { name: "Grilled Catch of the Day", description: "Fresh local fish with lemon butter sauce, served with seasonal vegetables", price: "2,800" },
    { name: "Lobster Thermidor", description: "Half lobster in creamy cheese sauce, gratinated to perfection", price: "4,500" },
    { name: "Chicken Stroganoff", description: "Tender chicken in mushroom cream sauce with garlic butter pasta", price: "1,950" },
    { name: "Lamb Cutlets", description: "New Zealand lamb with rosemary jus and roasted potatoes", price: "3,200" },
    { name: "Vegetable Wellington", description: "Seasonal vegetables in puff pastry with mushroom sauce", price: "1,650" },
    { name: "Sri Lankan Rice & Curry", description: "Traditional platter with choice of fish, chicken, or vegetable", price: "1,450" },
  ],
  pizza: [
    { name: "Margherita", description: "San Marzano tomatoes, fresh mozzarella, basil", price: "1,450" },
    { name: "Primavera", description: "Seasonal vegetables, pesto, feta cheese", price: "1,650" },
    { name: "Frutti di Mare", description: "Prawns, calamari, mussels, garlic, olive oil", price: "2,200" },
    { name: "Pedlar's Special", description: "Chicken, mushrooms, olives, bell peppers, mozzarella", price: "1,850" },
  ],
  pasta: [
    { name: "Spaghetti Aglio e Olio", description: "Garlic, olive oil, chili flakes, parsley", price: "1,200" },
    { name: "Penne Arrabiata", description: "Spicy tomato sauce with fresh herbs", price: "1,350" },
    { name: "Fettuccine Alfredo", description: "Creamy parmesan sauce with grilled chicken", price: "1,650" },
    { name: "Seafood Linguine", description: "Mixed seafood in white wine garlic sauce", price: "2,100" },
  ],
  beverages: [
    { name: "Ceylon Organic Coffee", description: "Locally sourced single-origin beans", price: "450" },
    { name: "Signature Cappuccino", description: "Double shot with steamed milk and art", price: "550" },
    { name: "Fresh Fruit Smoothies", description: "Mango, passion fruit, or mixed berry", price: "650" },
    { name: "Iced Ceylon Tea", description: "Black tea with honey and lime", price: "350" },
    { name: "House Wines", description: "Selection of red, white, and rosé by the glass", price: "950" },
  ],
  desserts: [
    { name: "Chocolate Fondant", description: "Warm chocolate cake with molten center and vanilla ice cream", price: "950" },
    { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar", price: "850" },
    { name: "Tropical Fruit Platter", description: "Seasonal Sri Lankan fruits", price: "750" },
    { name: "Watalappan", description: "Traditional Sri Lankan coconut custard", price: "650" },
  ],
};

const Menu = () => {
  return (
    <Layout>
      <PageHero
        title="Our Menu"
        subtitle="Culinary Delights"
        backgroundImage={fishImage}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-muted-foreground leading-relaxed">
              Our menu celebrates the finest local ingredients, prepared with international techniques and served with Sri Lankan warmth. Prices are in LKR.
            </p>
          </div>

          <Tabs defaultValue="mains" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent">
              {Object.keys(menuCategories).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-3 text-sm uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none border border-border data-[state=active]:border-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-display text-3xl text-center text-foreground mb-12 capitalize">
                    {category}
                  </h2>
                  <div className="space-y-8">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-start gap-4 pb-6 border-b border-border"
                      >
                        <div className="space-y-1">
                          <h3 className="font-display text-xl text-foreground">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-display text-lg text-gold whitespace-nowrap">
                          Rs. {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-16 pt-12 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Please inform our staff of any dietary requirements or allergies.
              <br />
              A 10% service charge will be added to your bill.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
