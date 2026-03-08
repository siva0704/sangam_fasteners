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
import { Leadership } from "@/components/sections/Leadership";

// Inline Components to replace lost ones
const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-center mb-12 ${className}`}>
    <span className="text-accent dark:text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
      Sangam Shaft & Machine Components
    </span>
    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
      {children}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
  </div>
);

const PremiumIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="mb-6 relative inline-block group-hover:scale-110 transition-transform duration-300">
    <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500" />
    <Icon className="w-12 h-12 text-muted-foreground relative z-10 group-hover:text-primary transition-colors duration-300" />
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-500 font-sans">
      <Seo
        title="About Sangam Shaft & Machine Components Pvt. Ltd. | Industrial Shaft & Machine Component Manufacturer"
        description="Learn about Sangam Shaft & Machine Components Pvt. Ltd., an industrial shaft & machine component manufacturing company established in 2000, focused on controlled production and repeat supply."
      />

      <main className="flex-1">
        <PageHero
          title="About Sangam Fasteners"
          subtitle="Precision Machined Components & Shafts Manufacturer"
          badge="ISO 9001:2015 Certified"
        />

        {/* Company Overview - Detailed Text */}
        <section className="relative py-16 bg-gradient-to-b from-background to-muted overflow-hidden transition-colors duration-500">
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
                <div className="prose prose-lg prose-slate dark:prose-invert mx-auto text-muted-foreground text-justify">
                  <p className="mb-6 leading-relaxed">
                    <span className="font-semibold text-foreground">Sangam Fasteners Private Limited (SFPL)</span> is an <span className="font-semibold text-accent dark:text-primary">ISO-9001-2015 certified</span> engineering company with an expertise in Machined Components built over the years. SFPL was formed with the vision of manufacturing highly technical and precision components, catering to the needs of Automotive and Non-Automotive sectors including <span className="font-semibold text-foreground">OEMs and TIER-1 Customers</span>.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    SFPL’s strong capability in design, engineering and consistency in delivering quality Shafts has resulted in <span className="font-semibold text-accent dark:text-primary">100 percent retention of the clients</span>. These capabilities give the firm an edge over its competitors.
                  </p>
                  <p className="leading-relaxed">
                    We offer our customers cost effective products that conform to international standards. We believe in flawless execution and delivery, so that we can help our customers to thrive in today’s competitive environment.
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
            <div className="bg-background border-r border-border text-foreground p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 dark:bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatedSection animation="fade-right">
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
                    <Target className="w-10 h-10 text-muted-foreground group-hover:text-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 tracking-wide">OUR MISSION</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-md mx-auto">
                    To create an ethos required to excel in Machining and commit ourselves to the ethics of fair deals.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Vision */}
            <div className="bg-secondary text-foreground p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-background/20 dark:bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatedSection animation="fade-left" delay={1}>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-background/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
                    <Eye className="w-10 h-10 text-primary/70 group-hover:text-primary-foreground dark:group-hover:text-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 tracking-wide">OUR VISION</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-md mx-auto">
                    To excel in Machining and Expand the business globally.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Operating Discipline - Premium Liquid Glass Cards */}
        <section className="py-24 bg-gradient-to-b from-muted to-background relative overflow-hidden transition-colors duration-500">
          {/* Ambient flowing glows */}
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none transition-all duration-1000" />
          <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-accent/10 dark:bg-accent/20 rounded-full blur-[100px] pointer-events-none transition-all duration-1000" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-up" className="mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 dark:bg-secondary border border-border mb-6">
                  <Cog className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Core Principles</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">Our Values</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
              </div>
            </AnimatedSection>

            <StaggerGrid className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Ethics",
                  desc: "We own our behaviour, keep our promises, value honesty, honour the community environment in which we operate and embrace diversity.",
                  icon: ShieldCheck,
                  gradient: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Customer Focus",
                  desc: "Customer Satisfaction is at the centre of what we do every day. We are trusted partners of our customers.",
                  icon: Users,
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Safety, Quality & Well Being",
                  desc: "Exceed industry standards for performance by values.",
                  icon: Activity,
                  gradient: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Team & Dedication",
                  desc: "Dedication to team achieves safety and best-in-class solutions in leveraging our core Products, Processes and people.",
                  icon: Users,
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Empower & Deliberate",
                  desc: "Employees are encouraged to take action and ensure timely delivery of expectations.",
                  icon: Target,
                  gradient: "from-blue-400 to-cyan-500"
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col p-[1px] rounded-[24px] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] transition-all duration-500 cursor-default overflow-hidden"
                >
                  {/* Glowing hover border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />

                  <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start z-10 border border-border transition-colors duration-500">
                    <div className="shrink-0 relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <item.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-foreground text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed font-medium">
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
        <section className="py-16 bg-gradient-to-b from-muted to-background relative transition-colors duration-500">
          <div className="absolute inset-0 bg-white/50 dark:bg-background/20 skew-y-3 transform origin-bottom-left -z-10 transition-colors duration-500" />
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
                  <div className="group bg-card p-6 rounded-xl border border-border flex items-center gap-4 hover:shadow-lg hover:border-accent/30 hover:bg-card/80 transition-all duration-300 cursor-default">
                    <div className="p-3 bg-white dark:bg-blue-500/10 rounded-lg shadow-sm group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-foreground transition-colors">
                      <Layers className="w-6 h-6 text-slate-700 dark:text-primary group-hover:text-foreground" />
                    </div>
                    <span className="font-bold text-lg text-slate-700 dark:text-foreground group-hover:text-slate-900 dark:group-hover:text-foreground">{product}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/products">
                <MagneticButton className="bg-background text-foreground hover:bg-card px-8 py-3 rounded-full">
                  View Full Catalog <ArrowRight className="ml-2 w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Engineering & Quality - Top-Level UI Block */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary/20 relative overflow-hidden font-sans transition-colors duration-500">
          {/* High-End Ambient Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-5 mix-blend-overlay pointer-events-none invert dark:invert-0" />
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Column: Heading and Approach */}
              <div className="lg:col-span-5">
                <AnimatedSection animation="fade-right">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-primary font-bold tracking-widest text-sm uppercase">
                      Our Core Strength
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight mb-8">
                    Engineering <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-accent dark:to-blue-400">
                      & Quality
                    </span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-light mb-10 border-l-2 border-primary/50 pl-6">
                    We combine advanced engineering expertise with strict quality control to deliver precision shafts that meet exact specifications and perform reliably in every application.
                  </p>

                  {/* Stats / Badges inline */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 bg-white/60 dark:bg-foreground/5 backdrop-blur-sm border border-border rounded-full px-5 py-2.5">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="text-foreground text-sm font-medium tracking-wide">Zero Defects Target</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/60 dark:bg-foreground/5 backdrop-blur-sm border border-border rounded-full px-5 py-2.5">
                      <Cog className="w-5 h-5 text-primary" />
                      <span className="text-foreground text-sm font-medium tracking-wide">Precision Engineered</span>
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

                    <div className="bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-xl rounded-[23px] p-8 lg:p-12 relative h-full flex flex-col justify-center border border-border dark:border-border">

                      {/* Quote marks */}
                      <div className="absolute top-6 right-8 text-8xl text-blue-100 dark:text-accent/10 font-serif leading-none select-none group-hover:text-blue-200 dark:group-hover:text-accent/20 transition-colors duration-500">"</div>

                      <div className="relative z-10 w-full mb-8">
                        <span className="inline-block py-1 px-4 rounded-md bg-blue-100 dark:bg-accent/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                          The Objective
                        </span>
                        <p className="text-foreground font-medium text-2xl lg:text-3xl leading-snug lg:leading-relaxed">
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
                          <div key={idx} className="bg-secondary/50 dark:bg-secondary border border-border rounded-2xl p-5 hover:bg-background dark:hover:bg-foreground/5 hover:shadow-md dark:hover:shadow-none transition-all flex flex-col items-center text-center group/pillar cursor-default backdrop-blur-md">
                            <div className="h-10 w-10 bg-blue-100 dark:bg-background/30 rounded-full flex items-center justify-center mb-3 group-hover/pillar:bg-blue-600 dark:group-hover/pillar:bg-accent/20 transition-colors">
                              <pillar.icon className="w-5 h-5 text-blue-600 group-hover/pillar:text-foreground dark:group-hover/pillar:text-accent dark:text-accent" />
                            </div>
                            <h4 className="text-foreground font-bold tracking-wide mb-1 flex items-center gap-1">{pillar.title}</h4>
                            <span className="text-muted-foreground text-xs uppercase tracking-wider">{pillar.desc}</span>
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
        <section className="py-16 bg-gradient-to-b from-muted to-background transition-colors duration-500">
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
                <Card key={idx} className="group text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border bg-card overflow-hidden relative backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center h-full">
                    <div className="mb-4 text-muted-foreground dark:text-slate-500 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
                      <industry.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-slate-900 dark:group-hover:text-foreground transition-colors">{industry.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Why Sangam Shaft & Machine Components - Text Feature */}
        <section className="py-16 bg-gradient-to-b from-background to-muted transition-colors duration-500">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm flex flex-col md:flex-row items-center gap-8 lg:gap-12 backdrop-blur-sm">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg dark:shadow-cyan-900/20 border-4 border-border">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-foreground">25+</span>
                    <span className="text-xs uppercase font-bold text-muted-foreground">Years</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">Why Choose Us?</h3>
                <p className="text-lg text-muted-foreground font-medium mb-4 leading-relaxed">
                  Customers work with Sangam Shaft & Machine Components because of predictable manufacturing behavior, adherence to specifications, controlled quality, and long-term supply stability.
                </p>
                <p className="text-muted-foreground">
                  The company focuses on reducing supplier-related risk and supporting stable customer operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <Leadership />

        {/* Contact CTA */}
        <section className="py-24 bg-gradient-to-b from-muted to-background text-center transition-colors duration-500 border-t border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">Ready to Discuss Your Requirements?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                Contact us today for stable manufacturing and predictable supply.
              </p>
              <Link to="/contact">
                <MagneticButton className="bg-primary hover:bg-blue-700 dark:hover:bg-accent/90 text-foreground px-10 py-4 rounded-full text-lg shadow-lg dark:shadow-[0_0_30px_rgba(var(--primary),0.2)] transition-colors">
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
