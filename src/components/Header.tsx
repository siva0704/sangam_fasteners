import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CircularMenu from "./CircularMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [justClosed, setJustClosed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Robust check for Home Page
  const isHomePage = location.pathname === "/" ||
    location.pathname.endsWith("/sfl-fastners") ||
    location.pathname.endsWith("/sfl-fastners/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger sooner (20px)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const handleMouseEnter = () => {
    if (justClosed) return;

    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 500); // Increased timeout for better UX
    setCloseTimeout(timeout);
  };

  const handleClose = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsMenuOpen(false);
    setJustClosed(true);
    setTimeout(() => setJustClosed(false), 200);
  };

  // Logic: Transparent ONLY at top of Home Page. Solid everywhere else.
  const headerClass = isScrolled
    ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm text-foreground"
    : isHomePage
      ? "bg-transparent border-transparent text-white"
      : "bg-white border-b border-border shadow-sm text-foreground";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 z-50 relative group">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-md group-hover:bg-accent/90 transition-colors">
                <span className="text-white font-heading font-bold text-xl">SF</span>
              </div>
              <div className="hidden lg:block">
                <h1 className={`text-xl font-heading font-bold transition-colors ${!isScrolled && isHomePage ? "text-white" : "text-gray-900"}`}>Sangam Fasteners</h1>
                <p className={`text-xs ${!isScrolled && isHomePage ? "text-white/80" : "text-gray-500"} transition-colors`}>Private Limited</p>
              </div>
            </Link>

            {/* Desktop Navigation (Inline - Visible on LG and up) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group py-2 
                    ${isActive(link.path) ? "font-bold" : ""}
                    ${!isScrolled && isHomePage
                      ? "text-white hover:text-white/90 drop-shadow-md"
                      : "text-gray-700 hover:text-accent"
                    }
                  `}
                  style={{ textShadow: (!isScrolled && isHomePage) ? "0 1px 2px rgba(0,0,0,0.5)" : "none" }}
                >
                  {link.name}
                  {/* Underline Animation */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full 
                    ${!isScrolled && isHomePage ? "bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" : "bg-accent"}
                  `} />
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle Button (Hidden on LG and up) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative z-50 p-2 transition-colors ${!isScrolled && isHomePage ? "text-white hover:text-white/80" : "text-gray-900 hover:text-accent"}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className="animate-in fade-in zoom-in duration-300" />
              ) : (
                <Menu size={24} className="animate-in fade-in zoom-in duration-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Unified Circular Menu Overlay */}
      <CircularMenu
        isOpen={isMenuOpen}
        onClose={handleClose}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default Header;
