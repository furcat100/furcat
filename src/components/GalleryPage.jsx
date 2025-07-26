import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import cat1 from '../assets/cats/cat9.JPG';
import cat2 from '../assets/cats/cat2.JPG';     
import cat3 from '../assets/cats/cat3.JPG';
import cat4 from '../assets/cats/cat4.JPG';
import cat5 from '../assets/cats/cat5.JPG';
import cat6 from '../assets/cats/cat6.JPG';
import cat7 from '../assets/cats/cat7.JPG';
import cat8 from '../assets/cats/cat8.JPG';

const catsData = [
  { id: 1, name: "Cat 1", image: cat1 },
  { id: 2, name: "Cat 2", image: cat2 },
  { id: 3, name: "Cat 3", image: cat3 },
  { id: 4, name: "Cat 4", image: cat4 },
  { id: 5, name: "Cat 5", image: cat5 },
  { id: 6, name: "Cat 6", image: cat6 },
  { id: 7, name: "Cat 7", image: cat7 },
  { id: 8, name: "Cat 8", image: cat8 }
];

const CatsGalleryPreview = () => {
  const navigate = useNavigate();
  const previewCats = catsData.slice(0, 6);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewCats.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 flex items-center justify-center h-64 bg-white">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
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
