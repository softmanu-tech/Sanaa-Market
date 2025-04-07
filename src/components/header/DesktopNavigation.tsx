
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="header-link font-rowdies font-light bg-transparent hover:bg-transparent text-kenyan-brown">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products/jewelry"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-cinzel font-semibold leading-none">Jewelry</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-rowdies font-light">
                        Handcrafted beadwork and metalwork
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products/home-decor"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-cinzel font-semibold leading-none">Home Decor</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-rowdies font-light">
                        Baskets, carvings, and decorative items
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products/textiles"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-cinzel font-semibold leading-none">Textiles</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-rowdies font-light">
                        Handwoven fabrics and garments
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products/art"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-cinzel font-semibold leading-none">Art</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-rowdies font-light">
                        Paintings, sculptures, and wall hangings
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products/accessories"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-cinzel font-semibold leading-none">Accessories</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-rowdies font-light">
                        Bags, wallets, and personal items
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/artisans" className="header-link font-rowdies font-light text-kenyan-brown">
              Artisans
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about" className="header-link font-rowdies font-light text-kenyan-brown">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="header-link font-rowdies font-light text-kenyan-brown">
              Contact
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/how-it-works" className="header-link font-rowdies font-light text-kenyan-brown">
              How It Works
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
