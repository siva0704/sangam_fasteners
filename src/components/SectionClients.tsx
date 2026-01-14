import { useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, Trophy, Users, Globe2, Pickaxe, Zap, Anchor, TrainFront, Heart, ThumbsUp, Shield, Award, Star, MapPin, Plane, UserCheck } from "lucide-react";

type Client = {
    name: string;
    type: string;
    logo?: string;
    icon?: any;
};

const clients: Client[] = [
    {
        name: "BHEL",
        type: "Energy & Infrastructure",
        logo: "/sangam_fasteners/assets/clients/bhel.png"
    },
    {
        name: "BEML",
        type: "Heavy Industry",
        logo: "/sangam_fasteners/assets/clients/beml.png"
    },
    {
        name: "Ashok Leyland",
        type: "Automotive OEM",
        logo: "/sangam_fasteners/assets/clients/ashok_leyland.png"
    },
    {
        name: "Indian Railways",
        type: "Transportation",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/45/Indian_Railways_logo.svg"
    },
    {
        name: "Mining Companies",
        type: "Extractives",
        icon: Pickaxe
    },
    {
        name: "Power Plants",
        type: "Energy Sector",
        icon: Zap
    },
    {
        name: "Valve Industries",
        type: "Fluid Control",
        icon: Anchor
    },
    {
        name: "Metro Rails",
        type: "Urban Transit",
        icon: TrainFront
    },
];

const stats = [
    {
        label: "Client Satisfaction",
        value: "100%",
        icon: Users,
        description: "Delivering excellence that builds lasting partnerships.",
        decorations: [Heart, ThumbsUp, UserCheck, Users, Heart],
        animationClass: "group-hover:animate-[pulse_2s_ease-in-out_1]"
    },
    {
        label: "Quality Certified",
        value: "ISO 9001",
        icon: CheckCircle2,
        description: "Adhering to strict international manufacturing standards.",
        decorations: [Shield, Award, Star, CheckCircle2, Shield],
        animationClass: "group-hover:scale-110 duration-500 ease-out"
    },
    {
        label: "Market Presence",
        value: "Global",
        icon: Globe2,
        description: "Serving diverse industries across multiple continents.",
        decorations: [MapPin, Plane, Globe2, MapPin, Plane],
        animationClass: "group-hover:rotate-[360deg] duration-700"
    },
];

const SectionClients = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;
        const scrollerContent = scrollerRef.current.querySelector(".scroller-inner");
        if (scrollerContent) {
            const scrollerContentArray = Array.from(scrollerContent.children);
            scrollerContentArray.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                duplicatedItem.setAttribute("aria-hidden", "true");
                scrollerContent.appendChild(duplicatedItem);
            });
        }
    }, []);

    // Helper to get varied positions and sizes based on index
    const getDecorationStyle = (i: number) => {
        // Directed towards the open space (Right) - increased range to fill the card
        const translations = [
            "group-hover:translate-x-[140px] group-hover:-translate-y-[80px] group-hover:rotate-12", // Top Right
            "group-hover:translate-x-[140px] group-hover:translate-y-[80px] group-hover:-rotate-12",  // Bottom Right
            "group-hover:-translate-x-[140px] group-hover:translate-y-[80px]",      // Bottom Left
            "group-hover:-translate-x-[140px] group-hover:-translate-y-[80px] group-hover:rotate-45",  // Top Left
            "group-hover:translate-y-[100px]"    // Bottom Center (far down)
        ];

        const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
        const sizes = [
            "text-blue-400/60 w-8 h-8",   // 0 (Large)
            "text-sky-400/80 w-4 h-4",      // 1 (Medium)
            "text-blue-300/80 w-3 h-3",   // 2 (Small)
            "text-sky-300/60 w-6 h-6",      // 3 (Large)
            "text-blue-200/80 w-3 h-3"    // 4 (Small)
        ];

        return {
            translate: translations[i % translations.length],
            delay: delays[i % delays.length],
            size: sizes[i % sizes.length]
        };
    };

    return (
        <section className="pt-10 pb-20 bg-white border-b border-border/40 overflow-hidden">
            <div className="container px-4 mx-auto">
                <AnimatedSection animation="fade-up">
                    {/* Horizontal Stats Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 border-b border-gray-100 pb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center p-5 rounded-xl transition-all duration-500 hover:shadow-sm border border-transparent hover:border-blue-50 group cursor-default overflow-hidden isolate justify-center h-[220px]">

                                {/* Spreading Background Animation */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-blue-50/50 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000 ease-out -z-10" />

                                {/* Bold Glowing Graphic */}
                                <div className="absolute -right-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100 z-0 pointer-events-none">
                                    <div className="relative">
                                        <stat.icon
                                            size={90}
                                            strokeWidth={0.5}
                                            className="text-blue-500/10 -rotate-12"
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
                                <div className="mb-3 text-slate-400 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                                    <stat.icon size={36} strokeWidth={1.5} className={`transition-transform duration-300 ${stat.animationClass}`} />
                                </div>

                                <h4 className="text-4xl font-bold font-heading text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 transition-all duration-300 relative z-10">
                                    {stat.value}
                                </h4>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-0 group-hover:mb-1 transition-all duration-300 relative z-10">
                                    {stat.label}
                                </p>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out relative z-10 w-full">
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

                    {/* Infinite Scroll Logos */}
                    <div
                        ref={scrollerRef}
                        className="relative max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                    >
                        <div className="scroller-inner flex items-center gap-16 py-8 w-max animate-scroll">
                            {clients.map((client, idx) => (
                                client.logo ? (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center justify-center min-w-[160px] h-[100px] transition-all duration-300 group cursor-pointer relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                                    >
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500"
                                        />
                                    </div>
                                ) : null
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            <style>{`
                .animate-scroll {
                    animation: scroll 80s linear infinite;
                }
                @keyframes scroll {
                    to {
                        transform: translate(calc(-50% - 1.5rem));
                    }
                }
            `}</style>
        </section>
    );
};

export default SectionClients;
