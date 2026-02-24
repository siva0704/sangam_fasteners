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

const baseUrl = import.meta.env.BASE_URL;

export const products = [
    // --- WASHING MACHINE SHAFTS (CORE) ---
    {
        id: "020-6p-shaft",
        name: "020 (6P) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "High-precision core shaft engineered specifically for top-load and front-load washing machine assemblies.",
        image: `/assets/corporate-profile/products/shaft_12.jpeg`
    },
    {
        id: "030-7s-shaft",
        name: "030 (7S) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "Advanced heavy-duty shaft designed to handle increased torque transmission in high-capacity washers.",
        image: `/assets/corporate-profile/products/shaft_13.jpeg`
    },
    {
        id: "040-8s-shaft",
        name: "040 (8S) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "Premium continuous-duty shaft featuring optimized surface finishing for prolonged bearing life and reduced vibration.",
        image: `/assets/corporate-profile/products/shaft_14.jpeg`
    },
    {
        id: "050-8p-shaft",
        name: "050 (8P) Shaft",
        category: "Washing Machine Shafts",
        material: "Hardened Stainless Steel",
        standards: "OEM Specifications",
        description: "High-performance shaft designed for specialized industrial washing applications.",
        image: `/assets/corporate-profile/products/shaft_15.jpeg`
    },

    // --- HIGH RPM SHAFTS ---
    {
        id: "1000rpm-shaft",
        name: "1000 RPM Shaft",
        category: "High Speed Shafts",
        material: "Specialized Steel Alloy",
        standards: "High Velocity Specs",
        description: "Precision shaft optimized for 1000 RPM operational stability.",
        image: `/assets/corporate-profile/products/shaft_16.jpeg`
    },
    {
        id: "1200rpm-shaft",
        name: "1200 RPM Shaft",
        category: "High Speed Shafts",
        material: "Specialized Steel Alloy",
        standards: "High Velocity Specs",
        description: "Advanced shaft designed for 1200 RPM high-speed washing machine motors.",
        image: `/assets/corporate-profile/products/shaft_17.jpeg`
    },

    // --- NEW DEVELOPMENTS ---
    {
        id: "lg-fl440-shaft",
        name: "LG-FL440 Shaft",
        category: "New Developments",
        material: "High Tensile Alloy Steel",
        standards: "Tier-1 Appliance Specs",
        description: "Next-generation shaft developed for ultra-high RPM direct-drive inverter motors.",
        image: `/assets/corporate-profile/products/shaft_18.jpeg`
    },
    {
        id: "lg-fl550-shaft",
        name: "LG-FL550 Shaft",
        category: "New Developments",
        material: "High Tensile Alloy Steel",
        standards: "Tier-1 Appliance Specs",
        description: "Maximum load-bearing shaft engineered for premium, large-capacity smart washing machines.",
        image: `/assets/corporate-profile/products/shaft_19.jpeg`
    },
    {
        id: "4000rpm-shaft",
        name: "4000 RPM Shaft",
        category: "New Developments",
        material: "Specialized Steel Alloy",
        standards: "High Velocity Specs",
        description: "Precision balanced shaft designed to operate flawlessly at extreme rotational speeds without deflection.",
        image: `/assets/corporate-profile/products/shaft_20.jpeg`
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
        caseStudy: "Reliable partner for major appliance manufacturers across North America.",
        coordinates: { x: 22, y: 34 }
    },
    {
        id: "europe",
        icon: Factory,
        name: "Europe",
        description: "Serving EU markets with full compliance to CE standards and regional logistics hubs.",
        detail: "CE certified components with European quality standards",
        products: "Precision Shafts, Material-certified components",
        caseStudy: "Trusted supplier to European appliance industry with regional warehousing.",
        coordinates: { x: 51, y: 30 }
    },
    {
        id: "asia-pacific",
        icon: Settings,
        name: "Asia-Pacific",
        description: "Regional manufacturing and distribution centers for rapid fulfillment across Asia.",
        detail: "Local presence for just-in-time delivery",
        products: "Full range of washing machine shafts and machined components",
        caseStudy: "Strategic manufacturing partnerships across Asia-Pacific region.",
        coordinates: { x: 80, y: 48 }
    },
    {
        id: "logistics-capabilities",
        icon: Truck,
        name: "Logistics Capabilities",
        description: "Sea freight/air freight options, Consolidated shipping, Real-time shipment tracking, Customs documentation support.",
        detail: "Efficient Global Logistics",
        products: "Air/Sea Freight, Tracking, Customs Support",
        caseStudy: "Streamlined shipping for global partners.",
        coordinates: { x: 65, y: 65 }
    },
    {
        id: "supply-chain-benefits",
        icon: Anchor,
        name: "Supply Chain Benefits",
        description: "Flexible order quantities (MOQ negotiable), Just-in-time delivery programs, Vendor-managed inventory options, Dedicated account management.",
        detail: "Optimized Supply Chain",
        products: "JIT Delivery, VMI Options, Dedicated Account Mgr",
        caseStudy: "Adding value through flexible supply solutions.",
        coordinates: { x: 28, y: 68 }
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
