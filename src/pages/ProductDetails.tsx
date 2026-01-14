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
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Seo
                title={`${product.name} | Sangam Fasteners`}
                description={product.longDescription || product.description}
            />

            <main className="flex-1">
                <div className="bg-slate-900 pt-32 pb-12 text-white">
                    <div className="container mx-auto px-4">
                        <Link to="/products" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6">
                            <ArrowLeft size={16} className="mr-2" /> Back to Catalog
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{product.name}</h1>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20">
                                {product.category}
                            </span>
                            {product.standards && (
                                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm backdrop-blur-sm border border-blue-500/30 text-blue-200">
                                    {product.standards}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <section className="py-16 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Image Gallery */}
                        <AnimatedSection animation="fade-right">
                            <div className="bg-white rounded-2xl p-2 shadow-xl border border-slate-100 overflow-hidden relative group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-black/10" />
                            </div>
                        </AnimatedSection>

                        {/* Details */}
                        <AnimatedSection animation="fade-left" delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full">
                                <h3 className="text-xl font-bold mb-4 text-slate-900 border-b border-slate-100 pb-4">
                                    Product Specifications
                                </h3>

                                <div className="space-y-6 mb-8">
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {product.longDescription || product.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2 text-slate-400">
                                                <ShieldCheck size={18} />
                                                <span className="text-xs font-bold uppercase tracking-wider">Material</span>
                                            </div>
                                            <p className="font-semibold text-slate-900">{product.material || "N/A"}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2 text-slate-400">
                                                <Ruler size={18} />
                                                <span className="text-xs font-bold uppercase tracking-wider">Standards</span>
                                            </div>
                                            <p className="font-semibold text-slate-900">{product.standards || "N/A"}</p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                                        <div className="flex items-center gap-2 mb-2 text-blue-500">
                                            <FileCheck size={18} />
                                            <span className="text-xs font-bold uppercase tracking-wider">Application</span>
                                        </div>
                                        <p className="text-slate-700 text-sm">
                                            Suitable for heavy engineering, infrastructure, automotive, and industrial applications requiring high precision and durability.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <ProductEnquiryForm productName={product.name} />
                                    <p className="text-center text-xs text-slate-400">
                                        Technical data sheets and drawings available on request.
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
