
import React from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderActionsProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const HeaderActions = ({ isMobileMenuOpen, toggleMobileMenu }: HeaderActionsProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" className="text-kenyan-brown">
        <Search size={20} />
      </Button>
      <Button variant="ghost" size="icon" className="text-kenyan-brown">
        <ShoppingCart size={20} />
      </Button>
      <Button variant="ghost" size="icon" className="text-kenyan-brown hidden md:flex">
        <User size={20} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-kenyan-brown"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </div>
  );
};

export default HeaderActions;
