import { CheckCircle2, Trophy, Users, Globe2, Pickaxe, Zap, Anchor, TrainFront, Heart, ThumbsUp, Shield, Award, Star, MapPin, Plane, UserCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type Client = {
    name: string;
    type: string;
    logo?: string;
    icon?: any;
    className?: string;
};

const clients: Client[] = [
    {
        name: "Ashok Leyland",
        type: "Automotive OEM",
        logo: "https://www.ashokleyland.com/pwa/img/FE/Ashok-Leyland-Brand-Logo.svg",
        className: "h-5 md:h-24 w-auto"
    },
    {
        name: "Indian Railways",
        type: "Transportation",
        logo: "/sangam_fasteners/assets/clients/indian_railways_new.png",
        className: "h-9 md:h-28 w-auto scale-110"
    },
    {
        name: "BHEL",
        type: "Energy & Infrastructure",
        logo: "/sangam_fasteners/assets/clients/bhel_new.png",
        className: "h-7 md:h-24 w-auto"
    },
    {
        name: "BEML",
        type: "Heavy Industry",
        logo: "/sangam_fasteners/assets/clients/beml.png",
        className: "h-5 md:h-20 w-auto"
    }
];

const stats = [
    {
        label: "Client Satisfaction",
        value: "100%",
        icon: Users,
        description: "Delivering excellence that builds lasting partnerships.",
        decorations: [Heart, ThumbsUp, UserCheck, Users, Heart, Star, ThumbsUp],
        animationClass: "group-hover:animate-[pulse_2s_ease-in-out_1]"
    },
    {
        label: "Quality Certified",
        value: "ISO 9001",
        icon: CheckCircle2,
        description: "Adhering to strict international manufacturing standards.",
        decorations: [Shield, Award, Star, CheckCircle2, Shield, Trophy, Award],
        animationClass: "group-hover:scale-110 duration-500 ease-out"
    },
    {
        label: "Market Presence",
        value: "Global",
        icon: Globe2,
        description: "Serving diverse industries across multiple continents.",
        decorations: [MapPin, Plane, Globe2, MapPin, Plane, Globe2, MapPin],
        animationClass: "group-hover:rotate-[360deg] duration-700"
    },
];

const SectionClients = () => {
    // Helper to get varied positions and sizes based on index
    const getDecorationStyle = (i: number) => {
        // Directed towards the open space (Right) - increased range to fill the card
        const translations = [
            "group-hover:translate-x-[140px] group-hover:-translate-y-[80px] group-hover:rotate-12", // Top Right
            "group-hover:translate-x-[140px] group-hover:translate-y-[80px] group-hover:-rotate-12",  // Bottom Right
            "group-hover:-translate-x-[140px] group-hover:translate-y-[80px]",      // Bottom Left
            "group-hover:-translate-x-[140px] group-hover:-translate-y-[80px] group-hover:rotate-45",  // Top Left
            "group-hover:translate-y-[100px]",    // Bottom Center (far down)
            "group-hover:translate-x-[80px] group-hover:translate-y-[0px] group-hover:rotate-90", // Right Center
            "group-hover:-translate-x-[80px] group-hover:-translate-y-[0px] group-hover:-rotate-45" // Left Center
        ];

        const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300", "delay-75", "delay-150"];
        const sizes = [
            "text-blue-400/30 w-8 h-8",   // 0 (Large) - Reduced opacity
            "text-sky-400/40 w-4 h-4",      // 1 (Medium) - Reduced opacity
            "text-blue-300/40 w-3 h-3",   // 2 (Small) - Reduced opacity
            "text-sky-300/30 w-6 h-6",      // 3 (Large) - Reduced opacity
            "text-blue-200/40 w-3 h-3",    // 4 (Small) - Reduced opacity
            "text-indigo-300/30 w-5 h-5",  // 5 (Medium) - New
            "text-slate-300/40 w-2 h-2"     // 6 (Tiny) - New
        ];

        return {
            translate: translations[i % translations.length],
            delay: delays[i % delays.length],
            size: sizes[i % sizes.length]
        };
    };

    return (
        <section className="pt-10 pb-16 bg-white border-b border-border/40 overflow-hidden">
            <div className="container px-4 mx-auto">
                <AnimatedSection animation="fade-up">
                    {/* Horizontal Stats Layout - 3 items in a row always */}
                    <div className="grid grid-cols-3 gap-3 md:gap-6 mb-16 border-b border-gray-100 pb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center p-2 md:p-5 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 border border-transparent hover:border-blue-300 group cursor-default overflow-hidden isolate justify-center h-[160px] md:h-[220px]">

                                {/* Spreading Background Animation */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-blue-50/50 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000 ease-out -z-10" />

                                {/* Bold Glowing Graphic */}
                                <div className="absolute -right-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100 z-0 pointer-events-none">
                                    <div className="relative">
                                        <stat.icon
                                            size={60}
                                            strokeWidth={0.5}
                                            className="text-blue-500/10 -rotate-12 md:w-[90px] md:h-[90px]"
                                        />
                                    </div>
                                </div>

                                {/* Dynamically Blooming Decorations */}
                                {stat.decorations.map((DecoIcon, i) => {
                                    const style = getDecorationStyle(i);
                                    return (
                                        <div
                                            key={i}
                                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                                        >
                                            <DecoIcon className={`${style.size}`} />
                                        </div>
                                    );
                                })}

                                {/* Icon - Clean and Centered */}
                                <div className="mb-2 md:mb-3 text-slate-400 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                                    <stat.icon size={24} strokeWidth={1.5} className={`transition-transform duration-300 ${stat.animationClass} md:w-9 md:h-9`} />
                                </div>

                                <h4 className="text-xl md:text-4xl font-bold font-heading text-slate-900 mb-1 md:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 transition-all duration-300 relative z-10">
                                    {stat.value}
                                </h4>
                                <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wide md:tracking-widest mb-0 group-hover:mb-1 transition-all duration-300 relative z-10 leading-tight">
                                    {stat.label}
                                </p>
                                <div className="hidden md:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out relative z-10 w-full">
                                    <p className="overflow-hidden text-xs text-slate-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mx-auto max-w-[220px] leading-tight pt-1">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">
                            Our Partnerships
                        </span>
                        <h2 className="text-3xl font-heading font-bold text-gray-900">
                            Trusted by Industry Leaders
                        </h2>
                    </div>

                    {/* Unified Static 4-Column Logo Grid for All Screens */}
                    <div className="grid grid-cols-4 gap-2 md:gap-12 items-center justify-items-center max-w-6xl mx-auto px-1">
                        {clients.map((client, idx) => (
                            <div
                                key={idx}
                                className="w-full flex items-center justify-center p-1 md:p-4 grayscale hover:grayscale-0 opacity-80 md:opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-105"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className={`${client.className || 'h-6 md:h-10 w-auto'} object-contain transition-all duration-500`}
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SectionClients;
