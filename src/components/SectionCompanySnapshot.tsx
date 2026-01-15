import { Factory, History, MapPin, Settings2, Users2, Globe2, Zap, ShieldCheck, Award, Clock, Star, Ship, Plane, Box, Truck, Heart, Handshake, UserCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SnapshotCard } from "@/components/ui/SnapshotCard";

const snapshotItems = [
    {
        icon: History,
        label: "Established",
        value: "Since 2000",
        subtext: "Since 2000",
        decorations: [Clock, Award, History, Star, Award],
        animationClass: "group-hover:animate-[pulse_1s_ease-in-out_1] group-[.is-active]:animate-[pulse_1s_ease-in-out_1]"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Hubballi, India",
        subtext: "Karnataka State",
        decorations: [MapPin, Globe2, Plane, Ship, MapPin],
        animationClass: "group-hover:animate-[bounce_1s_ease-in-out_1] group-[.is-active]:animate-[bounce_1s_ease-in-out_1]"
    },
    {
        icon: Factory,
        label: "Business Type",
        value: "Mfg. Unit",
        subtext: "Not a Trader",
        decorations: [Factory, Settings2, Box, Truck, Factory],
        animationClass: "group-hover:animate-[pulse_1s_ease-in-out_1] group-[.is-active]:animate-[pulse_1s_ease-in-out_1]"
    },
    {
        icon: Settings2,
        label: "Product Scope",
        value: "Fasteners",
        subtext: "Standard & Custom",
        decorations: [Settings2, Zap, ShieldCheck, Settings2, Zap],
        animationClass: "group-hover:animate-[pulse_1s_ease-in-out_1] group-[.is-active]:animate-[pulse_1s_ease-in-out_1]"
    },
    {
        icon: Users2,
        label: "Market Focus",
        value: "OEM & Engg.",
        subtext: "B2B Partnerships",
        decorations: [Users2, Handshake, Heart, UserCheck, Users2],
        animationClass: "group-hover:animate-[pulse_1s_ease-in-out_1] group-[.is-active]:animate-[pulse_1s_ease-in-out_1]"
    }
];

import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

const SectionCompanySnapshot = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isHovering) return; // Don't auto-switch if user is interacting

            const viewportCenter = window.innerHeight / 2;
            let minDistance = Infinity;
            let closestIndex: number | null = null;

            cardRefs.current.forEach((card, index) => {
                if (card) {
                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(viewportCenter - cardCenter);

                    // Check if card is roughly in view (within some reasonable range)
                    // and strictly find the closest one
                    if (distance < minDistance && distance < window.innerHeight * 0.4) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            setActiveIndex(closestIndex);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHovering]);

    return (
        <section className="relative py-10 bg-gradient-to-b from-white to-gray-50/50 border-b border-slate-100">
            {/* Ambient Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {snapshotItems.map((item, idx) => (
                        <CardStackItem key={idx} index={idx} total={snapshotItems.length}>
                            <AnimatedSection
                                animation="fade-up"
                                delay={idx + 1}
                            >
                                <SnapshotCard
                                    icon={item.icon}
                                    label={item.label}
                                    title={item.value}
                                    badgeText={item.subtext}
                                    decorations={item.decorations}
                                    animationClass={item.animationClass}
                                    isActive={idx === activeIndex}
                                    domRef={(el: HTMLDivElement | null) => cardRefs.current[idx] = el}
                                    onMouseEnter={() => {
                                        setActiveIndex(idx);
                                        setIsHovering(true);
                                    }}
                                    onMouseLeave={() => setIsHovering(false)}
                                />
                            </AnimatedSection>
                        </CardStackItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionCompanySnapshot;
