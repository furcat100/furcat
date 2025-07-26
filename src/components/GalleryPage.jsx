import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CatGalleryCloudinary from '../components/CatGalleryCloudinary'; // adjust path if needed


const CatsGalleryPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Beautiful Cats
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Each of our cats receives personalized care and attention in a loving environment.
          </p>
        </div>

        {/* Grid of cats */}
        <CatGalleryCloudinary  limit={5} />

        {/* View All Button */}
        <div className="text-center mt-3 ">
          <button 
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#85A389' }}
          >
            <Eye size={20} />
            View Our Cats
          </button>
        </div>

      </div>
    </section>
  );
};

const CatsGalleryApp = () => {
  return (
    <div>
      <CatsGalleryPreview />
    </div>
  );
};

export default CatsGalleryApp;
