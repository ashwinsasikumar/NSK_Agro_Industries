import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 md:py-20 bg-white" aria-label="About Us Section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start lg:items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t.about.heading}</h2>
              <div className="h-0.5 w-24 mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
              <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
                {t.about.subheading}
              </p>
            </div>
            <img 
              src={process.env.PUBLIC_URL + "/who_we_are.jpeg"} 
              alt="NSK Agro Industries modern egg tray production facility with advanced manufacturing equipment" 
              className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto md:mx-0 object-cover"
              loading="lazy"
            />
            <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto md:mx-0">
              <div className="bg-primary text-white p-4 rounded-xl text-center sm:text-left sm:flex sm:flex-col sm:justify-center min-h-[92px] shadow-sm">
                <div className="text-2xl md:text-3xl font-bold">50K+</div>
                <div className="text-sm leading-tight">{t.about.stat1}</div>
              </div>
              <div className="bg-accent text-white p-4 rounded-xl text-center sm:text-left sm:flex sm:flex-col sm:justify-center min-h-[92px] shadow-sm">
                <div className="text-2xl md:text-3xl font-bold">100%</div>
                <div className="text-sm leading-tight">{t.about.stat2}</div>
              </div>
              <div className="bg-light text-white p-4 rounded-xl text-center sm:text-left sm:flex sm:flex-col sm:justify-center min-h-[92px] shadow-sm">
                <div className="text-2xl md:text-3xl font-bold">100%</div>
                <div className="text-sm leading-tight">{t.about.stat3}</div>
              </div>
            </div>
            {t.about.industriesTitle && (
              <div className="mt-10 md:mt-12 bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto md:mx-0">
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-4 text-center md:text-left">
                  {t.about.industriesTitle}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3">
                  {t.about.industriesBullets && t.about.industriesBullets.map((item, idx) => (
                    <li key={idx} className="flex items-start sm:items-center text-gray-700 justify-start text-left">
                      <svg className="w-5 h-5 text-light mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              {t.about.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
              {t.about.para1}
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
              {t.about.para2}
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
              {t.about.para3}
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
              {t.about.para4}
            </p>

            {t.about.whyTitle && (
              <div className="mt-8 mb-8 bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xl md:text-2xl font-semibold text-primary mb-4 text-center md:text-left">
                  {t.about.whyTitle}
                </h4>
                <ul className="space-y-3">
                  {t.about.whyBullets && t.about.whyBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 text-light mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base md:text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {t.about.tagline && (
              <p className="text-primary font-bold text-base md:text-lg border-l-4 border-light pl-4 italic leading-relaxed">
                {t.about.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Vision & Mission Row at the Bottom */}
        {t.about.visionTitle && t.about.missionTitle && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-14 md:mt-16 border-t border-gray-100 pt-10 md:pt-16">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-white p-2.5 rounded-lg shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                  {t.about.visionTitle}
                </h4>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                {t.about.visionDesc}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-xl border border-accent/10 shadow-sm relative overflow-hidden group hover:border-accent/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent text-white p-2.5 rounded-lg shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                  {t.about.missionTitle}
                </h4>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                {t.about.missionDesc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
