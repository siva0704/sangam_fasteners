import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SnapshotCardProps {
    icon: LucideIcon;
    label: string;
    title: string;
    badgeText?: string;
    description?: string;
    decorations: any[]; // LucideIcons
    isActive?: boolean;
    domRef?: React.Ref<HTMLDivElement>;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
    animationClass?: string;
}

export const SnapshotCard = ({
    icon: Icon,
    label,
    title,
    badgeText,
    description,
    decorations,
    isActive,
    domRef,
    onMouseEnter,
    onMouseLeave,
    className = "",
    animationClass = ""
}: SnapshotCardProps) => {

    const getDecorationStyle = (i: number) => {
        // Distribute nicely in the RIGHT HALF of the card
        const translations = [
            "group-hover:translate-x-[40px] group-hover:-translate-y-[50px] group-[.is-active]:translate-x-[40px] group-[.is-active]:-translate-y-[50px]", // Top Right
            "group-hover:translate-x-[20px] group-hover:translate-y-[60px] group-[.is-active]:translate-x-[20px] group-[.is-active]:translate-y-[60px]",   // Bottom Right
            "group-hover:-translate-x-[60px] group-hover:-translate-y-[30px] group-[.is-active]:-translate-x-[60px] group-[.is-active]:-translate-y-[30px]", // Top Left (towards center)
            "group-hover:-translate-x-[40px] group-hover:translate-y-[50px] group-[.is-active]:-translate-x-[40px] group-[.is-active]:translate-y-[50px]",   // Bottom Left
            "group-hover:translate-x-[0px] group-hover:-translate-y-[70px] group-[.is-active]:translate-x-[0px] group-[.is-active]:-translate-y-[70px]"      // High Top Center
        ];

        const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
        const sizes = [
            "w-4 h-4 md:w-6 md:h-6",
            "w-3 h-3 md:w-5 md:h-5",
            "w-2 h-2 md:w-4 md:h-4",
            "w-3 h-3 md:w-5 md:h-5",
            "w-2 h-2 md:w-4 md:h-4"
        ];

        return {
            translate: translations[i % translations.length],
            delay: delays[i % delays.length],
            size: sizes[i % sizes.length]
        };
    };

    return (
        <div
            ref={domRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`group ${isActive ? "is-active" : ""} relative bg-white p-6 rounded-3xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-[180px] flex items-center justify-between text-left isolate ${className}`}
        >
            {/* Ripple Effect Background - Starts from left icon area */}
            <div className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/90 rounded-full scale-0 group-hover:scale-100 group-[.is-active]:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center -z-10 pointer-events-none" />

            {/* Big Illustration Watermark */}
            <Icon
                strokeWidth={1}
                className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-50/50 group-hover:text-blue-100/50 group-[.is-active]:text-blue-100/50 transition-all duration-700 ease-out -rotate-12 group-hover:rotate-0 scale-100 group-hover:scale-110 -z-10"
            />

            {/* Dynamically Blooming Decorations - Floating on Right Side of Card */}
            {decorations.map((DecoIcon: any, i: number) => {
                const style = getDecorationStyle(i);
                return (
                    <div
                        key={i}
                        className={`absolute top-1/2 right-[15%] -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-60 group-hover:scale-100 group-[.is-active]:opacity-60 group-[.is-active]:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                    >
                        <DecoIcon className={`text-blue-300/50 ${style.size}`} />
                    </div>
                );
            })}

            {/* Left Content: Icon & Text */}
            <div className="flex items-center gap-6 relative z-20 w-full">
                {/* Main Icon Container */}
                <div className={`shrink-0 p-4 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-blue-600 group-[.is-active]:bg-white group-[.is-active]:text-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200/50 group-[.is-active]:shadow-lg group-[.is-active]:shadow-blue-200/50 ring-1 ring-slate-100 group-hover:ring-blue-100 group-[.is-active]:ring-blue-100 relative z-20`}>
                    <Icon
                        size={32}
                        strokeWidth={1.5}
                        className={`transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] fill-blue-50/0 group-hover:fill-blue-50 group-[.is-active]:fill-blue-50 ${animationClass}`}
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 group-[.is-active]:text-blue-600 transition-colors duration-300 truncate w-full">
                        {label}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 leading-none transition-colors duration-300 group-hover:text-blue-900 group-[.is-active]:text-blue-900 mb-2 truncate w-full">
                        {title}
                    </h3>

                    {description ? (
                        <p className="text-xs text-slate-500 line-clamp-2 md:line-clamp-3 leading-relaxed max-w-[200px] group-hover:text-slate-700 group-[.is-active]:text-slate-700">
                            {description}
                        </p>
                    ) : badgeText && (
                        /* Pill inside text block */
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold text-slate-500 uppercase transition-all duration-500 group-hover:text-blue-700 group-[.is-active]:text-blue-700 rounded-full bg-slate-50 border border-slate-100 shadow-sm group-hover:border-blue-100 group-[.is-active]:border-blue-100 group-hover:bg-white group-[.is-active]:bg-white group-hover:shadow-sm group-[.is-active]:shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-[.is-active]:bg-blue-500 transition-all duration-500 shrink-0" />
                            <span className="whitespace-nowrap">{badgeText}</span>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
