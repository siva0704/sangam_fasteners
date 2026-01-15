import { CheckCircle2, ShieldCheck, Award, ThumbsUp, Truck, Globe2, Clock, Settings, Users, Star, History } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useMobileInView } from "@/hooks/use-mobile-in-view";
import { SnapshotCard } from "@/components/ui/SnapshotCard";
import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

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

const SectionWhyUs = () => {
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

                <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 pb-8 md:pb-0 max-w-5xl mx-auto">
                    {pillars.map((pillar, idx) => {
                        // Define related icons
                        const relatedIconsMap: any = {
                            0: [ShieldCheck, Award, Star, Settings, ShieldCheck], // Quality
                            1: [Clock, ThumbsUp, History, Users, Clock], // Reliability
                            2: [Settings, Award, Star, ShieldCheck, Settings], // Customization
                            3: [Truck, Globe2, Clock, Truck, Globe2] // Global
                        };
                        const currentIcons = relatedIconsMap[idx] || [CheckCircle2, CheckCircle2, CheckCircle2];

                        return (
                            <CardStackItem key={idx} index={idx} total={pillars.length}>
                                <AnimatedSection animation="fade-up" delay={idx * 0.1}>
                                    <SnapshotCard
                                        icon={currentIcons[0]}
                                        label="Key Strength"
                                        title={pillar.title}
                                        description={pillar.desc}
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

export default SectionWhyUs;
