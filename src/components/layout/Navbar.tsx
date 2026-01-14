import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Check if we are on the home page (allowing for potential base path)
    const isHome = location.pathname === "/" || location.pathname === "/sangam_fasteners" || location.pathname === "/sangam_fasteners/";

    // Determine if we should use the "scrolled" (solid white) style
    // We use it if the user has scrolled OR if we are NOT on the home page
    const useScrolledStyle = isScrolled || !isHome;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Industries", href: "/industries" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                useScrolledStyle
                    ? "bg-background/80 backdrop-blur-md border-white/10 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/sangam_fasteners/logo.svg" alt="Sangam Fasteners Private Limited Logo" className="h-[45px] w-[45px] object-contain group-hover:scale-105 transition-transform duration-300" />
                    <div className="flex flex-col items-start leading-none gap-1">
                        <span className={cn(
                            "text-[12px] sm:text-[16px] font-heading font-bold tracking-widest uppercase transition-colors duration-300",
                            useScrolledStyle ? "text-foreground" : "text-white"
                        )}>
                            Sangam Fasteners
                        </span>
                        <span className={cn(
                            "text-[10px] sm:text-[12px] font-medium tracking-wide transition-colors duration-300",
                            useScrolledStyle ? "text-primary" : "text-white/80"
                        )}>
                            Private Limited
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation (Visible on LG+) */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-colors duration-300 relative group py-2",
                                useScrolledStyle
                                    ? "text-muted-foreground hover:text-primary"
                                    : "text-white/90 hover:text-white",
                                location.pathname === link.href && "font-bold"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute bottom-0 left-0 h-0.5 transition-all duration-300",
                                useScrolledStyle ? "bg-primary" : "bg-white",
                                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                            )} />
                        </Link>
                    ))}
                    <div className="ml-4">
                        <a
                            href="mailto:info@sflfasteners.com"
                            className={cn(
                                "px-5 py-2.5 rounded-sm font-bold text-sm transition-all duration-300 uppercase tracking-wider",
                                useScrolledStyle
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-white text-primary hover:bg-white/90"
                            )}
                        >
                            Get Quote
                        </a>
                    </div>
                </div>

                {/* Mobile/Tablet Menu Button (Hidden on LG+) */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "relative h-12 w-12 rounded-full hover:bg-white/10 transition-colors duration-300",
                                    useScrolledStyle ? "text-foreground" : "text-white"
                                )}
                            >
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[320px] bg-white/10 backdrop-blur-xl p-0 text-white shadow-2xl border-none">
                            <div className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                                <SheetDescription>Main site navigation links</SheetDescription>
                            </div>
                            <div className="flex flex-col h-full p-8 pt-20">
                                <nav className="flex flex-col space-y-6 flex-1 justify-center">
                                    {navLinks.map((link, index) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "group flex items-center justify-end text-right text-xl font-heading font-bold transition-colors duration-200",
                                                location.pathname === link.href
                                                    ? "text-accent"
                                                    : "text-white/80 hover:text-white"
                                            )}
                                            style={{
                                                animationDelay: `${index * 100}ms`
                                            }}
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className={cn(
                                                    "absolute -bottom-1 right-0 h-1 bg-accent transition-all duration-300",
                                                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                                )}></span>
                                            </span>
                                            <ChevronRight className={cn(
                                                "ml-4 h-6 w-6 transition-all duration-300",
                                                location.pathname === link.href
                                                    ? "opacity-100 translate-x-0 text-accent"
                                                    : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-white"
                                            )} />
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto text-right">
                                    <p className="text-sm text-white/50">
                                        Need a quote?
                                    </p>
                                    <a href="mailto:info@sflfasteners.com" className="text-lg font-bold text-white hover:text-accent transition-colors">
                                        info@sflfasteners.com
                                    </a>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};
