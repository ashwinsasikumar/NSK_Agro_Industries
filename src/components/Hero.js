import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1920&q=80" 
          alt="Eco-friendly paper pulp egg trays production" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-accent/50 to-light/40"></div>
      </div>

      {/* Animated floating eggs */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🥚</div>
        <div className="absolute top-40 right-20 text-5xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>🥚</div>
        <div className="absolute bottom-32 left-1/4 text-4xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>🥚</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>🥚</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <div className="mb-6 animate-pulse">
            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/30">
              <span className="text-lg font-medium">🌱 {t.hero.badge}</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 drop-shadow-md">
            {t.hero.subtitle}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-50 drop-shadow-md">
            {t.hero.tagline}
          </p>
          
          {/* Tagline */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg transform hover:scale-105 transition-transform">
              ♻️ {t.hero.tag1}
            </span>
            <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg transform hover:scale-105 transition-transform">
              🍃 {t.hero.tag2}
            </span>
            <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg transform hover:scale-105 transition-transform">
              🛡️ {t.hero.tag3}
            </span>
            <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg transform hover:scale-105 transition-transform">
              🏪 {t.hero.tag4}
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:-translate-y-1 hover:bg-cream"
            >
              ✉️ {t.hero.cta1}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-primary/80 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary transition-all hover:-translate-y-1"
            >
              ⬇️ {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
