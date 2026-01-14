import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

const SectionAboutPreview = () => {
    return (
        <section className="py-12 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
                            What We Do
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-8 leading-relaxed max-w-5xl mx-auto tracking-wide">
                            We manufacture fasteners used in <span className="text-accent">load-bearing</span> and <span className="text-accent">function-critical assemblies</span>. Our work is evaluated by how reliably parts assemble and perform over <span className="italic font-serif text-primary/80">repeated supplies</span>.
                        </h2>

                        <Link to="/about">
                            <MagneticButton size="lg" className="bg-primary text-white hover:bg-primary/90 mt-4">
                                View Company Profile <ArrowRight className="ml-2 h-4 w-4" />
                            </MagneticButton>
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutPreview;
