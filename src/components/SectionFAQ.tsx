import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Where is Sangam Fasteners Pvt. Ltd. located?",
        answer: "Sangam Fasteners Pvt. Ltd. is located in Hubballi (Hubli), Karnataka, India, operating from the KSSIDC Industrial Estate on Gokul Road."
    },
    {
        question: "What types of industrial fasteners do you manufacture?",
        answer: "We manufacture a wide range of industrial fasteners including High Tensile Hex Bolts, Nuts, Studs, U-Bolts, Foundation Bolts, and custom fasteners as per drawings."
    },
    {
        question: "Do you supply custom fasteners for OEM applications?",
        answer: "Yes, we specialize in manufacturing custom fasteners tailored to specific OEM drawings and engineering requirements, ensuring precise dimensional accuracy."
    },
    {
        question: "Are your fasteners certified?",
        answer: "Yes, we are an ISO 9001:2015 certified manufacturer. Our fasteners meet international standards such as ASTM, DIN, ISO, and BS."
    },
    {
        question: "Which industries do you serve?",
        answer: "We serve diverse industries including Automotive, Infrastructure, Heavy Engineering, Power Generation, Oil & Gas, and General Engineering."
    },
    {
        question: "Can I get a quote for a bulk order?",
        answer: "Absolutely. You can request a quote by contacting us via our website form, email, or phone. We focus on long-term supply relationships."
    }
];

const SectionFAQ = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <AnimatedSection animation="fade-up">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-800 mx-auto rounded-full" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Technical insights into our manufacturing standards and fastener solutions.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={0.2}>
                    <Accordion type="single" collapsible className="w-full space-y-6">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="group relative bg-white border border-slate-100 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:border-slate-300/50 data-[state=open]:border-accent data-[state=open]:shadow-[0_8px_20px_rgba(0,0,0,0.1)] overflow-hidden"
                            >
                                {/* Metallic/Industrial Left Border Accent - Visible Orange by Default */}
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-blue-600 to-slate-800 group-hover:from-blue-600 group-hover:via-blue-700 group-hover:to-blue-600 transition-all duration-500" />

                                <AccordionTrigger className="w-full flex items-center justify-between p-6 hover:no-underline [&>svg]:hidden">
                                    {/* Question Text */}
                                    <span className="text-left font-bold text-lg text-gray-800 group-hover:text-accent group-data-[state=open]:text-accent transition-colors duration-300 flex-1 mr-4">
                                        {faq.question}
                                    </span>

                                    {/* Custom Bolt Head Toggle Icon */}
                                    <div className="relative shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-500 group-data-[state=open]:rotate-180">
                                        {/* Hex Bolt Shape Background - Colored by Default */}
                                        <div className="absolute inset-0 bg-slate-50 rounded-lg rotate-0 group-hover:bg-slate-100 group-data-[state=open]:bg-accent transition-colors duration-300 clip-path-hexagon border border-slate-200 group-hover:border-slate-300 group-data-[state=open]:border-accent"
                                            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                                        />

                                        {/* Inner Chevron */}
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="relative z-10 text-accent group-hover:text-accent/80 group-data-[state=open]:text-white transition-colors duration-300 mt-1"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </AccordionTrigger>

                                <AccordionContent className="px-6 pb-6 pt-0">
                                    <div className="text-muted-foreground text-base leading-relaxed pl-1 pt-4 border-t border-slate-100/50">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SectionFAQ;
