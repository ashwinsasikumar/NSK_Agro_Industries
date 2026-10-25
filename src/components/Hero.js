import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const taglineParts = (t.hero.tagline || '').split('for a Better Tomorrow');
  const renderBrandText = (text) => {
    const parts = (text || '').split(/(NSK AGRO INDUSTRIES|NOVAPAC)/g);
    return parts.map((part, index) => {
      if (part === 'NSK AGRO INDUSTRIES' || part === 'NOVAPAC') {
        return <span key={index} className="font-bold">{part}</span>;
      }
      return part;
    });
  };

  const heroBadgeText = {
    en: [
      { value: '100%', label: t.hero.tag1 },
      { value: '100%', label: t.hero.tag2 },
      { value: 'Advanced', label: t.hero.tag3 },
      { value: 'Trusted', label: t.hero.tag4 },
      { value: t.hero.tag5, label: t.hero.tag6 }
    ],
    ta: [
      { value: '100%', label: t.hero.tag1 },
      { value: '100%', label: t.hero.tag2 },
      { value: 'மேம்பட்ட', label: t.hero.tag3 },
      { value: 'நம்பகமான', label: t.hero.tag4 },
      { value: t.hero.tag5, label: t.hero.tag6 }
    ]
  };

  const badges = heroBadgeText[language] || heroBadgeText.en;

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
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden" aria-label="Hero Section">
      {/* Mobile-only hero */}
      <div className="md:hidden relative bg-[#f3faf1] px-4 pt-16 pb-4 overflow-hidden">
        <div className="max-w-xl mx-auto text-center">
          <img
            src={process.env.PUBLIC_URL + "/novapacimage.png"}
            alt="NOVAPAC"
            width="1280"
            height="853"
            decoding="async"
            fetchpriority="high"
            className="w-full max-w-[24rem] sm:max-w-[28rem] h-auto mx-auto -mt-6 mb-3"
          />

          <div className="bg-white/90 rounded-3xl border border-primary/10 shadow-sm p-5 text-left -mt-6">
            <h1 className="text-base font-bold text-primary leading-tight">
              {taglineParts[0]}
              {taglineParts.length > 1 && (
                <>
                  <span className="text-primary">{language === 'en' ? 'for a' : 'க்கு'}</span>
                  <span className="text-[#5a3a22]"> {language === 'en' ? 'Better Tomorrow' : 'சிறந்த எதிர்காலம்'}</span>
                </>
              )}
              {taglineParts[1] || ''}
            </h1>
            <p className="text-xs text-gray-700 mt-2 leading-relaxed">
              {renderBrandText(t.hero.subtitle)}
            </p>
            <div className="flex flex-col gap-2 mt-3">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-md transition"
              >
                {t.hero.exploreProducts}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white text-primary px-4 py-2 rounded-full font-semibold border border-primary transition"
              >
                {t.hero.aboutUs}
              </button>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl shadow-lg border border-white/60">
            <img
              src={process.env.PUBLIC_URL + "/productsimage.png"}
              alt="NSK Agro Industries products"
              width="1536"
              height="796"
              decoding="async"
              fetchpriority="high"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-left">
            {badges.map((badge, index) => (
              <div key={index} className="bg-primary rounded-2xl p-3 text-white shadow-sm flex items-center gap-3">
                <img src={process.env.PUBLIC_URL + `/greenicon${index + 1}.png`} alt={badge.label} className="h-10 w-10 shrink-0" loading="lazy" />
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{badge.value}</div>
                  <div className="text-xs">{badge.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#e8f4e3] rounded-3xl p-5 shadow-sm text-left">
            <p className="text-xs font-bold tracking-widest text-primary">{t.hero.aboutLabel}</p>
            <h2 className="text-lg font-semibold text-[#5a3a22] mt-2">{t.hero.aboutTitle}</h2>
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {t.hero.aboutText}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop / laptop hero kept as before */}
      <div className="hidden md:block">
        <div className="relative bg-[#f3faf1] px-8 md:px-16">
          <div className="container mx-auto pt-0 pb-6 relative z-10">
            <div className="relative">
              <img
                src={process.env.PUBLIC_URL + "/novapacimage.png"}
                alt="NOVAPAC"
                width="1280"
                height="853"
                decoding="async"
                fetchpriority="high"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[38rem] h-auto mt-6 md:mt-8 mb-2 md:-ml-8"
              />
              <div className="flex flex-col gap-6 max-w-xl">
                <div></div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-16 lg:top-[4rem] hidden md:block w-full">
            <div className="relative w-[45vw] lg:w-[48vw] xl:w-[50vw] h-[16rem] lg:h-[18rem] xl:h-[22rem] ml-auto">
              <img
                src={process.env.PUBLIC_URL + "/productsimage.png"}
                alt="NSK Agro Industries products"
                width="1536"
                height="796"
                decoding="async"
                fetchpriority="high"
                className="relative w-full h-full object-cover"
              />
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#f3faf1] to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="relative -top-2 lg:-top-6 w-full bg-primary py-4 lg:py-2">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-center gap-y-4 gap-x-6 lg:gap-0 lg:divide-x-2 lg:divide-[#9ccc85]">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 lg:gap-4 px-3 md:px-6 lg:px-8 xl:px-10 justify-start md:justify-center lg:justify-start">
                <img src={process.env.PUBLIC_URL + `/greenicon${index + 1}.png`} alt={badge.label} className="h-10 w-10 lg:h-12 lg:w-12 shrink-0" loading="lazy" />
                <div className="text-left leading-tight text-white">
                  <div className="text-sm lg:text-base font-semibold">{badge.value}</div>
                  <div className="text-xs lg:text-sm">{badge.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-16 pt-6 pb-3">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 xl:gap-10">
            <img
              src={process.env.PUBLIC_URL + "/factory_image.png"}
              alt="NSK Agro Industries eco-friendly manufacturing facility with advanced equipment"
              width="1701"
              height="924"
              decoding="async"
              className="w-full max-w-[320px] md:max-w-[360px] mx-auto lg:mx-0 lg:w-[22rem] xl:w-[26rem] h-auto rounded-lg object-cover lg:-mt-6 lg:-ml-9"
              loading="lazy"
            />
            <div className="flex flex-col gap-4 flex-1 xl:flex-row xl:justify-between">
              <div className="flex-1 max-w-full xl:max-w-[650px] text-left md:pt-2 lg:-mt-4">
                <p className="text-xs font-bold tracking-widest text-primary">
                  {t.hero.aboutLabel}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-[#5a3a22] mt-2">
                  {t.hero.aboutTitle}
                </h2>
                <p className="text-sm md:text-base text-gray-700 mt-3">
                  {t.hero.aboutText}
                </p>
              </div>
              <div className="w-full md:max-w-[620px] xl:w-[430px] flex-shrink-0 bg-[#e8f4e3] rounded-lg p-5 md:p-6 shadow-md mt-2 lg:-mt-6 xl:ml-auto xl:translate-x-8 flex flex-col justify-between">
                <h1 className="text-lg md:text-xl xl:text-lg font-bold text-primary leading-snug">
                  {taglineParts[0]}
                  {taglineParts.length > 1 && (
                    <>
                      <span className="text-primary">{language === 'en' ? 'for a' : 'க்கு'}</span>
                      <span className="text-[#5a3a22]"> {language === 'en' ? 'Better Tomorrow' : 'சிறந்த எதிர்காலம்'}</span>
                    </>
                  )}
                  {taglineParts[1] || ''}
                </h1>
                <p className="text-xs md:text-sm text-gray-700 mt-2">
                  {renderBrandText(t.hero.subtitle)}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <button
                    onClick={() => scrollToSection('products')}
                    className="bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-md transition"
                  >
                    {t.hero.exploreProducts}
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="bg-white text-primary px-4 py-2 rounded-full font-semibold border border-primary transition"
                  >
                    {t.hero.aboutUs}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
