import React from 'react'
import BigCat from '../assets/BigCat.webp'
import CatPaws from '../assets/catpaws.webp'
import Stroke from '../assets/Stroke.webp'
import pawsImage from '../assets/pawsImage.webp'

function HeroSection() {
  return (
    <div className="bg-[#94b49f] w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 relative overflow-hidden">
  {/* Main Container */}
  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-y-10 gap-x-10 z-10">
    
    {/* Left: Text */}
    <div className="flex-1 text-center md:text-left">
      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 drop-shadow-md">
        Tailored For Happy Cats
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg relative">
        <span className="block text-[#94cbaf]">Bringing Joy</span>
        <span className="block text-[#c4e2d0] relative">
          To{" "}
          <span className="text-[#fcbf49] relative inline-block">
            Every Meow
            {/* Paws Image under "Meow" */}
            <img
              src={pawsImage}
              loading="lazy"
              alt="Paws"
              className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-8 sm:w-10 md:w-14"
            />
          </span>
        </span>
      </h1>

      <button className="mt-6 px-6 py-3 bg-[#0d1b2a] text-white rounded-lg shadow hover:bg-[#1e2e3e] transition drop-shadow-md">
        Learn More
      </button>
    </div>

    {/* Right: Cat Image */}
    <div className="relative flex-1 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <img
        src={BigCat}
        loading="lazy"
        alt="Happy Cat"
        className="w-full h-auto object-contain"
      />
      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#94b49f] to-transparent pointer-events-none"></div>
    </div>
  </div>

  {/* Bottom Left Cat Paws */}
  <div className="absolute bottom-0 left-4 h-14 sm:h-16 md:h-20 w-auto">
    <img src={CatPaws} alt="Cat Paws" loading="lazy" className="h-full object-contain" />
    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#94b49f] to-transparent pointer-events-none"></div>
  </div>

  {/* Decorative Stroke */}
  <img
    src={Stroke}
    alt="Decorative Stroke" loading="lazy"
    className="absolute right-[15%] top-4 w-12 sm:w-20 md:w-32 lg:w-56 object-contain pointer-events-none select-none z-0"
  />
</div>

  )
}

export default HeroSection
