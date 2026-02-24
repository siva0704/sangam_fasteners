import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Target, Repeat, Layers } from "lucide-react";

const disciplines = [
    {
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: "Process Control",
        description: "We maintain strict control at every production stage to ensure precision, consistency, and zero-defect quality in every shaft we manufacture."
    },
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: "Specification Execution",
        description: "We strictly adhere to customer specifications and industry standards, ensuring every shaft is manufactured with precise dimensions, material integrity, and performance compliance."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Quality Accountability",
        description: "We take full responsibility for quality at every stage of production, ensuring each shaft meets defined standards, customer requirements, and performance expectations without compromise."
    },
    {
        icon: <Repeat className="w-8 h-8 text-primary" />,
        title: "Repeat Supplier",
        description: "We build long-term partnerships through consistent quality, reliable delivery, and dependable performance that customers trust and return to."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

const OperationDiscipline = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[120px]" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Operation Discipline
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our unwavering commitment to precision, quality, and rigorous standards in every manufacturing step.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
                >
                    {disciplines.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative rounded-2xl border border-zinc-200 bg-white/50 p-8 transition-colors duration-300 hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/80 backdrop-blur-md overflow-hidden"
                        >
                            {/* Hover effect gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:ring-primary/30">
                                    {item.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OperationDiscipline;
