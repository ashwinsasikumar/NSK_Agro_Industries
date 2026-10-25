import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={process.env.PUBLIC_URL + "/logo_name.png"} 
                alt="NSK Agro Industries" 
                className="h-12 lg:h-24 w-auto bg-white rounded"
                loading="lazy"
              />
            </div>
            <p className="text-green-100 text-sm">
              {t.footer.tagline}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition text-left">
                  {t.footer.aboutUs}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition text-left">
                  {t.footer.whyChoose}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition text-left">
                  {t.footer.products}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition text-left">
                  {t.footer.contact}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.ourProduct}</h4>
            <ul className="space-y-2 text-green-100">
              <li>{t.footer.product1}</li>
              <li>{t.footer.product2}</li>
              <li>{t.footer.product3}</li>
              <li>{t.footer.product4}</li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">{t.footer.connect}</h4>
            <div className="flex space-x-4 mb-6">
              <a href="mailto:nskagroindustries@gmail.com?subject=Business%20Enquiry&body=Hello%20NSK%20Agro%20Industries%2C%0A%0AI%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition text-white" aria-label="Email">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13zm2.2-.5 7.8 6.1 7.8-6.1H5.2zm14.3 2.1-7.5 5.9-7.5-5.9V18.5c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V7.1z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nskagroindustries/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition text-white" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-green-100 text-sm">
          <p>{t.footer.copyright}</p>
          <div className="mt-2 space-x-4">
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition">{t.footer.privacy}</button>
            <span>•</span>
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition">{t.footer.terms}</button>
            <span>•</span>
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition">{t.footer.sitemap}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
