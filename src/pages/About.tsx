
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionElements';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <section className="bg-kenyan-cream py-20 px-4">
          <div className="container mx-auto">
            <MotionDiv animation="fade" className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-kenyan-brown mb-6">
                Our Story
              </h1>
              <p className="text-lg font-rowdies font-light text-kenyan-brown/80">
                Connecting talented Kenyan artisans with a global audience while preserving traditional craftsmanship
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <MotionDiv animation="slide-right">
                <div className="relative">
                  <motion.div 
                    className="relative z-10 rounded-lg overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1490427712608-588e68359dbd?q=80&w=2070&auto=format&fit=crop" 
                      alt="Kenyan market" 
                      className="w-full h-96 object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-5 -left-5 w-full h-full bg-kenyan-terracotta/20 rounded-lg -z-0"></div>
                </div>
              </MotionDiv>

              <MotionDiv animation="slide-left" delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                  Our Mission
                </h2>
                <p className="font-rowdies font-light text-kenyan-brown/70 mb-4">
                  SanaaMarket was founded with a simple but powerful mission: to create a direct connection between talented Kenyan artisans and customers worldwide who appreciate unique, handcrafted goods.
                </p>
                <p className="font-rowdies font-light text-kenyan-brown/70 mb-6">
                  We believe in fair trade practices that ensure artisans receive proper compensation for their work while preserving traditional techniques that have been passed down through generations.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Supporting sustainable livelihoods", "Preserving cultural heritage", "Promoting ethical shopping", "Building global connections"].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center font-rowdies font-light text-kenyan-brown/70"
                    >
                      <span className="w-2 h-2 bg-kenyan-terracotta rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </MotionDiv>
            </div>

            <MotionDiv animation="fade" className="text-center max-w-4xl mx-auto my-16">
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                Our Values
              </h2>
              <p className="font-rowdies font-light text-kenyan-brown/70 mb-8">
                At the core of everything we do are our guiding principles:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Authenticity",
                    description: "We celebrate genuine handcrafted quality and cultural heritage"
                  },
                  {
                    title: "Sustainability",
                    description: "We promote environmentally friendly practices and materials"
                  },
                  {
                    title: "Community",
                    description: "We build meaningful connections between artisans and customers"
                  }
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-cinzel font-semibold text-kenyan-brown mb-3">{value.title}</h3>
                    <p className="font-rowdies font-light text-kenyan-brown/70">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <MotionDiv animation="fade" className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                Our Team
              </h2>
              <p className="font-rowdies font-light text-kenyan-brown/70">
                Meet the passionate individuals working behind the scenes to bring SanaaMarket to life
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amara Ochieng",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop"
                },
                {
                  name: "David Kamau",
                  role: "Head of Artisan Relations",
                  image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  name: "Zainab Hassan",
                  role: "Marketing Director",
                  image: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?q=80&w=1974&auto=format&fit=crop"
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-cinzel font-semibold text-kenyan-brown">{member.name}</h3>
                  <p className="font-rowdies font-light text-kenyan-brown/70">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-kenyan-brown py-16 px-4">
          <div className="container mx-auto text-center">
            <MotionDiv animation="fade" className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-6">
                Join Our Journey
              </h2>
              <p className="font-rowdies font-light text-white/80 mb-8">
                Whether you're a customer looking for unique handcrafted products or an artisan wanting to showcase your work, we invite you to be part of our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 text-white font-rowdies py-6 px-8" asChild>
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-rowdies py-6 px-8" asChild>
                  <Link to="/become-artisan">
                    Become an Artisan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
