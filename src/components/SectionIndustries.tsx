import { industries } from "@/constants/data";
import { useState } from "react";
import {
    Wrench, HardHat, Truck, Cpu, Gauge, Fuel, Zap,
    BrickWall, Cone, FileCog, Scroll, PenTool,
    Weight, Container, Hexagon, Cog, Settings2, Hammer, Factory, Car, Building2, Settings,
    Plane, Ship, FileText, Anchor, ShieldCheck, Users
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useMobileInView } from "@/hooks/use-mobile-in-view";



const SectionIndustries = () => {
    const [activeRegion, setActiveRegion] = useState<string | null>(null);

    // Map Configuration for Hotspots
    const regionPositions: Record<string, { top: string; left: string }> = {
        "north-america": { top: "35%", left: "20%" }, // USA/Mexico
        "europe": { top: "30%", left: "52%" }, // Europe
        "india-hubli": { top: "48%", left: "68%" }, // India (Hubli) - Added specific for HQ
        "asia-pacific": { top: "45%", left: "80%" }, // Asia Pacific
        "logistics": { top: "60%", left: "40%" }, // Atlantic Ocean (Abstract)
        "supply-chain": { top: "70%", left: "10%" } // Pacific Ocean (Abstract)
    };

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-[#050814] dark:to-[#0a0f1c] relative overflow-hidden transition-colors duration-500">
            {/* Background Map Image */}
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-40 pointer-events-none">
                <img
                    src={`${import.meta.env.BASE_URL}assets/world_map.png`}
                    alt="World Map"
                    className="w-full h-full object-cover object-center filter dark:invert-0 invert opacity-50 dark:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0f1c] via-transparent to-slate-50 dark:to-[#050814]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <AnimatedSection animation="fade-up" className="text-center mb-16">
                    <div className="text-center max-w-3xl mx-auto mb-16 relative z-20">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-foreground mb-6">
                            Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Global Industries</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Strategic logistics partnerships and regional warehousing ensure timely delivery to appliance manufacturers across the globe.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Interactive Map Interface - Frameless */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2.4/1] overflow-hidden group/map">
                    {/* Map Grid Overlay - Faint */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

                    {/* Connection Lines (SVG Overlay) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#60a5fa" opacity="0.6" />
                            </marker>
                        </defs>
                        {industries.filter(r => r.id !== 'india-hubli' && r.id !== 'logistics' && r.id !== 'supply-chain').map((region, idx) => {
                            const start = regionPositions['india-hubli']; // Hubli is HQ
                            const end = regionPositions[region.id];
                            if (!start || !end) return null;

                            return (
                                <g key={`line-${region.id}`}>
                                    {/* Base faint line */}
                                    <line
                                        x1={start.left}
                                        y1={start.top}
                                        x2={end.left}
                                        y2={end.top}
                                        stroke="#60a5fa"
                                        strokeWidth="0.5"
                                        strokeDasharray="4 4"
                                        className="opacity-20"
                                    />
                                    {/* Animated connection */}
                                    <line
                                        x1={start.left}
                                        y1={start.top}
                                        x2={end.left}
                                        y2={end.top}
                                        stroke="#60a5fa"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        className="opacity-70 animate-dash"
                                        strokeLinecap="round"
                                    />
                                    {/* Small particle at dest */}
                                    <circle cx={end.left} cy={end.top} r="1.5" fill="#60a5fa" className="animate-ping opacity-40" style={{ animationDuration: '3s', animationDelay: `${idx}s` }} />
                                </g>
                            );
                        })}
                    </svg>

                    {/* Hotspots */}
                    {industries.map((region) => {
                        const pos = regionPositions[region.id] || { top: "50%", left: "50%" };
                        const isActive = activeRegion === region.id;

                        // Highlight India HQ specifically
                        const isHQ = region.id === 'india-hubli';

                        return (
                            <div
                                key={region.id}
                                className="absolute group"
                                style={{ top: pos.top, left: pos.left }}
                                onMouseEnter={() => setActiveRegion(region.id)}
                                onMouseLeave={() => setActiveRegion(null)}
                            >
                                {/* Minimal Dot */}
                                <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4">
                                    <span className={`absolute inline-flex h-full w-full rounded-full ${isHQ ? 'bg-blue-500' : 'bg-blue-400'} opacity-10 animate-ping group-hover:bg-blue-300`} />
                                    <div className={`relative inline-flex rounded-full transition-all duration-300 ${isHQ ? 'h-2 w-2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : isActive ? 'h-2 w-2 bg-blue-400 scale-125' : 'h-1.5 w-1.5 bg-slate-400 group-hover:bg-blue-400'}`} />
                                </div>

                                {/* Tooltip / Card */}
                                <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 p-4 bg-card/90 backdrop-blur-md rounded-xl border border-border shadow-xl transition-all duration-300 origin-bottom ${isActive ? 'opacity-100 scale-100 translate-y-0 z-20' : 'opacity-0 scale-95 translate-y-4 pointer-events-none z-0'}`}>
                                    <div className="flex items-center gap-3 mb-2 pb-2 border-b border-border">
                                        <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                                            <region.icon size={16} />
                                        </div>
                                        <h3 className="font-bold text-foreground text-sm">{region.name}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                                        {region.description}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="text-[10px] font-mono text-blue-300 uppercase">{region.detail}</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-800/90" />
                                </div>
                            </div>
                        );
                    })}

                    <AnimatedSection animation="fade-left" delay={0.2} className="relative z-20">
                        <div className="bg-white/50 dark:bg-foreground/5 backdrop-blur-xl border border-slate-200 dark:border-border p-8 rounded-3xl h-full shadow-lg dark:shadow-none">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-foreground mb-6">Key Markets</h3>
                            <div className="space-y-6">
                                {industries.map((ind, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-foreground transition-colors">
                                                <ind.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {ind.name}
                                                </h4>
                                                <p className="text-sm text-slate-500 dark:text-muted-foreground">{ind.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default SectionIndustries;

