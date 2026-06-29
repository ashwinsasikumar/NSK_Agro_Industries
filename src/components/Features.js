import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FeatureCard = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 h-full"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-light/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6 mx-auto md:mx-0">
      <span className="text-3xl sm:text-4xl">{icon}</span>
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center md:text-left">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">{description}</p>
  </div>
);

const renderBrandText = (text) => {
  const parts = text.split(/(NSK AGRO INDUSTRIES|NOVAPAC)/g);
  return parts.map((part, index) => {
    if (part === 'NSK AGRO INDUSTRIES' || part === 'NOVAPAC') {
      return <span key={index} className="font-bold">{part}</span>;
    }
    return part;
  });
};

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "🍃",
      title: t.features.feature1Title,
      description: t.features.feature1Desc
    },
    {
      icon: "🛡️",
      title: t.features.feature2Title,
      description: t.features.feature2Desc
    },
    {
      icon: "🎨",
      title: t.features.feature3Title,
      description: t.features.feature3Desc
    },
    {
      icon: "🚚",
      title: t.features.feature4Title,
      description: t.features.feature4Desc
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t.features.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
            {renderBrandText(t.features.subheading)}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
