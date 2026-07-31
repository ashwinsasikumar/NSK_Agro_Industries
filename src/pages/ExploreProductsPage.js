import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const ExploreProductsPage = () => {
  const { t, language, toggleLanguage } = useLanguage();
  
  const images = [
    process.env.PUBLIC_URL + "/product1.jpg",
    process.env.PUBLIC_URL + "/product2.jpg",
    process.env.PUBLIC_URL + "/product3.jpg",
    process.env.PUBLIC_URL + "/product4.jpg",
    process.env.PUBLIC_URL + "/product5.jpeg",
    process.env.PUBLIC_URL + "/product6.jpg",
    process.env.PUBLIC_URL + "/product7.png"
  ];

  const products = t.products.items || [];

  const handleInquiry = () => {
    window.location.hash = '#/';
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <>
      {/* Sticky Clean Header */}
      <header className="fixed w-full h-20 md:h-24 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center justify-center max-w-[160px] md:max-w-[280px]" aria-label="NSK Agro Industries home">
            <img 
              src={process.env.PUBLIC_URL + "/logo_name.png"} 
              alt="NSK Agro Industries - Eco-Friendly Egg Trays" 
              className="h-8 md:h-14 w-auto max-w-full object-contain"
            />
          </a>
          
          {/* Nav Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="#/"
              className="text-gray-700 hover:text-primary font-semibold transition text-sm md:text-base flex items-center gap-1"
              aria-label="Back to home page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {language === 'en' ? 'Back to Home' : 'முகப்புக்குச் செல்'}
            </a>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium text-xs md:text-sm transition-all"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow pt-24">
        {/* Banner Section */}
        <section className="py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {language === 'en' ? 'Our Product Range' : 'எங்கள் தயாரிப்புகள்'}
            </h1>
            <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              {t.products.subheading}
            </p>
          </div>
        </section>

        {/* Static Grid Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="w-full max-w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col h-full group"
                >
                  {/* Image container */}
                  <div className="overflow-hidden h-52 md:h-56 relative">
                    <img 
                      src={images[index % images.length]} 
                      alt={`${product.title} - NSK Agro Industries eco-friendly paper pulp egg tray`}
                      loading="lazy" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-950 mb-3 group-hover:text-accent transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {product.desc}
                      </p>
                    </div>

                    {/* CTA button */}
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <button 
                        onClick={handleInquiry}
                        className="w-full text-center bg-primary text-white py-2.5 rounded-xl font-semibold hover:bg-light hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Inquire / Get Quote' : 'விசாரணை / விலை கேட்க'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ExploreProductsPage;
