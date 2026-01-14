import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import ProductCard from "@/components/ProductCard"; // Keeping if needed, though previously unused in render
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Seo from "@/components/Seo";
import { products } from "@/constants/data";

import SectionProduct3DExplorer from "@/components/SectionProduct3DExplorer";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { Filter } from "lucide-react";

const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");
  const [standardFilter, setStandardFilter] = useState("all");
  const scrollProgress = useScrollProgress();

  const categories = useMemo(() => ["all", ...Array.from(new Set(products.map(p => p.category)))], []);
  const materials = useMemo(() => ["all", ...Array.from(new Set(products.map(p => p.material || "N/A")))], []);
  const standards = useMemo(() => ["all", ...Array.from(new Set(products.map(p => p.standards || "N/A")))], []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = categoryFilter === "all" || p.category === categoryFilter;
      const matchMaterial = materialFilter === "all" || (p.material || "N/A") === materialFilter;
      const matchStandard = standardFilter === "all" || (p.standards || "N/A") === standardFilter;
      return matchCategory && matchMaterial && matchStandard;
    });
  }, [categoryFilter, materialFilter, standardFilter]);

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

        {/* 3D Explorer Section */}
        <SectionProduct3DExplorer />

        {/* Filter Section */}
        <section className="py-6 bg-background border-b border-border/50 sticky top-0 z-20 backdrop-blur-md bg-white/95 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
              <div>
                <h2 className="text-xl font-bold font-heading text-slate-900">Product Catalog</h2>
                <p className="text-sm text-slate-500">Filter by category, material type, or industry standard.</p>
              </div>

              <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                <Filter size={16} className="text-blue-500" />
                <span>Found <strong className="text-slate-900">{filteredProducts.length}</strong> items</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px] h-9 bg-slate-50 border-slate-200">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={materialFilter} onValueChange={setMaterialFilter}>
                <SelectTrigger className="w-[180px] h-9 bg-slate-50 border-slate-200">
                  <SelectValue placeholder="All Materials" />
                </SelectTrigger>
                <SelectContent>
                  {materials.map(mat => (
                    <SelectItem key={mat} value={mat} className="capitalize">{mat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={standardFilter} onValueChange={setStandardFilter}>
                <SelectTrigger className="w-[180px] h-9 bg-slate-50 border-slate-200">
                  <SelectValue placeholder="All Standards" />
                </SelectTrigger>
                <SelectContent>
                  {standards.map(std => (
                    <SelectItem key={std} value={std} className="capitalize">{std}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(categoryFilter !== 'all' || materialFilter !== 'all' || standardFilter !== 'all') && (
                <button
                  onClick={() => { setCategoryFilter('all'); setMaterialFilter('all'); setStandardFilter('all'); }}
                  className="text-xs text-red-500 font-bold hover:underline ml-auto"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-muted/30 overflow-x-hidden min-h-[50vh]">
          <div className="container mx-auto px-4 max-w-full">
            <StaggerGrid
              key={`${categoryFilter}-${materialFilter}-${standardFilter}`}
              pattern="wave"
              animation="perspective-left"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              staggerDelay={0}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="relative group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Main Click Area */}
                  <Link to={`/products/${product.id}`} className="absolute inset-0 z-0" aria-label={`View ${product.name}`} />

                  <div className="relative h-60 overflow-hidden bg-slate-100 p-8 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-bold text-slate-600 bg-white/90 px-2 py-1 rounded shadow-sm uppercase tracking-wider border border-slate-100">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col relative z-10 bg-white">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between gap-4">
                      <Link to={`/products/${product.id}`} className="text-sm font-bold text-blue-600 hover:underline">
                        View Specs
                      </Link>

                      {/* Enquiry Button - Prevent Navigation */}
                      <div onClick={(e) => e.preventDefault()} className="relative z-20">
                        <ProductEnquiryForm productName={product.name} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerGrid>

            {/* ... AnimatedSection footer ... */}
            <div className="mt-16 text-center">
              {/* ... */}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Products;
