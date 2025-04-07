
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl md:text-3xl font-bold font-cinzel text-kenyan-brown">
          Sanaa<span className="text-kenyan-terracotta">Market</span>
        </span>
      </motion.div>
    </Link>
  );
};

export default HeaderLogo;
