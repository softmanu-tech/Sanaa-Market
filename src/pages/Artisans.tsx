
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { artisans } from '@/data/sampleData';
import ArtisanCard from '@/components/ArtisanCard';
import { MotionDiv, MotionContainer } from '@/components/MotionElements';

const Artisans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <MotionDiv animation="fade" className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-kenyan-brown mb-4">
              Our Talented Artisans
            </h1>
            <p className="font-rowdies font-light text-kenyan-brown/70 max-w-2xl mx-auto">
              Meet the skilled craftspeople whose passion, creativity, and traditional techniques bring our products to life.
            </p>
          </MotionDiv>

          <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {artisans.map((artisan, index) => (
              <MotionDiv 
                key={artisan.id} 
                animation="scale"
                delay={index * 0.1}
              >
                <ArtisanCard
                  id={artisan.id}
                  name={artisan.name}
                  image={artisan.image}
                  specialty={artisan.specialty}
                  location={artisan.location}
                  productCount={artisan.productCount}
                />
              </MotionDiv>
            ))}
          </MotionContainer>

          <MotionDiv animation="fade" className="bg-kenyan-cream/50 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                  Become an Artisan
                </h2>
                <p className="font-rowdies font-light text-kenyan-brown/70 mb-6">
                  Are you a talented craftsperson with unique handmade products? 
                  Join our growing community of artisans and showcase your work to customers around the world.
                </p>
                <motion.a 
                  href="/become-artisan"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 text-white font-rowdies py-3 px-6 rounded-md"
                >
                  Join Our Community
                </motion.a>
              </div>
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1593089784370-9a6c04058ee6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Kenyan artisan at work" 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Artisans;
