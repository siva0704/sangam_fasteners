import { ArrowRight, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

const SectionCTAFooter = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-muted to-background relative overflow-hidden transition-colors duration-500">
            {/* Tech/Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

            <div className="container px-4 mx-auto relative z-20 text-center">
                <AnimatedSection animation="fade-up">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block py-1 px-4 text-foreground font-bold tracking-widest text-xs uppercase mb-6 border border-border rounded-full bg-foreground/5 backdrop-blur-sm shadow-sm">
                            Initiate Vendor Evaluation
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-foreground mb-8 drop-shadow-md">
                            Ready for Assembly-Ready Precision?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 font-medium">
                            Submit your technical drawings for an immediate capability and scale evaluation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="mailto:info@sfpl.com?subject=Vendor Evaluation: Technical Drawing Submission">
                                <MagneticButton size="lg" className="bg-foreground text-background hover:bg-foreground/90 border-none px-10 py-7 text-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] w-full sm:w-auto">
                                    <Mail className="mr-3 h-6 w-6" /> Email Technical Drawings
                                </MagneticButton>
                            </a>
                            <Link to="/contact">
                                <MagneticButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-[0_10px_40px_rgba(37,99,235,0.2)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_60px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all">
                                    Contact Engineering Team <ArrowRight className="ml-2 h-5 w-5" />
                                </MagneticButton>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SectionCTAFooter;
