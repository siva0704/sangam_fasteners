import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Cog, ShieldCheck, Truck, Users, Activity, Layers, Phone, MapPin, Mail, Globe, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "react-router-dom";

// Reusable Premium Icon Component
// Consistent with Contact/CompanySnapshot
const PremiumIcon = ({ icon: Icon, className }: { icon: any, className?: string }) => (
  <div className={`relative mb-6 ${className}`}>
    <div className="w-16 h-16 rounded-2xl rotate-45 bg-slate-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center shadow-inner mx-auto">
      <div className="-rotate-45 text-accent group-hover:text-white transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
    </div>
  </div>
);

const SectionHeading = ({ children, align = "center" }: { children: React.ReactNode, align?: "left" | "center" | "right" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right"}`}>
    <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-slate-900 uppercase tracking-tight">
      {children}
    </h2>
    <div className={`h-1.5 w-24 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Seo
        title="About Sangam Fasteners Pvt. Ltd. | Industrial Fastener Manufacturer"
        description="Learn about Sangam Fasteners Pvt. Ltd., an industrial fastener manufacturing company established in 2000, focused on controlled production and repeat supply."
      />

      <main className="flex-1">
        <PageHero
          title="About Sangam Fasteners"
          subtitle="Manufacturing Experience Built on Process Discipline"
          badge="Since 2000"
        />

        {/* Company Overview - Clean White Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Ambient Bg */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <SectionHeading>Company Overview</SectionHeading>
              </AnimatedSection>

              <AnimatedSection animation="blur-fade" delay={1}>
                <div className="prose prose-lg prose-slate mx-auto text-slate-600">
                  <p className="mb-6 leading-relaxed">
                    <span className="font-semibold text-slate-900">Sangam Fasteners Private Limited</span> is an industrial fastener manufacturer incorporated in 2000 and operating from Hubballi, Karnataka.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    We operate as a <span className="font-semibold text-accent">manufacturing organization</span>, not a trading entity. Our relevance in customer supply chains comes from predictable manufacturing behavior, not claims.
                  </p>
                  <p className="leading-relaxed border-l-4 border-accent pl-6 italic bg-slate-50 py-4 rounded-r-lg">
                    "Once a fastener is approved, our responsibility is to ensure it performs the same way across every subsequent supply."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Split Section */}
        <section className="py-0">
          <div className="grid md:grid-cols-2">
            {/* Mission */}
            <div className="bg-slate-900 text-white p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatedSection animation="fade-right">
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-500">
                    <Target className="w-10 h-10 text-slate-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 tracking-wide">OUR MISSION</h3>
                  <p className="text-slate-300 leading-relaxed text-lg max-w-md mx-auto">
                    To manufacture industrial fasteners that customers can approve with confidence and source repeatedly, without disruption to their production, quality, or delivery commitments.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Vision */}
            <div className="bg-blue-900 text-white p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatedSection animation="fade-left" delay={1}>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors duration-500">
                    <Eye className="w-10 h-10 text-blue-200 group-hover:text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 tracking-wide">OUR VISION</h3>
                  <p className="text-blue-100 leading-relaxed text-lg max-w-md mx-auto">
                    To be a trusted long-term fastener manufacturing partner for OEMs and industrial customers by consistently delivering stable manufacturing output, specification-driven execution, and predictable supply behavior.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Operating Principles - Premium Cards */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <SectionHeading>Operating Discipline</SectionHeading>
            </AnimatedSection>

            <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Process Control", desc: "Manufacturing decisions are driven by strict process control.", icon: Cog },
                { title: "Specification Execution", desc: "Drawings and specifications are executed exactly as approved.", icon: ShieldCheck },
                { title: "Quality Accountability", desc: "Quality responsibility lies entirely within our manufacturing.", icon: Users },
                { title: "Repeat Supply", desc: "Focus is on long-term repeat supply, not one-time transactional orders.", icon: Activity },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <PremiumIcon icon={item.icon} />

                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Product Portfolio - Feature List Style */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-slate-50/50 skew-y-3 transform origin-bottom-left -z-10" />
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
                "Custom Fasteners (Per Drawing)"
              ].map((product, idx) => (
                <AnimatedSection key={idx} animation="scale-in" delay={idx * 0.1}>
                  <div className="group bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-center gap-4 hover:shadow-lg hover:border-accent/30 hover:bg-white transition-all duration-300 cursor-default">
                    <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                      <Layers className="w-6 h-6 text-slate-700 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-lg text-slate-700 group-hover:text-slate-900">{product}</span>
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

        {/* Engineering & Quality - Featured Block */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8 text-white">ENGINEERING & QUALITY</h2>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 lg:p-12 shadow-2xl">
                  <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse-glow" />
                  <p className="text-slate-300 mb-8 leading-relaxed text-lg lg:text-xl font-light">
                    Manufacturing and quality control are integrated into daily operations. Focus areas include controlled manufacturing processes, material suitability, in-process inspection, thread and dimensional verification, and final inspection prior to dispatch.
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
                  <p className="text-white font-medium text-lg lg:text-2xl">
                    "The objective is to supply assembly-ready fasteners with consistent performance across repeat orders."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-24 bg-slate-50">
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
                <Card key={idx} className="group text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none bg-white shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center h-full">
                    <div className="mb-4 text-slate-400 group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110">
                      <industry.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-bold text-slate-800 group-hover:text-black">{industry.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Why Sangam Fasteners - Text Feature */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-100">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-slate-900">25+</span>
                    <span className="text-xs uppercase font-bold text-slate-500">Years</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Why Choose Us?</h3>
                <p className="text-lg text-slate-600 font-medium mb-4 leading-relaxed">
                  Customers work with Sangam Fasteners because of predictable manufacturing behavior, adherence to specifications, controlled quality, and long-term supply stability.
                </p>
                <p className="text-slate-500">
                  The company focuses on reducing supplier-related risk and supporting stable customer operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-heading font-bold mb-6">Ready to Discuss Your Requirements?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                Contact us today for stable manufacturing and predictable supply.
              </p>
              <Link to="/contact">
                <MagneticButton className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full text-lg shadow-lg shadow-accent/20">
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

// Icon helpers for specific section
import { Building2 as BuildingIcon, Anchor, Factory as FactoryIcon } from "lucide-react";

export default About;
