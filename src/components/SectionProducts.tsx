import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Card } from "./ui/card";

const products = [
    {
        category: "Bolts & Hex Bolts",
        spec: "Structural & mechanical assemblies",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop",
        id: "bolts"
    },
    {
        category: "Nuts",
        spec: "Controlled thread engagement",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
        id: "nuts"
    },
    {
        category: "Studs & Double-Ended Studs",
        spec: "Alignment-critical applications",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
        id: "studs"
    },
    {
        category: "U-Bolts",
        spec: "Clamping & mounting requirements",
        image: "https://images.unsplash.com/photo-1536617063469-6f34582f3ef4?q=80&w=800&auto=format&fit=crop",
        id: "u-bolts"
    },
    {
        category: "Threaded Components",
        spec: "Drawing-based OEM parts",
        image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78?q=80&w=800&auto=format&fit=crop",
        id: "threaded-components"
    },
    {
        category: "Custom Fasteners",
        spec: "As per specifications",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop",
        id: "custom-fasteners"
    }
];

const SectionProducts = () => {
    return (
        <section className="py-24 bg-secondary/30" id="products">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2 gap-8">
                    <AnimatedSection animation="fade-right" className="max-w-2xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                            Our Products
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4 leading-tight">
                            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Precision</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our comprehensive range of fasteners meets the rigorous standards of global industries.
                            Available in various grades, materials, and finishes.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-left" delay={0.2} className="shrink-0">
                        <MagneticButton size="lg" variant="outline" className="hidden md:flex items-center gap-2 group text-primary border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
                            View Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </MagneticButton>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, idx) => (
                        <AnimatedSection key={product.id} animation="fade-up" delay={idx * 0.1}>
                            <Card className="group relative overflow-hidden h-[360px] cursor-pointer border-0 shadow-sm hover:shadow-elegant transition-all duration-500 bg-white">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={product.image}
                                        alt={product.category}
                                        className="w-full h-full object-cover transition-transform duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                                </div>

                                <div className="relative z-10 h-full flex flex-col justify-end p-6 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-[2px] bg-accent mb-4 origin-left transition-all duration-500 w-full md:w-12 md:group-hover:w-full" />
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.category}</h3>
                                    <p className="text-accent-foreground/80 font-mono text-sm tracking-wide mb-4">
                                        {product.spec}
                                    </p>
                                    <div className="overflow-hidden h-auto md:h-0 md:group-hover:h-auto transition-all duration-500">
                                        <span className="text-sm text-white/90 inline-flex items-center gap-2">
                                            View Specs <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Card>
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
