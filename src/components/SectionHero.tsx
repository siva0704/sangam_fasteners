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
    title: "Precision Engineering",
    subtitle: "at Global Scale",
    badge: "Specialised Manufacturer",
    description: "20,000m² manufacturing facility equipped with 51+ advanced CNC centers and robotic automation, delivering zero-defect components to tier-1 appliance brands.",
    image: "/hero-promo.gif",
    isLocal: true,
    hideOverlayText: true,
    accentColor: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    title: "Uncompromising",
    subtitle: "Quality Control",
    badge: "0.0001mm Resolution",
    description: "Our state-of-the-art metrology lab features non-contact Vision Measuring Machines and Japanese digital instruments for absolute precision verification.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-blue-400 to-cyan-300",
  },
  {
    id: 3,
    title: "Trusted by",
    subtitle: "Industry Leaders",
    badge: "Global Supply Chain",
    description: "A specialized OEM manufacturing partner recognized by major brands like Ashok Leyland, BHEL, and Indian Railways for reliable, high-volume delivery.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-blue-400 to-cyan-300",
  },
];

const FastenerPattern = () => (
  <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none text-slate-900 dark:text-foreground">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="hex-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="none" stroke="currentColor" strokeWidth="1" />
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
    <section className="relative h-screen min-h-[100dvh] overflow-hidden bg-background transition-colors duration-500 text-foreground">
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
              {/* ─── DESKTOP BACKGROUND (unchanged) ─── */}
              <div className="hidden md:block absolute inset-0 z-0 bg-slate-900">
                <FastenerPattern />
                <div className={`absolute inset-0 bg-gradient-to-t z-10 transition-opacity duration-500 ${slide.isLocal ? "from-slate-900/60 via-slate-900/10 to-transparent" : "from-slate-900/85 via-slate-800/30 to-slate-900/55"}`} />
                {!slide.isLocal && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10" />
                )}
                {slide.isLocal ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    // @ts-expect-error: fetchpriority is a valid attribute but not in standard HTML types yet
                    fetchpriority={index === 0 ? "high" : "auto"}
                  />
                ) : (
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
                    className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-linear ${current === index ? "scale-110" : "scale-100"}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    // @ts-expect-error: fetchpriority is a valid attribute but not in standard HTML types yet
                    fetchpriority={index === 0 ? "high" : "auto"}
                  />
                )}
              </div>

              {/* ─── MOBILE LAYOUT ─── */}
              {slide.isLocal ? (
                /* Slide 1 mobile: GIF at top + content below */
                <div className="md:hidden absolute inset-0 z-0 bg-slate-900 flex flex-col">
                  <FastenerPattern />
                  {/* GIF — full width, natural 16:9 height */}
                  <div className="relative w-full flex-shrink-0 overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"}`}
                      loading="eager"
                      // @ts-expect-error: fetchpriority is a valid attribute but not in standard HTML types yet
                      fetchpriority="high"
                    />
                  </div>
                  {/* Content fills remaining space */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 text-center relative z-10">
                    <span className="inline-block text-blue-300 font-medium text-xs tracking-widest uppercase mb-3">
                      Specialised Manufacturer
                    </span>
                    <h1 className="text-3xl font-bold font-heading text-white leading-tight tracking-tight mb-3">
                      Precision Engineering<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        at Global Scale
                      </span>
                    </h1>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
                      20,000m² facility with 51+ CNC centers and robotic automation delivering zero-defect components to tier-1 brands.
                    </p>
                    <a href={`${import.meta.env.BASE_URL}SFL Resorcs/Vendor Profile - SFL.pptx`} download>
                      <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                        Download Vendor Profile
                      </button>
                    </a>
                  </div>
                </div>
              ) : (
                /* Other slides mobile: same as desktop */
                <div className="md:hidden absolute inset-0 z-0 bg-slate-900">
                  <FastenerPattern />
                  <div className="absolute inset-0 bg-gradient-to-t z-10 from-slate-900/85 via-slate-800/30 to-slate-900/55" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10" />
                  <img
                    src={slide.image.replace("w=2070", "w=800&q=70")}
                    alt={slide.title}
                    className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-linear ${current === index ? "scale-110" : "scale-100"}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    // @ts-expect-error: fetchpriority is a valid attribute but not in standard HTML types yet
                    fetchpriority={index === 0 ? "high" : "auto"}
                  />
                </div>
              )}

              {/* Content Container — desktop only for slide 1 */}
              <div className={`relative z-20 container h-full flex px-4 mx-auto ${slide.hideOverlayText ? "hidden md:flex items-end pb-32 md:pb-40 justify-center" : "flex items-start"}`}>
                <div className={`max-w-4xl ${slide.hideOverlayText ? "w-full" : "pt-40 md:pt-56"}`}>
                  <div className={`transition-all duration-700 ease-out ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    {(!slide.hideOverlayText) && (
                      <>
                        {/* Badge */}
                        <div className="mb-2">
                          <span className="inline-block text-blue-300 font-medium text-sm md:text-lg mb-2 tracking-wide">
                            {slide.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="mb-6">
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-white">
                            {slide.title} <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accentColor}`}>
                              {slide.subtitle}
                            </span>
                          </h1>
                        </div>

                        {/* Description */}
                        <div className="mb-10 max-w-2xl">
                          <p className="text-xl md:text-2xl text-white/75 leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                      </>
                    )}

                    {(!slide.hideOverlayText) && (
                      <div className={`flex flex-col sm:flex-row gap-4 ${slide.hideOverlayText ? "justify-center" : ""}`}>
                        <a href={`${import.meta.env.BASE_URL}SFL Resorcs/Vendor Profile - SFL.pptx`} download>
                          <MagneticButton size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 px-8 py-6 text-lg w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            Download Vendor Profile
                          </MagneticButton>
                        </a>
                        <Link to="/about">
                          <MagneticButton
                            size="lg"
                            variant="outline"
                            className="border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg w-full sm:w-auto backdrop-blur-sm transition-colors"
                          >
                            View Manufacturing Scope <ArrowRight className="ml-2 h-5 w-5" />
                          </MagneticButton>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div className="absolute bottom-6 right-4 md:bottom-12 md:right-12 z-30 flex gap-2">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110" />
          <CarouselNext className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110" />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1 transition-all duration-500 rounded-full ${current === index ? "w-12 bg-blue-400" : "w-2 bg-white/30 hover:bg-white/60"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Mouse Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 animate-fade-in opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-[26px] h-[42px] border-[1.5px] border-slate-400 dark:border-border rounded-full flex justify-center pt-2 box-border shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-foreground/10 dark:bg-background/20 backdrop-blur-md">
            <div className="w-1 h-1.5 bg-slate-600 dark:bg-white rounded-full animate-scroll-wheel"></div>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-foreground/60 font-medium">Scroll</span>
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
    </section >
  );
};

export default SectionHero;
