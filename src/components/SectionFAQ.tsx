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
        <section className="py-16 bg-gradient-to-b from-white to-secondary/30 text-left">
            <div className="container mx-auto px-4">
                <AnimatedSection animation="fade-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Right Content - Visual */}
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-2 hidden lg:block sticky top-24">
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
                            {/* Industrial Blueprints / Precision Image */}
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                                alt="Industrial Precision"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
                                <h3 className="text-white text-2xl font-bold font-heading mb-2">Technical Excellence</h3>
                                <p className="text-gray-200">Our engineering team is ready to assist with complex specifications.</p>
                            </div>
                        </div>

                        {/* Left Content - FAQ Accordion */}
                        <div className="order-1 lg:order-1">
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary leading-tight mb-4">
                                    Frequently Asked <br /> <span className="text-blue-600">Questions</span>
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Technical insights into our manufacturing standards and fastener solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="group relative bg-white border border-slate-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-100 data-[state=open]:border-blue-200 data-[state=open]:shadow-md overflow-hidden"
                                    >
                                        <AccordionTrigger className="w-full flex items-center justify-between p-4 hover:no-underline [&>svg]:hidden">
                                            {/* Question Text */}
                                            <span className="text-left font-semibold text-base text-gray-800 group-hover:text-blue-600 group-data-[state=open]:text-blue-700 transition-colors duration-300 flex-1 mr-4">
                                                {faq.question}
                                            </span>

                                            {/* Custom Bolt Head Toggle Icon */}
                                            <div className="relative shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-500 group-data-[state=open]:rotate-180">
                                                {/* Hex Bolt Shape - Cleaner */}
                                                <div className="absolute inset-0 bg-slate-50 rounded rotate-0 group-hover:bg-blue-50 group-data-[state=open]:bg-blue-100 transition-colors duration-300 border border-slate-200 group-hover:border-blue-200"
                                                    style={{ borderRadius: '6px' }}
                                                />
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="relative z-10 text-slate-400 group-hover:text-blue-500 group-data-[state=open]:text-blue-600 transition-colors duration-300 mt-0.5"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent className="px-5 pb-4 pt-0">
                                            <div className="text-slate-600 text-sm leading-relaxed pl-1 pt-2 border-t border-slate-50">
                                                {faq.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SectionFAQ;
