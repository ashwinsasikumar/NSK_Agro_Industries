import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ image, title, description, badge }) => (
  <div className="w-full sm:w-80 md:w-[350px] flex-shrink-0 px-3 sm:px-4">
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-4 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 ease-out group relative h-full flex flex-col">
      {/* Image Container with Zoom effect */}
      <div className="overflow-hidden h-48 sm:h-52 md:h-56 relative">
        <img 
          src={image} 
          alt={`${title} - eco-friendly paper pulp egg tray`} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Soft shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
          {badge}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xs sm:text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
            Learn More 
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Products = () => {
  const { t } = useLanguage();
  
  const images = [
    process.env.PUBLIC_URL + "/product1.jpg",
    process.env.PUBLIC_URL + "/product2.jpg",
    process.env.PUBLIC_URL + "/product3.jpg",
    process.env.PUBLIC_URL + "/product4.jpg",
    process.env.PUBLIC_URL + "/product5.jpeg",
    process.env.PUBLIC_URL + "/product6.jpg",
    process.env.PUBLIC_URL + "/product7.png"
  ];

  const productsList = (t.products.items || []).map((item, index) => ({
    ...item,
    image: images[index % images.length]
  }));

  // Double the list to create a seamless infinite scrolling effect
  const doubledProducts = [...productsList, ...productsList];
  const mobileProducts = productsList;

  return (
    <section id="products" className="py-20 md:py-24 bg-cream overflow-hidden" aria-label="Products Section">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t.products.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
            {t.products.subheading}
          </p>
        </div>
      </div>
      
      {/* Infinite scrolling slider */}
      <div className="relative overflow-visible py-2 md:py-4">
        {/* Gradient overlays for smooth fade effect at edges */}
        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream via-cream/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling track */}
        <div className="overflow-hidden">
          {/* Mobile: show products once */}
          <div className="flex md:hidden py-4 gap-4 overflow-x-auto px-3">
            {mobileProducts.map((product, index) => (
              <ProductCard
                key={`mobile-${index}`}
                image={product.image}
                title={product.title}
                description={product.desc}
                badge={product.badge}
              />
            ))}
          </div>

          {/* Tablet/Desktop: infinite marquee */}
          <div className="hidden md:flex animate-marquee py-4 md:py-6 gap-4 md:gap-0 justify-center md:justify-start px-3 md:px-0">
            {doubledProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.desc}
                badge={product.badge}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Explore Products Button */}
      <div className="text-center mt-10 md:mt-12 px-4">
        <a
          href="#/explore-products"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
        >
          {t.products.exploreBtn}
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Products;
