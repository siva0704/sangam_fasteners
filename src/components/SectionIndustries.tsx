import { Building2, Settings, Hammer, Car, Factory } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Card } from "./ui/card";

const industries = [
    {
        icon: Settings,
        name: "General Engineering",
        description: "Reliable fasteners for diverse engineering applications.",
        detail: "Standard bolts, nuts, washers"
    },
    {
        icon: Building2,
        name: "Infrastructure & Construction",
        description: "High-strength structural fasteners for core infrastructure.",
        detail: "Foundation bolts, structural assemblies"
    },
    {
        icon: Car,
        name: "Automotive & Auto Components",
        description: "Precision-engineered parts for automotive assembly.",
        detail: "Axel studs, chassis fasteners"
    },
    {
        icon: Hammer,
        name: "Heavy Engineering",
        description: "Robust components for heavy machinery and equipment.",
        detail: "Large diameter bolts, double-ended studs"
    },
    {
        icon: Factory,
        name: "OEM Manufacturing",
        description: "Custom solutions for original equipment manufacturers.",
        detail: "Drawing-based parts, special alloys"
    },
];

const SectionIndustries = () => {
    return (
        <section className="py-24 bg-secondary/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-secondary/20 to-secondary/40">
            <div className="container px-4 mx-auto text-center">
                <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-16">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Serve</span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
                    {industries.map((industry, idx) => (
                        <AnimatedSection key={idx} animation="scale-in" delay={idx * 0.1}>
                            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full">
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                                {/* Icon Container - Diamond Shape */}
                                <div className="mb-5 relative">
                                    <div className="w-16 h-16 rounded-2xl rotate-45 bg-slate-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center shadow-inner">
                                        <div className="-rotate-45 text-accent group-hover:text-white transition-colors duration-300">
                                            <industry.icon size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2 flex flex-col items-center flex-1 w-full">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        INDUSTRY
                                    </h3>
                                    <p className="font-heading font-bold text-gray-900 text-lg leading-tight group-hover:text-accent transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                                        {industry.name}
                                    </p>

                                    {/* Description as Subtext/Pill */}
                                    <div className="mt-auto pt-2">
                                        <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-3 py-1.5 rounded-full group-hover:bg-slate-100 group-hover:text-accent transition-colors line-clamp-1 max-w-full">
                                            {industry.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionIndustries;
