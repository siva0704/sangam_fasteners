import { Award, Briefcase, Handshake, Target, TrendingUp, Users } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export const Leadership = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#050814] dark:to-[#0a0f1c] relative overflow-hidden transition-colors duration-500">
            {/* Dynamic Background Elements */}
            <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-400/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection animation="fade-up" className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6">
                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Our Leadership</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Visionary Guidance</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
                </AnimatedSection>

                <div className="max-w-7xl mx-auto space-y-24">
                    {/* Chairman Section */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative lg:order-2">
                            <AnimatedSection animation="fade-left">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-[32px] blur-2xl group-hover:opacity-70 transition-opacity duration-700" />
                                    <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl">
                                        <img
                                            src="/assets/corporate-profile/leadership/chairman.jpeg"
                                            alt="Ishwarappa S Handigol"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent backdrop-blur-sm">
                                            <h3 className="text-2xl font-bold text-white mb-1">Ishwarappa S Handigol</h3>
                                            <p className="text-blue-300 font-medium tracking-wide uppercase text-sm">Chairman</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="lg:col-span-7 flex flex-col gap-6 lg:order-1">
                            <AnimatedSection animation="fade-right">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
                                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">Founder's Vision</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                                    A Legacy of <span className="text-blue-600 dark:text-blue-400">50 Years</span> in Industry
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Mr. Ishwarappa S Handigol is a first-generation entrepreneur and a visionary leader with over 50 years of industry experience. His constant hard work and passion for automobiles and home appliances have brought great success to the organization.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Sangam Fasteners Private Limited is a reflection of his ambition to maximize customer satisfaction and deliver quality products. He continues to focus on his vision of taking the company to the pinnacle of success while chartering new ways to provide value to customers.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* CEO Section */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative">
                            <AnimatedSection animation="fade-right">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-[32px] blur-2xl group-hover:opacity-70 transition-opacity duration-700" />
                                    <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl">
                                        <img
                                            src="/assets/corporate-profile/leadership/ceo.jpeg"
                                            alt="Sangamesh I Handigol"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent backdrop-blur-sm">
                                            <h3 className="text-2xl font-bold text-white mb-1">Sangamesh I Handigol</h3>
                                            <p className="text-blue-300 font-medium tracking-wide uppercase text-sm">CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <AnimatedSection animation="fade-left">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
                                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">Operational Excellence</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                                    Driving <span className="text-blue-600 dark:text-blue-400">Modernization</span> & Growth
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    A graduate specialized in Marketing, Mr. Sangamesh I Handigol has over 20 years of working experience in the family business. His exposure to varying industries has helped him understand and serve clients better.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    He is currently the driving force of the organization, implementing newer and modern ways to simplify business, serve clients better, and establish Sangam Fasteners Private Limited as a reputed organization in the market.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
