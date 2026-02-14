import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.about.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.about.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              {t.about.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.about.para1}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.about.para2}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.about.bullet1}</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.about.bullet2}</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.about.bullet3}</span>
              </li>
            </ul>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src={process.env.PUBLIC_URL + "/who_we_are.jpeg"} 
              alt="Modern egg tray production facility" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-primary text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm">{t.about.stat1}</div>
              </div>
              <div className="bg-accent text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">{t.about.stat2}</div>
              </div>
              <div className="bg-light text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">{t.about.stat3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
