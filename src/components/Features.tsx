
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Globe, Heart } from 'lucide-react';
import { MotionDiv, MotionContainer } from './MotionElements';

const features = [
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Authentic Products",
    description: "Each item is handcrafted by skilled Kenyan artisans using traditional techniques and materials."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Direct Support",
    description: "Your purchase directly supports the artisans and their communities, with fair compensation guaranteed."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Shipping",
    description: "We ship these beautiful creations worldwide, bringing Kenyan craftsmanship to your doorstep."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Sustainable Practices",
    description: "Our artisans use eco-friendly materials and sustainable methods to create their masterpieces."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-kenyan-brown">Why Choose SanaaMarket?</h2>
          <p className="mt-4 text-lg font-rowdies font-light text-kenyan-brown/70 max-w-2xl mx-auto">
            We're more than just a marketplace. We're a bridge connecting talented Kenyan artisans with the world.
          </p>
        </MotionDiv>
        
        <MotionContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <MotionDiv 
              key={index}
              animation="scale"
              delay={index * 0.1}
              className="bg-kenyan-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kenyan-terracotta/10 text-kenyan-terracotta mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-cinzel font-semibold mb-2 text-kenyan-brown">{feature.title}</h3>
              <p className="text-kenyan-brown/70 font-rowdies font-light">{feature.description}</p>
            </MotionDiv>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

export default Features;
