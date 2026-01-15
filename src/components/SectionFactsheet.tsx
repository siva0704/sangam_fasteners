import { Building2, User, Calendar, FileCheck, ShieldCheck, Banknote, Briefcase, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";
import {
    Factory as FactoryIcon,
    History as HistoryIcon,
    TrendingUp,
    Scale,
    CheckCircle2,
    Shield,
    FileText,
    Globe2,
    Star
} from "lucide-react";
import { SnapshotCard } from "@/components/ui/SnapshotCard";

const facts = [
    {
        label: "Nature of Business",
        value: "Manufacturer",
        subtext: "Factory / Manufacturing",
        icon: FactoryIcon,
        decoration: [FactoryIcon, Briefcase, Building2, FactoryIcon, Briefcase]
    },
    {
        label: "Company CEO",
        value: "Sangmesh Ishwarappa Handigol",
        subtext: "Visionary Leadership",
        icon: User,
        decoration: [User, Award, Briefcase, User, Award]
    },
    {
        label: "Establishment",
        value: "01-07-2017",
        subtext: "GST Registration Date",
        icon: Calendar,
        decoration: [Calendar, HistoryIcon, FileCheck, Calendar, HistoryIcon]
    },
    {
        label: "Annual Turnover",
        value: "5 - 25 Cr",
        subtext: "Consistent Growth",
        icon: Banknote,
        decoration: [Banknote, TrendingUp, Building2, Banknote, TrendingUp]
    },
    {
        label: "Legal Status",
        value: "Limited Company",
        subtext: "Private Limited Entity",
        icon: Scale,
        decoration: [Scale, FileCheck, ShieldCheck, Scale, FileCheck]
    },
    {
        label: "GST Number",
        value: "29AAGCS2351H1ZA",
        subtext: "Registered Entity",
        icon: FileCheck,
        decoration: [FileCheck, CheckCircle2, Shield, FileCheck, CheckCircle2]
    },
    {
        label: "CIN Number",
        value: "U80302KA2000PTC027793",
        subtext: "Corporate Identity",
        icon: FileText,
        decoration: [FileText, Building2, Globe2, FileText, Building2]
    },
    {
        label: "Quality Certification",
        value: "ISO 9001:2000",
        subtext: "Certified Company",
        icon: ShieldCheck,
        decoration: [ShieldCheck, Award, Star, ShieldCheck, Award]
    }
];

const SectionFactsheet = () => {
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
        <section className="py-10 bg-slate-50 border-y border-slate-200 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <AnimatedSection animation="fade-up" className="mb-12 text-center">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">
                        Corporate Profile
                    </span>
                    <h2 className="text-3xl font-heading font-bold text-slate-900">
                        Key Facts & Figures
                    </h2>
                </AnimatedSection>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0">
                    {facts.map((fact, idx) => (
                        <CardStackItem key={idx} index={idx} total={facts.length}>
                            <AnimatedSection animation="scale-in" delay={idx * 0.1}>
                                <SnapshotCard
                                    icon={fact.icon}
                                    label={fact.label}
                                    title={fact.value}
                                    badgeText={fact.subtext}
                                    decorations={fact.decoration}
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


export default SectionFactsheet;
