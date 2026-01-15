import { CheckCircle2, ShieldCheck, Award, ThumbsUp, Truck, Globe2, Clock, Settings, Users, Star, History } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useMobileInView } from "@/hooks/use-mobile-in-view";

const WhyUsCard = ({ pillar, getDecorationStyle, currentIcons, isActive, domRef }: any) => {
    return (
        <div ref={domRef} className={`group ${isActive ? "is-active" : ""} relative isolate p-6 border border-white/10 rounded-lg hover:bg-white/5 group-[.is-active]:bg-white/5 hover:border-blue-300 group-[.is-active]:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 group-[.is-active]:shadow-2xl group-[.is-active]:shadow-blue-500/10 transition-all duration-300 h-full overflow-hidden`}>

            {/* Enhanced Decorations */}
            {currentIcons.map((Icon: any, i: number) => {
                const style = getDecorationStyle(i);
                return (
                    <div key={i} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-80 group-hover:scale-100 group-[.is-active]:opacity-80 group-[.is-active]:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}>
                        <Icon className={`animate-pulse ${style.size}`} />
                    </div>
                );
            })}

            <div className="relative z-10">
                <CheckCircle2 className="w-10 h-10 text-accent mb-6 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:-translate-y-1 group-[.is-active]:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 group-[.is-active]:text-blue-300 transition-colors">{pillar.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm group-hover:text-white group-[.is-active]:text-white transition-colors">
                    {pillar.desc}
                </p>
            </div>
        </div>
    );
};

const pillars = [
    {
        title: "Uncompromising Quality",
        desc: "Rigorous ISO 9001:2015 certified processes ensuring zero-defect delivery."
    },
    {
        title: "Reliability",
        desc: "Consistent supply chain management for JIT (Just-In-Time) inventory needs."
    },
    {
        title: "Customization",
        desc: "Bespoke fastener manufacturing based on client drawings and specifications."
    },
    {
        title: "Global Delivery",
        desc: "Streamlined logistics network delivering to 20+ countries on time, every time."
    }
];

import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

const SectionWhyUs = () => {
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
        <section className="py-10 bg-primary text-white">
            <div className="container px-4 mx-auto">
                <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 text-accent font-bold text-sm uppercase mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                        Why Leading Firms <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Choose SFL</span>
                    </h2>
                </AnimatedSection>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 md:pb-0">
                    {pillars.map((pillar, idx) => {
                        // Define related icons
                        const relatedIconsMap: any = {
                            0: [ShieldCheck, Award, Star, Settings, ShieldCheck], // Quality
                            1: [Clock, ThumbsUp, History, Users, Clock], // Reliability
                            2: [Settings, Award, Star, ShieldCheck, Settings], // Customization
                            3: [Truck, Globe2, Clock, Truck, Globe2] // Global
                        };
                        const currentIcons = relatedIconsMap[idx] || [CheckCircle2, CheckCircle2, CheckCircle2];

                        const getDecorationStyle = (i: number) => {
                            // Enhanced Intensity
                            const translations = [
                                "group-hover:translate-x-[60px] group-hover:-translate-y-[40px] md:group-hover:translate-x-[120px] md:group-hover:-translate-y-[80px]",
                                "group-hover:-translate-x-[60px] group-hover:translate-y-[40px] md:group-hover:-translate-x-[120px] md:group-hover:translate-y-[80px]",
                                "group-hover:-translate-x-[80px] md:group-hover:-translate-x-[140px]",
                                "group-hover:translate-x-[80px] md:group-hover:translate-x-[140px]"
                            ];
                            const delays = ["delay-75", "delay-150", "delay-100", "delay-200"];
                            const sizes = [
                                "text-blue-400 w-4 h-4 md:w-8 md:h-8",
                                "text-sky-400 w-3 h-3 md:w-6 md:h-6",
                                "text-blue-300 w-2.5 h-2.5 md:w-5 md:h-5",
                                "text-sky-300 w-3.5 h-3.5 md:w-7 md:h-7"
                            ];
                            return { translate: translations[i % 4], delay: delays[i % 4], size: sizes[i % 4] };
                        };

                        return (
                            <CardStackItem key={idx} index={idx} total={pillars.length}>
                                <AnimatedSection animation="fade-up" delay={idx * 0.1}>
                                    <WhyUsCard
                                        pillar={pillar}
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

export default SectionWhyUs;
