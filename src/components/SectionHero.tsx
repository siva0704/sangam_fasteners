import * as React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Settings, Hexagon, Wrench, Hammer, CircleDashed } from "lucide-react";
import { Link } from "react-router-dom";

import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    title: "Precision Engineering.",
    subtitle: "Global Standards.",
    badge: "Industrial Fastener Manufacturing",
    description: "Manufacturing excellence with milimeter-perfect precision for mission-critical applications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    title: "Reliable Supply.",
    subtitle: "Controlled Execution.",
    badge: "Global Supply Chain Mastery",
    description: "End-to-end supply chain mastery ensuring your production lines never stop.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-blue-400 to-cyan-300",
  },
  {
    id: 3,
    title: "Partner in Progress.",
    subtitle: "Industrial Excellence.",
    badge: "Trusted Manufacturing Partner",
    description: "More than just a vendor—we are the backbone of your manufacturing success.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-blue-400 to-cyan-300",
  },
];

const FastenerPattern = () => (
  <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="hex-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-pattern)" />
    </svg>
  </div>
);

const SectionHero = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-screen min-h-[100dvh] overflow-hidden bg-black text-white">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full -ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative pl-0 h-full w-full">
              {/* Parallax Background Layer */}
              <div className="absolute inset-0 z-0">
                <FastenerPattern />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
                <img
                  src={slide.image.replace("w=2070", "w=1280")}
                  srcSet={`
                    ${slide.image.replace("w=2070", "w=480&q=60")} 480w,
                    ${slide.image.replace("w=2070", "w=800&q=70")} 800w,
                    ${slide.image.replace("w=2070", "w=1280&q=80")} 1280w,
                    ${slide.image} 2070w
                  `}
                  sizes="100vw"
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${current === index ? "scale-110" : "scale-100"}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  // @ts-ignore
                  fetchpriority={index === 0 ? "high" : "auto"}
                />
              </div>

              {/* Content Container - Advanced Text Reveals */}
              <div className="relative z-20 container h-full flex items-start px-4 mx-auto">
                <div className="max-w-4xl pt-40 md:pt-56">
                  <div className={`transition-all duration-700 ease-out ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    {/* Badge */}
                    <div className="mb-2">
                      <span className="inline-block text-blue-400 font-medium text-sm md:text-lg mb-2 tracking-wide">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
                        {slide.title} <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accentColor}`}>
                          {slide.subtitle}
                        </span>
                      </h1>
                    </div>

                    {/* Description */}
                    <div className="mb-10 max-w-2xl">
                      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/products">
                        <MagneticButton size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-6 text-lg w-full sm:w-auto">
                          Explore Our Products
                        </MagneticButton>
                      </Link>
                      <Link to="/contact">
                        <MagneticButton
                          size="lg"
                          variant="outline"
                          className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-6 text-lg w-full sm:w-auto"
                        >
                          Discuss Your Requirement <ArrowRight className="ml-2 h-5 w-5" />
                        </MagneticButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div className="absolute bottom-12 right-12 z-30 hidden md:flex gap-2">
          <CarouselPrevious className="static translate-y-0 h-14 w-14 border-white/10 bg-black/40 hover:bg-white/10 text-white transition-all hover:scale-110" />
          <CarouselNext className="static translate-y-0 h-14 w-14 border-white/10 bg-black/40 hover:bg-white/10 text-white transition-all hover:scale-110" />
        </div>

        {/* Slide Indicators - Moved up to make room for mouse */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1 transition-all duration-500 rounded-full ${current === index ? "w-12 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Mouse Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 animate-fade-in opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-[26px] h-[42px] border-[1.5px] border-white/60 rounded-full flex justify-center pt-2 box-border shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-black/20 backdrop-blur-md">
            <div className="w-1 h-1.5 bg-white rounded-full animate-scroll-wheel"></div>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Scroll</span>
        </div>

        <style>{`
           @keyframes scroll-wheel {
               0% { transform: translateY(0); opacity: 1; }
               70% { transform: translateY(12px); opacity: 0; }
               100% { transform: translateY(12px); opacity: 0; }
           }
           .animate-scroll-wheel {
               animation: scroll-wheel 2s ease-out infinite;
           }
           @keyframes fade-in {
                from { opacity: 0; transform: translate(-50%, 20px); }
                to { opacity: 0.8; transform: translate(-50%, 0); }
           }
           .animate-fade-in {
               animation: fade-in 1s ease-out forwards;
           }
        `}</style>
      </Carousel>
    </section>
  );
};

export default SectionHero;
