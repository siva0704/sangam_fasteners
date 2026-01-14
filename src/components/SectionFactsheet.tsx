import { Building2, User, Calendar, FileCheck, ShieldCheck, Banknote, Briefcase, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const facts = [
    {
        label: "Nature of Business",
        value: "Manufacturer",
        subtext: "Factory / Manufacturing",
        icon: FactoryIcon,
        decoration: [FactoryIcon, Briefcase, Building2]
    },
    {
        label: "Company CEO",
        value: "Sangmesh Ishwarappa Handigol",
        subtext: "Visionary Leadership",
        icon: User,
        decoration: [User, Award, Briefcase]
    },
    {
        label: "Establishment",
        value: "01-07-2017",
        subtext: "GST Registration Date",
        icon: Calendar,
        decoration: [Calendar, HistoryIcon, FileCheck]
    },
    {
        label: "Annual Turnover",
        value: "5 - 25 Cr",
        subtext: "Consistent Growth",
        icon: Banknote,
        decoration: [Banknote, TrendingUp, Building2]
    },
    {
        label: "Legal Status",
        value: "Limited Company",
        subtext: "Private Limited Entity",
        icon: Scale,
        decoration: [Scale, FileCheck, ShieldCheck]
    },
    {
        label: "GST Number",
        value: "29AAGCS2351H1ZA",
        subtext: "Registered Entity",
        icon: FileCheck,
        decoration: [FileCheck, CheckCircle2, Shield]
    },
    {
        label: "CIN Number",
        value: "U80302KA2000PTC027793",
        subtext: "Corporate Identity",
        icon: FileText,
        decoration: [FileText, Building2, Globe2]
    },
    {
        label: "Quality Certification",
        value: "ISO 9001:2000",
        subtext: "Certified Company",
        icon: ShieldCheck,
        decoration: [ShieldCheck, Award, Star]
    }
];

import {
    Factory as FactoryIcon,
    History as HistoryIcon,
    TrendingUp,
    Scale,
    CheckCircle2,
    Shield,
    FileText,
    Globe2,
    Star
} from "lucide-react";

const SectionFactsheet = () => {
    // Shared design pattern: Left Align + Bold Right Graphic + Flying Decorations

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <AnimatedSection animation="fade-up" className="mb-12 text-center">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">
                        Corporate Profile
                    </span>
                    <h2 className="text-3xl font-heading font-bold text-slate-900">
                        Key Facts & Figures
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facts.map((fact, idx) => (
                        <AnimatedSection key={idx} animation="scale-in" delay={idx * 0.1}>
                            <div className="group relative isolate overflow-hidden flex flex-col items-start text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-slate-100 hover:border-blue-100 h-full">

                                {/* Spreading Background Animation */}
                                <div className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-50/80 rounded-full scale-0 group-hover:scale-[25] transition-transform duration-1000 ease-out -z-10 originating-from-icon" />

                                {/* Bold Glowing Graphic - Right Side */}
                                <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100 z-0 pointer-events-none">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-400/20 blur-[25px] rounded-full scale-150 animate-pulse" />
                                        <fact.icon
                                            size={80}
                                            strokeWidth={0.5}
                                            className="text-blue-500/20 -rotate-12 scale-50 group-hover:scale-100 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Decorations Flying Right */}
                                {fact.decoration.map((Deco, i) => {
                                    // Fly Right Logic
                                    const tx = 100 + (i * 40);
                                    const ty = (i % 2 === 0) ? -20 : 20;
                                    return (
                                        <div
                                            key={i}
                                            className={`absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out z-0`}
                                            style={{
                                                // We can use inline styles for dynamic values if class complexity is high, 
                                                // but let's stick to simple transforms if possible. 
                                                // Using Tailwind classes for simpler approach:
                                                transform: `translate(0,0)` // React style override? No, better use group-hover classes.
                                            }}
                                        >
                                            {/* Actually, let's just use the consistent approach from other files */}
                                            <Deco className={`animate-pulse w-4 h-4 text-blue-300 transform transition-transform duration-1000 group-hover:translate-x-[${tx}px] group-hover:translate-y-[${ty}px]`} />
                                            {/* Tailwind arbitrary values in template literals sometimes fail if not pre-compiled. 
                                              Let's use static classes.
                                           */}
                                        </div>
                                    );
                                })}
                                {/* Re-implement standard decorations loop safely */}
                                {[1, 2, 3].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-out
                                            ${i === 0 ? "group-hover:translate-x-[140px] group-hover:-translate-y-[10px]" : ""}
                                            ${i === 1 ? "group-hover:translate-x-[120px] group-hover:translate-y-[40px] delay-75" : ""}
                                            ${i === 2 ? "group-hover:translate-x-[160px] delay-150" : ""}
                                         z-0`}
                                    >
                                        <div className="text-blue-200/60">
                                            {fact.decoration.map((Deco, k) => (
                                                i === k && <Deco key={k} size={i === 0 ? 16 : i === 1 ? 12 : 20} />
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Icon */}
                                <div className="mb-4 relative z-10 pl-2">
                                    <fact.icon size={32} strokeWidth={1.5} className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300 group-hover:animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 w-full pl-2">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors duration-300 mb-1">
                                        {fact.label}
                                    </h4>
                                    <p className="font-heading font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-700 transition-colors duration-300 break-words">
                                        {fact.value}
                                    </p>
                                    <div className="pt-2">
                                        <p className="text-[10px] font-medium text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded-full group-hover:bg-white group-hover:text-blue-500 group-hover:shadow-sm transition-all duration-300">
                                            {fact.subtext}
                                        </p>
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

export default SectionFactsheet;
