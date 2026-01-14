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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
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
                            <AnimatedSection key={idx} animation="scale-in" delay={idx * 0.1}>
                                <div className="group relative isolate overflow-hidden flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 hover:border-blue-100 h-full">

                                    {/* Spreading Background Animation */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-50/80 rounded-full scale-0 group-hover:scale-[20] transition-transform duration-1000 ease-out -z-10 originating-from-icon" />

                                    {/* Decorations using the industry's own icon */}
                                    {[1, 2, 3, 4, 5].map((_, i) => {
                                        const style = getDecorationStyle(i);
                                        return (
                                            <div
                                                key={i}
                                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out ${style.translate} ${style.delay} z-0`}
                                            >
                                                <industry.icon className={`animate-pulse ${style.size}`} />
                                            </div>
                                        );
                                    })}

                                    {/* Icon Container - Circular Button Shape */}
                                    <div className="mb-5 relative z-10">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-inner group-hover:shadow-md border border-slate-100 group-hover:border-blue-100">
                                            <div className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                                                <industry.icon size={28} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2 flex flex-col items-center flex-1 w-full relative z-10">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-blue-200 transition-colors duration-300">
                                            INDUSTRY
                                        </h3>
                                        <p className="font-heading font-bold text-gray-900 text-lg leading-tight group-hover:text-white transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                                            {industry.name}
                                        </p>

                                        {/* Description as Subtext/Pill */}
                                        <div className="mt-auto pt-2">
                                            <p className="text-xs text-slate-500 font-medium bg-slate-50 inline-block px-3 py-1.5 rounded-full group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-sm transition-colors line-clamp-1 max-w-full">
                                                {industry.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SectionIndustries;
