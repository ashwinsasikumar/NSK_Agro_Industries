import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ image, title, description, badge, delay }) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-semibold">{badge}</span>
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
);

const Products = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      image: "/pulping.jpeg",
      title: t.products.step1Title,
      description: t.products.step1Desc,
      badge: t.products.step1Badge
    },
    {
      image: "/molding.jpeg",
      title: t.products.step2Title,
      description: t.products.step2Desc,
      badge: t.products.step2Badge
    },
    {
      image: "/drying.jpeg",
      title: t.products.step3Title,
      description: t.products.step3Desc,
      badge: t.products.step3Badge
    },
    {
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=600&q=80",
      title: t.products.step4Title,
      description: t.products.step4Desc,
      badge: t.products.step4Badge
    },
    {
      image: "/our_final_product.jpeg",
      title: t.products.step5Title,
      description: t.products.step5Desc,
      badge: t.products.step5Badge
    },
    {
      image: "/ready_to_use.jpeg",
      title: t.products.step6Title,
      description: t.products.step6Desc,
      badge: t.products.step6Badge
    }
  ];

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.products.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.products.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              badge={product.badge}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
