import { useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, Trophy, Users, Globe2, Pickaxe, Zap, Anchor, TrainFront } from "lucide-react";

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
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BHEL_logo.svg"
    },
    {
        name: "BEML",
        type: "Heavy Industry",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bharat_Earth_Movers_Logo.svg"
    },
    {
        name: "Ashok Leyland",
        type: "Automotive OEM",
        logo: "https://static.cdnlogo.com/logos/a/69/ashok-leyland.svg"
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
    { label: "Client Satisfaction", value: "100%", icon: Users },
    { label: "Quality Certified", value: "ISO 9001", icon: CheckCircle2 },
    { label: "Market Presence", value: "Global", icon: Globe2 },
    { label: "Industry Experience", value: "25+ Years", icon: Trophy },
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

    return (
        <section className="py-20 bg-white border-b border-border/40 overflow-hidden">
            <div className="container px-4 mx-auto">
                <AnimatedSection animation="fade-up">
                    {/* Horizontal Stats Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-gray-100 pb-12">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                                <div className="mb-3 p-3 bg-slate-50 rounded-full text-accent group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon size={24} />
                                </div>
                                <h4 className="text-3xl font-bold font-heading text-gray-900 mb-1 group-hover:text-accent transition-colors">
                                    {stat.value}
                                </h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </p>
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
                        <div className="scroller-inner flex items-center gap-12 py-4 w-max animate-scroll">
                            {clients.map((client, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center min-w-[200px] h-[120px] bg-white rounded-lg border border-gray-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer px-8 relative"
                                >
                                    {client.logo ? (
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-accent transition-colors duration-300">
                                            {client.icon && <client.icon size={32} strokeWidth={1.5} />}
                                            <span className="text-sm font-bold text-center">{client.name}</span>
                                        </div>
                                    )}

                                    <span className="absolute bottom-2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {client.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            <style>{`
                .animate-scroll {
                    animation: scroll 40s linear infinite;
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
