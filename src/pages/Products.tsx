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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600">
                  Product Catalog
                </h2>
                <p className="text-sm text-slate-500 mt-1">Filter by category, material type, or industry standard.</p>
              </div>

              <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                <Filter size={16} className="text-blue-500" />
                <span>Found <strong className="text-slate-900">{filteredProducts.length}</strong> items</span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-wrap items-end gap-3 md:gap-4 pt-2 border-t border-slate-100">
              {/* Category Filter */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category</span>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-[180px] h-10 bg-slate-50 border-slate-200">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat} className="capitalize">{cat === 'all' ? 'All' : cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Material Filter */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Material</span>
                <Select value={materialFilter} onValueChange={setMaterialFilter}>
                  <SelectTrigger className="w-full md:w-[180px] h-10 bg-slate-50 border-slate-200">
                    <SelectValue placeholder="All Materials" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map(mat => (
                      <SelectItem key={mat} value={mat} className="capitalize">{mat === 'all' ? 'All' : mat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Standard Filter */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Standard</span>
                <Select value={standardFilter} onValueChange={setStandardFilter}>
                  <SelectTrigger className="w-full md:w-[180px] h-10 bg-slate-50 border-slate-200">
                    <SelectValue placeholder="All Standards" />
                  </SelectTrigger>
                  <SelectContent>
                    {standards.map(std => (
                      <SelectItem key={std} value={std} className="capitalize">{std === 'all' ? 'All' : std}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


              {(categoryFilter !== 'all' || materialFilter !== 'all' || standardFilter !== 'all') && (
                <button
                  onClick={() => { setCategoryFilter('all'); setMaterialFilter('all'); setStandardFilter('all'); }}
                  className="text-xs text-red-500 font-bold hover:underline ml-auto col-span-2 md:col-span-auto text-right md:text-left pt-2 md:pt-0"
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
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"
              staggerDelay={0}
            >
              {filteredProducts.map((product, idx) => (
                <div key={product.id} className="relative group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden">
                  {/* Main Click Area - Removed global link to allow text selection, implemented specific links instead */}

                  {/* Image Section - Clickable via Link */}
                  <Link to={`/products/${product.id}`} className="block relative h-32 md:h-72 overflow-hidden bg-slate-50/50 flex items-center justify-center border-b border-slate-100 group-hover:bg-white transition-colors duration-500 cursor-pointer">
                    {/* Technical Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                        CAT-{String(idx + 1).padStart(3, '0')}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-sm shadow-sm uppercase tracking-wider backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-700 ease-out"
                    />
                  </Link>

                  {/* Content Section */}
                  <div className="p-3 md:p-6 flex-1 flex flex-col relative z-10 bg-white">
                    <div className="mb-4">
                      <h3 className="text-sm md:text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                        {product.name}
                      </h3>
                      <div className="w-10 h-0.5 bg-slate-100 group-hover:bg-blue-500 transition-colors duration-500" />
                    </div>

                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-auto flex flex-row items-center justify-between gap-3 pt-3 md:pt-5 border-t border-slate-50">
                      <Link to={`/products/${product.id}`} className="group/link flex items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
                        <span className="hidden md:inline text-sm font-semibold text-slate-600">View Specs</span>
                        <span className="md:hidden text-[10px] font-bold uppercase tracking-wider">Specs</span>
                        <span className="text-xs md:text-base opacity-100 md:opacity-0 md:-translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">→</span>
                      </Link>

                      {/* Premium Enquiry Button */}
                      <div onClick={(e) => e.preventDefault()} className="relative z-20">
                        <div className="[&>button]:bg-slate-900 [&>button]:text-white [&>button]:hover:bg-blue-600 [&>button]:transition-all [&>button]:duration-300 [&>button]:h-8 md:[&>button]:h-9 [&>button]:text-[10px] md:[&>button]:text-xs [&>button]:uppercase [&>button]:tracking-wide [&>button]:font-bold [&>button]:px-4 md:[&>button]:px-5 [&>button]:shadow-md [&>button]:hover:shadow-blue-500/25 [&>button]:w-auto">
                          <ProductEnquiryForm productName={product.name} />
                        </div>
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
