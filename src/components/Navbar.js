import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      } else {
        setIsScrolled(window.scrollY > 100);
      }
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
    <nav className={`fixed w-full h-20 lg:h-24 backdrop-blur-sm shadow-md z-[60] transition-all duration-300 ${isScrolled ? 'bg-primary/95 shadow-lg' : 'bg-white/95'}`}>
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className={`flex items-center justify-center transition-all duration-300 max-w-xs lg:max-w-[420px] ${isScrolled ? 'bg-white rounded px-3 h-12 lg:h-16' : 'h-full'}`}>
            <img 
              src={process.env.PUBLIC_URL + "/logo_name.png"} 
              alt="NSK Agro Industries" 
              className="h-16 lg:h-20 xl:h-24 w-auto max-w-full object-contain transition-all duration-300"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className={`transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className={`transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.about}</button>
            <button onClick={() => scrollToSection('products')} className={`transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.products}</button>
            <button onClick={() => scrollToSection('features')} className={`transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.features}</button>
            <button onClick={() => scrollToSection('contact')} className={`transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.contact}</button>
          </div>
          
          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/919788778666"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className={`p-2 rounded-full border-2 transition-all ${isScrolled ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M16.02 3C9.4 3 4.05 8.33 4.05 14.92c0 2.36.7 4.56 1.9 6.42L4 29l7.87-1.96a11.92 11.92 0 0 0 4.15.75h.01c6.62 0 11.97-5.33 11.97-11.92C27.99 8.33 22.64 3 16.02 3zm0 21.7h-.01c-1.3 0-2.58-.34-3.7-.98l-.26-.15-4.67 1.16 1.25-4.55-.17-.29a9.8 9.8 0 0 1-1.5-5.08c0-5.46 4.47-9.9 9.96-9.9 5.49 0 9.96 4.44 9.96 9.9 0 5.46-4.47 9.89-9.96 9.89zm5.45-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
              </svg>
            </a>
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-full border-2 font-medium transition-all ${isScrolled ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
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
            className={`lg:hidden z-[70] relative ${isScrolled ? 'text-white' : 'text-gray-700'}`}
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
          <div className={`lg:hidden mt-4 pb-4 space-y-3 rounded-b-2xl shadow-md px-4 py-4 relative z-[65] ${isScrolled ? 'bg-primary/95' : 'bg-white/95'}`}>
            <button onClick={() => scrollToSection('hero')} className={`block w-full text-left text-base font-medium py-2 transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className={`block w-full text-left text-base font-medium py-2 transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.about}</button>
            <button onClick={() => scrollToSection('products')} className={`block w-full text-left text-base font-medium py-2 transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.products}</button>
            <button onClick={() => scrollToSection('features')} className={`block w-full text-left text-base font-medium py-2 transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.features}</button>
            <button onClick={() => scrollToSection('contact')} className={`block w-full text-left text-base font-medium py-2 transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}>{t.nav.contact}</button>
            <a
              href="https://wa.me/919788778666"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 transition ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-primary'}`}
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M16.02 3C9.4 3 4.05 8.33 4.05 14.92c0 2.36.7 4.56 1.9 6.42L4 29l7.87-1.96a11.92 11.92 0 0 0 4.15.75h.01c6.62 0 11.97-5.33 11.97-11.92C27.99 8.33 22.64 3 16.02 3zm0 21.7h-.01c-1.3 0-2.58-.34-3.7-.98l-.26-.15-4.67 1.16 1.25-4.55-.17-.29a9.8 9.8 0 0 1-1.5-5.08c0-5.46 4.47-9.9 9.96-9.9 5.49 0 9.96 4.44 9.96 9.9 0 5.46-4.47 9.89-9.96 9.89zm5.45-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
              </svg>
              WhatsApp
            </a>
            <button
              onClick={toggleLanguage}
              className={`block w-full text-left px-4 py-2 rounded-lg border-2 font-medium transition-all ${isScrolled ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
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
