import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Cog, ShieldCheck, Users, Activity, Layers, Truck, Anchor, Building2 as BuildingIcon, Factory as FactoryIcon } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import Seo from "@/components/Seo";
import AnimatedSection from "@/components/AnimatedSection";
import SectionFactsheet from "@/components/SectionFactsheet";
import StaggerGrid from "@/components/StaggerGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Using Button if MagneticButton not found, or assuming MagneticButton exists
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton"; // Assuming it exists based on usage

// Inline Components to replace lost ones
const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-center mb-12 ${className}`}>
    <span className="text-accent dark:text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">
      Sangam Shaft & Machine Components
    </span>
    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white">
      {children}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-accent dark:from-blue-500 dark:to-cyan-400 mx-auto mt-4 rounded-full" />
  </div>
);

const PremiumIcon = ({ icon: Icon }: { icon: any }) => (
  <div className="mb-6 relative inline-block group-hover:scale-110 transition-transform duration-300">
    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-500/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500" />
    <Icon className="w-12 h-12 text-slate-700 dark:text-slate-300 relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#050814] transition-colors duration-500 font-sans">
      <Seo
        title="About Sangam Shaft & Machine Components Pvt. Ltd. | Industrial Shaft & Machine Component Manufacturer"
        description="Learn about Sangam Shaft & Machine Components Pvt. Ltd., an industrial shaft & machine component manufacturing company established in 2000, focused on controlled production and repeat supply."
      />

      <main className="flex-1">
        <PageHero
          title="About Sangam Shaft & Machine Components"
          subtitle="Manufacturing Experience Built on Process Discipline"
          badge="Since 2000"
        />

        {/* Company Overview - Detailed Text */}
        <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-[#050814] overflow-hidden transition-colors duration-500">
          {/* Ambient Bg */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <SectionHeading>Company Overview</SectionHeading>
              </AnimatedSection>

              <AnimatedSection animation="blur-fade" delay={1}>
                <div className="prose prose-lg prose-slate dark:prose-invert mx-auto text-slate-600 dark:text-slate-300 text-justify">
                  <p className="mb-6 leading-relaxed">
                    Shaft & Machine Components, nuts, bolts, etc. have become a basic necessity in nearly every industrial activity. These hardware devices have alone commanded a huge demand, owing to their precision, durability and ability to efficiently affix two objects together. A technology driven entity, <span className="font-semibold text-slate-900 dark:text-white">Sangam Shaft & Machine Components Pvt. Ltd.</span> has evolved as a one stop point to avail the most superlative range of shaft & machine components, machined components, forged components and other allied products. We are a reputed <span className="font-semibold text-accent dark:text-blue-400">manufacturer, exporter and supplier</span> of <span className="italic text-slate-800 dark:text-slate-200">shaft & machine components, nuts, collar bolts, D-bolts, Threaded rods, forged components, special shaft & machine components, etc.</span>
                  </p>
                  <p className="mb-6 leading-relaxed">
                    Our products are the outcome of precise engineering, dedicated efforts, and detailed research into the emerging requirements of our technology conscious clients. Being an <span className="font-semibold text-accent dark:text-blue-400">ISO 9001:2000 certified company</span>, quality takes precedence in everything we do - be it in manufacturing, packaging, or delivering the products on time, etc.
                  </p>
                  <p className="leading-relaxed">
                    With our performance oriented products, we have created a benchmark in the global platform, and have always endeavored to meet or even exceed clients' expectations. Today, we are counted as one of the foremost manufacturers of shaft & machine components, machined components, forged components, etc. both in India and overseas. Our eminent clients include BHEL, BEML, Ashok Leyland, Mining Companies, Railways, Power plants, Valve industries and many more.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Factsheet Section */}
        <SectionFactsheet />

        {/* Mission & Vision - Split Section */}
        <section className="py-0">
          <div className="grid md:grid-cols-2">
            {/* Mission */}
            <div className="bg-slate-900 dark:bg-[#080d1a] border-r border-white/5 text-white p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 dark:bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatedSection animation="fade-right">
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-slate-800 dark:bg-slate-800/80 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent dark:group-hover:bg-blue-600 transition-colors duration-500">
                    <Target className="w-10 h-10 text-slate-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 tracking-wide">OUR MISSION</h3>
                  <p className="text-slate-300 leading-relaxed text-lg max-w-md mx-auto">
                    To manufacture industrial shaft & machine components that customers can approve with confidence and source repeatedly, without disruption to their production, quality, or delivery commitments.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Vision */}
            <div className="bg-blue-900 dark:bg-[#0a0f1c] text-white p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900/20 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatedSection animation="fade-left" delay={1}>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-blue-800 dark:bg-blue-900/80 flex items-center justify-center mx-auto mb-6 group-hover:bg-white dark:group-hover:bg-blue-500 transition-colors duration-500">
                    <Eye className="w-10 h-10 text-blue-200 group-hover:text-blue-900 dark:group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 tracking-wide">OUR VISION</h3>
                  <p className="text-blue-100 dark:text-slate-300 leading-relaxed text-lg max-w-md mx-auto">
                    To be a trusted long-term shaft & machine component manufacturing partner for OEMs and industrial customers by consistently delivering stable manufacturing output, specification-driven execution, and predictable supply behavior.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Operating Discipline - Premium Liquid Glass Cards */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#050814] dark:to-[#0a0f1c] relative overflow-hidden transition-colors duration-500">
          {/* Ambient flowing glows */}
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none transition-all duration-1000" />
          <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none transition-all duration-1000" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-up" className="mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6">
                  <Cog className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Core Principles</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Operating Discipline</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
              </div>
            </AnimatedSection>

            <StaggerGrid className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Process Control",
                  desc: "We maintain strict control at every production stage to ensure precision, consistency, and zero-defect quality in every shaft we manufacture.",
                  icon: Cog,
                  gradient: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Specification Execution",
                  desc: "We strictly adhere to customer specifications and industry standards, ensuring every shaft is manufactured with precise dimensions, material integrity, and performance compliance.",
                  icon: ShieldCheck,
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Quality Accountability",
                  desc: "We take full responsibility for quality at every stage of production, ensuring each shaft meets defined standards, customer requirements, and performance expectations without compromise.",
                  icon: Users,
                  gradient: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Repeat Supplier",
                  desc: "We build long-term partnerships through consistent quality, reliable delivery, and dependable performance that customers trust and return to.",
                  icon: Activity,
                  gradient: "from-blue-400 to-cyan-500"
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col p-[1px] rounded-[24px] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 cursor-default overflow-hidden"
                >
                  {/* Glowing hover border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />

                  <div className="relative h-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start z-10 border border-white/40 dark:border-white/5 transition-colors duration-500">
                    <div className="shrink-0 relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-2xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Product Portfolio - Feature List Style */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#0a0f1c] dark:to-[#0f172a] relative transition-colors duration-500">
          <div className="absolute inset-0 bg-white/50 dark:bg-black/20 skew-y-3 transform origin-bottom-left -z-10 transition-colors duration-500" />
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <SectionHeading>Product Portfolio</SectionHeading>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Bolts & Hex Bolts",
                "Nuts (Hex, Flange, Lock)",
                "Studs & Double-Ended Studs",
                "U-Bolts & Clamps",
                "Threaded Components",
                "Custom Shaft & Machine Components (Per Drawing)"
              ].map((product, idx) => (
                <AnimatedSection key={idx} animation="scale-in" delay={idx * 0.1}>
                  <div className="group bg-slate-50 dark:bg-[#080d1a] p-6 rounded-xl border border-slate-100 dark:border-white/5 flex items-center gap-4 hover:shadow-lg dark:hover:shadow-cyan-900/20 hover:border-blue-200 dark:hover:border-cyan-500/30 hover:bg-white dark:hover:bg-[#0c1222] transition-all duration-300 cursor-default">
                    <div className="p-3 bg-white dark:bg-blue-500/10 rounded-lg shadow-sm group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Layers className="w-6 h-6 text-slate-700 dark:text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-lg text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">{product}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/products">
                <MagneticButton className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-full">
                  View Full Catalog <ArrowRight className="ml-2 w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Engineering & Quality - Top-Level UI Block */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#0f172a] dark:to-slate-900 relative overflow-hidden font-sans transition-colors duration-500">
          {/* High-End Ambient Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-5 mix-blend-overlay pointer-events-none invert dark:invert-0" />
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-300/30 dark:bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-300/30 dark:bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Column: Heading and Approach */}
              <div className="lg:col-span-5">
                <AnimatedSection animation="fade-right">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-blue-600 dark:bg-accent" />
                    <span className="text-blue-600 dark:text-accent font-bold tracking-widest text-sm uppercase">
                      Our Core Strength
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
                    Engineering <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-accent dark:to-blue-400">
                      & Quality
                    </span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg lg:text-xl font-light mb-10 border-l-2 border-blue-400/50 dark:border-accent/50 pl-6">
                    We combine advanced engineering expertise with strict quality control to deliver precision shafts that meet exact specifications and perform reliably in every application.
                  </p>

                  {/* Stats / Badges inline */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full px-5 py-2.5">
                      <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-accent" />
                      <span className="text-slate-800 dark:text-white text-sm font-medium tracking-wide">Zero Defects Target</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full px-5 py-2.5">
                      <Cog className="w-5 h-5 text-blue-600 dark:text-accent" />
                      <span className="text-slate-800 dark:text-white text-sm font-medium tracking-wide">Precision Engineered</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: The Objective Card & Pillars */}
              <div className="lg:col-span-7 relative">
                <AnimatedSection animation="fade-left" delay={0.2}>
                  {/* The Main Objective Card (Glassmorphism + Gradient border) */}
                  <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-300/50 via-cyan-300/20 dark:from-accent/50 dark:via-blue-500/20 to-transparent shadow-xl dark:shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                    <div className="bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-xl rounded-[23px] p-8 lg:p-12 relative h-full flex flex-col justify-center border border-white/50 dark:border-white/5">

                      {/* Quote marks */}
                      <div className="absolute top-6 right-8 text-8xl text-blue-100 dark:text-accent/10 font-serif leading-none select-none group-hover:text-blue-200 dark:group-hover:text-accent/20 transition-colors duration-500">"</div>

                      <div className="relative z-10 w-full mb-8">
                        <span className="inline-block py-1 px-4 rounded-md bg-blue-100 dark:bg-accent/20 text-blue-700 dark:text-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                          The Objective
                        </span>
                        <p className="text-slate-800 dark:text-white font-medium text-2xl lg:text-3xl leading-snug lg:leading-relaxed">
                          To consistently deliver <span className="text-blue-600 dark:text-blue-300">precision-engineered shafts</span> that meet customer specifications, ensure superior quality, and achieve <span className="text-blue-600 dark:text-blue-300">on-time delivery</span> through continuous improvement and operational excellence.
                        </p>
                      </div>

                      {/* 3 Pillars derived from the objective */}
                      <div className="grid sm:grid-cols-3 gap-4 mt-4 relative z-10">
                        {[
                          { title: "Precision", icon: Target, desc: "Exact Specs" },
                          { title: "Quality", icon: ShieldCheck, desc: "Superior Build" },
                          { title: "Delivery", icon: Truck, desc: "On-Time Supply" },
                        ].map((pillar, idx) => (
                          <div key={idx} className="bg-slate-50/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-none transition-all flex flex-col items-center text-center group/pillar cursor-default backdrop-blur-md">
                            <div className="h-10 w-10 bg-blue-100 dark:bg-black/30 rounded-full flex items-center justify-center mb-3 group-hover/pillar:bg-blue-600 dark:group-hover/pillar:bg-accent/20 transition-colors">
                              <pillar.icon className="w-5 h-5 text-blue-600 group-hover/pillar:text-white dark:group-hover/pillar:text-accent dark:text-accent" />
                            </div>
                            <h4 className="text-slate-800 dark:text-white font-bold tracking-wide mb-1 flex items-center gap-1">{pillar.title}</h4>
                            <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">{pillar.desc}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-[#050814] transition-colors duration-500">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <SectionHeading>Industries Served</SectionHeading>
            </AnimatedSection>

            <StaggerGrid className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "General Engineering", icon: Cog },
                { name: "Infrastructure", icon: BuildingIcon },
                { name: "Automotive", icon: Truck },
                { name: "Heavy Engineering", icon: Anchor },
                { name: "OEM Manufacturing", icon: FactoryIcon }
              ].map((industry, idx) => (
                <Card key={idx} className="group text-center h-full hover:shadow-xl dark:hover:shadow-cyan-900/20 hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-white/5 dark:bg-[#0f172a]/50 bg-white overflow-hidden relative backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-500 dark:to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center h-full">
                    <div className="mb-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110">
                      <industry.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{industry.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Why Sangam Shaft & Machine Components - Text Feature */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-[#050814] dark:to-[#0a0f1c] transition-colors duration-500">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-slate-50 dark:bg-[#0f172a]/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none flex flex-col md:flex-row items-center gap-8 lg:gap-12 backdrop-blur-sm">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-white dark:bg-[#080d1a] rounded-full flex items-center justify-center shadow-lg dark:shadow-cyan-900/20 border-4 border-slate-100 dark:border-slate-800">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-slate-900 dark:text-white">25+</span>
                    <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Years</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900 dark:text-white">Why Choose Us?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-4 leading-relaxed">
                  Customers work with Sangam Shaft & Machine Components because of predictable manufacturing behavior, adherence to specifications, controlled quality, and long-term supply stability.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  The company focuses on reducing supplier-related risk and supporting stable customer operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#0a0f1c] dark:to-black text-center transition-colors duration-500 border-t border-slate-200 dark:border-white/5">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">Ready to Discuss Your Requirements?</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                Contact us today for stable manufacturing and predictable supply.
              </p>
              <Link to="/contact">
                <MagneticButton className="bg-blue-600 dark:bg-accent hover:bg-blue-700 dark:hover:bg-accent/90 text-white px-10 py-4 rounded-full text-lg shadow-lg dark:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-colors">
                  Get in Touch
                </MagneticButton>
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
