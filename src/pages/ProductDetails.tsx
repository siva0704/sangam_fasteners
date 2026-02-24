import { useParams, Link } from "react-router-dom";
import { products } from "@/constants/data";
import { PageHero } from "@/components/sections/PageHero";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, CheckCircle2, ShieldCheck, Ruler, FileCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                    <Link to="/products" className="text-blue-600 hover:underline">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#050814] font-sans transition-colors duration-500">
            <Seo
                title={`${product.name} | Sangam Shaft & Machine Components`}
                description={product.description}
            />

            <main className="flex-1">
                <div className="bg-slate-900 dark:bg-[#080d1a] pt-32 pb-12 text-white border-b-2 border-slate-800 transition-colors duration-500">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <Link to="/products" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 font-bold uppercase tracking-widest text-xs transition-colors mb-8 group">
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> BACK TO CATALOG
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight mb-6 uppercase text-white drop-shadow-md">
                            {product.name}
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 font-bold uppercase tracking-widest text-xs rounded-none backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                                {product.category}
                            </span>
                            {product.standards && (
                                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-widest text-xs rounded-none backdrop-blur-sm shadow-[4px_4px_0px_rgba(6,182,212,0.15)]">
                                    {product.standards}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-[#050814] dark:to-[#0a0f1c] container mx-auto px-4 max-w-7xl transition-colors duration-500">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image Gallery - Brutalist Style */}
                        <AnimatedSection animation="fade-right">
                            <div className="bg-white dark:bg-[#0b1221] p-8 border-2 border-slate-200 dark:border-slate-800 overflow-hidden relative group shadow-[12px_12px_0px_rgba(15,23,42,0.1)] dark:shadow-[12px_12px_0px_rgba(6,182,212,0.2)] transition-colors duration-500">
                                {/* Tech Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:2rem_2rem] opacity-50 pointer-events-none" />

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[400px] md:h-[500px] object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-[700ms] ease-out drop-shadow-xl mix-blend-multiply dark:mix-blend-screen"
                                />

                                {/* Brutalist Crosshairs */}
                                <div className="absolute top-4 left-4 w-6 h-[2px] bg-cyan-500" />
                                <div className="absolute top-4 left-4 w-[2px] h-6 bg-cyan-500" />
                                <div className="absolute bottom-4 right-4 w-6 h-[2px] bg-cyan-500" />
                                <div className="absolute bottom-4 right-4 w-[2px] h-6 bg-cyan-500" />
                            </div>
                        </AnimatedSection>

                        {/* Details - High Contrast Industrial */}
                        <AnimatedSection animation="fade-left" delay={0.2}>
                            <div className="bg-white dark:bg-[#0b1221] p-8 md:p-12 border-2 border-slate-200 dark:border-slate-800 shadow-[12px_12px_0px_rgba(15,23,42,0.1)] dark:shadow-[12px_12px_0px_rgba(6,182,212,0.1)] h-full transition-colors duration-500 relative">
                                {/* Decorative line */}
                                <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />

                                <h3 className="text-2xl font-black font-heading mb-6 text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-800 pb-4 uppercase tracking-tight">
                                    Product Specifications
                                </h3>

                                <div className="space-y-8 mb-10">
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                                        {product.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 relative group overflow-hidden transition-colors">
                                            <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                                            <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400">
                                                <ShieldCheck size={20} />
                                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Material</span>
                                            </div>
                                            <p className="font-bold text-slate-900 dark:text-white uppercase">{product.material || "N/A"}</p>
                                        </div>
                                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 relative group overflow-hidden transition-colors">
                                            <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                                            <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400">
                                                <Ruler size={20} />
                                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Standards</span>
                                            </div>
                                            <p className="font-bold text-slate-900 dark:text-white uppercase">{product.standards || "N/A"}</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-cyan-50 dark:bg-cyan-900/10 border-2 border-cyan-200 dark:border-cyan-900/30">
                                        <div className="flex items-center gap-2 mb-3 text-cyan-700 dark:text-cyan-400">
                                            <FileCheck size={20} />
                                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Application Scope</span>
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                            Suitable for heavy engineering, infrastructure, automotive, and industrial applications requiring high precision and durability.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 pt-8 border-t-2 border-slate-200 dark:border-slate-800">
                                    <ProductEnquiryForm productName={product.name} />
                                    <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest bg-slate-50 dark:bg-slate-900 py-3 border border-slate-200 dark:border-slate-800">
                                        <span className="inline-block w-2 h-2 bg-green-500 mr-2 rounded-full animate-pulse" />
                                        Technical data sheets available on request.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
