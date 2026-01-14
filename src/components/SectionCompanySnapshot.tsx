import { Factory, History, MapPin, Settings2, Users2, Globe2, Zap, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const snapshotItems = [
    {
        icon: History,
        label: "Established",
        value: "Since 2000",
        subtext: "25+ Years of Excellence",
        decorations: [History, Factory, Settings2, History, Factory]
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Hubballi, India",
        subtext: "Karnataka State",
        decorations: [MapPin, Globe2, Factory, MapPin, Globe2]
    },
    {
        icon: Factory,
        label: "Business Type",
        value: "Manufacturing Unit",
        subtext: "Not a Trader",
        decorations: [Factory, Settings2, Zap, Factory, Settings2]
    },
    {
        icon: Settings2,
        label: "Product Scope",
        value: "Industrial Fasteners",
        subtext: "Standard & Custom",
        decorations: [Settings2, Zap, ShieldCheck, Settings2, Zap]
    },
    {
        icon: Users2,
        label: "Market Focus",
        value: "OEM & Engineering",
        subtext: "B2B Partnerships",
        decorations: [Users2, MapPin, Globe2, Users2, MapPin]
    }
];

const SectionCompanySnapshot = () => {
    // Helper to get varied positions and sizes based on index
    const getDecorationStyle = (i: number) => {
        const translations = [
            "group-hover:translate-x-[80px] group-hover:-translate-y-[60px]", // Top Right
            "group-hover:-translate-x-[80px] group-hover:translate-y-[60px]", // Bottom Left
            "group-hover:-translate-x-[100px] group-hover:translate-y-0",     // Left
            "group-hover:translate-x-[60px] group-hover:translate-y-[50px]",   // Bottom Right
            "group-hover:-translate-x-[60px] group-hover:-translate-y-[50px]"  // Top Left
        ];

        const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
        const sizes = [
            "text-blue-400 w-5 h-5",   // 0 (Large)
            "text-sky-400 w-3 h-3",      // 1 (Medium)
            "text-blue-300 w-2.5 h-2.5",   // 2 (Small)
            "text-sky-300 w-4 h-4",      // 3 (Medium-Large)
            "text-blue-200 w-2.5 h-2.5"    // 4 (Small)
        ];

        return {
            translate: translations[i % translations.length],
            delay: delays[i % delays.length],
            size: sizes[i % sizes.length]
        };
    };

    return (
        <section className="relative py-10 bg-gradient-to-b from-white to-gray-50/50 border-b border-slate-100">
            {/* Ambient Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {snapshotItems.map((item, idx) => (
                        <AnimatedSection
                            key={idx}
                            animation="fade-up"
                            delay={idx + 1}
                            className={`sticky md:relative top-[calc(15vh+${idx * 15}px)] md:top-auto z-${idx * 10}`}
                        >
                            <div className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-[280px] flex flex-col justify-between items-center text-center isolate">

                                {/* Dynamically Blooming Decorations */}
                                {item.decorations.map((DecoIcon, i) => {
                                    const style = getDecorationStyle(i);
                                    return (
                                        <div
                                            key={i}
                                            className={`absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-60 group-hover:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                                        >
                                            <DecoIcon className={`text-blue-300 ${style.size}`} />
                                        </div>
                                    );
                                })}

                                {/* Top Content */}
                                <div className="w-full flex flex-col items-center relative">
                                    <div className="relative mb-6">
                                        {/* Main Icon Container - Glowing Effect */}
                                        <div className={`p-5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] ring-1 ring-slate-100 group-hover:ring-blue-100 relative z-20`}>
                                            <item.icon size={36} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out fill-blue-50/0 group-hover:fill-blue-50" />
                                        </div>
                                    </div>

                                    <div className="space-y-3 relative z-20">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 transition-colors duration-300">{item.label}</p>
                                        <h3 className="text-2xl font-bold text-slate-900 leading-none transition-colors duration-300">
                                            {item.value}
                                        </h3>
                                    </div>
                                </div>

                                {/* Bottom Pill - Animated */}
                                <div className="relative z-20 mt-2 w-full flex justify-center">
                                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50/50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:tracking-[0.25em] group-hover:bg-white/80 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-500 shrink-0" />
                                        <span className="whitespace-nowrap">{item.subtext}</span>
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionCompanySnapshot;
