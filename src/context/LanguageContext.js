import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      products: 'Products',
      contact: 'Contact',
      getQuote: 'Get Quote'
    },
    // Hero Section
    hero: {
      badge: 'Eco-Friendly Packaging Solutions',
      title: 'NSK Agro Industries',
      subtitle: 'Premium Eco-Friendly Paper Pulp Egg Trays',
      tagline: 'Sustainable Packaging for a Better Tomorrow',
      tag1: '100% Recycled Paper',
      tag2: 'Biodegradable',
      tag3: 'Strong & Reliable',
      tag4: 'Perfect for Farms & Retail',
      cta1: 'Get a Quote',
      cta2: 'Learn More'
    },
    // About Section
    about: {
      heading: 'Who We Are',
      subheading: 'Leading the way in sustainable packaging solutions',
      title: 'Crafting Sustainability, One Tray at a Time',
      para1: 'NSK Agro Industries is dedicated to manufacturing high-quality moulded pulp egg trays and other food-grade packaging products, including corrugated boxes, paper bags, paper boards and allied paper-based products. Using advanced pulp molding technology and recycled waste paper, we deliver sustainable, durable packaging solutions to farms, food producers, and distributors across the region.',
      para2: 'Our commitment to environmental responsibility drives us to create products that not only protect your goods but also protect our planet. With state-of-the-art manufacturing facilities and a dedicated team, we ensure every product meets the highest standards of quality and sustainability. We undertake all activities incidental to manufacturing, from raw material procurement to finished goods delivery.',
      bullet1: 'Advanced Pulp Molding Technology',
      bullet2: 'High Production Capacity',
      bullet3: 'Sustainable & Biodegradable Products',
      stat1: 'Trays/Day',
      stat2: 'Recycled Paper',
      stat3: 'Eco-Friendly'
    },
    // Features Section
    features: {
      heading: 'Why Choose Us',
      subheading: 'Discover what makes NSK Agro Industries the preferred choice for sustainable egg packaging',
      feature1Title: 'Eco-Friendly & Sustainable',
      feature1Desc: '100% biodegradable and compostable trays made from recycled paper. Reduce your carbon footprint with every purchase.',
      feature2Title: 'Superior Quality & Durability',
      feature2Desc: 'Strong, shock-absorbent trays that protect eggs during storage and transport. Tested for maximum reliability.',
      feature3Title: 'Customizable Options',
      feature3Desc: '30-cell design optimized for efficiency. Custom branding and color options available for bulk orders.',
      feature4Title: 'Reliable Supply & Delivery',
      feature4Desc: 'Competitive pricing with consistent quality. On-time delivery guaranteed with our efficient production system.'
    },
    // Products Section
    products: {
      heading: 'From Waste to Product',
      subheading: 'Our sustainable manufacturing process: Pulping → Molding → Drying → Packing',
      step1Title: 'Step 1: Pulping',
      step1Desc: 'Waste paper (newspapers, cartons) is broken down into pulp using water and mechanical action, creating the base material.',
      step1Badge: 'Raw Material Processing',
      step2Title: 'Step 2: Molding',
      step2Desc: 'The pulp is precisely formed into 30-cell egg tray shapes using specialized molding machines with custom dies.',
      step2Badge: 'Shaping Process',
      step3Title: 'Step 3: Drying',
      step3Desc: 'Molded trays undergo efficient thermal drying to achieve optimal strength, durability and moisture resistance.',
      step3Badge: 'Strengthening',
      step4Title: 'Packing',
      step4Desc: 'Quality-checked trays are carefully stacked, packaged, and prepared for delivery to your location.',
      step4Badge: 'Final Stage',
      step5Title: 'Our Final Product',
      step5Desc: 'Premium 30-cell egg tray ready for use. Made from 100% recycled paper, biodegradable and eco-friendly.',
      step5Badge: '30-Cell Egg Tray',
      step6Title: 'Ready to Use',
      step6Desc: 'Our trays provide superior protection for eggs during storage, transport and retail display. Trusted quality.',
      step6Badge: 'Quality Assured'
    },
    // Testimonials Section
    testimonials: {
      heading: 'What Our Clients Will Say',
      subheading: 'We are just getting started - Your review could be featured here!',
      test1: 'NSK Agro Industries has been our trusted supplier for over 3 years. Their egg trays are incredibly durable and eco-friendly. Our customers love the sustainable packaging!',
      test1Name: 'Rajesh Kumar',
      test1Position: 'Owner, Sunrise Poultry Farm',
      test2: 'Excellent quality at competitive prices! The delivery is always on time, and the customer service is outstanding. Highly recommend NSK for bulk orders.',
      test2Name: 'Priya Sharma',
      test2Position: 'Manager, Green Valley Eggs Ltd.',
      test3: 'We switched to NSK\'s biodegradable trays last year and haven\'t looked back. They\'re strong, reliable, and align perfectly with our commitment to sustainability.',
      test3Name: 'Arun Patel',
      test3Position: 'Director, Organic Farms Co-op'
    },
    // Contact Section
    contact: {
      heading: 'Get in Touch',
      subheading: 'Ready to Partner with NSK Agro Industries?',
      formTitle: 'Request a Quote',
      labelName: 'Full Name *',
      placeholderName: 'Your name',
      labelEmail: 'Email Address *',
      placeholderEmail: 'your@email.com',
      labelPhone: 'Phone Number *',
      placeholderPhone: '+91-XXX-XXX-XXXX',
      labelMessage: 'Message / Requirements',
      placeholderMessage: 'Tell us about your requirements...',
      btnSubmit: 'Send Message',
      infoTitle: 'Contact Information',
      addressTitle: 'Address',
      address: 'NSK Agro Industries,\nRamachandra puram,\nNegamam, Pollachi,\nCoimbatore, Tamil Nadu, 642120',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      hoursTitle: 'Business Hours',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed',
      sampleTitle: 'Request a Free Sample',
      sampleDesc: 'Experience our quality firsthand. Get a free sample pack delivered to your location.',
      sampleBtn: 'Request Sample Now',
      successMsg: 'Thank you for your inquiry! We will get back to you within 24 hours.'
    },
    // Footer
    footer: {
      tagline: 'Leading manufacturer of eco-friendly paper pulp egg trays. Sustainable solutions for a better tomorrow.',
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      whyChoose: 'Why Choose Us',
      products: 'Products',
      contact: 'Contact',
      ourProduct: 'Our Product',
      product1: '30-Cell Egg Trays',
      product2: 'Eco-Friendly Material',
      product3: 'Bulk Orders',
      product4: 'Custom Branding',
      connect: 'Connect With Us',
      newsletter: 'Subscribe to our newsletter',
      emailPlaceholder: 'Your email',
      copyright: 'Copyright © 2026 NSK Agro Industries. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      sitemap: 'Sitemap'
    }
  },
  ta: {
    // Navbar
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      features: 'அம்சங்கள்',
      products: 'தயாரிப்புகள்',
      contact: 'தொடர்பு',
      getQuote: 'விலை கேளுங்கள்'
    },
    // Hero Section
    hero: {
      badge: 'சுற்றுச்சூழல் நட்பு பேக்கேஜிங் தீர்வுகள்',
      title: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ்',
      subtitle: 'உயர்தர சுற்றுச்சூழல் நட்பு காகித கூழ் முட்டை தட்டுகள்',
      tagline: 'சிறந்த நாளைக்கு நிலையான பேக்கேஜிங்',
      tag1: '100% மறுசுழற்சி காகிதம்',
      tag2: 'உயிரியல் சிதைவு',
      tag3: 'வலிமையான மற்றும் நம்பகமான',
      tag4: 'பண்ணைகள் மற்றும் சில்லறை விற்பனைக்கு ஏற்றது',
      cta1: 'விலை கேளுங்கள்',
      cta2: 'மேலும் அறிக'
    },
    // About Section
    about: {
      heading: 'நாங்கள் யார்',
      subheading: 'நிலையான பேக்கேஜிங் தீர்வுகளில் முன்னணியில்',
      title: 'நிலைத்தன்மையை வடிவமைத்தல், ஒரு தட்டு ஒரு நேரத்தில்',
      para1: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ் உயர்தர வடிவமைக்கப்பட்ட கூழ் முட்டை தட்டுகள் மற்றும் பிற உணவு தர பேக்கேஜிங் தயாரிப்புகளை உற்பத்தி செய்வதில் அர்ப்பணிப்புடன் உள்ளது, இதில் நெளி பெட்டிகள், காகித பைகள், காகித பலகைகள் மற்றும் தொடர்புடைய காகித அடிப்படையிலான தயாரிப்புகள் அடங்கும். மேம்பட்ட கூழ் வடிவமைப்பு தொழில்நுட்பம் மற்றும் மறுசுழற்சி செய்யப்பட்ட கழிவு காகிதத்தைப் பயன்படுத்தி, நாங்கள் பிராந்தியம் முழுவதும் பண்ணைகள், உணவு உற்பத்தியாளர்கள் மற்றும் விநியோகஸ்தர்களுக்கு நிலையான, நீடித்த பேக்கேஜிங் தீர்வுகளை வழங்குகிறோம்.',
      para2: 'சுற்றுச்சூழல் பொறுப்புக்கான எங்கள் அர்ப்பணிப்பு உங்கள் பொருட்களை மட்டுமல்ல, எங்கள் கிரகத்தையும் பாதுகாக்கும் தயாரிப்புகளை உருவாக்க எங்களை தூண்டுகிறது. அதிநவீன உற்பத்தி வசதிகள் மற்றும் அர்ப்பணிப்புள்ள குழுவுடன், ஒவ்வொரு தயாரிப்பும் தரம் மற்றும் நிலைத்தன்மையின் உயர்ந்த தரங்களை பூர்த்தி செய்வதை உறுதி செய்கிறோம். மூலப்பொருள் கொள்முதல் முதல் முடிக்கப்பட்ட பொருட்கள் விநியோகம் வரை உற்பத்தியுடன் தொடர்புடைய அனைத்து நடவடிக்கைகளையும் நாங்கள் மேற்கொள்கிறோம்.',
      bullet1: 'மேம்பட்ட கூழ் வடிவமைப்பு தொழில்நுட்பம்',
      bullet2: 'உயர் உற்பத்தி திறன்',
      bullet3: 'நிலையான மற்றும் உயிரியல் சிதைவு தயாரிப்புகள்',
      stat1: 'தட்டுகள்/நாள்',
      stat2: 'மறுசுழற்சி காகிதம்',
      stat3: 'சுற்றுச்சூழல் நட்பு'
    },
    // Features Section
    features: {
      heading: 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்',
      subheading: 'நிலையான முட்டை பேக்கேஜிங்கிற்கு என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸை விருப்பமான தேர்வாக மாற்றுவது என்ன என்பதைக் கண்டறியுங்கள்',
      feature1Title: 'சுற்றுச்சூழல் நட்பு மற்றும் நிலையான',
      feature1Desc: 'மறுசுழற்சி செய்யப்பட்ட காகிதத்திலிருந்து தயாரிக்கப்பட்ட 100% உயிரியல் சிதைவு மற்றும் உரமாக்கக்கூடிய தட்டுகள். ஒவ்வொரு வாங்குதலுடனும் உங்கள் கார்பன் தடயத்தை குறைக்கவும்.',
      feature2Title: 'உயர்ந்த தரம் மற்றும் நீடித்து நிலைத்தல்',
      feature2Desc: 'சேமிப்பு மற்றும் போக்குவரத்தின் போது முட்டைகளை பாதுகாக்கும் வலுவான, அதிர்ச்சி-உறிஞ்சும் தட்டுகள். அதிகபட்ச நம்பகத்தன்மைக்காக சோதிக்கப்பட்டது.',
      feature3Title: 'தனிப்பயனாக்கக்கூடிய விருப்பங்கள்',
      feature3Desc: 'செயல்திறனுக்காக உகந்த 30-செல் வடிவமைப்பு. மொத்த ஆர்டர்களுக்கு தனிப்பயன் பிராண்டிங் மற்றும் வண்ண விருப்பங்கள் கிடைக்கின்றன.',
      feature4Title: 'நம்பகமான விநியோகம் மற்றும் டெலிவரி',
      feature4Desc: 'நிலையான தரத்துடன் போட்டி விலை. எங்கள் திறமையான உற்பத்தி அமைப்புடன் சரியான நேரத்தில் டெலிவரி உத்தரவாதம்.'
    },
    // Products Section
    products: {
      heading: 'கழிவிலிருந்து தயாரிப்புக்கு',
      subheading: 'எங்கள் நிலையான உற்பத்தி செயல்முறை: கூழாக்குதல் → வடிவமைத்தல் → உலர்த்துதல் → பேக்கிங்',
      step1Title: 'படி 1: கூழாக்குதல்',
      step1Desc: 'கழிவு காகிதம் (செய்தித்தாள்கள், அட்டைப்பெட்டிகள்) தண்ணீர் மற்றும் இயந்திர செயல்பாட்டைப் பயன்படுத்தி கூழாக உடைக்கப்படுகிறது, அடிப்படை பொருளை உருவாக்குகிறது.',
      step1Badge: 'மூலப்பொருள் செயலாக்கம்',
      step2Title: 'படி 2: வடிவமைத்தல்',
      step2Desc: 'தனிப்பயன் டைகளுடன் சிறப்பு வடிவமைப்பு இயந்திரங்களைப் பயன்படுத்தி கூழ் துல்லியமாக 30-செல் முட்டை தட்டு வடிவங்களாக உருவாக்கப்படுகிறது.',
      step2Badge: 'வடிவமைப்பு செயல்முறை',
      step3Title: 'படி 3: உலர்த்துதல்',
      step3Desc: 'வடிவமைக்கப்பட்ட தட்டுகள் உகந்த வலிமை, நீடித்து நிலைத்தல் மற்றும் ஈரப்பதம் எதிர்ப்பு அடைய திறமையான வெப்ப உலர்த்துதல் செயல்முறைக்கு உட்படுகின்றன.',
      step3Badge: 'வலுப்படுத்துதல்',
      step4Title: 'பேக்கிங்',
      step4Desc: 'தர சோதனை செய்யப்பட்ட தட்டுகள் கவனமாக அடுக்கி, பேக்கேஜ் செய்யப்பட்டு, உங்கள் இடத்திற்கு டெலிவரிக்கு தயாராக உள்ளன.',
      step4Badge: 'இறுதி நிலை',
      step5Title: 'எங்கள் இறுதி தயாரிப்பு',
      step5Desc: 'பயன்பாட்டிற்கு தயாராக உள்ள உயர்தர 30-செல் முட்டை தட்டு. 100% மறுசுழற்சி காகிதத்திலிருந்து தயாரிக்கப்பட்டது, உயிரியல் சிதைவு மற்றும் சுற்றுச்சூழல் நட்பு.',
      step5Badge: '30-செல் முட்டை தட்டு',
      step6Title: 'பயன்பாட்டிற்கு தயார்',
      step6Desc: 'எங்கள் தட்டுகள் சேமிப்பு, போக்குவரத்து மற்றும் சில்லறை காட்சிக்கு முட்டைகளுக்கு சிறந்த பாதுகாப்பை வழங்குகின்றன. நம்பகமான தரம்.',
      step6Badge: 'தர உத்தரவாதம்'
    },
    // Testimonials Section
    testimonials: {
      heading: 'எங்கள் வாடிக்கையாளர்கள் என்ன சொல்வார்கள்',
      subheading: 'நாங்கள் இப்போதுதான் தொடங்குகிறோம் - உங்கள் விமர்சனம் இங்கே இடம்பெறலாம்!',
      test1: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ் 3 ஆண்டுகளுக்கும் மேலாக எங்கள் நம்பகமான சப்ளையர். அவர்களின் முட்டை தட்டுகள் நம்பமுடியாத அளவிற்கு நீடித்து மற்றும் சுற்றுச்சூழல் நட்பு. எங்கள் வாடிக்கையாளர்கள் நிலையான பேக்கேஜிங்கை விரும்புகிறார்கள்!',
      test1Name: 'ராஜேஷ் குமார்',
      test1Position: 'உரிமையாளர், சன்ரைஸ் கோழி பண்ணை',
      test2: 'போட்டி விலையில் சிறந்த தரம்! டெலிவரி எப்போதும் சரியான நேரத்தில் உள்ளது, மற்றும் வாடிக்கையாளர் சேவை சிறந்தது. மொத்த ஆர்டர்களுக்கு என்.எஸ்.கே-ஐ மிகவும் பரிந்துரைக்கிறேன்.',
      test2Name: 'பிரியா சர்மா',
      test2Position: 'மேலாளர், கிரீன் வேலி முட்டைகள் நிறுவனம்',
      test3: 'கடந்த ஆண்டு நாங்கள் என்.எஸ்.கே-வின் உயிரியல் சிதைவு தட்டுகளுக்கு மாறினோம், திரும்பிப் பார்க்கவில்லை. அவை வலுவானவை, நம்பகமானவை, மற்றும் நிலைத்தன்மைக்கான எங்கள் அர்ப்பணிப்புடன் சரியாக பொருந்துகின்றன.',
      test3Name: 'அருண் பட்டேல்',
      test3Position: 'இயக்குனர், ஆர்கானிக் பண்ணைகள் கூட்டுறவு'
    },
    // Contact Section
    contact: {
      heading: 'தொடர்பு கொள்ளுங்கள்',
      subheading: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸுடன் கூட்டாளியாக தயாரா?',
      formTitle: 'விலை கோரிக்கை',
      labelName: 'முழு பெயர் *',
      placeholderName: 'உங்கள் பெயர்',
      labelEmail: 'மின்னஞ்சல் முகவரி *',
      placeholderEmail: 'your@email.com',
      labelPhone: 'தொலைபேசி எண் *',
      placeholderPhone: '+91-XXX-XXX-XXXX',
      labelMessage: 'செய்தி / தேவைகள்',
      placeholderMessage: 'உங்கள் தேவைகளைப் பற்றி எங்களிடம் கூறுங்கள்...',
      btnSubmit: 'செய்தி அனுப்பு',
      infoTitle: 'தொடர்பு தகவல்',
      addressTitle: 'முகவரி',
      address: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ்,\nராமச்சந்திர புரம்,\nநெகமம், பொள்ளாச்சி,\nகோயம்புத்தூர், தமிழ்நாடு, 642120',
      phoneTitle: 'தொலைபேசி',
      emailTitle: 'மின்னஞ்சல்',
      hoursTitle: 'வணிக நேரம்',
      hours: 'திங்கள் - சனி: காலை 9:00 - மாலை 6:00\nஞாயிறு: மூடப்பட்டது',
      sampleTitle: 'இலவச மாதிரியை கோருங்கள்',
      sampleDesc: 'எங்கள் தரத்தை நேரடியாக அனுபவிக்கவும். உங்கள் இடத்திற்கு இலவச மாதிரி பேக்கை பெறுங்கள்.',
      sampleBtn: 'இப்போது மாதிரியை கோருங்கள்',
      successMsg: 'உங்கள் விசாரணைக்கு நன்றி! 24 மணி நேரத்திற்குள் நாங்கள் உங்களைத் தொடர்பு கொள்வோம்.'
    },
    // Footer
    footer: {
      tagline: 'சுற்றுச்சூழல் நட்பு காகித கூழ் முட்டை தட்டுகளின் முன்னணி உற்பத்தியாளர். சிறந்த நாளைக்கு நிலையான தீர்வுகள்.',
      quickLinks: 'விரைவு இணைப்புகள்',
      aboutUs: 'எங்களைப் பற்றி',
      whyChoose: 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்',
      products: 'தயாரிப்புகள்',
      contact: 'தொடர்பு',
      ourProduct: 'எங்கள் தயாரிப்பு',
      product1: '30-செல் முட்டை தட்டுகள்',
      product2: 'சுற்றுச்சூழல் நட்பு பொருள்',
      product3: 'மொத்த ஆர்டர்கள்',
      product4: 'தனிப்பயன் பிராண்டிங்',
      connect: 'எங்களுடன் இணையுங்கள்',
      newsletter: 'எங்கள் செய்திமடலுக்கு குழுசேரவும்',
      emailPlaceholder: 'உங்கள் மின்னஞ்சல்',
      copyright: 'பதிப்புரிமை © 2026 என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      privacy: 'தனியுரிமை கொள்கை',
      terms: 'சேவை விதிமுறைகள்',
      sitemap: 'தள வரைபடம்'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
