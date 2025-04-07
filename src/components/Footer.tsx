
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-kenyan-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-cinzel font-semibold mb-4">SanaaMarket</h2>
            <p className="font-rowdies font-light mb-4 text-white/80">
              Connecting Kenyan artisans with global customers through authentic handcrafted products.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-kenyan-terracotta hover:bg-white/10">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-kenyan-terracotta hover:bg-white/10">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-kenyan-terracotta hover:bg-white/10">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-kenyan-terracotta hover:bg-white/10">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-cinzel font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 font-rowdies font-light">
              <li>
                <Link to="/" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/artisans" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Artisans
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl font-cinzel font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 font-rowdies font-light">
              <li>
                <Link to="/products/jewelry" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products/home-decor" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/products/textiles" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Textiles
                </Link>
              </li>
              <li>
                <Link to="/products/art" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Art
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-white/80 hover:text-kenyan-terracotta transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-cinzel font-semibold mb-4">Stay Updated</h2>
            <p className="font-rowdies font-light mb-4 text-white/80">
              Subscribe to our newsletter for updates on new products and artisan stories.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 text-white w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 font-rowdies font-light text-white/80">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@sanaamarket.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="text-white/60 font-rowdies font-light text-sm md:text-right">
              © {new Date().getFullYear()} SanaaMarket. All rights reserved.
              <div className="flex space-x-4 mt-1 md:justify-end">
                <Link to="/privacy" className="hover:text-kenyan-terracotta">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-kenyan-terracotta">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
