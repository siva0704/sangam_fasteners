import { Factory, History, MapPin, Settings2, Users2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const snapshotItems = [
    {
        icon: History,
        label: "Established",
        value: "Since 2000",
        subtext: "25+ Years of Excellence"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Hubballi, India",
        subtext: "Karnataka State"
    },
    {
        icon: Factory,
        label: "Business Type",
        value: "Manufacturing Unit",
        subtext: "Not a Trader"
    },
    {
        icon: Settings2,
        label: "Product Scope",
        value: "Industrial Fasteners",
        subtext: "Standard & Custom"
    },
    {
        icon: Users2,
        label: "Market Focus",
        value: "OEM & Engineering",
        subtext: "B2B Partnerships"
    }
];

const SectionCompanySnapshot = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50/50 border-b border-slate-100 overflow-hidden">
            {/* Ambient Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <AnimatedSection animation="fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {snapshotItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                                {/* Icon Container (Hexagon-ish look via masking or simpler circle with ring) */}
                                <div className="mb-5 relative">
                                    <div className="w-16 h-16 rounded-2xl rotate-45 bg-slate-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center shadow-inner">
                                        <div className="-rotate-45 text-accent group-hover:text-white transition-colors duration-300">
                                            <item.icon size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</h3>
                                    <p className="font-heading font-bold text-gray-900 text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-2 py-1 rounded-full group-hover:bg-slate-100 group-hover:text-accent transition-colors">
                                        {item.subtext}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SectionCompanySnapshot;
