
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionElements';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

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
              <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-kenyan-brown mb-4">
                Get In Touch
              </h1>
              <p className="text-lg font-rowdies font-light text-kenyan-brown/80">
                We'd love to hear from you! Whether you have a question about our products, 
                artisan opportunities, or anything else, our team is ready to help.
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <MotionDiv animation="slide-right" className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-cinzel font-bold text-kenyan-brown mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-rowdies text-kenyan-brown/80">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-rowdies text-kenyan-brown/80">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-rowdies text-kenyan-brown/80">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-rowdies text-kenyan-brown/80">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 font-rowdies"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          Sending...
                          <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </MotionDiv>
              
              <MotionDiv animation="slide-left" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-cinzel font-bold text-kenyan-brown mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-kenyan-cream p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-kenyan-terracotta" />
                      </div>
                      <div>
                        <h3 className="font-cinzel font-semibold text-kenyan-brown">Our Location</h3>
                        <p className="font-rowdies font-light text-kenyan-brown/70">
                          123 Sanaa Street, Westlands<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-kenyan-cream p-3 rounded-full">
                        <Mail className="h-6 w-6 text-kenyan-terracotta" />
                      </div>
                      <div>
                        <h3 className="font-cinzel font-semibold text-kenyan-brown">Email Us</h3>
                        <p className="font-rowdies font-light text-kenyan-brown/70">
                          info@sanaamarket.com<br />
                          support@sanaamarket.com
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-kenyan-cream p-3 rounded-full">
                        <Phone className="h-6 w-6 text-kenyan-terracotta" />
                      </div>
                      <div>
                        <h3 className="font-cinzel font-semibold text-kenyan-brown">Call Us</h3>
                        <p className="font-rowdies font-light text-kenyan-brown/70">
                          +254 712 345 678<br />
                          +254 798 765 432
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-cinzel font-bold text-kenyan-brown mb-6">
                    Business Hours
                  </h2>
                  
                  <div className="space-y-3 font-rowdies font-light">
                    <div className="flex justify-between">
                      <span className="text-kenyan-brown/70">Monday - Friday:</span>
                      <span className="text-kenyan-brown">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kenyan-brown/70">Saturday:</span>
                      <span className="text-kenyan-brown">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kenyan-brown/70">Sunday:</span>
                      <span className="text-kenyan-brown">Closed</span>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <MotionDiv animation="fade" className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                Find Us on the Map
              </h2>
            </MotionDiv>
            
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              {/* For demo purposes, using an image instead of an actual map */}
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2833&auto=format&fit=crop" 
                alt="Map of Nairobi" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
