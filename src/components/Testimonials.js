import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialCard = ({ name, position, message, rating, delay }) => {
  const getInitial = (name) => name.charAt(0).toUpperCase();
  const colors = ['bg-primary', 'bg-accent', 'bg-light'];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div 
      className="bg-cream p-8 rounded-xl shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-warm' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{message}"</p>
      <div className="flex items-center">
        <div className={`${bgColor} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4`}>
          {getInitial(name)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    message: '',
    rating: 5
  });

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('nsk_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.message) {
      const newReview = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString()
      };
      
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      localStorage.setItem('nsk_reviews', JSON.stringify(updatedReviews));
      
      // Reset form
      setFormData({
        name: '',
        position: '',
        message: '',
        rating: 5
      });
      
      alert('Thank you for your review!');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.testimonials.heading}</h2>
          <div className="h-0.5 w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-light to-transparent"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Review Submission Form */}
        <div className="max-w-2xl mx-auto mb-16 bg-cream p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Share Your Experience</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Position/Company</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="e.g., Owner, ABC Farm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Rating *</label>
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
              <label className="block text-gray-700 font-medium mb-2">Your Review *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Tell us about your experience with NSK Agro Industries..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-light to-accent text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Display Reviews */}
        {reviews.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <TestimonialCard
                key={review.id}
                name={review.name}
                position={review.position || 'Customer'}
                message={review.message}
                rating={review.rating}
                delay={index * 100}
              />
            ))}
          </div>
        )}

        {reviews.length === 0 && (
          <div className="text-center text-gray-500 italic">
            No reviews yet. Be the first to share your experience!
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
