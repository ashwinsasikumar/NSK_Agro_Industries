import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const renderBrandText = (text) => {
    const parts = text.split(/(NSK AGRO INDUSTRIES|NOVAPAC)/g);
    return parts.map((part, index) => {
      if (part === 'NSK AGRO INDUSTRIES' || part === 'NOVAPAC') {
        return <span key={index} className="font-bold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <section id="contact" className="py-20 bg-cream relative overflow-hidden" aria-label="Contact Section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d5016' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.contact.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            {renderBrandText(t.contact.subheading)}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto md:items-stretch">
          {/* Contact Action */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-primary/10 flex flex-col justify-center">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">{t.contact.quoteHeading}</h3>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              {t.contact.quickMessage}
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://wa.me/919788778666?text=Hello%20NSK%20Agro%20Industries%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-[#1f4d2d] text-white py-3 rounded-lg font-semibold text-base md:text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/nskagroindustries/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-white text-primary border border-primary/20 py-3 rounded-lg font-semibold text-base md:text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                aria-label="Visit Instagram profile"
              >
                Instagram
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col">
            <div className="bg-primary text-white p-4 md:p-6 rounded-xl shadow-xl flex flex-col h-full">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t.contact.infoHeading}</h3>
              <div className="space-y-3 md:space-y-4 flex-1">
                <div className="flex items-start">
                  <span className="text-xl md:text-xl mr-3 md:mr-3 mt-0.5">📍</span>
                  <div>
                    <h4 className="font-semibold mb-0.5 text-sm md:text-base">{t.contact.addressTitle}</h4>
                    <p className="text-green-100 text-xs sm:text-sm" style={{ whiteSpace: 'pre-line' }}>{renderBrandText(t.contact.address)}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-xl md:text-xl mr-3 md:mr-3 mt-0.5">📞</span>
                  <div>
                    <h4 className="font-semibold mb-0.5 text-sm md:text-base">{t.contact.phoneHeading}</h4>
                    <p className="text-green-100 text-xs sm:text-sm">+91 9788778666<br/>+91 9788778850</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-xl md:text-xl mr-3 md:mr-3 mt-0.5">✉️</span>
                  <div>
                    <h4 className="font-semibold mb-0.5 text-sm md:text-base">{t.contact.emailHeading}</h4>
                    <p className="text-green-100 text-xs sm:text-sm">nskagroindustries@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-xl md:text-xl mr-3 md:mr-3 mt-0.5">🕐</span>
                  <div>
                    <h4 className="font-semibold mb-0.5 text-sm md:text-base">{t.contact.hoursHeading}</h4>
                    <p className="text-green-100 text-xs sm:text-sm">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
