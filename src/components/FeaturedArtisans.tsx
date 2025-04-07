
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArtisanCard from './ArtisanCard';
import { artisans } from '@/data/sampleData';
import { MotionDiv, MotionContainer } from './MotionElements';

const FeaturedArtisans = () => {
  return (
    <section className="py-20 bg-kenyan-brown/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <MotionDiv animation="fade" className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-kenyan-brown">Meet Our Artisans</h2>
            <p className="mt-3 text-kenyan-brown/70 font-rowdies font-light max-w-xl">
              The talented hands and creative minds behind our beautiful handcrafted products
            </p>
          </MotionDiv>
          
          <MotionDiv animation="fade" delay={0.2} className="mt-6 md:mt-0">
            <Button variant="ghost" className="text-kenyan-terracotta font-rowdies group" asChild>
              <Link to="/artisans" className="flex items-center">
                View All Artisans
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
        
        <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artisans.map((artisan, index) => (
            <ArtisanCard
              key={artisan.id}
              id={artisan.id}
              name={artisan.name}
              image={artisan.image}
              specialty={artisan.specialty}
              location={artisan.location}
              productCount={artisan.productCount}
            />
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

export default FeaturedArtisans;
