import React, { useState } from 'react';
import { Heart, Home, Utensils, Package, Bed, ArrowLeft, X } from 'lucide-react';
import CatGalleryCloudinary from '../components/CatGalleryCloudinary'; // adjust path if needed

import { TiArrowBack } from "react-icons/ti";
import { ImCross } from "react-icons/im";



// Services data
const services = [
  {
    icon: Heart,
    title: "Cat Care",
    description: "Professional daily care with love and attention to each cat's individual needs"
  },
  {
    icon: Package,
    title: "Litter Box",
    description: "Clean, maintained litter boxes with premium, odor-controlling litter"
  },
  {
    icon: Utensils,
    title: "Food (Your Choice)",
    description: "Flexible feeding options with your preferred brands and dietary requirements"
  },
  {
    icon: Bed,
    title: "Separate Rooms",
    description: "Individual comfortable spaces ensuring each cat has their own territory"
  }
];



const CatsViewPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#062D3E' }}>
      {/* Header */}
      <div className="py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={() => window.history.back()}
            className="mb-8 inline-flex items-center gap-2 px-6 py-3 text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-6">Our Beloved Cats</h1>
          <p className="text-xl opacity-90">
            Every cat in our care receives the love, attention, and professional services they deserve
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16" style={{ backgroundColor: '#85A389' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Cat Care Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                    <IconComponent size={32} style={{ color: '#85A389' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cats Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#062D3E' }}>
            Meet Our Cats
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Click on any image to view it in full size
          </p>
          <CatGalleryCloudinary onImageClick={setSelectedImage} />

        </div>
      </div>

      {/* Care Promise Section */}
      <div className="py-16" style={{ backgroundColor: '#062D3E' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Promise to Every Cat</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            We believe every cat deserves a loving, safe, and comfortable environment. 
            Our dedicated team ensures that each cat receives personalized attention, 
            proper nutrition, clean living spaces, and the medical care they need to thrive. 
            Your feline friends are not just in our care - they're part of our family.
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="relative flex items-center justify-center max-w-3xl max-h-[60vh] w-full">
           
            <img 
              src={selectedImage} 
              alt="Cat full view" loading="lazy"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
           <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 w-12 h-12 bg-[#ff0000] rounded-full cursor-pointer text-white font-semibold flex items-center justify-center shadow-lg hover:bg-gray-100 hover:text-[red] transition-colors z-10"
            >
           
              <ImCross className=' text-[30px] '  />
            </button>
        </div>
      )}
    </div>
  );
};

export default CatsViewPage;