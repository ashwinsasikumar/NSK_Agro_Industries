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
            {t.contact.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{t.contact.quoteHeading}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.emailLabel}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.phoneLabel}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="+91-XXX-XXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.messageLabel}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-light to-accent text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-primary text-white p-8 rounded-xl shadow-xl mb-8">
              <h3 className="text-2xl font-semibold mb-6">{t.contact.infoHeading}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">📍</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.addressTitle}</h4>
                    <p className="text-green-100" style={{ whiteSpace: 'pre-line' }}>{t.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">📞</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.phoneHeading}</h4>
                    <p className="text-green-100">+91 9788778666<br/>+91 9788778850</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">✉️</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.emailHeading}</h4>
                    <p className="text-green-100">nskagroindustries@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">🕐</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.hoursHeading}</h4>
                    <p className="text-green-100">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="bg-light text-white p-8 rounded-xl shadow-xl text-center">
              <span className="text-5xl mb-4 block">🎁</span>
              <h3 className="text-2xl font-semibold mb-3">Request a Free Sample</h3>
              <p className="mb-6">Experience our quality firsthand. Get a free sample pack delivered to your location.</p>
              <button className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Request Sample Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
