
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MotionDiv } from './MotionElements';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-kenyan-brown/90 z-0" />
      <div 
        className="absolute inset-0 opacity-20 z-0 bg-[url('https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=2069&auto=format&fit=crop')]"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <MotionDiv animation="fade" className="mb-8">
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">
              Join Our Artisan Community
            </h2>
            <p className="text-lg font-rowdies font-light mb-8">
              Are you a Kenyan artisan looking to showcase your craft to the world? We'd love to partner with you and help bring your creations to a global audience.
            </p>
          </MotionDiv>
          
          <MotionDiv animation="scale" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 text-white font-rowdies py-6 px-8 text-lg" asChild>
                <Link to="/become-an-artisan">Become an Artisan</Link>
              </Button>
              <Button variant="outline" className="border-white bg-brown text-white hover:bg-white/10 font-rowdies py-6 px-8 text-lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
