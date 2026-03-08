import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
    backgroundImage?: string;
    className?: string;
}

export const PageHero = ({
    title,
    subtitle,
    badge,
    backgroundImage = "https://images.unsplash.com/photo-1565457597556-b072a2754643?q=80&w=2560&auto=format&fit=crop",
    className
}: PageHeroProps) => {
    return (
        <section className={cn("relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-slate-100 dark:bg-background text-foreground flex items-center justify-center transition-colors duration-500", className)}>
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 bg-slate-100 dark:bg-background">
                {/* Subtle grid pattern for industrial feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
                {/* Light Mode Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent z-10 block dark:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/40 to-transparent z-10 block dark:hidden" />

                {/* Dark Mode Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-black/20 to-background/60 z-10 hidden dark:block" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-black/40 to-transparent z-10 hidden dark:block" />
            </div>

            <div className="container relative z-20 px-6 pt-20">
                <div className="max-w-4xl space-y-8 animate-fade-up text-left">
                    {/* No Card Container */}
                    <div>
                        {badge && (
                            <div className="inline-flex items-center text-base font-bold text-blue-600 mb-2">
                                {badge}
                            </div>
                        )}

                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 leading-[1.1] mb-6 pb-2">
                            {title}
                        </h1>

                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-cyan-400 rounded-full mb-8" />

                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Fade to Content */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none transition-colors duration-500" />
        </section>
    );
};
