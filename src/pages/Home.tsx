
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import SectionHero from "@/components/SectionHero";
import SectionProducts from "@/components/SectionProducts";
import SectionEngineering from "@/components/SectionEngineering";
import SectionIndustries from "@/components/SectionIndustries";
import SectionCompanySnapshot from "@/components/SectionCompanySnapshot";
import SectionAboutPreview from "@/components/SectionAboutPreview";
import SectionClients from "@/components/SectionClients";
import SectionTeam from "@/components/SectionTeam";
import SectionCTAFooter from "@/components/SectionCTAFooter";

import SectionFAQ from "@/components/SectionFAQ";

const Home = () => {
  const scrollProgress = useScrollProgress();

  const faqData = [
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Seo
        title="Sangam Fasteners Pvt. Ltd. | Industrial Fastener Manufacturer in India"
        description="Sangam Fasteners Pvt. Ltd. is an industrial fastener manufacturer in Hubballi, India, supplying standard and custom fasteners for OEM and engineering applications."
        keywords={[
          "Industrial Fastener Manufacturer India",
          "Custom Fasteners India",
          "OEM Fasteners",
          "Bolts and Nuts Manufacturer",
          "Hubballi Fasteners",
          "High Tensile Fasteners"
        ]}
        faqs={faqData}
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ManufacturingBusiness",
          "name": "Sangam Fasteners Pvt. Ltd.",
          "alternateName": "SFL Fasteners",
          "url": "https://siva0704.github.io/sangam_fasteners",
          "logo": "https://siva0704.github.io/sangam_fasteners/logo.png",
          "description": "Sangam Fasteners Pvt. Ltd. is an industrial fastener manufacturer in Hubballi, India, supplying standard and custom fasteners for OEM and engineering applications.",
          "foundingDate": "2000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B-344/1, KSSIDC Industrial Estate, Gokul Road",
            "addressLocality": "Hubballi",
            "addressRegion": "Karnataka",
            "postalCode": "580030",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-836-2333333",
            "contactType": "customer service",
            "email": "sf_pl@yahoo.co.in",
            "areaServed": "World"
          },
          "sameAs": [
            "https://www.linkedin.com/company/sangam-fasteners-pvt-ltd"
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
        <SectionCompanySnapshot />
        <SectionAboutPreview />
        <SectionClients />
        <SectionProducts />
        <SectionEngineering />
        <SectionIndustries />
        <SectionTeam />
        <SectionFAQ />
        <SectionCTAFooter />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
