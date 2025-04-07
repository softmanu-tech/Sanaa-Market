
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductListing from "./pages/ProductListing";
import HowItWorks from "./pages/HowItWorks";
import Artisans from "./pages/Artisans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BecomeArtisan from "./pages/BecomeArtisan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/jewelry" element={<ProductListing />} />
            <Route path="/products/home-decor" element={<ProductListing />} />
            <Route path="/products/textiles" element={<ProductListing />} />
            <Route path="/products/art" element={<ProductListing />} />
            <Route path="/products/accessories" element={<ProductListing />} />
            <Route path="/products/:category" element={<ProductListing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/become-artisan" element={<BecomeArtisan />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
