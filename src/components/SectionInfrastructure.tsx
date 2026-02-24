import { useState } from "react";
import { Factory, Cog, Settings, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import AnimatedSection from "./AnimatedSection";

const capabilities = [
    {
        icon: Cog,
        title: "51+ CNC Machines",
        desc: "Advanced multi-axis CNC turning and milling centers including Galaxy Midas & ACE J300 LM for extreme precision.",
        image: "/images/infrastructure/cnc_machine.png"
    },
    {
        icon: Settings,
        title: "Robotic Automation",
        desc: "Equipped with state-of-the-art Robotic Arms and Automatic Pick & Place systems for seamless, continuous operations.",
        image: "/images/infrastructure/robotic_automation.png"
    },
    {
        icon: ShieldCheck,
        title: "VMM Metrology",
        desc: "Non-contact Vision Measuring Machines and Mitutoyo digital precision testers ensuring 0.0001mm resolution.",
        image: "/images/infrastructure/vmm_metrology.png"
    },
    {
        icon: Factory,
        title: "Massive Scale",
        desc: "20,000 m² shop floor with 10,000 m² dedicated warehousing running on a 260 KVA redundant power supply.",
        image: "/images/infrastructure/massive_scale.png"
    }
];

const SectionInfrastructure = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#0f172a] dark:to-slate-900 relative overflow-hidden transition-colors duration-500">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 w-full max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Narrative (5 cols) */}
                    <div className="lg:col-span-5 h-full flex flex-col justify-center">
                        <AnimatedSection animation="fade-right">
                            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">
                                Infrastructure & Capacity
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6 leading-tight">
                                Manufacturing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-cyan-400">
                                    at Scale
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light pr-4">
                                Bypassing constraints through heavy capital investment in automation, precise metrology, and 51+ state-of-the-art CNC centers.
                            </p>

                            <div className="space-y-4 mb-10">
                                {capabilities.map((item, idx) => {
                                    const isActive = idx === activeIdx;
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => setActiveIdx(idx)}
                                            className={`flex gap-5 items-start p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${isActive
                                                ? 'bg-blue-50/50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 shadow-sm'
                                                : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400'
                                                }`}>
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold text-lg mb-1 transition-colors ${isActive ? 'text-blue-950 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'
                                                    }`}>
                                                    {item.title}
                                                </h4>
                                                <p className={`text-sm transition-all duration-300 overflow-hidden ${isActive ? 'text-slate-600 dark:text-slate-400 h-auto opacity-100' : 'h-0 opacity-0'
                                                    }`}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <Link to="/about">
                                <MagneticButton size="lg" className="bg-slate-900 text-white hover:bg-slate-800 border-0">
                                    Explore Full Facilities <ArrowRight className="ml-2 h-4 w-4" />
                                </MagneticButton>
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Right Image Router (7 cols) */}
                    <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 bg-slate-100 dark:bg-slate-800 isolate">
                        {capabilities.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${activeIdx === idx
                                    ? 'opacity-100 scale-100 z-10'
                                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                                    }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Inner Shadow for depth */}
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />

                                {/* Dynamic Overlay Tag */}
                                <div className={`absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 pr-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700 transition-transform duration-700 delay-300 ${activeIdx === idx ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 p-3 rounded-lg">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Verified Capacity</p>
                                            <p className="font-bold text-slate-900 dark:text-white text-lg leading-none">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionInfrastructure;
