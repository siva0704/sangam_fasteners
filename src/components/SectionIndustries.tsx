import { industries } from "@/constants/data";
import {
    Wrench, HardHat, Truck, Cpu, Gauge, Fuel, Zap,
    BrickWall, Cone, FileCog, Scroll, PenTool,
    Weight, Container, Hexagon, Cog, Settings2, Hammer, Factory, Car, Building2, Settings
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useMobileInView } from "@/hooks/use-mobile-in-view";

const IndustryCard = ({ industry, getDecorationStyle, currentIcons, isActive, domRef }: any) => {
    return (
        <div
            ref={domRef}
            className={`group ${isActive ? "is-active" : ""} relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between items-center text-center isolate`}
        >
            {/* Decorations using context-aware icons */}
            {currentIcons.map((Icon: any, i: number) => {
                const style = getDecorationStyle(i);
                return (
                    <div
                        key={i}
                        className={`absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-90 group-hover:scale-100 group-[.is-active]:opacity-90 group-[.is-active]:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                    >
                        <Icon className={`text-blue-300 ${style.size}`} />
                    </div>
                );
            })}

            {/* Top Content */}
            <div className="w-full flex flex-col items-center relative">
                <div className="relative mb-6">
                    {/* Main Icon Container - Glowing Effect, Rounded Square */}
                    <div className={`p-5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-blue-600 group-[.is-active]:bg-white group-[.is-active]:text-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] group-[.is-active]:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] ring-1 ring-slate-100 group-hover:ring-blue-100 group-[.is-active]:ring-blue-100 relative z-20`}>
                        <industry.icon size={36} strokeWidth={1.5} className="group-hover:scale-110 group-[.is-active]:scale-110 group-hover:-translate-y-1 group-[.is-active]:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] fill-blue-50/0 group-hover:fill-blue-50 group-[.is-active]:fill-blue-50" />
                    </div>
                </div>

                <div className="space-y-3 relative z-20">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 group-[.is-active]:text-blue-600 transition-colors duration-300">
                        {industry.id.replace(/-/g, " ")}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 leading-none transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                        {industry.name}
                    </h3>
                </div>
            </div>

            {/* Bottom Pill - Animated */}
            <div className="relative z-20 mt-2 w-full flex justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold text-slate-500 uppercase transition-all duration-500 group-hover:text-blue-600 group-[.is-active]:text-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-[.is-active]:bg-blue-500 transition-all duration-500 shrink-0" />
                    <span className="whitespace-nowrap">{industry.detail}</span>
                </span>
            </div>
        </div>
    );
}

import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

// ...

const SectionIndustries = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
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
    }, []);

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

                <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-5 justify-center pb-8 sm:pb-0">
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

                        const getDecorationStyle = (i: number) => {
                            // Responsive translations: Smaller spread on mobile, wider on desktop
                            const translations = [
                                "group-hover:translate-x-[45px] group-hover:-translate-y-[35px] group-[.is-active]:translate-x-[45px] group-[.is-active]:-translate-y-[35px] md:group-hover:translate-x-[110px] md:group-hover:-translate-y-[90px]", // Top Right
                                "group-hover:-translate-x-[45px] group-hover:translate-y-[35px] group-[.is-active]:-translate-x-[45px] group-[.is-active]:translate-y-[35px] md:group-hover:-translate-x-[110px] md:group-hover:translate-y-[90px]", // Bottom Left
                                "group-hover:-translate-x-[55px] group-hover:translate-y-0 group-[.is-active]:-translate-x-[55px] group-[.is-active]:translate-y-0 md:group-hover:-translate-x-[130px]",     // Left
                                "group-hover:translate-x-[35px] group-hover:translate-y-[30px] group-[.is-active]:translate-x-[35px] group-[.is-active]:translate-y-[30px] md:group-hover:translate-x-[90px] md:group-hover:translate-y-[70px]",   // Bottom Right
                                "group-hover:-translate-x-[35px] group-hover:-translate-y-[30px] group-[.is-active]:-translate-x-[35px] group-[.is-active]:-translate-y-[30px] md:group-hover:-translate-x-[90px] md:group-hover:-translate-y-[70px]"  // Top Left
                            ];
                            const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
                            // Responsive sizes: Smaller on mobile, Larger on desktop
                            const sizes = [
                                "text-blue-400 w-4 h-4 md:w-10 md:h-10",    // 0
                                "text-sky-400 w-2.5 h-2.5 md:w-7 md:h-7",       // 1
                                "text-blue-300 w-2 h-2 md:w-5 md:h-5",    // 2
                                "text-sky-300 w-3 h-3 md:w-8 md:h-8",       // 3
                                "text-blue-200 w-2 h-2 md:w-5 md:h-5"     // 4
                            ];
                            return { translate: translations[i % 5], delay: delays[i % 5], size: sizes[i % 5] };
                        };

                        return (
                            <CardStackItem key={idx} index={idx} total={industries.length}>
                                <AnimatedSection
                                    animation="scale-in"
                                    delay={idx * 0.1}
                                    className="h-full"
                                >
                                    <IndustryCard
                                        industry={industry}
                                        getDecorationStyle={getDecorationStyle}
                                        currentIcons={currentIcons}
                                        isActive={idx === activeIndex}
                                        domRef={(el: HTMLDivElement | null) => cardRefs.current[idx] = el}
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
