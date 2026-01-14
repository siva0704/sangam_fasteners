import { industries } from "@/constants/data";
import AnimatedSection from "./AnimatedSection";

const SectionIndustries = () => {
    return (
        <section className="py-24 bg-secondary/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-secondary/20 to-secondary/40">
            <div className="container px-4 mx-auto text-center">
                <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-16">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Serve</span>
                    </h2>
                </AnimatedSection>

                <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-5 justify-center">
                    {industries.map((industry, idx) => {
                        // Helper locally or outside, reused logic
                        const getDecorationStyle = (i: number) => {
                            const translations = [
                                "group-hover:translate-x-[80px] group-hover:-translate-y-[60px]",
                                "group-hover:-translate-x-[80px] group-hover:translate-y-[60px]",
                                "group-hover:-translate-x-[100px] group-hover:translate-y-0",
                                "group-hover:translate-x-[60px] group-hover:translate-y-[50px]",
                                "group-hover:-translate-x-[60px] group-hover:-translate-y-[50px]"
                            ];
                            const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
                            const sizes = ["text-blue-400 w-5 h-5", "text-sky-400 w-3 h-3", "text-blue-300 w-2.5 h-2.5", "text-sky-300 w-4 h-4", "text-blue-200 w-2.5 h-2.5"];
                            return { translate: translations[i % 5], delay: delays[i % 5], size: sizes[i % 5] };
                        };

                        return (
                            // Sticky Wrapper - Separated from Animation to prevent transform conflict
                            <div
                                key={idx}
                                className="sticky lg:static z-10"
                                style={{
                                    top: `calc(100px + ${idx * 20}px)`, // Staggered top offset
                                    zIndex: idx + 10
                                }}
                            >
                                <AnimatedSection
                                    animation="scale-in"
                                    delay={idx * 0.1}
                                    className="h-full"
                                >
                                    <div className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between items-center text-center isolate">

                                        {/* Decorations using the industry's own icon */}
                                        {[1, 2, 3, 4, 5].map((_, i) => {
                                            const style = getDecorationStyle(i);
                                            return (
                                                <div
                                                    key={i}
                                                    className={`absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-60 group-hover:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                                                >
                                                    <industry.icon className={`text-blue-300 ${style.size}`} />
                                                </div>
                                            );
                                        })}

                                        {/* Top Content */}
                                        <div className="w-full flex flex-col items-center relative">
                                            <div className="relative mb-6">
                                                {/* Main Icon Container - Glowing Effect, Rounded Square */}
                                                <div className={`p-5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] ring-1 ring-slate-100 group-hover:ring-blue-100 relative z-20`}>
                                                    <industry.icon size={36} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out fill-blue-50/0 group-hover:fill-blue-50" />
                                                </div>
                                            </div>

                                            <div className="space-y-3 relative z-20">
                                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 transition-colors duration-300">
                                                    INDUSTRY
                                                </h3>
                                                <p className="font-heading font-bold text-slate-900 text-2xl leading-none group-hover:text-blue-900 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                                                    {industry.name}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Pill - Animated Rounded Box Effect */}
                                        <div className="relative z-20 mt-6 w-full flex justify-center px-2">
                                            <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-50/50 border border-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wide group-hover:tracking-widest group-hover:bg-white/80 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm max-w-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-500 shrink-0" />
                                                <span className="whitespace-normal text-center leading-tight">{industry.detail}</span>
                                            </span>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SectionIndustries;
