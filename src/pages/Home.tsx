
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import SectionHero from "@/components/SectionHero";
import SectionCompanySnapshot from "@/components/SectionCompanySnapshot";
import SectionBenchmarkMarquee from "@/components/SectionBenchmarkMarquee";
import { lazy, Suspense } from "react";

const SectionProducts = lazy(() => import("@/components/SectionProducts"));
const OperationDiscipline = lazy(() => import("@/components/sections/OperationDiscipline"));
const SectionInfrastructure = lazy(() => import("@/components/SectionInfrastructure"));
const MachinerySelector = lazy(() => import("@/components/sections/MachinerySelector").then(module => ({ default: module.MachinerySelector })));
const SectionCertifications = lazy(() => import("@/components/SectionCertifications"));
const SectionGlobalReach = lazy(() => import("@/components/SectionGlobalReach"));
const SectionAboutPreview = lazy(() => import("@/components/SectionAboutPreview"));
const SectionClients = lazy(() => import("@/components/SectionClients"));
const SectionCTAFooter = lazy(() => import("@/components/SectionCTAFooter"));
const SectionFAQ = lazy(() => import("@/components/SectionFAQ"));

const Home = () => {
  const scrollProgress = useScrollProgress();

  const faqData = [
    // ... (keep existing faqData logic if needed for SEO, but keeping it concise here)
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Seo
        title="Sangam Shaft & Machine Components Pvt. Ltd. | Washing Machine Shaft Manufacturer | Precision Machined Components"
        description="Leading manufacturer of high-precision washing machine shafts and machined components for the global appliance industry. CNC machining, heat treatment, quality assurance. ISO 9001:2015 certified."
        keywords={[
          "Washing Machine Shaft Manufacturer",
          "Precision Machined Components",
          "Main Drive Shafts",
          "Agitator Shafts",
          "CNC Machining India",
          "Appliance Components Supplier",
          "ISO 9001:2015 Certified"
        ]}
        faqs={faqData}
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ManufacturingBusiness",
          "name": "Sangam Shaft & Machine Components Pvt. Ltd.",
          "alternateName": "SFL Shaft & Machine Components",
          "url": "https://siva0704.github.io/sangam_fasteners",
          "logo": "https://siva0704.github.io/sangam_fasteners/logo.png",
          "description": "Leading manufacturer of high-precision washing machine shafts and machined components for the global appliance industry. Specializing in CNC machining, heat treatment, and quality-controlled production.",
          "foundingDate": "2000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B-23, KSSIDC Gamanagatti Industrial Estate",
            "addressLocality": "Hubli",
            "addressRegion": "Karnataka",
            "postalCode": "580021",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9343106083",
            "contactType": "customer service",
            "email": "info@sfpl.com",
            "areaServed": "World"
          },
          "sameAs": [
            "https://www.linkedin.com/company/sangam-shaft & machine components-pvt-ltd"
          ]
        })}
      />
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <main className="flex-1">
        <SectionHero />
        <SectionBenchmarkMarquee />
        <SectionCompanySnapshot />
        <Suspense fallback={<div className="h-20 bg-transparent" />}>
          <SectionAboutPreview />
          <SectionClients />
          <SectionProducts />
          <OperationDiscipline />
          <SectionInfrastructure />
          <MachinerySelector />
          <SectionCertifications />
          <SectionGlobalReach />
          <SectionFAQ />
          <SectionCTAFooter />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
