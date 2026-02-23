import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={process.env.PUBLIC_URL + "/logo_name.png"} 
              alt="NSK Agro Industries" 
              className="h-24 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition">{t.nav.about}</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-primary transition">{t.nav.features}</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary transition">{t.nav.products}</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition">{t.nav.contact}</button>
          </div>
          
          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-light to-accent text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              {t.nav.getQuote}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block text-gray-700 hover:text-primary transition">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-primary transition">{t.nav.about}</button>
            <button onClick={() => scrollToSection('features')} className="block text-gray-700 hover:text-primary transition">{t.nav.features}</button>
            <button onClick={() => scrollToSection('products')} className="block text-gray-700 hover:text-primary transition">{t.nav.products}</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-primary transition">{t.nav.contact}</button>
            <button
              onClick={toggleLanguage}
              className="block w-full text-left px-4 py-2 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
