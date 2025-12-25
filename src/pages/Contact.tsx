import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import outdoorDine from "@/assets/outdoor-dine.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent",
      description: "We'll get back to you shortly to confirm your booking.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        backgroundImage={outdoorDine}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
                  Visit Us
                </p>
                <h2 className="font-display text-4xl text-foreground leading-tight mb-6">
                  We'd Love to
                  <span className="block text-gold italic">Hear from You</span>
                </h2>
                <div className="w-16 h-0.5 bg-gold" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      92 Pedlar Street, Galle Fort
                      <br />
                      Galle 80000, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">+94 91 222 8888</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">hello@pedlarsinn.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Thursday: 8:00 AM - 10:00 PM
                      <br />
                      Friday - Sunday: 8:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="aspect-video bg-secondary overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8889!2d80.2151!3d6.0281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnNDEuMiJOIDgwwrAxMic1NC40IkU!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pedlar's Inn Location"
                />
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-secondary p-8 lg:p-12">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Make a Reservation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background border-border"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background border-border"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background border-border"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Number of Guests *
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="bg-background border-border"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Preferred Date & Time *
                  </label>
                  <Input
                    type="datetime-local"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Special Requests
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background border-border min-h-[120px]"
                    placeholder="Any dietary requirements, special occasions, or seating preferences..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request Reservation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll confirm your reservation via email within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
