
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50 z-10" />
                {/* Subtle grid pattern for industrial feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                {/* Background Image - Industrial Plant - Low opacity */}
                <img
                    src="https://images.unsplash.com/photo-1565457597556-b072a2754643?q=80&w=1280&auto=format&fit=crop"
                    srcSet="
                        https://images.unsplash.com/photo-1565457597556-b072a2754643?q=60&w=480&auto=format&fit=crop 480w,
                        https://images.unsplash.com/photo-1565457597556-b072a2754643?q=70&w=800&auto=format&fit=crop 800w,
                        https://images.unsplash.com/photo-1565457597556-b072a2754643?q=80&w=1280&auto=format&fit=crop 1280w,
                        https://images.unsplash.com/photo-1565457597556-b072a2754643?q=80&w=2560&auto=format&fit=crop 2560w
                    "
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    alt="Industrial Plant Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
                    loading="eager"
                    // @ts-ignore
                    fetchpriority="high"
                />
            </div>

            <div className="container relative z-20 px-6 pt-14">
                <div className="max-w-4xl space-y-8 animate-fade-up">
                    <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        ISO 9001:2015 Certified Manufacturer
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight text-white leading-[1.1]">
                        INDUSTRIAL FASTENER <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                            MANUFACTURING
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-3xl font-light text-gray-300">
                        Reliable Supply. Controlled Execution.
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                        Sangam Fasteners Private Limited is a manufacturing-focused industrial fastener company based in Hubballi, Karnataka. Since 2000, we have manufactured standard and custom fasteners for applications where dimensional accuracy, material reliability, and repeat supply consistency are mandatory.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="h-12 sm:h-14 px-8 text-base sm:text-lg rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 hover:scale-105 group shadow-xl shadow-orange-500/20">
                            Explore Products
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 sm:h-14 px-8 text-base sm:text-lg rounded-full border-gray-700 text-gray-200 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 shadow-sm backdrop-blur-sm">
                            Download Catalogue
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
};

