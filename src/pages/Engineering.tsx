import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import { ShieldCheck } from "lucide-react";
import { InfrastructureGallery } from "@/components/sections/InfrastructureGallery";

const Engineering = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Seo
                title="Engineering & Quality | Industrial Shaft & Machine Component Manufacturing"
                description="Engineering and quality systems focused on process control, dimensional accuracy, and repeatable supply for industrial shaft & machine components."
                keywords={[
                    "shaft & machine component quality control",
                    "industrial engineering shaft & machine components",
                    "dimensional accuracy",
                    "process control manufacturing",
                    "ISO certified shaft & machine components India",
                    "ISO 9001:2015 shaft manufacturer",
                    "shaft & machine component inspection",
                    "repeatable supply"
                ]}
            />

            <main className="flex-1">
                <PageHero
                    title="Engineering & Quality"
                    subtitle="Engineering and quality systems exist to control variation."
                    badge="Quality Systems"
                />


                <InfrastructureGallery />

                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <AnimatedSection animation="scale-in">
                            <div className="max-w-4xl mx-auto text-center bg-card border shadow-sm rounded-2xl p-12">
                                <span className="inline-block py-1 px-3 text-accent font-bold text-sm uppercase mb-6">
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
