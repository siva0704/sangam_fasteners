import React from 'react';
import { cn } from "@/lib/utils";

interface SFLPlaceholderProps {
    className?: string;
    text?: string;
}

const SFLPlaceholder = ({ className, text = "Sangam Fasteners" }: SFLPlaceholderProps) => {
    return (
        <div className={cn(
            "w-full h-full flex flex-col items-center justify-center bg-secondary dark:bg-background overflow-hidden relative group",
            className
        )}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:2rem_2rem] opacity-50" />

            {/* Logo */}
            <div className="relative z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <img
                    src={`${import.meta.env.BASE_URL}logo.svg`}
                    alt="Sangam Fasteners Logo"
                    className="w-32 h-32 object-contain filter grayscale"
                />
            </div>

            {/* Text Overlay */}
            {text && (
                <div className="mt-4 relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground">
                        {text}
                    </span>
                </div>
            )}

            {/* Industrial corner lines */}
            <div className="absolute top-4 left-4 w-4 h-[2px] bg-border dark:bg-accent" />
            <div className="absolute top-4 left-4 w-[2px] h-4 bg-border dark:bg-accent" />
            <div className="absolute bottom-4 right-4 w-4 h-[2px] bg-border dark:bg-accent" />
            <div className="absolute bottom-4 right-4 w-[2px] h-4 bg-border dark:bg-accent" />
        </div>
    );
};

export default SFLPlaceholder;
