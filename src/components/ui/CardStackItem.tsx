
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CardStackItemProps {
    children: React.ReactNode;
    index: number;
    total: number;
    offset?: number; // Distance from top in px
}

export const CardStackItem = ({ children, index, total, offset = 100 }: CardStackItemProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of this specific card container relative to the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // 'start start': when top of card hits top of viewport
        // 'end start': when bottom of card hits top of viewport (fully scrolled past)
        offset: ['start start', 'end start']
    });

    // Transform logic:
    // As card scrolls UP (progress 0 -> 1):
    // scale goes 1 -> 0.9
    // opacity goes 1 -> 0.
    // But we want it to happen ONLY when it's "stuck" and being covered.

    // Actually, "sticky" behavior means the element stays fixed in viewport while its container scrolls.
    // If we use standard CSS sticky, the element occupies space.

    // Let's rely on standard CSS sticky for positioning. 
    // And use framer-motion for the visual "push back" effect.

    // As the card moves towards the top (0), it stays 1.
    // As it stays at the top and the USER SCROLLS FURTHER (progress increases), it scales down.

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
    // We might need to tune the input range. 
    // If the card is tall, 0-1 might be too slow. We want it to scale as the NEXT card covers it.

    return (
        <div
            ref={containerRef}
            className="sticky z-10 relative"
            style={{
                top: `${offset}px`, // Fixed top for true stacking effect
                zIndex: index
            }}
        >
            <motion.div style={{ scale, opacity, transformOrigin: 'top center' }}>
                {children}
            </motion.div>
        </div>
    );
};
