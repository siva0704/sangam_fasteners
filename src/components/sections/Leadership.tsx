import { Award, Briefcase, Handshake, Target, TrendingUp, Users } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export const Leadership = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#050814] dark:to-[#0a0f1c] relative overflow-hidden transition-colors duration-500">
            {/* Dynamic Background Elements */}
            <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-400/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection animation="fade-up" className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6">
                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Our Leadership</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Driven by Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
                </AnimatedSection>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Image Column */}
                        <div className="lg:col-span-5 relative">
                            <AnimatedSection animation="fade-right">
                                <div className="relative group">
                                    {/* Decorative Frame */}
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-[32px] blur-2xl group-hover:opacity-70 transition-opacity duration-700" />

                                    <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl">
                                        <img
                                            src="/images/leadership/ceo.png"
                                            alt="Sangmesh I Handigol"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Glassy Overlay for Name */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent backdrop-blur-sm">
                                            <h3 className="text-2xl font-bold text-white mb-1">Sangmesh I Handigol</h3>
                                            <p className="text-blue-300 font-medium tracking-wide uppercase text-sm">CEO & Managing Director</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            <AnimatedSection animation="fade-left" delay={0.2}>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
                                        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">MD Profile</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                                        Leading Sangam Fasteners into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">New Era of Precision</span>
                                    </h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light italic">
                                        "Innovation in manufacturing isn't just about new machines—it's about modernizing our mindset to meet global standards with local expertise."
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                        Mr. Sangmesh I Handigol is the visionary force behind the modernization of Sangam Fasteners Pvt Ltd. With over 20 years of hands-on experience in industrial marketing and manufacturing, he has successfully transitioned the company from a traditional fastener unit to a high-precision, technology-driven OEM partner for global leaders.
                                    </p>
                                </div>

                                {/* Stat Badges */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                                    {[
                                        { label: "Experience", value: "20+ Years", icon: Briefcase },
                                        { label: "Focus", value: "Modernization", icon: TrendingUp },
                                        { label: "Expertise", value: "OEM Partnering", icon: Handshake },
                                    ].map((stat, idx) => (
                                        <div key={idx} className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-white/10 hover:shadow-lg transition-all text-center">
                                            <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                                            <div className="text-slate-900 dark:text-white font-bold text-sm mb-1">{stat.value}</div>
                                            <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Legacy Mention */}
                                <div className="mt-10 p-6 rounded-2xl bg-blue-600/5 dark:bg-blue-400/5 border border-blue-600/10 dark:border-blue-400/10 flex gap-5 items-start">
                                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Guided by Legacy</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Under the chairmanship of <span className="font-semibold">Mr. Ishwarappa S Handigol</span>, a first-generation entrepreneur with 50+ years of industry experience, the company upholds values of ethics and fair dealing.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
