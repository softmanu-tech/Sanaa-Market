
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/sampleData';
import { MotionDiv, MotionContainer } from './MotionElements';

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <MotionDiv animation="fade" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-kenyan-brown">Browse By Category</h2>
          <p className="mt-3 text-kenyan-brown/70 font-rowdies font-light max-w-2xl mx-auto">
            Discover beautiful handcrafted products across various categories
          </p>
        </MotionDiv>
        
        <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <MotionDiv
              key={category.id}
              animation="scale"
              delay={index * 0.1}
              className="relative rounded-lg overflow-hidden h-64 group"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
                <h3 className="text-xl font-cinzel font-semibold mb-1">{category.name}</h3>
                <p className="font-rowdies text-sm opacity-90">{category.count} Products</p>
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="mt-4"
                >
                  <Link 
                    to={`/products?category=${category.name.toLowerCase()}`}
                    className="px-4 py-2 bg-kenyan-terracotta/80 backdrop-blur-sm rounded-lg font-rowdies text-sm hover:bg-kenyan-terracotta transition-colors"
                  >
                    View Products
                  </Link>
                </motion.div>
              </div>
            </MotionDiv>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

export default Categories;
