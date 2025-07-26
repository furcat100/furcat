import React, { useState } from 'react';
import test1 from '../assets/test1.webp';
import test2 from '../assets/test2.webp';
import test3 from '../assets/test3.webp';
import test4 from '../assets/test4.webp';
import bottompaws from '../assets/bottompaws.webp'; // Your bottom paws image
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


const testimonials = [
  {
    name: 'Jinx Vardhan',
    image: `${test1}`,
    description:
      "I had excellent experience with Four Paws Cat Boarding. I left my cat for 6 days with them and they took care of him as their own child. I didn’t even have to worry about anything while my cat was with them. They sent me pictures and videos regularly every day and gave my cat a home-like environment. Will be sending my cat here only whenever in need.",
  },
  {
    name: 'Aaba',
    image: `${test2}`,
    description:
      "Sheerin took great care of my indie cat, sharing his pictures and videos every day + available on video call too while I was away for a week. Extremely helpful people. House cat Cairo is super chill and got along great with my cat. Recommend!",
  },
  {
    name: 'Neel Maurya',
    image: `${test3}`,
    description:
      "I recently left my cat, and I was thoroughly impressed by the exceptional care provided by Sheerin. She single-handedly manages everything with such kindness and professionalism, ensuring every pet feels safe and loved. The environment was clean, comfortable, and well-maintained, making it a perfect home away from home for my cat. ",
  },
  {
    name: 'Ashish Bhandari',
    image: `${test4}`,
    description:
      "I left my kitten for 5 days and had not to worry at all. Sheerin took extremely good care of my kitten.",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative bg-[#062D3E] py-16 px-4 sm:px-6 overflow-hidden">
  {/* Paw Image - Top Right */}
  <div className="absolute top-0 right-2 sm:right-6 w-40 sm:w-60 md:w-80 z-10">
    <img
      src={bottompaws}
      alt="Cat Paw" loading="lazy"
      className="w-full h-auto"
    />
    <div className="absolute top-1 left-0 w-full h-8 bg-gradient-to-b from-[#062D3E] to-transparent pointer-events-none"></div>
  </div>

  {/* Arrows */}
  <button
    onClick={prev}
    className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl text-white z-20"
  >
    <BsFillArrowLeftCircleFill />
  </button>
  <button
    onClick={next}
    className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180 text-3xl sm:text-4xl text-white z-20"
  >
    <BsFillArrowLeftCircleFill />
  </button>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10 relative">
    {/* Image + Heading */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
        Our Purr-fectly <br className="block sm:hidden" />
        Satisfied Customers
      </h2>
      <div className="relative w-60 sm:w-72 h-60 sm:h-72 rounded-md  border-4 border-white shadow-lg">
        <img
          src={current.image}
          alt={current.name} loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Testimonial Box */}
    <div className="bg-[#0b516f] p-6 sm:p-8 rounded-lg shadow-lg text-white">
      <h3 className="text-xl sm:text-2xl md:text-3xl text-[#a8a8a8] font-semibold mb-3">
        | {current.name}
      </h3>
      <p className="text-base sm:text-lg leading-relaxed mb-6">
        {current.description}
      </p>
      <button
        onClick={() => window.open("https://share.google/MK6x2ZbuywnZtf6ZM", "_blank")}
        className="bg-white text-[#062D3E] px-5 py-2 rounded hover:bg-[#ccd4d7] transition font-semibold"
      >
        Explore
      </button>
    </div>
  </div>
</section>

  );
};

export default TestimonialCarousel;
