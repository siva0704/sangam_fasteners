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
    Cog
} from "lucide-react";

export const products = [
    // --- BOLTS ---
    {
        id: "hex-bolts",
        name: "Hex & Heavy Hex Bolts",
        category: "Bolts",
        material: "Steel, Stainless Steel, Brass",
        standards: "DIN 931/933, ISO 4014/4017, ASTM A307",
        description: "Standard industrial fastening solution.",
        longDescription: "Precision engineered Hex and Heavy Hex bolts designed for high-stress industrial applications. Available in various grades (8.8, 10.9) and materials including Stainless Steel (304/316) and Carbon Steel.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "structural-bolts",
        name: "HSFG Structural Bolts",
        category: "Bolts",
        material: "High Tensile Steel",
        standards: "ASTM A325, A490, EN 14399",
        description: "High-strength friction grip bolts.",
        longDescription: "Critical load-bearing structural bolts (HSFG) for steel construction, bridges, and infrastructure projects. Certified for high tensile strength and shear resistance.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "anchor-bolts",
        name: "Foundation & Anchor Bolts",
        category: "Bolts",
        material: "Carbon Steel, Alloy Steel",
        standards: "ASTM F1554 (Gr 36, 55, 105)",
        description: "L-Bolts, J-Bolts, Expansion Anchors.",
        longDescription: "Robust foundation fasteners including L-type, J-type, and Chemical Anchors for securing heavy machinery and structural columns to concrete bases.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "u-bolts",
        name: "U-Bolts & Clamps",
        category: "Bolts",
        material: "SS 304/316, Carbon Steel",
        standards: "DIN 3570, ASME B18.31.5",
        description: "Piping and support clamping.",
        longDescription: "Corrosion-resistant U-Bolts with round and square bends, essential for piping support in Oil & Gas and Power generation sectors.",
        image: "https://images.unsplash.com/photo-1536617063469-6f34582f3ef4?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "eye-bolts",
        name: "Eye Bolts & Lifting Gear",
        category: "Bolts",
        material: "Forged Steel, SS",
        standards: "DIN 580, ASME B18.15",
        description: "Heavy lifting and rigging hardware.",
        longDescription: "Forged Eye Bolts designed for lifting heavy equipment. Tested for tensile strength and available in metric and imperial thread profiles.",
        image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=800&auto=format&fit=crop"
    },

    // --- NUTS ---
    {
        id: "hex-nuts",
        name: "Hex & Heavy Hex Nuts",
        category: "Nuts",
        material: "Steel, Stainless Steel",
        standards: "DIN 934, ASTM A194 2H",
        description: "Standard and heavy-duty mating nuts.",
        longDescription: "High-grade Hex Nuts including ASTM A194 2H for high-pressure and high-temperature service environments.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "lock-nuts",
        name: "Lock Nuts (Nyloc/Metal)",
        category: "Nuts",
        material: "Steel (Zinc Plated), SS",
        standards: "DIN 985, DIN 980",
        description: "Vibration-proof locking nuts.",
        longDescription: "Nylon insert and prevailing torque metal lock nuts to prevent loosening due to vibration in automotive and machining applications.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "flange-nuts",
        name: "Flange Nuts",
        category: "Nuts",
        material: "Carbon Steel (Gr 8, 10)",
        standards: "DIN 6923, IFI 100/107",
        description: "Integrated washer face nuts.",
        longDescription: "Serrated and non-serrated flange nuts providing a larger bearing surface to distribute load and prevent loosening.",
        image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78?q=80&w=800&auto=format&fit=crop"
    },

    // --- WASHERS ---
    {
        id: "flat-washers",
        name: "Flat & Spring Washers",
        category: "Washers",
        material: "SS, Mild Steel, Copper",
        standards: "DIN 125, DIN 127",
        description: "Load distribution and locking.",
        longDescription: "Plain flat washers for load distribution and helical spring lock washers for vibration resistance.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "structural-washers",
        name: "Hardened Structural Washers",
        category: "Washers",
        material: "Hardened Steel",
        standards: "ASTM F436, DIN 6916",
        description: "For HSFG structural bolts.",
        longDescription: "Through-hardened structural washers compatible with A325/A490 bolts for steel construction joints.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    },

    // --- SCREWS & SOCKET ---
    {
        id: "socket-screws",
        name: "Socket Head Cap Screws",
        category: "Screws",
        material: "Alloy Steel (12.9), SS",
        standards: "DIN 912, ISO 4762",
        description: "High-strength Allen key screws.",
        longDescription: "Grade 12.9 Socket Head Cap Screws (Allen Bolts) for precision machinery and high-tensile applications.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "machine-screws",
        name: "Machine & Self-Tapping Screws",
        category: "Screws",
        material: "SS 304, Zinc Plated Steel",
        standards: "DIN 7981, DIN 7982",
        description: "Assembly and sheet metal screws.",
        longDescription: "Diverse range of Pan, Countersunk, and Truss head machine screws and self-tapping screws for sheet metal and plastic assembly.",
        image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78?q=80&w=800&auto=format&fit=crop"
    },

    // --- STUDS & RODS ---
    {
        id: "stud-bolts",
        name: "Industrial Stud Bolts",
        category: "Studs",
        material: "ASTM A193 B7 / B16",
        standards: "ASME B16.5",
        description: "For high-pressure flanges.",
        longDescription: "Fully threaded stud bolts available in B7 (High Temp), B16, L7 (Low Temp) grades, commonly used in pipeline flanges.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "threaded-rods",
        name: "Threaded Rods (Din 975)",
        category: "Studs",
        material: "SS, Brass, MS (Zinc)",
        standards: "DIN 975, DIN 976",
        description: "1M to 3M lengths.",
        longDescription: "Continuously threaded rods typically used in plumbing, construction, and maintenance applications. Available in various lengths.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    },

    // --- SPECIALTY ---
    {
        id: "custom-oem",
        name: "Custom OEM Fasteners",
        category: "Custom",
        material: "Super Alloys (Inconel, Monel)",
        standards: "Per Drawing",
        description: "Bespoke manufacturing.",
        longDescription: "SFL specializes in manufacturing custom fasteners according to client-specific drawings using exotic alloys like Inconel, Monel, and Titanium.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop"
    }
];

export const industries = [
    {
        id: "general-engineering",
        icon: Settings,
        name: "General Engineering",
        description: "Reliable fasteners for diverse engineering applications.",
        detail: "Standard bolts, nuts, washers",
        products: "Standard bolts, nuts, washers, screws",
        caseStudy: "Consistent supply for machinery manufacturers."
    },
    {
        id: "infrastructure",
        icon: Building2,
        name: "Infrastructure & Construction",
        description: "High-strength structural fasteners for core infrastructure.",
        detail: "Foundation bolts, structural assemblies",
        products: "Foundation bolts, structural assemblies, threaded rods",
        caseStudy: "Key partner for major infrastructure projects."
    },
    {
        id: "automotive",
        icon: Car,
        name: "Automotive & Auto Components",
        description: "Precision-engineered parts for automotive assembly.",
        detail: "Axel studs, chassis fasteners",
        products: "Axel studs, chassis fasteners, precision nuts",
        caseStudy: "Strategic supplier for Tier-1 automotive OEMs."
    },
    {
        id: "heavy-engineering",
        icon: Hammer,
        name: "Heavy Engineering",
        description: "Robust components for heavy machinery and equipment.",
        detail: "Large diameter bolts, double-ended studs",
        products: "Large diameter bolts, double-ended studs, custom parts",
        caseStudy: "Reliable partner for earthmoving equipment."
    },
    {
        id: "oem",
        icon: Factory,
        name: "OEM Manufacturing",
        description: "Custom solutions for original equipment manufacturers.",
        detail: "Drawing-based parts, special alloys",
        products: "Drawing-based parts, special alloys, critical assemblies",
        caseStudy: "Tailored manufacturing for specific OEM needs."
    }
];

export const manufacturingFeatures = [
    {
        icon: Ruler,
        title: "Specification-driven production",
        desc: "Strict adherence to approved drawings and standards."
    },
    {
        icon: ShieldCheck,
        title: "Process discipline",
        desc: "Controlled manufacturing execution ensuring quality."
    },
    {
        icon: Microscope,
        title: "Repeatability across batches",
        desc: "Consistent performance over repeated supplies."
    },
    {
        icon: Anchor,
        title: "Long-term supplier stability",
        desc: "Reliable partner for sustainable sourcing."
    }
];
