
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            {children}
        </div>
    );
};
