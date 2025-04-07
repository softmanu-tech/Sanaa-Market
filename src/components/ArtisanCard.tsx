
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ArtisanCardProps {
  id: string;
  name: string;
  image: string;
  specialty: string;
  location: string;
  productCount: number;
}

const ArtisanCard = ({ id, name, image, specialty, location, productCount }: ArtisanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/artisans/${id}`} className="block relative">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-white text-center w-full"
            >
              <p className="font-rowdies text-sm">View Profile</p>
            </motion.div>
          </div>
        </div>
        
        <div className="p-4 text-center">
          <h3 className="font-cinzel text-lg font-semibold mb-1">{name}</h3>
          <p className="font-rowdies text-sm text-kenyan-terracotta">{specialty}</p>
          <div className="mt-2 text-xs text-muted-foreground font-rowdies">
            <p>{location}</p>
            <p className="mt-1">{productCount} Products</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArtisanCard;
