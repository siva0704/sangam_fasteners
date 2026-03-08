import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronRight, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    // Check if we are on the home page (allowing for potential base path)
    // Check if we are on the home page
    const isHome = location.pathname === "/" || location.pathname === import.meta.env.BASE_URL;

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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                useScrolledStyle
                    ? "bg-background/60 backdrop-blur-2xl border-white/10 py-7 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "bg-transparent border-transparent py-10"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-5 group py-1">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
                        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="SFL Shafts Logo" className="relative h-[60px] w-[60px] md:h-[72px] md:w-[72px] object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                    </div>
                    <div className="flex flex-col items-start leading-tight gap-0.5 mt-1">
                        <span className={cn(
                            "text-[24px] sm:text-[28px] lg:text-[34px] font-heading font-extrabold tracking-tight transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary/80",
                            useScrolledStyle ? "text-foreground drop-shadow-sm" : "text-foreground drop-shadow-md"
                        )}>
                            SANGAM FASTENERS
                        </span>
                        <span className={cn(
                            "text-[11px] sm:text-[13px] lg:text-[15px] font-bold tracking-[0.25em] uppercase transition-colors duration-300",
                            useScrolledStyle ? "text-primary/90" : "text-foreground/70"
                        )}>
                            PRIVATE LIMITED
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation (Visible on LG+) */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* Floating Island Nav Pill */}
                    <div className={cn(
                        "flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-500",
                        useScrolledStyle
                            ? "bg-foreground/5 dark:bg-white/5 border border-white/5 backdrop-blur-md"
                            : "bg-black/20 dark:bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                    )}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-[13px] font-bold tracking-wider transition-all duration-300 relative overflow-hidden group uppercase",
                                    location.pathname === link.href
                                        ? "text-primary shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-white/10"
                                        : "text-foreground/70 hover:text-foreground hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                                )}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {location.pathname === link.href && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 animate-[shimmer_2s_infinite]" />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="ml-2 flex items-center gap-4">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 overflow-hidden group",
                                useScrolledStyle
                                    ? "bg-foreground/5 dark:bg-white/5 border border-white/5 hover:bg-foreground/10 text-foreground"
                                    : "bg-black/20 dark:bg-white/5 border border-white/10 hover:bg-white/10 text-foreground"
                            )}
                            aria-label="Toggle theme"
                        >
                            <span className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full blur-md" />
                            <Sun className="absolute w-5 h-5 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute w-5 h-5 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                        </button>

                        {/* Get Quote Button */}
                        <Link
                            to="/contact"
                            className="group relative px-6 py-2.5 rounded-full font-extrabold text-[13px] uppercase tracking-widest transition-all duration-300 overflow-hidden bg-foreground text-background hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-white/20"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            <span className="relative flex items-center gap-2">
                                Get Quote
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                            </span>
                        </Link>
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
                                    "relative h-12 w-12 rounded-full border border-transparent hover:border-border hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-foreground transition-all duration-500 hover:shadow-lg hover:shadow-blue-400/10 group overflow-hidden",
                                    useScrolledStyle ? "text-foreground hover:text-foreground" : "text-foreground"
                                )}
                            >
                                <Menu className="h-8 w-8 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[320px] bg-foreground/5 backdrop-blur-xl p-0 text-foreground shadow-2xl border-none">
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
                                                    : "text-foreground/80 hover:text-foreground"
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
                                                    : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-foreground"
                                            )} />
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto flex flex-col items-end space-y-4 pt-6 border-t border-foreground/10">
                                    <div className="flex items-center gap-4 w-full justify-between">
                                        <span className="text-sm font-bold opacity-70">Theme</span>
                                        <button
                                            onClick={toggleTheme}
                                            className="relative flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
                                        >
                                            <Sun className="absolute w-5 h-5 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                                            <Moon className="absolute w-5 h-5 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                                        </button>
                                    </div>
                                    <div className="w-full text-right mt-4">
                                        <p className="text-sm text-foreground/50">
                                            Need a quote?
                                        </p>
                                        <a href="mailto:info@sflfasteners.com" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                                            info@sflfasteners.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};
