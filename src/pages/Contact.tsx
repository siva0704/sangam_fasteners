import { useState } from "react";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin, Clock, MessageCircle, Activity, Ruler, ShieldCheck, Settings, Truck, ArrowRight, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

// Premium Icon Container Component (reused style from CompanySnapshot)
const PremiumIcon = ({ icon: Icon, className }: { icon: any, className?: string }) => (
  <div className={`relative mb-5 ${className}`}>
    <div className="w-16 h-16 rounded-2xl rotate-45 bg-slate-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center shadow-inner mx-auto">
      <div className="-rotate-45 text-accent group-hover:text-white transition-colors duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    application: "",
    quantity: "",
    productRequirement: "",
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.contactNumber || !formData.productRequirement) {
      toast({
        title: "Error",
        description: "Please check the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Thank you. Your enquiry has been received. Our team will respond shortly.",
    });

    handleReset();
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      contactNumber: "",
      application: "",
      quantity: "",
      productRequirement: "",
      file: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918360000000", "_blank");
  };

  const handleGetDirections = () => {
    window.open("https://maps.google.com/?q=Sangam+Fasteners+Private+Limited+Hubli", "_blank");
  };

  const features = [
    { icon: Activity, title: "Process Stability", desc: "Predictable manufacturing behavior across batches." },
    { icon: Ruler, title: "Specification Discipline", desc: "Drawings executed exactly as approved." },
    { icon: ShieldCheck, title: "Accountability", desc: "Quality responsibility lies entirely with us." },
    { icon: Settings, title: "Stable Customization", desc: "Tailored parts with rigorous process control." },
    { icon: Truck, title: "Reliability", desc: "Delivery commitments you can plan around." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Seo
        title="Reliable Industrial Fastener Manufacturer | Contact Sangam Fasteners"
        description="Choose Sangam Fasteners for stable manufacturing, specification-driven execution, and long-term supply reliability. Contact us for enquiries."
      />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="Why Choose Sangam Fasteners"
          subtitle="Stable Manufacturing. Predictable Supply."
          badge="We're Here to Help"
        />

        {/* Why Customers Retain Us Section - Premium Design */}
        <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden border-b border-slate-100">
          {/* Ambient Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-up" className="mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Why Customers Retain Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-800 mx-auto rounded-full" />
            </AnimatedSection>

            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                  <PremiumIcon icon={item.icon} />

                  <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </StaggerGrid>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Left Column: Contact Form */}
              <div>
                <AnimatedSection animation="slide-rotate-left">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-slate-100 rounded-lg text-accent">
                      <MessageCircle size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Submit Your Enquiry</h2>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="perspective-left" delay={1}>
                  <Card className="border-border shadow-md bg-white/50 backdrop-blur-sm">
                    <CardContent className="pt-8 px-6 pb-8">
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-1.5 text-gray-700">Full Name <span className="text-red-500">*</span></label>
                            <Input
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              required
                              placeholder="John Doe"
                              className="focus-visible:ring-accent/30 focus-visible:border-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5 text-gray-700">Company Name</label>
                            <Input
                              value={formData.companyName}
                              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                              placeholder="Your Company Ltd."
                              className="focus-visible:ring-accent/30 focus-visible:border-accent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-1.5 text-gray-700">Email Address <span className="text-red-500">*</span></label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              placeholder="you@example.com"
                              className="focus-visible:ring-accent/30 focus-visible:border-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5 text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                            <Input
                              type="tel"
                              value={formData.contactNumber}
                              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                              required
                              placeholder="+91-XXXXXXXXXX"
                              className="focus-visible:ring-accent/30 focus-visible:border-accent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-1.5 text-gray-700">Application / Industry</label>
                            <Input
                              value={formData.application}
                              onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                              placeholder="e.g. Automotive"
                              className="focus-visible:ring-accent/30 focus-visible:border-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5 text-gray-700">Quantity</label>
                            <Input
                              value={formData.quantity}
                              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                              placeholder="e.g. 5000 pcs"
                              className="focus-visible:ring-accent/30 focus-visible:border-accent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1.5 text-gray-700">Product Requirement <span className="text-red-500">*</span></label>
                          <Textarea
                            value={formData.productRequirement}
                            onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                            rows={5}
                            required
                            placeholder="Describe your requirement detailed specifications..."
                            className="resize-none focus-visible:ring-accent/30 focus-visible:border-accent"
                          />
                          <p className="text-xs text-muted-foreground mt-1.5">
                            Mention specific application details to avoid clarification delays.
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1.5 text-gray-700">Upload Drawing (if any)</label>
                          <Input
                            type="file"
                            onChange={handleFileChange}
                            className="cursor-pointer file:text-accent file:font-semibold file:bg-slate-50 file:border-0 file:mr-4 file:py-1 file:px-3 file:rounded-full hover:file:bg-slate-100 transition-all text-sm text-gray-500"
                          />
                        </div>

                        <div className="flex gap-4 pt-4">
                          <MagneticButton type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white shadow-lg shadow-blue-500/20 border-0">
                            Submit Enquiry <ArrowRight className="ml-2 w-4 h-4" />
                          </MagneticButton>
                          <MagneticButton type="button" variant="outline" onClick={handleReset} className="px-6 border-gray-200 hover:bg-gray-50">
                            Reset
                          </MagneticButton>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* WhatsApp Button */}
                <AnimatedSection animation="elastic-bounce" delay={2}>
                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground mb-3">Prefer a quick chat?</p>
                    <MagneticButton
                      variant="secondary"
                      className="w-full bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Quick Query on WhatsApp
                    </MagneticButton>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: Contact Info & Map */}
              <div className="flex flex-col h-full">
                <AnimatedSection animation="slide-rotate-right">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-slate-100 rounded-lg text-accent">
                      <MapPin size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Get in Touch</h2>
                  </div>
                </AnimatedSection>

                {/* Contact Cards Grid (Phone, Email, Hours) */}
                <StaggerGrid
                  pattern="wave"
                  animation="perspective-left"
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 mb-8"
                >
                  <Card className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                    <CardContent className="p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                        <Phone size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground font-medium">+91-836-XXXXXXX</p>
                    </CardContent>
                  </Card>

                  <Card className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                    <CardContent className="p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">Email</h3>
                      <a href="mailto:sf_pl@yahoo.co.in" className="text-sm text-accent hover:underline font-medium">
                        sf_pl@yahoo.co.in
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                    <CardContent className="p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                        <Clock size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">Hours</h3>
                      <p className="text-sm text-muted-foreground font-medium">Mon-Fri, 9AM-6PM</p>
                    </CardContent>
                  </Card>
                </StaggerGrid>

                {/* Map & Address Container */}
                <AnimatedSection animation="blur-fade" delay={3} className="flex-1 flex flex-col">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 overflow-hidden flex flex-col h-full min-h-[400px]">
                    {/* The Map */}
                    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-inner bg-gray-100">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.4!2d75.1!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzAwLjAiTiA3NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sangam Fasteners Location"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm pointer-events-none">
                        Hubballi, Karnataka
                      </div>
                    </div>

                    {/* Address Below Map */}
                    <div className="p-6 bg-gradient-to-b from-white to-slate-50/50 flex-1 flex flex-col justify-center">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-accent" />
                            Factory & Office
                          </h3>
                          <address className="not-italic text-gray-600 leading-relaxed text-sm">
                            <span className="font-semibold text-gray-800">Sangam Fasteners Private Limited</span><br />
                            B-344/1, KSSIDC Industrial Estate<br />
                            Gokul Road, Hubli - 580030<br />
                            Karnataka, India
                          </address>
                        </div>
                        <div className="hidden sm:block">
                          <MagneticButton
                            size="sm"
                            variant="outline"
                            className="text-accent border-slate-200 hover:bg-slate-50 text-xs"
                            onClick={handleGetDirections}
                          >
                            Get Directions <ExternalLink size={14} className="ml-2" />
                          </MagneticButton>
                        </div>
                      </div>

                      {/* Mobile Button (visible only on small screens) */}
                      <div className="mt-6 sm:hidden">
                        <MagneticButton
                          size="sm"
                          className="w-full bg-accent hover:bg-accent/90 text-white"
                          onClick={handleGetDirections}
                        >
                          Get Directions <ExternalLink size={14} className="ml-2" />
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
