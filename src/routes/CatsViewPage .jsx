import React, { useState } from 'react';
import { Heart, Home, Utensils, Package, Bed, ArrowLeft, X } from 'lucide-react';
import cat2 from '../assets/cats/cat2.JPG';
import cat3 from '../assets/cats/cat3.JPG';
import cat4 from '../assets/cats/cat4.JPG';
import cat5 from '../assets/cats/cat5.JPG';
import cat6 from '../assets/cats/cat6.JPG';
import cat7 from '../assets/cats/cat7.JPG';
import cat8 from '../assets/cats/cat8.JPG';
import cat9 from '../assets/cats/cat9.JPG';
import cat10 from '../assets/cats/cat10.JPG';
import cat11 from '../assets/cats/cat11.JPG';
import cat12 from '../assets/cats/cat12.JPG';
import cat13 from '../assets/cats/cat13.JPG';
import cat14 from '../assets/cats/cat14.JPG';
import cat15 from '../assets/cats/cat15.JPG';
import cat16 from '../assets/cats/cat16.JPG';
import cat17 from '../assets/cats/cat17.JPG';
import cat18 from '../assets/cats/cat18.JPG';
import cat19 from '../assets/cats/cat19.JPG';
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

// Cat images array - replace these URLs with your actual cat images
const catImages = [
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
  cat10,
  cat11,
  cat12,
  cat13,
  cat14,
  cat15,
  cat16,
  cat17,
  cat18,
  cat19
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {catImages.map((image, index) => (
              <div 
            key={index} 
            className="group cursor-pointer text-center"
            onClick={() => setSelectedImage(image)}
            >
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <img 
                src={image} 
                alt={`Cat ${index + 2}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart size={16} className="text-white" />
                    </div>
                </div>
                </div>
            </div>
            </div>

            ))}
          </div>
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
              alt="Cat full view"
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