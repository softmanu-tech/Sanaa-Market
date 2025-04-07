
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionElements';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, ArrowRight, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BecomeArtisan = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    specialty: '',
    experience: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
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
        phone: '',
        location: '',
        specialty: '',
        experience: '',
        description: ''
      });
      setSelectedFiles([]);
      
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
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
                Become an Artisan
              </h1>
              <p className="text-lg font-rowdies font-light text-kenyan-brown/80">
                Join our growing community of talented craftspeople and share your unique creations with customers worldwide
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <MotionDiv animation="slide-right">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-cinzel font-bold text-kenyan-brown mb-6">
                    Apply to Join
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-rowdies text-kenyan-brown/80">
                          Full Name
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
                          Email Address
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block mb-2 font-rowdies text-kenyan-brown/80">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 712 345 678"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block mb-2 font-rowdies text-kenyan-brown/80">
                          Location
                        </label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Nairobi, Kenya"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specialty" className="block mb-2 font-rowdies text-kenyan-brown/80">
                        Craft Specialty
                      </label>
                      <select
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select your specialty</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Home Decor">Home Decor</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Art">Art</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block mb-2 font-rowdies text-kenyan-brown/80">
                        Years of Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select experience</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block mb-2 font-rowdies text-kenyan-brown/80">
                        Tell us about your craft
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your craft, techniques, and the products you create..."
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-rowdies text-kenyan-brown/80">
                        Upload Portfolio Images (up to 5)
                      </label>
                      <div className="border-2 border-dashed border-input rounded-md p-6 text-center">
                        <Input
                          id="portfolio"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label htmlFor="portfolio" className="cursor-pointer">
                          <div className="flex flex-col items-center">
                            <Upload className="h-10 w-10 text-kenyan-brown/40 mb-2" />
                            <p className="text-kenyan-brown/70 font-rowdies font-light mb-1">
                              Drag and drop files here or click to browse
                            </p>
                            <p className="text-kenyan-brown/50 text-sm font-rowdies font-light">
                              Maximum 5 images (JPG, PNG, up to 5MB each)
                            </p>
                          </div>
                        </label>
                        
                        {selectedFiles.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {selectedFiles.map((file, index) => (
                              <div key={index} className="bg-kenyan-cream/50 py-1 px-3 rounded-full text-sm font-rowdies font-light text-kenyan-brown flex items-center">
                                <span className="truncate max-w-[150px]">{file.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-kenyan-terracotta hover:bg-kenyan-terracotta/90 font-rowdies py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            Submitting...
                            <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Submit Application
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </MotionDiv>
              
              <MotionDiv animation="slide-left" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-cinzel font-bold text-kenyan-brown mb-6">
                    Why Join SanaaMarket?
                  </h2>
                  
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Global Reach",
                        description: "Showcase your crafts to customers around the world"
                      },
                      {
                        title: "Fair Pricing",
                        description: "Set your own prices and receive fair compensation for your work"
                      },
                      {
                        title: "Marketing Support",
                        description: "We help promote your products through our platform and social media"
                      },
                      {
                        title: "Community",
                        description: "Connect with other artisans and share techniques and inspiration"
                      },
                      {
                        title: "Simple Process",
                        description: "Easy-to-use dashboard to manage your products and orders"
                      }
                    ].map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="flex gap-4"
                      >
                        <CheckCircle2 className="h-6 w-6 text-kenyan-terracotta flex-shrink-0" />
                        <div>
                          <h3 className="font-cinzel font-semibold text-kenyan-brown">
                            {benefit.title}
                          </h3>
                          <p className="font-rowdies font-light text-kenyan-brown/70">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1505236561295-fb1ad49282ef?q=80&w=2070&auto=format&fit=crop" 
                    alt="Kenyan artisan" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-6">
                      <p className="text-white font-rowdies font-light">
                        "Joining SanaaMarket changed my life. Now I can support my family while sharing our traditional craft with the world."
                      </p>
                      <p className="text-white/80 font-rowdies font-light text-sm mt-2">
                        - Grace M., Jewelry Artisan
                      </p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <MotionDiv animation="fade" className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-kenyan-brown mb-4">
                How It Works
              </h2>
              <p className="font-rowdies font-light text-kenyan-brown/70">
                Joining SanaaMarket as an artisan is simple
              </p>
            </MotionDiv>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply",
                  description: "Fill out the application form with your details and craft information"
                },
                {
                  step: "2",
                  title: "Review",
                  description: "Our team will review your application and portfolio within 5 business days"
                },
                {
                  step: "3",
                  title: "Onboarding",
                  description: "If approved, we'll help you set up your profile and product listings"
                },
                {
                  step: "4",
                  title: "Start Selling",
                  description: "Begin receiving orders and payments through our secure platform"
                }
              ].map((step, index) => (
                <MotionDiv
                  key={index}
                  animation="fade"
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-kenyan-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-cinzel text-xl font-bold">{step.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-kenyan-terracotta/30"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-cinzel font-semibold text-kenyan-brown mb-2">
                    {step.title}
                  </h3>
                  <p className="font-rowdies font-light text-kenyan-brown/70">
                    {step.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BecomeArtisan;
