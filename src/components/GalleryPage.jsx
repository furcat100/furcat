import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import c1 from '../assets/cats/c1.png';
import c2 from '../assets/cats/c2.png';
import c3 from '../assets/cats/c3.png';
import c4 from '../assets/cats/c4.png';
import c5 from '../assets/cats/c5.png';
import c6 from '../assets/cats/c6.png';
import c7 from '../assets/cats/c7.png';
import c8 from '../assets/cats/c8.png';
import c9 from '../assets/cats/c9.png';
import c10 from '../assets/cats/c10.png';
import c11 from '../assets/cats/c11.png';
import c12 from '../assets/cats/c12.png';
import c13 from '../assets/cats/c13.png';
import c14 from '../assets/cats/c14.png';
import c15 from '../assets/cats/c15.png';
import c16 from '../assets/cats/c16.png';
import c17 from '../assets/cats/c17.png';
import c18 from '../assets/cats/c18.png';
import c19 from '../assets/cats/c19.png';
import c20 from '../assets/cats/c20.png';






const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(8);

const catImages = [
  c1, c2, c3, c4, c5,
  c6, c7, c8, c9, c10,
  c11, c12, c13, c14, c15,
  c16, c17, c18, c19, c20
];


  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 8, catImages.length));
  };

  const showingAllImages = visibleImages >= catImages.length;
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Furry <span className="text-orange-600">Guests</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of the beautiful cats who have stayed with us. Each one receives personalized care and attention in our comfortable facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {catImages.slice(0, visibleImages).map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image}
                alt={`Cat ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showingAllImages && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 text-lg font-semibold inline-flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Plus size={20} />
              <span>Load More Photos</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                {catImages.length - visibleImages} more
              </span>
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <div className="absolute -top-12 right-0 z-10">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="bg-white text-gray-800 rounded-full p-3 hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-110"
                  aria-label="Close image"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-2xl">
                <img 
                  src={selectedImage}
                  alt="Selected cat"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`text-center ${showingAllImages ? 'mt-16' : 'mt-12'}`}>
          <p className="text-lg text-gray-600 mb-6">
            Your cat could be our next happy guest!
          </p>
          <a 
            href="tel:08305014935"
            className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-colors duration-200 text-lg font-semibold inline-block"
          >
            Book Your Cat's Stay Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;