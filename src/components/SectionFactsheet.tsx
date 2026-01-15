import { Building2, User, Calendar, FileCheck, ShieldCheck, Banknote, Briefcase, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

const facts = [
    {
        label: "Nature of Business",
        value: "Manufacturer",
        subtext: "Factory / Manufacturing",
        icon: FactoryIcon,
        decoration: [FactoryIcon, Briefcase, Building2]
    },
    {
        label: "Company CEO",
        value: "Sangmesh Ishwarappa Handigol",
        subtext: "Visionary Leadership",
        icon: User,
        decoration: [User, Award, Briefcase]
    },
    {
        label: "Establishment",
        value: "01-07-2017",
        subtext: "GST Registration Date",
        icon: Calendar,
        decoration: [Calendar, HistoryIcon, FileCheck]
    },
    {
        label: "Annual Turnover",
        value: "5 - 25 Cr",
        subtext: "Consistent Growth",
        icon: Banknote,
        decoration: [Banknote, TrendingUp, Building2]
    },
    {
        label: "Legal Status",
        value: "Limited Company",
        subtext: "Private Limited Entity",
        icon: Scale,
        decoration: [Scale, FileCheck, ShieldCheck]
    },
    {
        label: "GST Number",
        value: "29AAGCS2351H1ZA",
        subtext: "Registered Entity",
        icon: FileCheck,
        decoration: [FileCheck, CheckCircle2, Shield]
    },
    {
        label: "CIN Number",
        value: "U80302KA2000PTC027793",
        subtext: "Corporate Identity",
        icon: FileText,
        decoration: [FileText, Building2, Globe2]
    },
    {
        label: "Quality Certification",
        value: "ISO 9001:2000",
        subtext: "Certified Company",
        icon: ShieldCheck,
        decoration: [ShieldCheck, Award, Star]
    }
];

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

const FactCard = ({ fact, idx, getDecorationStyle, isActive, domRef }: any) => {
    return (
        <div
            ref={domRef}
            className={`group ${isActive ? "is-active" : ""} relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between items-center text-center isolate`}
        >

            {/* Enhanced Decorations (Bloom from center) */}
            {fact.decoration.map((Deco: any, i: number) => {
                const style = getDecorationStyle(i);
                return (
                    <div
                        key={i}
                        className={`absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-90 group-hover:scale-100 group-[.is-active]:opacity-90 group-[.is-active]:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                    >
                        <Deco className={`text-blue-300 ${style.size}`} />
                    </div>
                );
            })}

            {/* Top Content */}
            <div className="w-full flex flex-col items-center relative">
                <div className="relative mb-6">
                    {/* Main Icon Container - Glowing Effect */}
                    <div className={`p-5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-blue-600 group-[.is-active]:bg-white group-[.is-active]:text-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] group-[.is-active]:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] ring-1 ring-slate-100 group-hover:ring-blue-100 group-[.is-active]:ring-blue-100 relative z-20`}>
                        <fact.icon size={36} strokeWidth={1.5} className="group-hover:scale-110 group-[.is-active]:scale-110 group-hover:-translate-y-1 group-[.is-active]:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] fill-blue-50/0 group-hover:fill-blue-50 group-[.is-active]:fill-blue-50" />
                    </div>
                </div>

                <div className="space-y-3 relative z-20">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 group-[.is-active]:text-blue-600 transition-colors duration-300">
                        {fact.label}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 leading-none transition-colors duration-300 break-words w-full">
                        {fact.value}
                    </h3>
                </div>
            </div>

            {/* Bottom Pill - Animated */}
            <div className="relative z-20 mt-2 w-full flex justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold text-slate-500 uppercase transition-all duration-500 group-hover:text-blue-600 group-[.is-active]:text-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-[.is-active]:bg-blue-500 transition-all duration-500 shrink-0" />
                    <span className="whitespace-nowrap">{fact.subtext}</span>
                </span>
            </div>
        </div>
    );
};

const SectionFactsheet = () => {
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

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0">
                    {facts.map((fact, idx) => {
                        const getDecorationStyle = (i: number) => {
                            const translations = [
                                "group-hover:translate-x-[45px] group-hover:-translate-y-[35px] group-[.is-active]:translate-x-[45px] group-[.is-active]:-translate-y-[35px] md:group-hover:translate-x-[110px] md:group-hover:-translate-y-[90px]",
                                "group-hover:-translate-x-[45px] group-hover:translate-y-[35px] group-[.is-active]:-translate-x-[45px] group-[.is-active]:translate-y-[35px] md:group-hover:-translate-x-[110px] md:group-hover:translate-y-[90px]",
                                "group-hover:-translate-x-[55px] group-hover:translate-y-0 group-[.is-active]:-translate-x-[55px] group-[.is-active]:translate-y-0 md:group-hover:-translate-x-[130px]",
                                "group-hover:translate-x-[35px] group-hover:translate-y-[30px] group-[.is-active]:translate-x-[35px] group-[.is-active]:translate-y-[30px] md:group-hover:translate-x-[90px] md:group-hover:translate-y-[70px]",
                                "group-hover:-translate-x-[35px] group-hover:-translate-y-[30px] group-[.is-active]:-translate-x-[35px] group-[.is-active]:-translate-y-[30px] md:group-hover:-translate-x-[90px] md:group-hover:-translate-y-[70px]"
                            ];
                            const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
                            const sizes = [
                                "text-blue-400 w-4 h-4 md:w-10 md:h-10",
                                "text-sky-400 w-2.5 h-2.5 md:w-7 md:h-7",
                                "text-blue-300 w-2 h-2 md:w-5 md:h-5",
                                "text-sky-300 w-3 h-3 md:w-8 md:h-8",
                                "text-blue-200 w-2 h-2 md:w-5 md:h-5"
                            ];
                            return { translate: translations[i % 5], delay: delays[i % 5], size: sizes[i % 5] };
                        };

                        return (
                            <CardStackItem key={idx} index={idx} total={facts.length}>
                                <AnimatedSection animation="scale-in" delay={idx * 0.1}>
                                    <FactCard
                                        fact={fact}
                                        idx={idx}
                                        getDecorationStyle={getDecorationStyle}
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

export default SectionFactsheet;
