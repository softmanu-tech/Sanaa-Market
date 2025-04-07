
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { products } from '@/data/sampleData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { MotionDiv, MotionContainer } from '@/components/MotionElements';

const ProductListing = () => {
  const { category } = useParams<{ category: string }>();
  
  // Format category for display (convert "home-decor" to "Home Decor")
  const formatCategory = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayCategory = category ? formatCategory(category) : 'All Products';
  
  // Filter products by category
  const filteredProducts = category 
    ? products.filter(product => 
        product.category.toLowerCase() === displayCategory.toLowerCase())
    : products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

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
              {displayCategory}
            </h1>
            <p className="font-rowdies font-light text-kenyan-brown/70 max-w-2xl mx-auto">
              Discover our beautifully crafted {displayCategory.toLowerCase()} pieces, 
              handmade by talented Kenyan artisans using traditional techniques.
            </p>
          </MotionDiv>

          {filteredProducts.length > 0 ? (
            <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <MotionDiv 
                  key={product.id} 
                  animation="scale"
                  delay={index * 0.1}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    artisan={product.artisan}
                    category={product.category}
                  />
                </MotionDiv>
              ))}
            </MotionContainer>
          ) : (
            <MotionDiv animation="fade" className="text-center py-16">
              <h2 className="text-2xl font-cinzel text-kenyan-brown mb-4">No products found</h2>
              <p className="font-rowdies font-light text-kenyan-brown/70">
                We'll be adding more products to this category soon!
              </p>
            </MotionDiv>
          )}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProductListing;
