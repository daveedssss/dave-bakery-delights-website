
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-bakery">Dave's Bakery</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="font-medium text-gray-700 hover:text-bakery transition-colors">About</a>
          <a href="#products" className="font-medium text-gray-700 hover:text-bakery transition-colors">Products</a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-bakery transition-colors">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a 
              href="#about" 
              className="py-2 font-medium text-gray-700 hover:text-bakery transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#products" 
              className="py-2 font-medium text-gray-700 hover:text-bakery transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="py-2 font-medium text-gray-700 hover:text-bakery transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
