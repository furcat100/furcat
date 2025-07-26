import React, { useState } from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/L61C6AbaAQOyfMnvS', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your cat's stay? Contact us today to discuss your needs and schedule a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:08305014935" className="text-orange-600 hover:underline text-lg">
                      083050 14935
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Rz-41A, Street Number 14, Block C,<br />
                      Sitapuri Part 1, Dabri,<br />
                      Delhi, 110045
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <p className="text-gray-600">Open 24 Hours</p>
                    <p className="text-sm text-gray-500">Always available for your cats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Our Location</h3>
                <button
                  onClick={handleMapClick}
                  className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  <span>Open in Maps</span>
                </button>
              </div>
              
              <div 
                className="bg-gray-100 rounded-xl h-96 cursor-pointer hover:bg-gray-200 transition-colors duration-200 flex flex-col items-center justify-center space-y-4"
                onClick={handleMapClick}
              >
                <MapPin className="w-16 h-16 text-orange-600" />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Four Paws Cat Boarding</h4>
                  <p className="text-gray-600 mb-2">
                    Rz-41A, Street Number 14, Block C,<br />
                    Sitapuri Part 1, Dabri, Delhi, 110045
                  </p>
                  <p className="text-orange-600 font-medium">Click to open in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Book Your Cat's Stay?</h3>
            <p className="text-xl mb-6 opacity-90">Call us directly to discuss your cat's specific needs and schedule their boarding.</p>
            <a 
              href="tel:08305014935"
              className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-block"
            >
              Call Now: 083050 14935
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;