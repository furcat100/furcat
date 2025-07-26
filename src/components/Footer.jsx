import React from 'react';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🐾</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Four Paws</h3>
                <p className="text-gray-300">Cat Boarding</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Delhi's premier cat boarding facility providing 24/7 professional care for your beloved feline friends. We ensure comfort, safety, and love while you're away.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 font-semibold">5.0</span>
              <span className="text-gray-300">(68 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Our Services
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Gallery
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:08305014935" className="text-orange-400 hover:underline">
                    083050 14935
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300 text-sm">
                    Rz-41A, Street Number 14, Block C,<br />
                    Sitapuri Part 1, Dabri, Delhi, 110045
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-300 text-sm">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Four Paws Cat Boarding. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Providing professional cat care in Delhi since establishment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;