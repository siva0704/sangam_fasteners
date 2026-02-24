import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Sangam Shaft & Machine Components Pvt Ltd</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leading manufacturer of high-precision washing machine shafts for the global appliance industry.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span>B-23, KSSIDC Gamanagatti Industrial Estate, Hubli - 580021, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-accent" />
                <span>+91-9343106083</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@sfpl.com" className="hover:text-accent transition-colors">
                  info@sfpl.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Business Hours</h3>
            <p className="text-sm text-muted-foreground mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sangam Shaft & Machine Components Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
