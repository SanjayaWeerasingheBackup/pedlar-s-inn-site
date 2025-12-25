import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedDishes } from "@/components/home/FeaturedDishes";
import { Ambiance } from "@/components/home/Ambiance";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <FeaturedDishes />
      <Ambiance />
      <CTA />
    </Layout>
  );
};

export default Index;
