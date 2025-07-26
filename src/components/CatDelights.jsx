import React from 'react';
import care from '../assets/care.webp';
import litter from '../assets/litterbox.webp';
import food from '../assets/catfood.webp';
import shelter from '../assets/shelter.webp';

const CatDelights = () => {
  return (
    <section className="bg-[#fcd595] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062D3E] mb-4 drop-shadow-sm">
          Find Your Cat's Delights
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-[#ffffff] mb-12 drop-shadow-sm">
          4,500+ Brands In Stock!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {/* Feature Cards */}
          {[
            { img: care, label: "Cat Care" },
            { img: litter, label: "Litter Box" },
            { img: food, label: "Food (of your choice)" },
            { img: shelter, label: "Separate Rooms" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-full max-w-xs transition-transform hover:scale-105 duration-300">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg">
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-6 text-lg sm:text-xl font-semibold text-[#062D3E]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatDelights;
