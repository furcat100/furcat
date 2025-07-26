import React from 'react';

import Footer from '../components/Footer';
import Hero from '../components/HeroSection';
import Services from '../components/Services';
import Gallery from '../components/GalleryPage';
import Contact from '../components/Contact';
import Header from '../components/Header';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default Home;
