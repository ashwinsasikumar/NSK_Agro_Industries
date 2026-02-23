import React from 'react';

const Footer = () => {
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
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={process.env.PUBLIC_URL + "/logo_name.png"} 
                alt="NSK Agro Industries" 
                className="h-24 w-auto bg-white rounded"
              />
            </div>
            <p className="text-green-100 text-sm">
              Leading manufacturer of eco-friendly paper pulp egg trays. Sustainable solutions for a better tomorrow.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Product</h4>
            <ul className="space-y-2 text-green-100">
              <li>30-Cell Egg Trays</li>
              <li>Eco-Friendly Material</li>
              <li>Bulk Orders</li>
              <li>Custom Branding</li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                📘
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                🐦
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                💼
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                📷
              </a>
            </div>
            <p className="text-green-100 text-sm mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l-lg text-gray-800 text-sm flex-1 focus:outline-none"
              />
              <button className="bg-light hover:bg-accent px-4 py-2 rounded-r-lg transition">
                →
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-green-100 text-sm">
          <p>Copyright © 2026 NSK Agro Industries. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Terms of Service</button>
            <span>•</span>
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
