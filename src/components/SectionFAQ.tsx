import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Where is Sangam Shaft & Machine Components Pvt. Ltd. located?",
        answer: "Sangam Shaft & Machine Components Pvt. Ltd. is located at B-23, KSSIDC Gamanagatti Industrial Estate, HUBLI-580021 (KARNATAKA) INDIA."
    },
    {
        question: "What types of washing machine shafts do you manufacture?",
        answer: "We manufacture Main Drive Shafts for top-load and front-load washing machines, Agitator Shafts with precision-machined surface finish, Custom Specifications tailored to your requirements, and offer comprehensive Material Options including Stainless Steel (304/316), Carbon Steel, and Specialty Alloys."
    },
    {
        question: "Do you supply to global markets?",
        answer: "Yes, we supply worldwide with reliable logistics partners. We serve North America (USA, Canada, Mexico), Europe (EU markets with CE standards), and Asia-Pacific regions with direct shipping, expedited delivery options, and regional distribution centers."
    },
    {
        question: "Are your products certified?",
        answer: "Yes, we are ISO 9001:2015 certified. Our quality management system ensures consistent processes and continuous improvement. We maintain complete material traceability and perform 100% inspection with advanced metrology equipment."
    },
    {
        question: "Can I get a quote for a bulk order?",
        answer: "Absolutely. You can request a quote by contacting us via our website form, email, or phone. We focus on long-term supply relationships."
    }
];

const SectionFAQ = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#0f172a] dark:to-[#050814] text-left transition-colors duration-500">
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
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white leading-tight mb-4">
                                    Frequently Asked <br /> <span className="text-blue-600 dark:text-blue-400">Questions</span>
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Technical insights into our manufacturing standards and shaft solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="group relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md dark:hover:shadow-blue-900/20 hover:border-blue-100 dark:hover:border-blue-500/30 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-500/50 data-[state=open]:shadow-md overflow-hidden"
                                    >
                                        <AccordionTrigger className="w-full flex items-center justify-between p-4 hover:no-underline [&>svg]:hidden">
                                            {/* Question Text */}
                                            <span className="text-left font-semibold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-data-[state=open]:text-blue-700 dark:group-data-[state=open]:text-blue-300 transition-colors duration-300 flex-1 mr-4">
                                                {faq.question}
                                            </span>

                                            {/* Custom Bolt Head Toggle Icon */}
                                            <div className="relative shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-500 group-data-[state=open]:rotate-180">
                                                {/* Hex Bolt Shape - Cleaner */}
                                                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800 rounded rotate-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-data-[state=open]:bg-blue-100 dark:group-data-[state=open]:bg-blue-900/50 transition-colors duration-300 border border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-800"
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
                                                    className="relative z-10 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-data-[state=open]:text-blue-600 dark:group-data-[state=open]:text-blue-400 transition-colors duration-300 mt-0.5"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent className="px-5 pb-4 pt-0">
                                            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-1 pt-2 border-t border-slate-100 dark:border-white/5">
                                                {faq.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </AnimatedSection>
            </div >
        </section >
    );
};

export default SectionFAQ;
