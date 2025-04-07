
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const MotionDiv = ({ 
  children, 
  className, 
  animation = "fade", 
  delay = 0,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide" | "scale";
  delay?: number;
  [key: string]: any;
}) => {
  const getAnimationProps = () => {
    if (animation === "slide") return slideIn;
    if (animation === "scale") return scaleIn;
    return fadeIn;
  };

  return (
    <motion.div
      initial={getAnimationProps().initial}
      whileInView={getAnimationProps().animate}
      transition={{ ...getAnimationProps().transition, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MotionContainer = ({ 
  children, 
  className 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
