import { Factory, Cog, Wrench, Settings, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import AnimatedSection from "./AnimatedSection";
import ParallaxSection from "./ParallaxSection";

const stats = [
    { label: "Manufacturing Area", value: "50,000+", unit: "sq. ft." },
    { label: "Production Capacity", value: "500+", unit: "Tons/Month" },
    { label: "Skilled Workforce", value: "150+", unit: "Start" }
];

const capabilities = [
    {
        icon: Factory,
        title: "Hot & Cold Forging",
        desc: "Advanced headers and forging presses for high-strength components."
    },
    {
        icon: Cog,
        title: "CNC Machining",
        desc: "Precision turning and milling centers for complex geometries."
    },
    {
        icon: Settings,
        title: "Thread Rolling",
        desc: "High-speed thread rolling machines for superior thread strength."
    },
    {
        icon: Wrench,
        title: "Heat Treatment",
        desc: "Controlled atmosphere furnaces for consistent mechanical properties."
    }
];

const SectionInfrastructure = () => {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Industrial Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <AnimatedSection animation="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                                Our Infrastructure
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                State-of-the-Art <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                    Manufacturing Facility
                                </span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                                Located in Hubli, Karnataka, our 50,000+ sq. ft. facility is equipped with modern machinery to handle large-scale production while maintaining micron-level precision.
                            </p>

                            <MagneticButton size="lg" className="bg-accent text-white hover:bg-accent/90 border-0 mb-10">
                                Start Supplier Evaluation <ArrowRight className="ml-2 h-4 w-4" />
                            </MagneticButton>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {capabilities.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <item.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Visuals */}
                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <AnimatedSection animation="fade-up" delay={0.2} className="mt-12">
                                <div className="rounded-2xl overflow-hidden h-64 shadow-2xl border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop"
                                        alt="CNC Machine"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation="fade-up" delay={0.4}>
                                <div className="rounded-2xl overflow-hidden h-64 shadow-2xl border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                                        alt="Forging Process"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
                            <ParallaxSection speed={0.1}>
                                <div className="bg-accent/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 text-center">
                                    <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                                        {stats.map((stat, idx) => (
                                            <div key={idx} className="px-2">
                                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                <div className="text-[10px] uppercase tracking-wider font-bold text-white/80">{stat.unit}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ParallaxSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionInfrastructure;
