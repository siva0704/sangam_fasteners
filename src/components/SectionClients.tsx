import { CheckCircle2, Trophy, Users, Globe2, Shield, Award, Star, MapPin, Plane, UserCheck, Heart, ThumbsUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useRef, useState } from "react";

const stats = [
    {
        label: "Client Satisfaction",
        value: "100%",
        icon: Users,
        description: "Delivering excellence that builds lasting partnerships.",
        color: "from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300",
        bgLight: "bg-blue-500/10",
        borderLight: "border-blue-500/20",
        iconColor: "text-blue-500 dark:text-white/80"
    },
    {
        label: "Quality Certified",
        value: "ISO 9001",
        icon: CheckCircle2,
        description: "Adhering to strict international manufacturing standards.",
        color: "from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300",
        bgLight: "bg-emerald-500/10",
        borderLight: "border-emerald-500/20",
        iconColor: "text-emerald-500 dark:text-white/80"
    },
    {
        label: "Market Presence",
        value: "Global",
        icon: Globe2,
        description: "Serving diverse industries across multiple continents.",
        color: "from-indigo-500 to-purple-400 dark:from-indigo-400 dark:to-purple-300",
        bgLight: "bg-indigo-500/10",
        borderLight: "border-indigo-500/20",
        iconColor: "text-indigo-500 dark:text-white/80"
    },
];

// High-Quality Client Logos
const CLIENT_LOGOS = [
    'BHEL.png',
    'NLC_India.png',
    'ashok_leyland.svg',
    'haier.svg',
    'lg.svg',
    'ntpc.svg',
    'samsung.svg',
    'tata.svg',
    'vestel.svg',
    'whirlpool.svg'
];

const SectionClients = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll logic utilizing requestAnimationFrame
    useEffect(() => {
        let animationFrameId: number;
        let lastTimestamp: number;
        const scrollSpeed = 0.05; // pixels per ms (~30px per sec)

        const scroll = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (scrollRef.current && !isDragging && !isHovered) {
                // Determine the total scrollable width
                const container = scrollRef.current;

                // If we've scrolled past the mid-point of our duplicate set, immediately snap back seamlessly
                // To do this reliably, we check scrollLeft vs scrollWidth / 2
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += scrollSpeed * deltaTime;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging, isHovered]);

    // Manual Dragging Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        if (scrollRef.current) {
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsHovered(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#050814] dark:to-[#0a0f1c] relative overflow-hidden font-sans transition-colors duration-500">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 w-full max-w-7xl">

                <AnimatedSection animation="fade-up">

                    {/* Header */}
                    <div className="text-center mb-16 relative">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] mb-6 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                            <Star className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 fill-cyan-500/20 dark:fill-cyan-400/20" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
                                Trusted by Industry Leaders
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                            Forging Global <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                                Partnerships
                            </span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                            We pride ourselves on 100% client retention in the precision shaft sector, delivering uncompromising quality to Tier-1 OEMs and global infrastructure projects.
                        </p>
                    </div>

                    {/* Stats Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-[2rem] bg-white dark:bg-[#0c1222]/80 backdrop-blur-xl border border-slate-200 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.1)] isolate">
                                {/* Hover Glow Base */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${stat.bgLight} to-transparent opacity-0 group-hover:opacity-10 dark:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`} />

                                {/* Top Edge Highlight */}
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                                <div className={`w-16 h-16 rounded-2xl ${stat.bgLight} border ${stat.borderLight} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <stat.icon className={`w-8 h-8 ${stat.iconColor} fill-current/10`}
                                        strokeWidth={1.5} />
                                </div>

                                <h4 className={`text-4xl md:text-5xl font-black font-heading mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color} drop-shadow-sm`}>
                                    {stat.value}
                                </h4>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700 dark:text-white/80 mb-4">
                                    {stat.label}
                                </p>

                                <p className="text-sm text-slate-500 dark:text-slate-400/80 leading-relaxed font-light max-w-[240px]">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={0.2}>
                {/* Interactive Draggable Auto-Carousel */}
                <div className="relative w-full overflow-hidden py-10 mt-8">

                    {/* Smooth Edge Fades */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#050814] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#050814] to-transparent z-10 pointer-events-none" />

                    <div
                        ref={scrollRef}
                        className={`flex items-center gap-16 md:gap-24 overflow-x-hidden whitespace-nowrap px-8 md:px-32 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"} active:cursor-grabbing`}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onTouchStart={(e) => {
                            setIsDragging(true);
                            if (scrollRef.current) {
                                setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
                                setScrollLeft(scrollRef.current.scrollLeft);
                            }
                        }}
                        onTouchEnd={() => setIsDragging(false)}
                        onTouchMove={(e) => {
                            if (!isDragging || !scrollRef.current) return;
                            const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
                            const walk = (x - startX) * 2;
                            scrollRef.current.scrollLeft = scrollLeft - walk;
                        }}
                    >
                        {/* Duplicate array for seamless infinite scroll */}
                        {[...Array(2)].map((_, arrayIdx) => (
                            <div key={arrayIdx} className="flex items-center gap-12 md:gap-20 flex-shrink-0 px-6 md:px-10">
                                {CLIENT_LOGOS.map((filename, i) => (
                                    <div
                                        key={i}
                                        className="inline-flex items-center justify-center flex-shrink-0"
                                    >
                                        <img
                                            src={`/sangam_fasteners/SFL_Clients_Clean/${filename}`}
                                            alt={`Partner ${i + 1}`}
                                            className="h-10 md:h-14 lg:h-16 w-auto object-contain pointer-events-none"
                                            draggable={false}
                                            onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default SectionClients;
