import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section id="contact" className="py-20 bg-cream relative overflow-hidden">
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
          {/* Contact Form */}
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-xl flex flex-col">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">{t.contact.quoteHeading}</h3>
            <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3 flex-1 flex flex-col">
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-xs">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition text-xs md:text-xs"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-xs">{t.contact.emailLabel}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition text-xs md:text-xs"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-xs">{t.contact.phoneLabel}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition text-xs md:text-xs"
                  placeholder="+91-XXX-XXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-xs">{t.contact.messageLabel}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2" 
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition text-xs md:text-xs"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-light to-accent text-white py-2 md:py-2 rounded-lg font-semibold text-sm md:text-sm hover:shadow-xl transition-all hover:-translate-y-0.5 mt-auto"
              >
                ✉️ Send Message
              </button>
            </form>
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
