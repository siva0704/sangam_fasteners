import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import { ShieldCheck } from "lucide-react";

const Engineering = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Seo
                title="Engineering & Quality | Industrial Fastener Manufacturing"
                description="Engineering and quality systems focused on process control, dimensional accuracy, and repeatable supply for industrial fasteners."
                keywords={[
                    "fastener quality control",
                    "industrial engineering fasteners",
                    "dimensional accuracy",
                    "process control manufacturing",
                    "ISO certified fasteners India",
                    "fastener inspection",
                    "repeatable supply"
                ]}
            />

            <main className="flex-1">
                <PageHero
                    title="Engineering & Quality"
                    subtitle="Engineering and quality systems exist to control variation."
                    badge="Quality Systems"
                />

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto mb-16 text-center">
                            <h2 className="text-3xl font-heading font-bold mb-6">Manufacturing & Quality Focus</h2>
                            <p className="text-lg text-muted-foreground">
                                We maintain strict control over every stage of production to ensure consistency.
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                "Process discipline",
                                "Material control",
                                "In-process inspection",
                                "Thread and dimensional verification",
                                "Final inspection prior to dispatch"
                            ].map((item, idx) => (
                                <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                                    <div className="bg-card border p-8 rounded-xl hover:shadow-lg transition-all duration-300 h-full flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">{item}</h3>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <AnimatedSection animation="scale-in">
                            <div className="max-w-4xl mx-auto text-center bg-card border shadow-sm rounded-2xl p-12">
                                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-6">
                                    Our Objective
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight">
                                    Predictable, assembly-ready output across repeat orders.
                                </h2>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Engineering;
