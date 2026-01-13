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
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
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
                    {certifications.map((cert, idx) => (
                        <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center group">
                                <div className={`w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${cert.color}`}>
                                    <cert.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                                    {cert.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {cert.desc}
                                </p>
                                <div className="mt-6 pt-6 border-t border-border w-full flex justify-centerMain">
                                    <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        <span>Verified Status</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionCertifications;
