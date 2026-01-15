import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

const SectionCTAFooter = () => {
    return (
        <section className="py-10 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop"
                    alt="Industrial Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="container px-4 mx-auto relative z-20 text-center">
                <AnimatedSection animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                        Looking for a stable fastener manufacturing partner?
                    </h2>
                    <Link to="/contact">
                        <MagneticButton size="lg" className="bg-accent text-white hover:bg-accent/90 border-none min-w-[200px]">
                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SectionCTAFooter;
