import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="lg:container mx-auto max-w-8xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Logo and Brand */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <img src={logo} className="h-8" alt="Furniro Logo" />
              <span className="text-2xl font-bold text-black">Furniro</span>
            </NavLink>
            <p className="text-gray-600 text-sm">
              Creating beautiful and functional furniture for your home. Quality craftsmanship meets modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2 lg:flex lg:flex-col lg:items-center">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/shop" 
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Stay updated with our latest products and offers
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex justify-start md:justify-start lg:justify-center items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Furniro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
