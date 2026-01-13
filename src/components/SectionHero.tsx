import * as React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Settings, Hexagon, Wrench, Hammer, CircleDashed } from "lucide-react";

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
    description: "Manufacturing excellence with milimeter-perfect precision for mission-critical applications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-orange-500 to-amber-600",
  },
  {
    id: 2,
    title: "Reliable Supply.",
    subtitle: "Controlled Execution.",
    description: "End-to-end supply chain mastery ensuring your production lines never stop.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-orange-500 to-amber-600",
  },
  {
    id: 3,
    title: "Partner in Progress.",
    subtitle: "Industrial Excellence.",
    description: "More than just a vendor—we are the backbone of your manufacturing success.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-orange-500 to-amber-600",
  },
];

const FastenerPattern = () => (
  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-[0.03]">
    <Settings className="absolute top-[10%] left-[5%] w-24 h-24 text-white animate-spin-slow" />
    <Hexagon className="absolute top-[20%] right-[10%] w-32 h-32 text-white animate-pulse" />
    <Wrench className="absolute bottom-[15%] left-[15%] w-20 h-20 text-white rotate-45" />
    <CircleDashed className="absolute bottom-[20%] right-[20%] w-40 h-40 text-white animate-spin-slow" />
    <Hammer className="absolute top-[40%] left-[45%] w-16 h-16 text-white -rotate-12" />
    <Hexagon className="absolute -top-[10%] left-[30%] w-64 h-64 text-white opacity-50" />
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

    // Custom Autoplay Implementation
    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(autoplayInterval);
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
              {/* Background Image with Zoom Effect and Responsive SrcSet */}
              <div className="absolute inset-0 z-0">
                <FastenerPattern />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                <img
                  src={slide.image.replace("w=2070", "w=1280")}
                  srcSet={`
                    ${slide.image.replace("w=2070", "w=480&q=60")} 480w,
                    ${slide.image.replace("w=2070", "w=800&q=70")} 800w,
                    ${slide.image.replace("w=2070", "w=1280&q=80")} 1280w,
                    ${slide.image} 2070w
                  `}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-10000 ease-linear scale-100 hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  // @ts-ignore
                  fetchpriority={index === 0 ? "high" : "auto"}
                />
              </div>

              {/* Content Container - Optimized for LCP (No JS Animation for First Slide) */}
              <div className="relative z-20 container h-full flex items-center px-4 mx-auto">
                <div className="max-w-4xl pt-20">
                  {/* Badge */}
                  <div className={`transition-all duration-700 ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-medium text-[10px] md:text-sm mb-6 backdrop-blur-md tracking-tight">
                      Industrial Fastener Manufacturing
                    </span>
                  </div>

                  {/* Title - Critical LCP Element - visible by default for first slide */}
                  <div className={`transition-all duration-700 delay-100 ${current === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
                      {slide.title} <br />
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accentColor}`}>
                        {slide.subtitle}
                      </span>
                    </h1>
                  </div>

                  {/* Description */}
                  <div className={`transition-all duration-700 delay-200 ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                      {slide.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <MagneticButton size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-0">
                      Explore Our Products
                    </MagneticButton>
                    <MagneticButton
                      size="lg"
                      variant="outline"
                      className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white"
                    >
                      Discuss Your Requirement <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div className="absolute bottom-12 right-12 z-30 hidden md:flex gap-2">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 border-white/10 bg-black/40 hover:bg-orange-500/20 hover:border-orange-500/50 text-white transition-colors" />
          <CarouselNext className="static translate-y-0 h-12 w-12 border-white/10 bg-black/40 hover:bg-orange-500/20 hover:border-orange-500/50 text-white transition-colors" />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-orange-500" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default SectionHero;
