import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Seo from "@/components/Seo";
import { products } from "@/constants/data";

import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { Filter, Target } from "lucide-react";

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
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full bg-background font-sans transition-colors duration-500">
      <Seo
        title="Industrial Shaft & Machine Components Portfolio | Sangam Shaft & Machine Components Pvt. Ltd."
        description="Our products are evaluated by performance in assembly and service. Bolts, Nuts, Studs, U-Bolts, and Custom Shaft & Machine Components."
        productSchema={true}
      />
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[60] origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="Industrial Shaft & Machine Components Portfolio"
          subtitle="Our products are evaluated by performance in assembly and service, not by names alone."
          badge="Product Range"
        />


        {/* Filter Section - Brutalist Redesign */}
        <section className="py-8 bg-background border-b-2 border-border sticky top-0 z-30 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-black font-heading text-slate-900 dark:text-foreground uppercase tracking-tight">
                  Product Catalog
                </h2>
                <p className="text-sm text-slate-500 dark:text-muted-foreground mt-2 font-mono uppercase tracking-widest">Filter by category, material type, or industry standard.</p>
              </div>

              <div className="flex items-center gap-3 bg-muted px-5 py-3 border-2 border-border">
                <Filter size={18} className="text-cyan-500" />
                <span className="text-xs font-bold text-slate-700 dark:text-muted-foreground uppercase tracking-[0.2em]">Found <strong className="text-cyan-600 dark:text-cyan-400 text-sm">{filteredProducts.length}</strong> items</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-wrap items-end gap-4 pt-4 border-t-2 border-slate-100 dark:border-border/50">
              {/* Category Filter */}
              <div className="flex flex-col gap-2 flex-1 md:flex-none">
                <span className="text-[10px] font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-[0.2em]">Category</span>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-[220px] h-12 bg-background border-2 border-border rounded-none focus:ring-0 focus:border-accent hover:border-accent focus:shadow-none transition-all text-foreground font-bold uppercase text-xs tracking-wider">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-border bg-background text-foreground">
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat} className="uppercase text-xs font-bold tracking-wider hover:bg-slate-50 dark:hover:bg-card/50 cursor-pointer">{cat === 'all' ? 'All' : cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Material Filter */}
              <div className="flex flex-col gap-2 flex-1 md:flex-none">
                <span className="text-[10px] font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-[0.2em]">Material</span>
                <Select value={materialFilter} onValueChange={setMaterialFilter}>
                  <SelectTrigger className="w-full md:w-[220px] h-12 bg-background border-2 border-border rounded-none focus:ring-0 focus:border-accent hover:border-accent focus:shadow-none transition-all text-foreground font-bold uppercase text-xs tracking-wider">
                    <SelectValue placeholder="All Materials" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-border bg-background text-foreground">
                    {materials.map(mat => (
                      <SelectItem key={mat} value={mat} className="uppercase text-xs font-bold tracking-wider hover:bg-slate-50 dark:hover:bg-card/50 cursor-pointer">{mat === 'all' ? 'All' : mat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Standard Filter */}
              <div className="flex flex-col gap-2 flex-1 md:flex-none">
                <span className="text-[10px] font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-[0.2em]">Standard</span>
                <Select value={standardFilter} onValueChange={setStandardFilter}>
                  <SelectTrigger className="w-full md:w-[220px] h-12 bg-background border-2 border-border rounded-none focus:ring-0 focus:border-accent hover:border-accent focus:shadow-none transition-all text-foreground font-bold uppercase text-xs tracking-wider">
                    <SelectValue placeholder="All Standards" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-border bg-background text-foreground">
                    {standards.map(std => (
                      <SelectItem key={std} value={std} className="uppercase text-xs font-bold tracking-wider hover:bg-slate-50 dark:hover:bg-card/50 cursor-pointer">{std === 'all' ? 'All' : std}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {(categoryFilter !== 'all' || materialFilter !== 'all' || standardFilter !== 'all') && (
                <button
                  onClick={() => { setCategoryFilter('all'); setMaterialFilter('all'); setStandardFilter('all'); }}
                  className="h-12 px-6 flex items-center justify-center text-xs text-red-500 dark:text-red-400 font-bold uppercase tracking-widest border-2 border-transparent hover:border-red-200 dark:hover:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors ml-auto col-span-2 md:col-span-auto"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-muted overflow-x-hidden min-h-[50vh] transition-colors duration-500 pb-32">
          {/* Deep Industrial Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-900/10 pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-32 border-2 border-dashed border-slate-300 dark:border-border">
                <Target className="w-12 h-12 text-muted-foreground dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-foreground uppercase">No Products Found</h3>
                <p className="text-slate-500 dark:text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <StaggerGrid
                key={`${categoryFilter}-${materialFilter}-${standardFilter}`}
                pattern="wave"
                animation="perspective-left"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                staggerDelay={0}
              >
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} className="group relative flex flex-col bg-card border-2 border-border rounded-none overflow-hidden h-full transition-all duration-300 hover:border-accent hover:shadow-[8px_8px_0px_rgba(15,23,42,0.1)] dark:hover:shadow-[8px_8px_0px_rgba(6,182,212,0.2)] hover:-translate-y-1 isolate">

                    {/* Image Section - Clickable via Link */}
                    <Link to={`/products/${product.id}`} className="block relative h-64 bg-muted flex items-center justify-center p-8 overflow-hidden border-b-2 border-border cursor-pointer">
                      {/* Tech Grid Background (Sharp lines) */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:2rem_2rem] opacity-50" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-700 dark:text-cyan-400 bg-white dark:bg-background border-2 border-cyan-500/30 px-3 py-1.5 rounded-none uppercase tracking-widest shadow-sm">
                          {product.category === "New Developments" && <Target className="w-3 h-3 text-cyan-500" />}
                          {product.material?.split(' ')[0] || "Alloy"}
                        </span>
                      </div>

                      {/* ID Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className="text-[10px] font-bold text-slate-800 dark:text-muted-foreground bg-slate-200/50 dark:bg-card/50 px-2 py-1 rounded-sm shadow-inner uppercase tracking-wider backdrop-blur-sm">
                          ID: {(idx + 1).toString().padStart(3, '0')}
                        </span>
                      </div>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain relative z-20 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-[500ms] ease-out mix-blend-multiply dark:mix-blend-screen"
                      />

                      {/* Industrial Overlay Lines */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-cyan-500/20" />
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500/20" />
                        <div className="absolute top-4 left-4 w-4 h-[2px] bg-cyan-500" />
                        <div className="absolute top-4 left-4 w-[2px] h-4 bg-cyan-500" />
                        <div className="absolute bottom-4 right-4 w-4 h-[2px] bg-cyan-500" />
                        <div className="absolute bottom-4 right-4 w-[2px] h-4 bg-cyan-500" />
                      </div>
                    </Link>

                    {/* Content Section */}
                    <div className="p-8 pt-6 flex-1 flex flex-col relative z-20">
                      <div className="mb-5">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-muted-foreground font-bold font-mono">
                            {product.standards || "STD-SPEC"}
                          </div>
                          <div className="w-12 h-[2px] bg-slate-200 dark:bg-accent group-hover:bg-cyan-500 transition-colors" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black font-heading text-slate-900 dark:text-foreground uppercase transition-colors duration-300 leading-tight">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed mb-8 flex-1 font-medium block">
                        {product.description}
                      </p>

                      <div className="mt-auto pt-6 border-t-2 border-slate-100 dark:border-border flex items-center justify-between">
                        <Link to={`/products/${product.id}`} className="group/link flex items-center gap-2 text-slate-500 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase text-xs font-bold tracking-widest">
                          <span>View Specs</span>
                          <span className="text-sm transform group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>

                        {/* Premium Enquiry Button */}
                        <div onClick={(e) => e.preventDefault()} className="relative z-20 w-[160px]">
                          <ProductEnquiryForm productName={product.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggerGrid>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Products;
