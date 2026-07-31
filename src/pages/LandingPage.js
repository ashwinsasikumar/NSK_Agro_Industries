import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const LandingPage = () => {
  return (
    <>
      <header className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </header>
      <main className="overflow-x-hidden">
        <About />
        <Products />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
