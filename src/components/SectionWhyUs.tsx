import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
    {
        title: "Uncompromising Quality",
        desc: "Rigorous ISO 9001:2015 certified processes ensuring zero-defect delivery."
    },
    {
        title: "Reliability",
        desc: "Consistent supply chain management for JIT (Just-In-Time) inventory needs."
    },
    {
        title: "Customization",
        desc: "Bespoke fastener manufacturing based on client drawings and specifications."
    },
    {
        title: "Global Delivery",
        desc: "Streamlined logistics network delivering to 20+ countries on time, every time."
    }
];

const SectionWhyUs = () => {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container px-4 mx-auto">
                <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                        Why Leading Firms <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Choose SFL</span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, idx) => (
                        <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                            <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors duration-300 h-full">
                                <CheckCircle2 className="w-10 h-10 text-accent mb-6" />
                                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-white/70 leading-relaxed text-sm">
                                    {pillar.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionWhyUs;
