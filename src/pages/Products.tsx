import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import MagneticText from "@/components/MagneticText";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Seo from "@/components/Seo";

const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const scrollProgress = useScrollProgress();

  const products = [
    {
      name: "Bolts & Hex Bolts",
      description: "Structural and mechanical assemblies",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    {
      name: "Nuts",
      description: "Controlled thread engagement",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    },
    {
      name: "Studs & Double-Ended Studs",
      description: "Alignment-critical applications",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
    {
      name: "U-Bolts",
      description: "Clamping and mounting requirements",
      image: "https://images.unsplash.com/photo-1536617063469-6f34582f3ef4",
    },
    {
      name: "Threaded Components",
      description: "Drawing-based OEM parts",
      image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78",
    },
    {
      name: "Custom Fasteners",
      description: "Manufactured as per specifications",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full bg-background font-sans">
      <Seo
        title="Industrial Fasteners Portfolio | Sangam Fasteners Pvt. Ltd."
        description="Our products are evaluated by performance in assembly and service. Bolts, Nuts, Studs, U-Bolts, and Custom Fasteners."
        productSchema={true}
      />
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="Industrial Fasteners Portfolio"
          subtitle="Our products are evaluated by performance in assembly and service, not by names alone."
          badge="Product Range"
        />

        {/* Products Grid */}
        <section className="py-16 bg-muted/30 overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-full">
            <StaggerGrid
              pattern="wave"
              animation="perspective-left"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0}
            >
              {products.map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </StaggerGrid>

            <AnimatedSection animation="fade-up" delay={0.5} className="mt-16 text-center">
              <p className="text-xl font-medium text-primary bg-primary/5 inline-block py-4 px-8 rounded-lg border border-primary/10">
                All products are manufactured strictly as per approved drawings with focus on repeatability.
              </p>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Products;
