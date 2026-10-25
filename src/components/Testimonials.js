import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    message: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.message) {
      const subject = encodeURIComponent(`Customer Experience - ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Position/Company: ${formData.position || 'Not provided'}\n` +
        `Rating: ${formData.rating}/5\n\n` +
        `Experience:\n${formData.message}`
      );

      const mailtoLink = `mailto:nskagroindustries@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setFormData({
        name: '',
        position: '',
        message: '',
        rating: 5
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white" aria-label="Customer Testimonials Section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t.testimonials.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Review Submission Form */}
        <div className="max-w-2xl mx-auto mb-14 md:mb-16 bg-cream p-6 sm:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 text-center">{t.testimonials.shareHeading}</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">{t.testimonials.nameLabel}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder={t.testimonials.namePlaceholder}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">{t.testimonials.positionLabel}</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder={t.testimonials.positionPlaceholder}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">{t.testimonials.ratingLabel}</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="focus:outline-none"
                  >
                    <svg className={`w-8 h-8 ${star <= formData.rating ? 'text-warm' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">{t.testimonials.reviewLabel}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder={t.testimonials.reviewPlaceholder}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-light to-accent text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              {t.testimonials.submitBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
