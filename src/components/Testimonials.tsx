
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/sampleData';
import { MotionDiv } from './MotionElements';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv animation="fade" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-kenyan-brown">What Our Customers Say</h2>
          <p className="mt-3 text-kenyan-brown/70 font-rowdies font-light max-w-2xl mx-auto">
            Read what our customers around the world have to say about their SanaaMarket experience
          </p>
        </MotionDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={testimonial.id}
              animation="scale"
              delay={index * 0.1}
              className="bg-kenyan-cream rounded-lg p-6 shadow-sm relative"
            >
              <div className="absolute top-6 right-6 text-kenyan-terracotta/30">
                <Quote size={40} />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-cinzel font-semibold text-kenyan-brown">{testimonial.name}</h4>
                  <p className="text-sm text-kenyan-brown/70 font-rowdies">{testimonial.location}</p>
                </div>
              </div>
              <p className="font-rowdies text-kenyan-brown/80 italic">"{testimonial.quote}"</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
