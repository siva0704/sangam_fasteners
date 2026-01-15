import { ArrowRight, Combine, Ruler, ClipboardCheck, Scale, Award, Timer, Shield, Zap, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import AnimatedSection from "./AnimatedSection";
import { CardStackItem } from "@/components/ui/CardStackItem";
import { useEffect, useRef, useState } from "react";

const EngineeringCard = ({ feature, currentIcons, getDecorationStyle, isActive, domRef }: any) => {
    return (
        <div
            ref={domRef}
            className={`group ${isActive ? "is-active" : ""} relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between items-center text-center isolate`}
        >
            {/* Enhanced Decorations */}
            {currentIcons.map((Icon: any, i: number) => {
                const style = getDecorationStyle(i);
                return (
                    <div key={i} className={`absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-90 group-hover:scale-100 group-[.is-active]:opacity-90 group-[.is-active]:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}>
                        <Icon className={`text-blue-300 ${style.size}`} />
                    </div>
                );
            })}

            {/* Top Content */}
            <div className="w-full flex flex-col items-center relative">
                <div className="relative mb-6">
                    {/* Main Icon Container */}
                    <div className={`p-5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-blue-600 group-[.is-active]:bg-white group-[.is-active]:text-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] group-[.is-active]:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] ring-1 ring-slate-100 group-hover:ring-blue-100 group-[.is-active]:ring-blue-100 relative z-20`}>
                        <feature.icon size={36} strokeWidth={1.5} className="group-hover:scale-110 group-[.is-active]:scale-110 group-hover:-translate-y-1 group-[.is-active]:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] fill-blue-50/0 group-hover:fill-blue-50 group-[.is-active]:fill-blue-50" />
                    </div>
                </div>

                <div className="space-y-3 relative z-20">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 group-[.is-active]:text-blue-600 transition-colors duration-300">
                        Methodology
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                        {feature.title}
                    </h3>
                </div>
            </div>

            {/* Bottom Pill - Description with Dot */}
            <div className="relative z-20 mt-4 w-full flex justify-center">
                <span className="inline-flex items-center justify-center gap-2 px-4 py-2 text-[9px] font-bold text-slate-500 uppercase transition-all duration-500 group-hover:text-blue-600 group-[.is-active]:text-blue-600 max-w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-[.is-active]:bg-blue-500 transition-all duration-500 shrink-0" />
                    <span className="whitespace-normal text-center leading-tight line-clamp-3">{feature.desc}</span>
                </span>
            </div>
        </div>
    );
};

const BlueprintGraphic = () => (
    <div className="relative w-full h-[400px] bg-[#020617] rounded-xl overflow-hidden border border-slate-800 shadow-2xl group isolate">
        {/* Abstract Dark Tech Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        </div>

        {/* HUD Corner Markers */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-500/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-500/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-500/30 rounded-br-lg" />

        {/* Central Schematic Animation */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
            {/* Outer Ring */}
            <div className="relative w-64 h-64 rounded-full border border-blue-500/10 animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full" />
            </div>



            {/* Inner Core */}
            <div className="absolute w-32 h-32 bg-blue-900/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <Combine className="w-16 h-16 text-blue-400 animate-pulse" strokeWidth={1} />
            </div>

            {/* Orbiting Scanning Dot */}
            <div className="absolute w-56 h-56 rounded-full animate-[spin_3s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-blue-400 to-transparent opacity-50 blur-[2px]" />
            </div>
        </div>

        {/* Data Overlays */}
        <div className="absolute top-8 left-8 z-20">
            <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-blue-400 tracking-widest">SYSTEM_ONLINE</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
                TOLERANCE: ±0.001mm<br />
                GRADE: A4-80<br />
                STATUS: CALIBRATED
            </div>
        </div>

        {/* Scanning Beam */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-[scan_4s_ease-in-out_infinite]" />

        <style>{`
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
        `}</style>
    </div>
);

import { manufacturingFeatures } from "@/constants/data";

const SectionEngineering = () => {
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
        <section className="py-10 bg-white relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 z-0 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Graphic Side */}
                    <div className="relative">
                        <AnimatedSection animation="fade-right">
                            <BlueprintGraphic />
                            {/* Decorative Blob */}
                            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
                        </AnimatedSection>
                    </div>

                    {/* Content Side */}
                    <div>
                        <AnimatedSection animation="fade-up">
                            <span className="inline-block py-1 px-3 text-accent font-bold text-sm uppercase mb-4">
                                Manufacturing Orientation
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight whitespace-nowrap">
                                Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-800">Excellence</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
                                Our manufacturing is defined by strict specification adherence, unwavering process discipline, and a focus on long-term repeatability for mission-critical applications.
                            </p>
                            <Link to="/contact">
                                <MagneticButton size="lg" variant="outline" className="border-accent/20 text-accent hover:bg-accent hover:text-white mb-8 group transition-all duration-300">
                                    Request Technical Clarification <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </MagneticButton>
                            </Link>
                        </AnimatedSection>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 sm:pb-0">
                            {manufacturingFeatures.map((feature, idx) => {
                                // Define related icons for each feature
                                const relatedIconsMap: any = {
                                    0: [Ruler, ClipboardCheck, Scale, Ruler, FileSearch], // Specification
                                    1: [Shield, ClipboardCheck, Award, Shield, Zap], // Process
                                    2: [Timer, Scale, Ruler, Zap, Combine], // Repeatability
                                    3: [Award, Shield, ClipboardCheck, Timer, Award] // Stability
                                };
                                const currentIcons = relatedIconsMap[idx] || [feature.icon, feature.icon, feature.icon];

                                const getDecorationStyle = (i: number) => {
                                    // Enhanced Intensity & Responsive Spread
                                    const translations = [
                                        "group-hover:translate-x-[50px] group-hover:-translate-y-[40px] group-[.is-active]:translate-x-[50px] group-[.is-active]:-translate-y-[40px] md:group-hover:translate-x-[100px] md:group-hover:-translate-y-[80px]",
                                        "group-hover:-translate-x-[50px] group-hover:translate-y-[40px] group-[.is-active]:-translate-x-[50px] group-[.is-active]:translate-y-[40px] md:group-hover:-translate-x-[100px] md:group-hover:translate-y-[80px]",
                                        "group-hover:-translate-x-[60px] group-[.is-active]:-translate-x-[60px] md:group-hover:-translate-x-[120px]",
                                        "group-hover:translate-x-[60px] group-[.is-active]:translate-x-[60px] md:group-hover:translate-x-[120px]"
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
                                    <CardStackItem key={idx} index={idx} total={manufacturingFeatures.length}>
                                        <AnimatedSection animation="fade-left" delay={idx * 0.1 + 0.2}>
                                            <EngineeringCard
                                                feature={feature}
                                                currentIcons={currentIcons}
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
                </div>
            </div>
        </section>
    );
};

export default SectionEngineering;
