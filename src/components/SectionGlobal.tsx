import { Globe2, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

const SectionGlobal = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Abstract Map Background Suggestion */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <Globe2 className="w-[800px] h-[800px] absolute -right-40 -top-40 text-primary" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <AnimatedSection animation="fade-right">
                            <span className="text-accent font-bold text-sm uppercase mb-2 block">
                                Export Capability
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
                                Connecting Global Supply Chains
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                From our manufacturing hub to your facility, anywhere in the world. We handle complex logistics so you can focus on production.
                            </p>

                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-primary">Key Export Markets</h4>
                                        <p className="text-sm text-muted-foreground">USA, Germany, UAE, Saudi Arabia, Australia</p>
                                    </div>
                                </div>
                            </div>

                            <MagneticButton className="bg-primary hover:bg-primary/90 text-white min-w-[200px]">
                                Schedule a Shipment
                            </MagneticButton>
                        </AnimatedSection>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <AnimatedSection animation="fade-left">
                            {/* Visual representation of global reach */}
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                                    alt="Global Logistics Container Ship"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white font-bold text-lg">Export-Ready Packaging</p>
                                    <p className="text-white/80 text-sm">Seaworthy packing solutions ensuring zero damage.</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionGlobal;
