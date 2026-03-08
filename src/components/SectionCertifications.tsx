import { Ruler, Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
    {
        icon: ShieldCheck,
        title: "ISO 9001:2015 Certified",
        desc: "Our quality management system is certified to international standards, ensuring consistent processes and continuous improvement.",
        color: "text-blue-500"
    },
    {
        icon: FileCheck,
        title: "Material Traceability",
        desc: "Complete material certification and lot traceability for every component, meeting automotive and appliance industry requirements.",
        color: "text-amber-500"
    },
    {
        icon: Ruler,
        title: "Dimensional Inspection",
        desc: "CMM and optical measurement systems verify critical dimensions, ensuring perfect fit and function in your assemblies.",
        color: "text-green-500"
    },
    {
        icon: Award,
        title: "Performance Testing",
        desc: "Fatigue testing, torque testing, and accelerated life testing validate product durability under real-world conditions.",
        color: "text-purple-500"
    }
];

const SectionCertifications = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary/20 relative overflow-hidden transition-colors duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-foreground/5 border border-blue-200 dark:border-border text-blue-600 dark:text-muted-foreground font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                            Quality Assurance
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                            Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Quality Standards</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Every shaft undergoes rigorous testing and inspection to ensure it meets or exceeds international quality standards.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, idx) => {
                        const getDecorationStyle = (i: number) => {
                            const translations = ["group-hover:translate-x-[80px] group-hover:-translate-y-[60px]", "group-hover:-translate-x-[80px] group-hover:translate-y-[60px]", "group-hover:-translate-x-[100px]", "group-hover:translate-x-[100px]"];
                            const delays = ["delay-75", "delay-150", "delay-100", "delay-200"];
                            const sizes = ["text-blue-400 w-5 h-5", "text-sky-400 w-3 h-3", "text-blue-300 w-2 h-2", "text-sky-300 w-4 h-4"];
                            return { translate: translations[i % 4], delay: delays[i % 4], size: sizes[i % 4] };
                        };
                        return (
                            <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                                <div className="relative isolate overflow-hidden bg-background dark:bg-card/50 p-6 rounded-2xl shadow-sm border border-border hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col items-center text-center group hover:border-blue-100 dark:hover:border-blue-500/30">

                                    {/* Spreading Background Animation */}
                                    <div className="absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-50/80 dark:bg-blue-500/10 rounded-full scale-0 group-hover:scale-[25] transition-transform duration-1000 ease-out -z-10 originating-from-icon" />

                                    {/* Decorations */}
                                    {[1, 2, 3, 4].map((_, i) => {
                                        const style = getDecorationStyle(i);
                                        return (
                                            <div key={i} className={`absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out ${style.translate} ${style.delay} z-0`}>
                                                <cert.icon className={`animate-pulse ${style.size}`} />
                                            </div>
                                        );
                                    })}

                                    <div className={`relative z-10 w-16 h-16 rounded-full bg-secondary dark:bg-background flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-background dark:group-hover:bg-card group-hover:shadow-md transition-all duration-300 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400`}>
                                        <cert.icon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                                    </div>
                                    <h3 className="relative z-10 text-xl font-bold font-heading text-foreground mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-auto group-hover:text-foreground dark:group-hover:text-muted-foreground transition-colors duration-300">
                                        {cert.desc}
                                    </p>
                                    <div className="relative z-10 mt-6 pt-6 border-t border-border w-full flex justify-center group-hover:border-blue-200/50 dark:group-hover:border-blue-500/30 transition-colors">
                                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            <CheckCircle2 className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                                            <span>Verified</span>
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
