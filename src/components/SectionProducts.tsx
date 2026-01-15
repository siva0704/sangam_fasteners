import { Link } from "react-router-dom"; // Added import
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Card } from "./ui/card";
import ProductEnquiryForm from "./ProductEnquiryForm";

import { products } from "@/constants/data";

const SectionProducts = () => {
    // Select specific products for diverse showcase
    const showcaseIds = ['hex-bolts', 'hex-nuts', 'flat-washers', 'socket-screws', 'stud-bolts', 'wm-drum-shaft'];
    const showcaseProducts = products.filter(p => showcaseIds.includes(p.id));

    return (
        <section className="py-16 bg-secondary/30" id="products">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2 gap-8">
                    <AnimatedSection animation="fade-right" className="max-w-2xl">
                        <span className="inline-block py-1 px-3 text-accent font-bold text-sm uppercase mb-4">
                            Our Products
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4 leading-tight">
                            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Precision</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our comprehensive range of fasteners meets the rigorous standards of global industries.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-left" delay={0.2} className="shrink-0">
                        <MagneticButton size="lg" variant="outline" className="hidden md:flex items-center gap-2 group text-primary border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
                            <Link to="/products">View All Products</Link> <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </MagneticButton>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {showcaseProducts.map((product, idx) => (
                        <AnimatedSection key={product.id} animation="fade-up" delay={idx * 0.1}>
                            <div className="relative group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden h-full md:min-h-[450px]">
                                {/* Image Section - Clickable via Link */}
                                <Link to={`/products/${product.id}`} className="block relative h-32 md:h-64 overflow-hidden bg-slate-50/50 flex items-center justify-center border-b border-slate-100 group-hover:bg-white transition-colors duration-500 cursor-pointer">
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
                        </AnimatedSection>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <MagneticButton variant="outline" className="w-full">
                        View Products
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

export default SectionProducts;
