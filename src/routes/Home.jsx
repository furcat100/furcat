import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CatDelights from '../components/CatDelights';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CatsGalleryApp from '../components/GalleryPage';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main content area grows to fill remaining space */}
      <main className="flex-grow">
        <HeroSection />
        <CatDelights />
        <TestimonialCarousel />
        <CatsGalleryApp />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
