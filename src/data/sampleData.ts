
export const products = [
  {
    id: "p1",
    name: "Maasai Beaded Necklace",
    image: "/images/art2.webp",
    price: 45.99,
    artisan: "Wanjiku Mwangi",
    artisanId: "a1",
    category: "Jewelry",
    description: "Handcrafted Maasai beaded necklace with traditional designs and patterns. Each piece tells a story through its colors and patterns.",
    rating: 4.8,
    reviews: 32
  },
  {
    id: "p2",
    name: "Kiondo Woven Basket",
    image: "/images/kiondo.jpg",
    price: 79.99,
    artisan: "Samuel Odhiambo",
    artisanId: "a2",
    category: "Home Decor",
    description: "Traditional Kiondo basket woven by hand using sustainable sisal fibers and leather trimmings. Perfect for storage or as a stylish accessory.",
    rating: 4.9,
    reviews: 47
  },
  {
    id: "p3",
    name: "Soapstone Sculpture",
    image: "/images/art7.webp",
    price: 65.50,
    artisan: "James Kimani",
    artisanId: "a3",
    category: "Art",
    description: "Elegant soapstone sculpture carved by hand in the traditional Kisii style. Each piece is unique with natural variations in color and pattern.",
    rating: 4.7,
    reviews: 29
  },
  {
    id: "p4",
    name: "Kikoi Beach Throw",
    image: "/images/kikoi.jpg",
    price: 38.75,
    artisan: "Aisha Mohammed",
    artisanId: "a4",
    category: "Textiles",
    description: "Versatile and colorful Kikoi cotton throw, perfect for the beach, as a scarf, or as a lightweight blanket. Hand-woven with 100% cotton.",
    rating: 4.6,
    reviews: 41
  },
  {
    id: "p5",
    name: "Brass Statement Earrings",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1974&auto=format&fit=crop",
    price: 29.99,
    artisan: "Wanjiku Mwangi",
    artisanId: "a1",
    category: "Jewelry",
    description: "Bold and beautiful brass earrings handcrafted using traditional techniques. Light enough for all-day wear while making a statement.",
    rating: 4.8,
    reviews: 24
  },
  {
    id: "p6",
    name: "Wooden Serving Bowl",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop",
    price: 59.25,
    artisan: "Samuel Odhiambo",
    artisanId: "a2",
    category: "Home Decor",
    description: "Hand-carved olive wood serving bowl with natural grain patterns. Food-safe and finished with natural oils.",
    rating: 4.9,
    reviews: 36
  },
  {
    id: "p7",
    name: "Batik Wall Hanging",
    image: "https://images.unsplash.com/photo-1629197520635-16cda14d2dc3?q=80&w=2071&auto=format&fit=crop",
    price: 85.00,
    artisan: "Aisha Mohammed",
    artisanId: "a4",
    category: "Art",
    description: "Vibrant batik wall hanging depicting traditional East African scenes. Hand-dyed using natural pigments on 100% cotton.",
    rating: 4.7,
    reviews: 19
  },
  {
    id: "p8",
    name: "Leather Journal",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?q=80&w=2070&auto=format&fit=crop",
    price: 42.50,
    artisan: "James Kimani",
    artisanId: "a3",
    category: "Accessories",
    description: "Handcrafted leather journal with handmade paper. Features traditional tooled designs on genuine leather cover.",
    rating: 4.8,
    reviews: 27
  }
];

export const artisans = [
  {
    id: "a1",
    name: "Wanjiku Mwangi",
    image: "https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1974&auto=format&fit=crop",
    specialty: "Jewelry & Beadwork",
    location: "Nairobi, Kenya",
    productCount: 24,
    bio: "Wanjiku learned beadwork from her grandmother at the age of 12 and has been creating jewelry for over 20 years. Her work combines traditional Maasai techniques with contemporary designs.",
    story: "Growing up in a small village outside Nairobi, Wanjiku was fascinated by the colorful beadwork created by the women in her community. Today, she leads a collective of women artisans who create jewelry while supporting their families."
  },
  {
    id: "a2",
    name: "Samuel Odhiambo",
    image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop",
    specialty: "Woodworking & Basketry",
    location: "Kisumu, Kenya",
    productCount: 18,
    bio: "Samuel specializes in traditional Kenyan woodworking and basketry. He sources sustainable materials locally and creates functional art pieces that honor his Luo heritage.",
    story: "Samuel learned the art of carving from his father and grandfather. After working in a factory for several years, he returned to his village to revive the traditional crafts that were being forgotten by younger generations."
  },
  {
    id: "a3",
    name: "James Kimani",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop",
    specialty: "Soapstone Carving & Leatherwork",
    location: "Kisii, Kenya",
    productCount: 15,
    bio: "James is a master carver from the Kisii region, known for its distinctive soapstone. He also creates beautiful leather goods using traditional tanning and tooling methods.",
    story: "James comes from a long line of Kisii soapstone carvers. He spent years perfecting his craft before teaching others in his community. Today, his workshop employs several young artisans who are learning to preserve this important cultural heritage."
  },
  {
    id: "a4",
    name: "Aisha Mohammed",
    image: "/images/art6-p.jpg",
    specialty: "Textiles & Batik",
    location: "Mombasa, Kenya",
    productCount: 21,
    bio: "Aisha creates stunning textiles using traditional methods passed down through generations. Her batik work and weaving reflect the coastal influences of her Swahili heritage.",
    story: "Growing up on the Kenyan coast, Aisha was surrounded by the rich textile traditions of Swahili culture. She learned to weave from her mother and studied batik techniques with local masters. Today, she runs a women's cooperative that provides economic opportunities for coastal women."
  }
];

export const categories = [
  { 
    id: "c1", 
    name: "Jewelry", 
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1974&auto=format&fit=crop", 
    count: 36 
  },
  { 
    id: "c2", 
    name: "Home Decor", 
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=1974&auto=format&fit=crop", 
    count: 28 
  },
  { 
    id: "c3", 
    name: "Textiles", 
    image: "https://images.unsplash.com/photo-1592492152545-9695d3f473f4?q=80&w=2070&auto=format&fit=crop", 
    count: 24 
  },
  { 
    id: "c4", 
    name: "Art", 
    image: "https://images.unsplash.com/photo-1624916888351-ed337e8ad846?q=80&w=2070&auto=format&fit=crop", 
    count: 19 
  },
  { 
    id: "c5", 
    name: "Accessories", 
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?q=80&w=2070&auto=format&fit=crop", 
    count: 17 
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop",
    quote: "The quality of the handcrafted items I've purchased from SanaaMarket is exceptional. Knowing that my purchase directly supports the artisans makes it even more special."
  },
  {
    id: "t2",
    name: "David Chen",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "I received my Kiondo basket faster than expected and it's even more beautiful in person. The craftsmanship is incredible, and it's now a centerpiece in my living room."
  },
  {
    id: "t3",
    name: "Maria Gonzalez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1545133875-55b651cbf4aa?q=80&w=1976&auto=format&fit=crop",
    quote: "The jewelry I ordered from Wanjiku is stunning. I appreciate being able to read about her story and knowing that my purchase helps support her community."
  }
];
