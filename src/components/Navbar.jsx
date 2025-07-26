import React, { useState } from "react";
import { FaPhoneAlt, FaClock, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png"; // Adjust the path if needed

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    toast.success("Phone number copied!");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#94b49f] text-white w-full shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO + TEXT */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F1C27B] rounded-full flex items-center justify-center shadow-lg">
              <img src={logo} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">Four Paws Cat Boarding</h1>
              <p className="text-sm text-white">Cat boarding service in Delhi</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-base">
              <FaPhoneAlt className="w-4 h-4 text-white" />
              <span
                className="cursor-pointer hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy("8305014935")
                }}
              >
                +91 8305014935
              </span>
            </div>

            <div className="flex items-center space-x-2 text-base">
              <FaClock className="w-4 h-4 text-white" />
              <span className="font-medium">Open 24hr</span>
            </div>

            <button
              className="bg-[#F1C27B] text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#94b49f] px-4 pb-4 space-y-4">
            <div
              className="flex items-center space-x-2 text-base"
              onClick={() => handleCopy("08750291302")}
            >
              <FaPhoneAlt className="w-4 h-4 text-white" />
              <span className="cursor-pointer">+91 8305014935</span>
            </div>

            <div className="flex items-center space-x-2 text-base">
              <FaClock className="w-4 h-4 text-white" />
              <span>Open 24hr</span>
            </div>

            <button
              className="bg-[#F1C27B] text-white px-4 py-2 rounded-lg w-full"
              onClick={() => setIsModalOpen(true)}
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl border border-white/30">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <IoMdClose size={28} />
            </button>

            <div className="space-y-6 text-gray-900 text-lg">
              <h2 className="text-3xl font-extrabold text-center text-[#5c836c]">
                Four Paws Cat Boarding 🐾
              </h2>

              <div className="flex items-center space-x-3">
                <FaClock className="text-[#5c836c]" size={20} />
                <span className="font-semibold">Open 24 Hours</span>
              </div>

              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleCopy("8305014935")}
              >
                <FaPhoneAlt className="text-[#5c836c]" size={20} />
                <span className="font-semibold">
                  Call or click to copy: +91 8305014935
                </span>
              </div>

              <div>
                <strong>Address:</strong>
                <p className="mt-1">
                  Rz-41A, Street Number 14, Block C, Sitapuri Part 1, Dabri, Delhi, 110045
                </p>
              </div>

              <div className="bg-[#ffffffcc] p-5 rounded-lg shadow-inner">
                <p className="mb-3 font-medium">
                  We will take care of your cat like you take care of them, because we haven't opened a shop — we keep cats at home 🥰
                </p>
                <p className="mb-2">
                  <strong>Contact:</strong> +91 8305014935
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cat care</li>
                  <li>Litter box</li>
                  <li>Food (of your choice)</li>
                  <li>Separate rooms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
