
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { products } from '@/data/sampleData';
import { MotionDiv, MotionContainer } from './MotionElements';

const FeaturedProducts = () => {
  // Use just the first 4 products for the featured section
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <MotionDiv animation="fade" className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-kenyan-brown">Featured Products</h2>
            <p className="mt-3 text-kenyan-brown/70 font-rowdies font-light max-w-xl">
              Explore our curated collection of handcrafted treasures from Kenya's most talented artisans
            </p>
          </MotionDiv>
          
          <MotionDiv animation="fade" delay={0.2} className="mt-6 md:mt-0">
            <Button variant="ghost" className="text-kenyan-terracotta font-rowdies group" asChild>
              <Link to="/products" className="flex items-center">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
        
        <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              artisan={product.artisan}
              category={product.category}
            />
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

export default FeaturedProducts;
