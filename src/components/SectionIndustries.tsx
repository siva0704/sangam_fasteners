import { industries } from "@/constants/data";
import {
    Wrench, HardHat, Truck, Cpu, Gauge, Fuel, Zap,
    BrickWall, Cone, FileCog, Scroll, PenTool,
    Weight, Container, Hexagon, Cog, Settings2, Hammer, Factory, Car, Building2, Settings
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useMobileInView } from "@/hooks/use-mobile-in-view";
import { SnapshotCard } from "@/components/ui/SnapshotCard";
import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

const SectionIndustries = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isHovering) return;
            const viewportCenter = window.innerHeight / 2;
            let minDistance = Infinity;
            let closestIndex: number | null = null;

            cardRefs.current.forEach((card, index) => {
                if (card) {
                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(viewportCenter - cardCenter);

                    if (distance < minDistance && distance < window.innerHeight * 0.4) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            setActiveIndex(closestIndex);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHovering]);

    return (
        <section className="py-10 bg-secondary/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-secondary/20 to-secondary/40">
            <div className="container px-4 mx-auto text-center">
                <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 text-accent font-bold text-sm uppercase mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-16">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Serve</span>
                    </h2>
                </AnimatedSection>

                <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-center pb-8 sm:pb-0">
                    {industries.map((industry, idx) => {
                        // Varied related icons for each industry
                        const relatedIconsMap: any = {
                            "general-engineering": [Wrench, Hexagon, Cog, Settings2, Wrench],
                            "infrastructure": [Cone, HardHat, BrickWall, Truck, Building2],
                            "automotive": [Gauge, Fuel, Car, Zap, Wrench],
                            "heavy-engineering": [Hammer, Weight, Factory, Container, Truck],
                            "oem": [FileCog, Scroll, PenTool, Cpu, Settings]
                        };

                        const currentIcons = relatedIconsMap[industry.id] || [industry.icon, industry.icon, industry.icon, industry.icon, industry.icon];

                        return (
                            <CardStackItem key={idx} index={idx} total={industries.length}>
                                <AnimatedSection
                                    animation="scale-in"
                                    delay={idx * 0.1}
                                    className="h-full"
                                >
                                    <SnapshotCard
                                        icon={industry.icon}
                                        label={industry.id.replace(/-/g, " ")}
                                        title={industry.name}
                                        badgeText={industry.detail}
                                        decorations={currentIcons}
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SectionIndustries;
