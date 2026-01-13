import { ShieldCheck, Ruler, Microscope, ArrowRight, Anchor, Combine } from "lucide-react";
import MagneticButton from "./MagneticButton";
import AnimatedSection from "./AnimatedSection";

const features = [
    {
        icon: Ruler,
        title: "Specification-driven production",
        desc: "Strict adherence to approved drawings and standards."
    },
    {
        icon: ShieldCheck,
        title: "Process discipline",
        desc: "Controlled manufacturing execution ensuring quality."
    },
    {
        icon: Microscope,
        title: "Repeatability across batches",
        desc: "Consistent performance over repeated supplies."
    },
    {
        icon: Anchor,
        title: "Long-term supplier stability",
        desc: "Reliable partner for sustainable sourcing."
    }
];

const BlueprintGraphic = () => (
    <div className="relative w-full h-[500px] bg-[#0a192f] rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl group">
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

const SectionEngineering = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 z-0 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                                Manufacturing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-800">
                                    Excellence
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed">
                                Our manufacturing is defined by strict specification adherence, unwavering process discipline, and a focus on long-term repeatability for mission-critical applications.
                            </p>
                            <MagneticButton size="lg" variant="outline" className="border-accent/20 text-accent hover:bg-accent hover:text-white mb-12 group transition-all duration-300">
                                Request Technical Clarification <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>
                        </AnimatedSection>

                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <AnimatedSection key={idx} animation="fade-left" delay={idx * 0.1 + 0.2}>
                                    <div className="flex gap-6 items-start group p-6 rounded-2xl hover:bg-slate-50/50 transition-colors duration-300 border border-transparent hover:border-slate-100 hover:shadow-sm">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                                            <feature.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-500 leading-relaxed group-hover:text-gray-700">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionEngineering;
