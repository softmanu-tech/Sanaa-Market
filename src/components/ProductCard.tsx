
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  artisan: string;
  category: string;
}

const ProductCard = ({ id, name, image, price, artisan, category }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="product-card bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/products/${id}`}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 text-kenyan-brown hover:text-kenyan-terracotta bg-white/80 rounded-full"
        >
          <Heart size={18} />
        </Button>
        <div className="absolute bottom-0 left-0 px-3 py-1 bg-kenyan-terracotta text-white text-xs font-rowdies">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="font-cinzel text-lg font-semibold mb-1 hover:text-kenyan-terracotta transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">By {artisan}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-rowdies font-normal text-kenyan-brown">${price.toFixed(2)}</span>
          <Button variant="outline" size="sm" className="text-kenyan-terracotta border-kenyan-terracotta hover:bg-kenyan-terracotta hover:text-white">
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
