import { Target } from "lucide-react";

const SectionBenchmarkMarquee = () => {
    const text = "To set the benchmark in advanced shaft solutions with cutting-edge technology and world-class standards";

    return (
        <div className="w-full bg-slate-900 border-y-2 border-cyan-500 overflow-hidden py-4 relative z-20 shadow-[0_4px_15px_rgba(6,182,212,0.15)]">
            {/* The wrapper flex needs to hold content that is twice the viewport width at minimum to ensure seamless sliding */}
            <div className="flex w-max">
                {/* First set of items */}
                <div className="flex flex-nowrap animate-marquee items-center pe-8">
                    <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap px-8">{text}</span>
                    <Target className="w-5 h-5 text-cyan-600 shrink-0" />
                    <span className="text-slate-100 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap px-8">{text}</span>
                    <Target className="w-5 h-5 text-cyan-600 shrink-0" />
                </div>
                {/* Second set of identical items for seamless looping */}
                <div className="flex flex-nowrap animate-marquee items-center pe-8" aria-hidden="true">
                    <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap px-8">{text}</span>
                    <Target className="w-5 h-5 text-cyan-600 shrink-0" />
                    <span className="text-slate-100 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap px-8">{text}</span>
                    <Target className="w-5 h-5 text-cyan-600 shrink-0" />
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default SectionBenchmarkMarquee;
