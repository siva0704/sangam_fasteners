import { useState } from "react";
import { ArrowRight, Drill, Zap, ShieldCheck, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import ProductEnquiryForm from "./ProductEnquiryForm";
import { products } from "@/constants/data";
import { Link } from "react-router-dom";

// Extract categories dynamically
const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const SectionProducts = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = products.filter(
        (product) => activeCategory === "All" || product.category === activeCategory
    );

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0f1c] dark:to-[#0f172a] relative overflow-hidden transition-colors duration-500" id="products">
            {/* Deep Industrial Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-white to-white dark:from-blue-900/10 dark:via-[#0a0f1c] dark:to-[#0a0f1c] pointer-events-none" />
            <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 w-full max-w-7xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-slate-200 dark:border-slate-800 pb-12 relative">
                    <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-cyan-500" />

                    <div className="max-w-2xl">
                        <AnimatedSection animation="fade-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-2 w-2 rounded-none bg-cyan-500 animate-pulse" />
                                <span className="inline-block text-cyan-600 dark:text-cyan-400 font-mono text-sm uppercase tracking-[0.2em] font-bold">
                                    Engineered Solutions
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] uppercase">
                                Appliance-Grade <br />
                                <span className="text-cyan-600 dark:text-cyan-400">
                                    Precision Shafts
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-xl">
                                Engineered specifically for high-RPM direct drive motors, belt-drive assemblies, and industrial washers with zero-tolerance precision.
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection animation="fade-left" className="flex-shrink-0">
                        <div className="grid grid-cols-3 gap-8 text-center bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 p-8 rounded-none shadow-[8px_8px_0px_rgba(15,23,42,0.1)] dark:shadow-[8px_8px_0px_rgba(6,182,212,0.2)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div>
                                <Drill className="w-7 h-7 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
                                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">HRC 55+</div>
                                <div className="text-[10px] text-slate-500 font-mono mt-1">HARDNESS</div>
                            </div>
                            <div className="border-x-2 border-slate-100 dark:border-slate-800 px-8">
                                <Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
                                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">4000 RPM</div>
                                <div className="text-[10px] text-slate-500 font-mono mt-1">VELOCITY</div>
                            </div>
                            <div>
                                <ShieldCheck className="w-7 h-7 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
                                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">ISO 9001</div>
                                <div className="text-[10px] text-slate-500 font-mono mt-1">CERTIFIED</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Category Filters */}
                <AnimatedSection animation="fade-up" delay={0.2}>
                    <div className="flex flex-wrap items-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border-2 rounded-none ${activeCategory === category
                                        ? "bg-cyan-500 text-white border-cyan-500 shadow-[4px_4px_0px_rgba(15,23,42,0.2)] dark:shadow-[4px_4px_0px_rgba(6,182,212,0.3)] translate-y-[-2px]"
                                        : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_rgba(15,23,42,0.05)] dark:hover:shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Brutalist Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                                key={product.id}
                                className="group relative flex flex-col bg-white dark:bg-[#0b1221] border-2 border-slate-200 dark:border-slate-800 rounded-none overflow-hidden h-full transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-[8px_8px_0px_rgba(15,23,42,0.1)] dark:hover:shadow-[8px_8px_0px_rgba(6,182,212,0.2)] hover:-translate-y-1 isolate"
                            >
                                {/* Image Section */}
                                <div className="relative h-72 bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center p-10 overflow-hidden border-b-2 border-slate-100 dark:border-slate-800/50">
                                    {/* Tech Grid Background (Sharp lines) */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:2rem_2rem] opacity-50" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-700 dark:text-cyan-400 bg-white dark:bg-slate-900 border-2 border-cyan-500/30 px-3 py-1.5 rounded-none uppercase tracking-widest shadow-sm">
                                            {product.category === "New Developments" && <Target className="w-3 h-3 text-cyan-500" />}
                                            {product.material.split(' ')[0]} Alloy
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
                                        {/* Crosshair corners */}
                                        <div className="absolute top-4 left-4 w-4 h-[2px] bg-cyan-500" />
                                        <div className="absolute top-4 left-4 w-[2px] h-4 bg-cyan-500" />
                                        <div className="absolute bottom-4 right-4 w-4 h-[2px] bg-cyan-500" />
                                        <div className="absolute bottom-4 right-4 w-[2px] h-4 bg-cyan-500" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 pt-6 flex-1 flex flex-col relative z-20">
                                    <div className="mb-5">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-bold font-mono">
                                                {product.standards}
                                            </div>
                                            <div className="w-12 h-[2px] bg-slate-200 dark:bg-slate-700 group-hover:bg-cyan-500 transition-colors" />
                                        </div>
                                        <h3 className="text-2xl font-black font-heading text-slate-900 dark:text-white uppercase transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1 font-medium block">
                                        {product.description}
                                    </p>

                                    {/* Footer / Actions */}
                                    <div className="mt-auto pt-6 border-t-2 border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                        <div onClick={(e) => e.stopPropagation()} className="relative z-50 w-full">
                                            <ProductEnquiryForm productName={product.name} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Footer CTA */}
                <div className="mt-20 text-center relative z-20">
                    <AnimatedSection animation="fade-up" delay={0.4}>
                        <Link to="/contact">
                            <MagneticButton variant="outline" className="group border-2 border-slate-900 dark:border-slate-600 text-slate-900 dark:text-white bg-transparent hover:bg-slate-900 hover:text-white dark:hover:bg-cyan-500 dark:hover:border-cyan-500 px-10 py-6 rounded-none transition-all duration-300 overflow-hidden relative shadow-[6px_6px_0px_rgba(15,23,42,0.1)] hover:shadow-none hover:translate-y-[6px] hover:translate-x-[6px] dark:shadow-[6px_6px_0px_rgba(6,182,212,0.15)] dark:hover:shadow-none font-bold uppercase tracking-wider text-sm">
                                <span className="relative z-10 flex items-center">
                                    REQUEST CUSTOM SPECIFICATIONS
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </MagneticButton>
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default SectionProducts;

