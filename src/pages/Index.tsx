
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import FeaturedArtisans from '@/components/FeaturedArtisans';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
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
      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <Categories />
        <FeaturedArtisans />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
