import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import ParallaxSection from "@/components/ParallaxSection";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Building2, Cog, Anchor, Factory } from "lucide-react";
import Seo from "@/components/Seo";
import SectionClients from "@/components/SectionClients";

const Industries = () => {
  const industries = [
    {
      icon: Cog,
      name: "General Engineering",
      description: "Reliable fasteners for diverse engineering applications.",
      products: "Standard bolts, nuts, washers, screws",
      caseStudy: "Consistent supply for machinery manufacturers.",
    },
    {
      icon: Building2,
      name: "Infrastructure & Construction",
      description: "High-strength structural fasteners for core infrastructure.",
      products: "Foundation bolts, structural assemblies, threaded rods",
      caseStudy: "Key partner for major infrastructure projects.",
    },
    {
      icon: Car,
      name: "Automotive & Auto Components",
      description: "Precision-engineered parts for automotive assembly.",
      products: "Axel studs, chassis fasteners, precision nuts",
      caseStudy: "Strategic supplier for Tier-1 automotive OEMs.",
    },
    {
      icon: Anchor,
      name: "Heavy Engineering",
      description: "Robust components for heavy machinery and equipment.",
      products: "Large diameter bolts, double-ended studs, custom parts",
      caseStudy: "Reliable partner for earthmoving equipment.",
    },
    {
      icon: Factory, // Need to import Factory if not present, otherwise use Building2 or similar. Copilot: Use Factory.
      name: "OEM Manufacturing",
      description: "Custom solutions for original equipment manufacturers.",
      products: "Drawing-based parts, special alloys, critical assemblies",
      caseStudy: "Tailored manufacturing for specific OEM needs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Seo
        title="Industries Served | Sangam Fasteners Pvt. Ltd."
        description="We supply industries where fasteners influence safety, uptime, and performance. General Engineering, Infrastructure, Automotive, Heavy Engineering, OEM."
      />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="Industries We Serve"
          subtitle="We supply industries where fasteners influence safety, uptime, and performance."
          badge="Market Focus"
        />

        {/* Industries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <StaggerGrid
              pattern="circular"
              animation="perspective-left"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {industries.map((industry, index) => (
                <Card key={index} className="group relative resize-none border-transparent hover:border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="pt-8 pb-8 px-6 relative z-10 h-full flex flex-col items-center text-center">

                    {/* Icon Container - Diamond Shape */}
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 rounded-2xl rotate-45 bg-slate-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center shadow-inner">
                        <div className="-rotate-45 text-accent group-hover:text-white transition-colors duration-300">
                          <industry.icon size={28} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      INDUSTRY SECTOR
                    </h3>

                    <h3 className="font-heading font-bold text-2xl mb-3 text-gray-900 group-hover:text-accent transition-colors leading-tight">{industry.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed max-w-sm">{industry.description}</p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gray-100 rounded-full my-4 group-hover:bg-blue-200 transition-colors duration-300" />

                    <div className="mb-4 w-full">
                      <h4 className="font-medium text-xs uppercase tracking-wider text-gray-400 mb-2">Key Products</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 py-2 px-3 rounded-lg mx-auto inline-block w-full">{industry.products}</p>
                    </div>

                    <div className="mt-auto pt-4 w-full">
                      <MagneticButton variant="ghost" className="w-full text-accent hover:text-accent hover:bg-slate-50 uppercase tracking-wider text-xs font-bold">
                        View Products
                      </MagneticButton>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary max-w-4xl mx-auto leading-tight">
                "Application understanding drives how we manufacture, inspect, and supply."
              </h2>
            </AnimatedSection>
          </div>
        </section>

        {/* Clients Section */}
        <SectionClients />

        {/* CTA Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
          <ParallaxSection speed={0.2} enableMouseParallax className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
          </ParallaxSection>
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection animation="blur-fade">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Need a Custom Solution?
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="blur-fade" delay={1}>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                We specialize in creating tailored fastener solutions for unique industrial requirements
              </p>
            </AnimatedSection>
            <AnimatedSection animation="elastic-bounce" delay={2}>
              <MagneticButton size="lg" variant="secondary" className="animate-pulse-glow">
                Contact Our Team
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Industries;
