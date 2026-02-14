import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FeatureCard = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-light/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      <span className="text-4xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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
    <section id="features" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.features.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.features.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
