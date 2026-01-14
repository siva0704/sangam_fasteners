import { ArrowRight, Combine } from "lucide-react";
import MagneticButton from "./MagneticButton";
import AnimatedSection from "./AnimatedSection";

const BlueprintGraphic = () => (
    <div className="relative w-full h-[400px] bg-[#0a192f] rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl group">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />

        {/* Blueprint Lines Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Hexagon (Bolt Head) */}
            <div className="relative w-48 h-48 border-2 border-blue-400/30 rounded-full animate-spin-slow">
                <div className="absolute inset-2 border border-dashed border-blue-400/50 rounded-full" />
            </div>

            <Combine className="absolute text-blue-500/20 w-64 h-64 animate-pulse" strokeWidth={0.5} />

            {/* Dimensions Lines */}
            <div className="absolute top-1/4 left-10 w-32 h-[1px] bg-blue-500/50 flex flex-col items-center">
                <span className="text-[10px] text-blue-400 -mt-4 bg-[#0a192f] px-1 font-mono">Ø 120mm</span>
            </div>
            <div className="absolute bottom-1/3 right-10 w-20 h-[1px] bg-blue-500/50 rotate-90 flex flex-col items-center">
                <span className="text-[10px] text-blue-400 -mt-4 bg-[#0a192f] px-1 font-mono rotate-180">ISO 9001</span>
            </div>
        </div>

        {/* Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan opacity-50" />

        {/* Overlay Text */}
        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 border-l-4 border-blue-500">
            <h4 className="text-white font-mono text-sm">MFG_ORIENTATION_V2.0</h4>
            <p className="text-blue-400 text-xs font-mono">STATUS: OPTIMIZED</p>
        </div>

        <style>{`
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                50% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
            .animate-scan {
                animation: scan 4s ease-in-out infinite;
            }
        `}</style>
    </div>
);

import { manufacturingFeatures } from "@/constants/data";

const SectionEngineering = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
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
                            <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-100 text-accent font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                                Manufacturing Orientation
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight whitespace-nowrap">
                                Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-800">Excellence</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
                                Our manufacturing is defined by strict specification adherence, unwavering process discipline, and a focus on long-term repeatability for mission-critical applications.
                            </p>
                            <MagneticButton size="lg" variant="outline" className="border-accent/20 text-accent hover:bg-accent hover:text-white mb-8 group transition-all duration-300">
                                Request Technical Clarification <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {manufacturingFeatures.map((feature, idx) => {
                                const getDecorationStyle = (i: number) => {
                                    const translations = ["group-hover:translate-x-[60px] group-hover:-translate-y-[40px]", "group-hover:-translate-x-[60px] group-hover:translate-y-[40px]", "group-hover:-translate-x-[80px]", "group-hover:translate-x-[80px]"];
                                    const delays = ["delay-75", "delay-150", "delay-100", "delay-200"];
                                    const sizes = ["text-blue-400 w-4 h-4", "text-sky-400 w-3 h-3", "text-blue-300 w-2 h-2", "text-sky-300 w-3 h-3"];
                                    return { translate: translations[i % 4], delay: delays[i % 4], size: sizes[i % 4] };
                                };
                                return (
                                    <AnimatedSection key={idx} animation="fade-left" delay={idx * 0.1 + 0.2}>
                                        <div className="relative isolate overflow-hidden flex gap-3 items-start group p-4 rounded-xl hover:bg-white transition-all duration-500 border border-transparent hover:border-blue-100 hover:shadow-lg">

                                            {/* Spreading Background Animation */}
                                            <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-50/80 rounded-full scale-0 group-hover:scale-[30] transition-transform duration-1000 ease-out -z-10 originating-from-icon" />

                                            {/* Decorations */}
                                            {[1, 2, 3].map((_, i) => {
                                                const style = getDecorationStyle(i);
                                                return (
                                                    <div key={i} className={`absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out ${style.translate} ${style.delay} z-0`}>
                                                        <feature.icon className={`animate-pulse ${style.size}`} />
                                                    </div>
                                                );
                                            })}

                                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                                                <feature.icon className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors duration-300" />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-base font-bold font-heading text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
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
