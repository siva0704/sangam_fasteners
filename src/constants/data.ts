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
    // --- WASHING MACHINE SHAFTS (CORE) ---
    {
        id: "020-6p-shaft",
        name: "020 (6P) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "High-precision core shaft engineered specifically for top-load and front-load washing machine assemblies.",
        image: "/sangam_fasteners/SFL_Shafts/image2.jpeg"
    },
    {
        id: "030-7s-shaft",
        name: "030 (7S) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "Advanced heavy-duty shaft designed to handle increased torque transmission in high-capacity washers.",
        image: "/sangam_fasteners/SFL_Shafts/image3.jpeg"
    },
    {
        id: "040-8s-shaft",
        name: "040 (8S) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "Premium continuous-duty shaft featuring optimized surface finishing for prolonged bearing life and reduced vibration.",
        image: "/sangam_fasteners/SFL_Shafts/image4.jpeg"
    },

    // --- NEW DEVELOPMENTS / HIGH RPM ---
    {
        id: "lg-fl440-shaft",
        name: "LG-FL440 Compatible Shaft",
        category: "New Developments",
        material: "High Tensile Alloy Steel",
        standards: "Tier-1 Appliance Specs",
        description: "Next-generation shaft developed for ultra-high RPM direct-drive inverter motors.",
        image: "/sangam_fasteners/SFL_Shafts/image8.jpeg"
    },
    {
        id: "lg-fl550-shaft",
        name: "LG-FL550 Compatible Shaft",
        category: "New Developments",
        material: "High Tensile Alloy Steel",
        standards: "Tier-1 Appliance Specs",
        description: "Maximum load-bearing shaft engineered for premium, large-capacity smart washing machines.",
        image: "/sangam_fasteners/SFL_Shafts/image9.jpeg"
    },
    {
        id: "4000rpm-shaft",
        name: "4000 RPM Precision Shaft",
        category: "High Speed Shafts",
        material: "Specialized Steel Alloy",
        standards: "High Velocity Specs",
        description: "Precision balanced shaft designed to operate flawlessly at extreme rotational speeds without deflection.",
        image: "/sangam_fasteners/SFL_Shafts/image10.jpeg"
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
