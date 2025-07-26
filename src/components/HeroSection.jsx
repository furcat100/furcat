import React from 'react';
import { Star, MapPin, Clock, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Premium <span className="text-orange-600">Cat Boarding</span> Services in Delhi
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Your feline friends deserve the best care while you're away. Our 24/7 professional cat boarding service ensures comfort, safety, and love.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">5.0</span>
              <span className="text-gray-600">(60+ Google Reviews)</span>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-800">Open 24 Hours</p>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-800">Delhi Location</p>
                  <p className="text-sm text-gray-600">Sitapuri, Dabri</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:08305014935"
                className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Phone size={20} />
                <span>Book Now: 083050 14935</span>
              </a>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-200 text-lg font-semibold"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Happy cat in boarding facility"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Cat in comfortable room"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">24/7</p>
                <p className="text-sm text-gray-600">Professional Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;