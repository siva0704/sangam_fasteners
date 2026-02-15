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
                        <span className="inline-block py-1 px-3 text-accent font-bold text-sm uppercase mb-6">
                            About Us
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold font-heading text-primary mb-8 leading-relaxed max-w-5xl mx-auto tracking-wide text-justify">
                            We are a <span className="text-accent">specialised manufacturer</span> dedicated to producing high-quality washing machine shafts and <span className="text-accent">machined components</span> for the global appliance industry. With state-of-the-art manufacturing facilities and a commitment to precision engineering, we supply major appliance manufacturers across continents.
                            <br /><br />
                            Our expertise in <span className="italic font-serif text-primary/80">metallurgy, CNC machining, and quality control</span> ensures that every shaft meets the rigorous demands of modern washing machine applications. We combine traditional craftsmanship with advanced manufacturing technology to deliver components that exceed industry standards.
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
