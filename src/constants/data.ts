import {
    ShieldCheck,
    Ruler,
    Microscope,
    Anchor,
    Settings,
    Building2,
    Car,
    Hammer,
    Factory,
    Cog,
    Truck,
    Plane,
    Ship,
    FileText,
    Users
} from "lucide-react";

export const products = [
    // --- WASHING MACHINE SHAFTS ---
    {
        id: "main-drive-shafts",
        name: "Main Drive Shafts",
        category: "Shafts",
        material: "Stainless Steel, Carbon Steel, Specialty Alloys",
        standards: "OEM Specifications",
        description: "Heavy-duty shafts for top-load and front-load washing machines, engineered for high torque and long service life.",
        longDescription: "Heavy-duty drive shafts engineered for top-load and front-load washing machines. Designed for high torque transmission and extended service life under continuous operation. Available in multiple material grades to match specific application requirements and environmental conditions.",
        image: "/sangam_fasteners/images/products/washing-machine-shaft.png"
    },
    {
        id: "agitator-shafts",
        name: "Agitator Shafts",
        category: "Shafts",
        material: "Stainless Steel 304/316, Carbon Steel",
        standards: "ISO Quality Standards",
        description: "Precision-machined shafts with optimized surface finish for smooth operation and minimal wear.",
        longDescription: "Precision-machined agitator shafts featuring optimized surface finish for smooth, quiet operation and minimal wear. Manufactured to tight tolerances down to 0.01mm using advanced CNC turning centers. Surface treatments include grinding, polishing, and specialized coatings for superior corrosion resistance and durability.",
        image: "/sangam_fasteners/images/products/washing-machine-shaft.png"
    },
    {
        id: "custom-shaft-specs",
        name: "Custom Specifications",
        category: "Custom",
        material: "Stainless Steel, Carbon Steel, Specialty Alloys",
        standards: "Per Customer Drawing",
        description: "Tailored solutions to meet your exact requirements, including material selection, dimensions, and surface treatments.",
        longDescription: "Fully customized washing machine shaft solutions manufactured according to your precise specifications. We offer flexible material selection from stainless steel grades (304, 316) to carbon steel and specialty alloys. Custom dimensions, thread profiles, surface treatments, and heat treatment options available to match your exact application needs.",
        image: "/sangam_fasteners/images/products/washing-machine-shaft.png"
    },
    {
        id: "material-options",
        name: "Material Options",
        category: "Materials",
        material: "Stainless Steel (304/316), Carbon Steel, Specialty Alloys",
        standards: "ASTM, ISO Material Standards",
        description: "Stainless steel, carbon steel, and specialty alloys available to match your application needs.",
        longDescription: "Comprehensive material options for washing machine shafts including Stainless Steel (304, 316 for corrosion resistance), Carbon Steel (for high strength applications), and Specialty Alloys (for extreme environments). All materials are certified with complete traceability and meet international ASTM and ISO standards.",
        image: "/sangam_fasteners/images/products/washing-machine-shaft.png"
    }
];

export const industries = [
    {
        id: "north-america",
        icon: Building2,
        name: "North America",
        description: "Direct shipping to USA, Canada, and Mexico with expedited delivery options available.",
        detail: "Strategic supply chain for rapid fulfillment",
        products: "Main Drive Shafts, Agitator Shafts, Custom Specifications",
        caseStudy: "Reliable partner for major appliance manufacturers across North America."
    },
    {
        id: "europe",
        icon: Factory,
        name: "Europe",
        description: "Serving EU markets with full compliance to CE standards and regional logistics hubs.",
        detail: "CE certified components with European quality standards",
        products: "Precision Shafts, Material-certified components",
        caseStudy: "Trusted supplier to European appliance industry with regional warehousing."
    },
    {
        id: "asia-pacific",
        icon: Settings,
        name: "Asia-Pacific",
        description: "Regional manufacturing and distribution centers for rapid fulfillment across Asia.",
        detail: "Local presence for just-in-time delivery",
        products: "Full range of washing machine shafts and machined components",
        caseStudy: "Strategic manufacturing partnerships across Asia-Pacific region."
    },
    {
        id: "logistics-capabilities",
        icon: Truck,
        name: "Logistics Capabilities",
        description: "Sea freight/air freight options, Consolidated shipping, Real-time shipment tracking, Customs documentation support.",
        detail: "Efficient Global Logistics",
        products: "Air/Sea Freight, Tracking, Customs Support",
        caseStudy: "Streamlined shipping for global partners."
    },
    {
        id: "supply-chain-benefits",
        icon: Anchor,
        name: "Supply Chain Benefits",
        description: "Flexible order quantities (MOQ negotiable), Just-in-time delivery programs, Vendor-managed inventory options, Dedicated account management.",
        detail: "Optimized Supply Chain",
        products: "JIT Delivery, VMI Options, Dedicated Account Mgr",
        caseStudy: "Adding value through flexible supply solutions."
    }
];

export const manufacturingFeatures = [
    {
        icon: Cog,
        title: "CNC Machining",
        desc: "Multi-axis CNC turning and milling centers for precision tolerances down to 0.01mm."
    },
    {
        icon: Settings,
        title: "Heat Treatment",
        desc: "In-house heat treatment facilities for optimal hardness and durability characteristics."
    },
    {
        icon: ShieldCheck,
        title: "Surface Finishing",
        desc: "Grinding, polishing, and coating capabilities for superior surface quality and corrosion resistance."
    },
    {
        icon: Microscope,
        title: "Quality Control",
        desc: "Advanced metrology equipment and 100% inspection protocols ensure zero-defect delivery."
    }
];
