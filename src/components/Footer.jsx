import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#85A389] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Four Paws Cat Boarding 🐾</h2>
          <p className="text-white/90 text-sm sm:text-base">
            We provide a loving, safe, and home-like environment for your feline friends in Delhi.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <div className="flex items-start space-x-3 mb-2 text-sm sm:text-base">
            <FaPhoneAlt className="mt-1" />
            <span>087502 91302</span>
          </div>
          <div className="flex items-start space-x-3 text-sm sm:text-base">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              Rz-41A, Street No. 14, Block C,<br />
              Sitapuri Part 1, Dabri, Delhi - 110045
            </span>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/sheerin242914?igshid=YmMyMTA2M2Y%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#062D3E] transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-white/30" />

      {/* Copyright */}
      <div className="text-center text-white/70 text-sm px-4">
        © {new Date().getFullYear()} Four Paws Cat Boarding. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
