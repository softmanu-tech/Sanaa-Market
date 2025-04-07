
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-kenyan-cream min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-kenyan-brown/10 mix-blend-multiply"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C45B3C' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-kenyan-brown leading-tight"
            >
              Discover Authentic <span className="text-kenyan-terracotta">Kenyan</span> Craftsmanship
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg font-rowdies font-light text-kenyan-brown/80 max-w-lg mx-auto lg:mx-0"
            >
              Connecting talented artisans directly with customers worldwide. Shop sustainable, handcrafted products while supporting local communities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button className="bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 text-white font-rowdies py-6 px-8 text-lg" asChild>
                <Link to="/products/all">Shop Now</Link>
              </Button>
              <Button variant="outline" className="border-kenyan-terracotta text-kenyan-terracotta hover:bg-kenyan-terracotta/10 font-rowdies py-6 px-8 text-lg" asChild>
                <Link to="/artisans">
                  Meet Our Artisans <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-lg overflow-hidden h-64 bg-gray-200"
                >
                  <img 
                    src="/images/art2.webp" 
                    alt="Kenyan jewelry" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="rounded-lg overflow-hidden h-40 bg-gray-200"
                >
                  <img 
                    src="/images/art3.webp" 
                    alt="Kenyan baskets" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 mt-10">
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="rounded-lg overflow-hidden h-40 bg-gray-200"
                >
                  <img 
                    src="/images/art2.jpg" 
                    alt="Kenyan sculpture" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="rounded-lg overflow-hidden h-64 bg-gray-200"
                >
                  <img 
                    src="/images/art4.jpg" 
                    alt="Kenyan textiles" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
