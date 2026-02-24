import { ArrowRight, Activity, DraftingCompass, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const disciplines = [
    {
        icon: Activity,
        title: "Process Control",
        desc: "Strict control at every stage ensures zero-defect quality across high-volume production runs.",
        accent: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
        icon: DraftingCompass,
        title: "Specification Execution",
        desc: "Absolute adherence to specific dimensions, material integrity, and performance compliance.",
        accent: "bg-sky-500/10 text-sky-500 border-sky-500/20"
    },
    {
        icon: ShieldCheck,
        title: "Quality Accountability",
        desc: "Full responsibility taken at every stage, building long-term partnerships driven by consistent reliability.",
        accent: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
    }
];

const SectionAboutPreview = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#050814] dark:to-[#0a0f1c] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500">
            {/* Blueprint Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:150px_150px] opacity-20" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection animation="fade-up">
                        <span className="inline-block py-1 px-3 text-blue-600 dark:text-cyan-400 font-bold tracking-widest text-xs uppercase mb-4 border border-blue-200 dark:border-cyan-400/20 rounded-full bg-blue-50 dark:bg-cyan-400/5">
                            Operational Discipline
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-slate-900 dark:text-white">
                            The Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Precision</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                            To set the benchmark in advanced shaft solutions with cutting-edge technology and world-class standards.
                        </p>
                    </AnimatedSection>
                </div>

                {/* 3-Column Glassmorphic Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {disciplines.map((item, idx) => (
                        <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                            <div className="group relative h-full bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-500 overflow-hidden isolate shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)]">
                                {/* Hover Pulse Ring */}
                                <div className="absolute top-8 right-8 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl scale-0 group-hover:scale-150 transition-transform duration-700 ease-out -z-10" />

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner ${item.accent}`}>
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50 group-hover:text-blue-900 dark:group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionAboutPreview;
