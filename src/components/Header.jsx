import React, { useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path as necessary  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // make sure setIsMenuOpen is defined in your component
  }
};


  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <img src={logo} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Four Paws Cat Boarding</h1>
              <p className="text-sm text-gray-600">Cat Boarding in Delhi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <a 
              href="tel:08305014935"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <a 
                href="tel:08305014935"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2 w-fit"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;