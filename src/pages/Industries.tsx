import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import ParallaxSection from "@/components/ParallaxSection";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import SectionClients from "@/components/SectionClients";

import { industries } from "@/constants/data";
import {
  Wrench, HardHat, Truck, Cpu, Gauge, Fuel, Zap,
  BrickWall, Cone, FileCog, Scroll, PenTool,
  Weight, Container, Hexagon, Cog, Settings2, Hammer, Factory, Car, Building2, Settings, ArrowRight, MessageSquare
} from "lucide-react";

const Industries = () => {


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
              {industries.map((industry, index) => {
                const relatedIconsMap: any = {
                  "general-engineering": [Wrench, Hexagon, Cog, Settings2, Wrench],
                  "infrastructure": [Cone, HardHat, BrickWall, Truck, Building2],
                  "automotive": [Gauge, Fuel, Car, Zap, Wrench],
                  "heavy-engineering": [Hammer, Weight, Factory, Container, Truck],
                  "oem": [FileCog, Scroll, PenTool, Cpu, Settings]
                };
                const currentIcons = relatedIconsMap[industry.id] || [industry.icon, industry.icon, industry.icon, industry.icon, industry.icon];

                const getDecorationStyle = (i: number) => {
                  const translations = [
                    "group-hover:translate-x-[40px] group-hover:-translate-y-[40px]",
                    "group-hover:-translate-x-[40px] group-hover:translate-y-[40px]",
                    "group-hover:-translate-x-[50px]",
                    "group-hover:translate-x-[50px] group-hover:translate-y-[20px]",
                    "group-hover:-translate-x-[20px] group-hover:-translate-y-[50px]"
                  ];
                  const delays = ["delay-75", "delay-150", "delay-100", "delay-200", "delay-300"];
                  const sizes = [
                    "w-6 h-6 text-blue-400", "w-4 h-4 text-sky-400", "w-3 h-3 text-blue-300", "w-5 h-5 text-sky-300", "w-4 h-4 text-indigo-400"
                  ];
                  return { translate: translations[i % 5], delay: delays[i % 5], size: sizes[i % 5] };
                };

                return (
                  <Card key={index} className="group relative border-slate-100 bg-white hover:border-blue-300 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-full rounded-3xl flex flex-col isolate">
                    {/* Decorations */}
                    {currentIcons.map((Deco: any, i: number) => {
                      const style = getDecorationStyle(i);
                      return (
                        <div
                          key={i}
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-80 group-hover:scale-100 transition-all duration-700 ease-out ${style.translate} ${style.delay} z-0 pointer-events-none`}
                        >
                          <Deco className={`${style.size} opacity-40`} />
                        </div>
                      );
                    })}

                    {/* Ripple Effect Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center -z-10 pointer-events-none" />

                    {/* Top Gradient Line */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardContent className="p-8 relative z-10 h-full flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-all duration-500 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
                          <industry.icon size={36} strokeWidth={1.5} className="text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500" />
                        </div>
                      </div>

                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                        Industry Sector
                      </h3>

                      <h3 className="font-heading font-bold text-3xl mb-4 text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
                        {industry.name}
                      </h3>

                      <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-sm line-clamp-3 group-hover:text-slate-600">
                        {industry.description}
                      </p>

                      {/* Products Pill */}
                      <div className="mb-8 w-full">
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors duration-300">
                          <h4 className="font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-1">Key Applications</h4>
                          <p className="text-xs font-semibold text-slate-700 truncate">{industry.products}</p>
                        </div>
                      </div>

                      {/* CTA Buttons - Dual Action */}
                      <div className="mt-auto w-full grid grid-cols-2 gap-3">
                        <MagneticButton size="sm" variant="outline" className="w-full border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 group/btn">
                          <span className="mr-2">Details</span>
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                        </MagneticButton>
                        <MagneticButton size="sm" className="w-full bg-slate-900 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 border-none">
                          <MessageSquare className="w-3 h-3 mr-2" />
                          <span>Enquire</span>
                        </MagneticButton>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </StaggerGrid>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16 bg-muted/50">
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
