import { Link } from "react-router-dom";

interface CircularMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

const CircularMenu = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: CircularMenuProps) => {
  return (
    <>
      {/* Transparent Bridge Area to prevent hover gaps - mainly for Desktop */}
      <div
        className={`fixed top-0 right-0 z-40 w-64 h-32 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

      {/* Expanding Circular Background Overlay */}
      <div
        className={`fixed top-0 right-0 z-40 transition-all duration-700 ease-out pointer-events-none ${isOpen ? "opacity-100" : "opacity-0"
          }`}
        style={{
          width: isOpen ? "250vmax" : "0", // Use vmax to cover biggest dimension
          height: isOpen ? "250vmax" : "0",
          borderRadius: "50%",
          background: "radial-gradient(circle at top right, hsla(var(--primary) / 0.95), hsla(var(--accent) / 0.90), hsl(0 0% 0% / 0.95))",
          transform: "translate(50%, -50%)", // Center the circle on the top-right corner
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Menu Content */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-end pr-8 md:pr-16 lg:pr-32 transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(e) => {
          // Allow closing when clicking empty space
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <nav className="relative w-full max-w-4xl">
          <div className="flex flex-col items-end space-y-6 md:space-y-8">
            {menuLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`text-primary-foreground font-heading font-bold hover:text-white hover:scale-105 transition-all duration-300 origin-right ${isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                  }`}
                style={{
                  fontSize: `clamp(2rem, 5vw, 4rem)`,
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default CircularMenu;
