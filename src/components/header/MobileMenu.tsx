
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-kenyan-cream overflow-hidden"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="header-link font-rowdies font-light text-kenyan-brown py-2">
              Home
            </Link>
            <div className="border-t border-kenyan-beige py-2">
              <span className="font-cinzel font-semibold text-kenyan-brown">Products</span>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link to="/products/jewelry" className="header-link font-rowdies font-light text-kenyan-brown">
                  Jewelry
                </Link>
                <Link to="/products/home-decor" className="header-link font-rowdies font-light text-kenyan-brown">
                  Home Decor
                </Link>
                <Link to="/products/textiles" className="header-link font-rowdies font-light text-kenyan-brown">
                  Textiles
                </Link>
                <Link to="/products/art" className="header-link font-rowdies font-light text-kenyan-brown">
                  Art
                </Link>
                <Link to="/products/accessories" className="header-link font-rowdies font-light text-kenyan-brown">
                  Accessories
                </Link>
              </div>
            </div>
            <Link to="/artisans" className="header-link font-rowdies font-light text-kenyan-brown py-2 border-t border-kenyan-beige">
              Artisans
            </Link>
            <Link to="/about" className="header-link font-rowdies font-light text-kenyan-brown py-2 border-t border-kenyan-beige">
              About
            </Link>
            <Link to="/contact" className="header-link font-rowdies font-light text-kenyan-brown py-2 border-t border-kenyan-beige">
              Contact
            </Link>
            <Link to="/how-it-works" className="header-link font-rowdies font-light text-kenyan-brown py-2 border-t border-kenyan-beige">
              How It Works
            </Link>
            <Link to="/become-artisan" className="header-link font-rowdies font-light text-kenyan-brown py-2 border-t border-kenyan-beige">
              Become an Artisan
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
