import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
    {
        icon: ShieldCheck,
        title: "ISO 9001:2015",
        desc: "Certified Quality Management System ensuring consistent product quality.",
        color: "text-blue-500"
    },
    {
        icon: Award,
        title: "IATF 16949 Compliant",
        desc: "Aligned with automotive industry quality management standards.",
        color: "text-amber-500"
    },
    {
        icon: FileCheck,
        title: "PED 2014/68/EU",
        desc: "Pressure Equipment Directive certified for European markets.",
        color: "text-green-500"
    }
];

const SectionCertifications = () => {
    return (
        <section className="py-16 bg-secondary/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                            Certified Excellence
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            Quality You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Trust</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our commitment to quality is backed by international certifications and rigorous testing protocols.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => {
                        const getDecorationStyle = (i: number) => {
                            const translations = ["group-hover:translate-x-[80px] group-hover:-translate-y-[60px]", "group-hover:-translate-x-[80px] group-hover:translate-y-[60px]", "group-hover:-translate-x-[100px]", "group-hover:translate-x-[100px]"];
                            const delays = ["delay-75", "delay-150", "delay-100", "delay-200"];
                            const sizes = ["text-blue-400 w-5 h-5", "text-sky-400 w-3 h-3", "text-blue-300 w-2 h-2", "text-sky-300 w-4 h-4"];
                            return { translate: translations[i % 4], delay: delays[i % 4], size: sizes[i % 4] };
                        };
                        return (
                            <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                                <div className="relative isolate overflow-hidden bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col items-center text-center group hover:border-blue-100">

                                    {/* Spreading Background Animation */}
                                    <div className="absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-50/80 rounded-full scale-0 group-hover:scale-[25] transition-transform duration-1000 ease-out -z-10 originating-from-icon" />

                                    {/* Decorations */}
                                    {[1, 2, 3, 4].map((_, i) => {
                                        const style = getDecorationStyle(i);
                                        return (
                                            <div key={i} className={`absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out ${style.translate} ${style.delay} z-0`}>
                                                <cert.icon className={`animate-pulse ${style.size}`} />
                                            </div>
                                        );
                                    })}

                                    <div className={`relative z-10 w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300 text-slate-500 group-hover:text-blue-600`}>
                                        <cert.icon className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                                    </div>
                                    <h3 className="relative z-10 text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="relative z-10 text-slate-500 leading-relaxed mb-auto group-hover:text-slate-600 transition-colors duration-300">
                                        {cert.desc}
                                    </p>
                                    <div className="relative z-10 mt-6 pt-6 border-t border-slate-100 w-full flex justify-center group-hover:border-blue-200/50 transition-colors">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                            <span>Verified Status</span>
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

export default SectionCertifications;
