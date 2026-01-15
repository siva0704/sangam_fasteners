import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect if an element is "active" (centered in viewport) on mobile devices.
 * Used to trigger hover effects on scroll for touch devices.
 */
export const useMobileInView = (options: { threshold?: number; rootMargin?: string; mobileOnly?: boolean } = {}) => {
    const { threshold = 0.5, rootMargin = "-10% 0px -10% 0px", mobileOnly = true } = options;
    const [isActive, setIsActive] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optional: Check if device is mobile (width < 768px for md breakpoint)
        if (mobileOnly && window.innerWidth >= 768) {
            return;
        }

        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting);
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, mobileOnly]);

    return { elementRef, isActive };
};
