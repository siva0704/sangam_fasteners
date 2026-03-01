
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '@/constants/data';
import { MapPin, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import MagneticButton from './MagneticButton';
import WorldMapSVG from './WorldMapSVG';

const SectionGlobalReach = () => {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    // Simplified World Map SVG Path (Low-poly/Stylized)
    const mapPath = "M 10 30 Q 15 25 20 30 Q 25 35 30 30 Q 35 25 40 30 Q 45 35 50 25 Q 55 15 60 20 Q 65 25 70 20 Q 75 15 80 25 Q 85 35 90 30 Q 95 25 98 35 Q 95 45 90 50 Q 80 60 70 55 Q 60 50 50 60 Q 40 70 30 65 Q 20 60 10 50 Z";

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Earth Theme Custom Variables */}
            <style>{`
                :root {
                    --map-land: #dcfce7;
                    --map-water: #bae6fd;
                    --map-border: #86efac;
                }
                .dark {
                    --map-land: #064e3b;
                    --map-water: #082f49;
                    --map-border: #059669;
                }
            `}</style>

            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-full blur-[120px]" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <AnimatedSection animation="fade-up">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <Globe className="w-4 h-4" /> Global Presence
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            Serving Industries <span className="text-accent italic">Across the Globe</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            From our precision engineering hub in India, we deliver world-class components to global manufacturing giants. Our reach spans continents, ensuring quality and reliability everywhere.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Interactive World Map Area */}
                    <div className="lg:col-span-12 xl:col-span-8 relative group">
                        <AnimatedSection
                            animation="scale-in"
                            className="relative aspect-[2048/1039] w-full bg-slate-50/50 dark:bg-background rounded-3xl border border-primary/10 dark:border-primary/20 overflow-hidden shadow-2xl transition-colors duration-500"
                        >
                            {/* SVG World Map Container */}
                            <div className="absolute inset-0 w-full h-full p-4 md:p-8">
                                <div className="relative w-full h-full">
                                    <WorldMapSVG
                                        className="w-full h-full object-contain opacity-70 dark:opacity-90 transition-all duration-700 group-hover:opacity-80 dark:group-hover:opacity-100 scale-[1.05] group-hover:scale-110"
                                        style={{
                                            filter: 'drop-shadow(0 0 30px rgba(var(--primary-rgb), 0.2))'
                                        }}
                                    />

                                    {/* Overlay Gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Markers */}
                            {industries.map((loc) => (
                                loc.coordinates && (
                                    <div
                                        key={loc.id}
                                        className="absolute cursor-pointer group/marker transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500"
                                        style={{
                                            left: `${loc.coordinates.x}%`,
                                            top: `${loc.coordinates.y}%`,
                                            filter: hoveredLocation && hoveredLocation !== loc.id ? 'grayscale(0.5) opacity(0.3)' : 'none'
                                        }}
                                        onMouseEnter={() => setHoveredLocation(loc.id)}
                                        onMouseLeave={() => setHoveredLocation(null)}
                                    >
                                        <div className="relative">
                                            {/* Pulse Ring */}
                                            <motion.div
                                                className="absolute -inset-4 bg-accent/30 dark:bg-accent/40 rounded-full z-0"
                                                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                            {/* Marker Icon */}
                                            <div className="relative z-10 bg-white dark:bg-background border-2 border-accent p-2 rounded-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] group-hover/marker:scale-125 group-hover/marker:bg-accent group-hover/marker:border-white transition-all duration-300">
                                                <loc.icon className="w-4 h-4 text-accent group-hover/marker:text-foreground" />
                                            </div>

                                            {/* Label */}
                                            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 dark:bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-accent/20 dark:border-primary/20 shadow-2xl opacity-0 group-hover/marker:opacity-100 transition-all transform translate-y-2 group-hover/marker:translate-y-0">
                                                <span className="text-xs font-bold text-primary dark:text-foreground tracking-wide">{loc.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}

                            {/* Tooltip Card (Desktop Focus) */}
                            <AnimatePresence>
                                {hoveredLocation && industries.find(l => l.id === hoveredLocation) && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                                        className="absolute top-6 right-6 z-30 w-80 bg-white/95 dark:bg-background/90 backdrop-blur-2xl border border-primary/10 dark:border-accent/20 p-6 rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden md:block"
                                    >
                                        {(() => {
                                            const loc = industries.find(l => l.id === hoveredLocation)!;
                                            return (
                                                <>
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="p-2.5 bg-primary/5 dark:bg-accent/20 rounded-xl border border-primary/10 dark:border-accent/20">
                                                            <loc.icon className="w-6 h-6 text-primary dark:text-accent" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-xl text-primary dark:text-foreground">{loc.name}</h4>
                                                            <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Global Hub</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-5 leading-relaxed font-medium">
                                                        {loc.description}
                                                    </p>
                                                    <div className="space-y-3 pt-5 border-t border-primary/10 dark:border-border">
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-[10px] font-bold text-accent uppercase tracking-tighter">Strategic Capabilities</p>
                                                            <p className="text-xs text-primary dark:text-foreground font-semibold flex items-center gap-2">
                                                                <ArrowRight className="w-3 h-3 text-accent" /> {loc.detail}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-[10px] font-bold text-accent uppercase tracking-tighter">Case Reference</p>
                                                            <p className="text-[11px] text-muted-foreground dark:text-muted-foreground italic">"{loc.caseStudy}"</p>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })()}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </AnimatedSection>
                    </div>

                    {/* Content List Area */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-6">
                        <AnimatedSection animation="fade-left" className="h-full">
                            <div className="bg-slate-50/80 dark:bg-background/80 backdrop-blur border border-primary/10 p-8 rounded-3xl h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-accent" /> Logistics & Reach
                                </h3>

                                <div className="space-y-4 flex-1">
                                    {industries.map((industry) => (
                                        <div
                                            key={industry.id}
                                            className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${hoveredLocation === industry.id
                                                ? 'bg-white dark:bg-card border-primary shadow-md translate-x-2'
                                                : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-card/50'
                                                }`}
                                            onMouseEnter={() => setHoveredLocation(industry.id)}
                                            onMouseLeave={() => setHoveredLocation(null)}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`p-2 rounded-lg transition-colors ${hoveredLocation === industry.id ? 'bg-primary text-foreground' : 'bg-primary/5 text-primary'}`}>
                                                    <industry.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className={`font-bold transition-colors ${hoveredLocation === industry.id ? 'text-primary' : 'text-primary/70'}`}>
                                                        {industry.name}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                                        {industry.detail}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-primary/10">
                                    <MagneticButton className="w-full bg-primary hover:bg-primary/95 text-foreground flex items-center justify-center gap-2 h-14 rounded-2xl">
                                        Partner with Us <ArrowRight className="w-5 h-5" />
                                    </MagneticButton>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Statistics / Trust Indicators */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
                    {[
                        { label: "Export Markets", value: "25+", suffix: "Countries" },
                        { label: "Supply Chain", value: "100%", suffix: "Reliability" },
                        { label: "Global Clients", value: "50+", suffix: "Enterprise" },
                        { label: "Logistics", value: "24/7", suffix: "Support" }
                    ].map((stat, idx) => (
                        <AnimatedSection key={stat.label} animation="fade-up" className={`text-center ${idx < 3 ? 'border-r border-primary/10' : ''}`}>
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-accent mb-1">{stat.label}</div>
                            <div className="text-xs text-muted-foreground">{stat.suffix}</div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionGlobalReach;
