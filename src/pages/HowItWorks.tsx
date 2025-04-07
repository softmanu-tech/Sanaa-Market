
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv, MotionContainer } from '@/components/MotionElements';
import { ArrowRight, ShoppingCart, Truck, CreditCard, HeartHandshake } from 'lucide-react';

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-kenyan-terracotta" />,
      title: "Browse & Select",
      description: "Explore our curated collection of authentic Kenyan crafts. Each item includes details about the artisan who created it and the story behind their work."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-kenyan-terracotta" />,
      title: "Secure Checkout",
      description: "We offer secure payment options including credit cards, mobile money, and other local payment methods to ensure a smooth transaction experience."
    },
    {
      icon: <Truck className="w-12 h-12 text-kenyan-terracotta" />,
      title: "Fast Delivery",
      description: "We carefully package and ship your items both locally and internationally. Track your order every step of the way with our delivery updates."
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-kenyan-terracotta" />,
      title: "Support Artisans",
      description: "Your purchase directly supports Kenyan artisans and their communities. We ensure fair compensation and sustainable practices throughout our supply chain."
    }
  ];

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
          <MotionDiv animation="fade" className="mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-kenyan-brown mb-4">
              How SanaaMarket Works
            </h1>
            <p className="font-rowdies font-light text-kenyan-brown/70 max-w-2xl mx-auto">
              Our marketplace connects talented Kenyan artisans directly with customers worldwide, 
              ensuring authentic handcrafted goods and fair compensation.
            </p>
          </MotionDiv>

          <MotionContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <MotionDiv
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-cinzel font-semibold mb-3 text-kenyan-brown">{step.title}</h3>
                <p className="font-rowdies font-light text-kenyan-brown/70">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-kenyan-terracotta" />
                  </div>
                )}
              </MotionDiv>
            ))}
          </MotionContainer>

          <MotionDiv animation="fade" delay={0.4} className="bg-kenyan-beige/50 p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                  For Artisans
                </h2>
                <ul className="space-y-4 font-rowdies font-light text-kenyan-brown/80">
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <span>Register as an artisan and create your profile showcasing your craft and story</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <span>Upload high-quality photos and descriptions of your handcrafted products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <span>Set your prices and manage your inventory through our simple dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <span>Receive payment directly to your preferred account after each sale</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                  For Customers
                </h2>
                <ul className="space-y-4 font-rowdies font-light text-kenyan-brown/80">
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <span>Create an account to save favorite items and track your orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <span>Browse authentic Kenyan crafts by category or artisan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <span>Learn about the artisans and traditional techniques behind each product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-kenyan-terracotta text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <span>Checkout securely and track your delivery status</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default HowItWorks;
