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
      badge: '',
      title: 'NSK AGRO INDUSTRIES',
      subtitle: 'NOVAPAC delivers innovative, eco-friendly pulp packaging solutions that protect your products and our planet.',
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
      title: 'About NSK Agro Industries',
      para1: 'NSK AGRO INDUSTRIES is a leading manufacturer of sustainable paper-based packaging solutions under its flagship brand, NOVAPAC.',
      para2: 'We specialize in high-quality moulded pulp products, including egg trays, industrial protective packaging, electronic packaging, and custom pulp-moulded solutions designed to meet the evolving needs of various industries.',
      para3: 'Using advanced pulp moulding technology and recycled paper resources, we create durable, cost-effective, and eco-friendly packaging solutions that serve the agriculture, food processing, electronics, manufacturing, and logistics sectors.',
      para4: 'With modern manufacturing facilities, a skilled workforce, and a strong commitment to sustainability, we ensure every NOVAPAC product meets the highest standards of quality, reliability, and environmental responsibility.',
      visionTitle: 'Our Vision',
      visionDesc: 'To become a trusted leader in sustainable packaging solutions by delivering innovative, environmentally responsible products that support businesses while contributing to a greener future.',
      missionTitle: 'Our Mission',
      missionDesc: 'To manufacture high-quality moulded pulp packaging products through advanced technology, sustainable practices, and continuous innovation, while ensuring customer satisfaction, operational excellence, and environmental stewardship.',
      whyTitle: 'Why NOVAPAC?',
      whyBullets: [
        'Sustainable and eco-friendly packaging solutions',
        'Manufactured using recycled paper resources',
        'Durable, lightweight, and cost-effective products',
        'Custom packaging solutions for diverse industries',
        'Consistent quality and reliable supply'
      ],
      tagline: 'NOVAPAC — Sustainable Packaging That Protects Products, Businesses, and the Planet.',
      industriesTitle: 'Industries We Serve',
      industriesBullets: [
        'Poultry',
        'Agriculture',
        'Food Processing',
        'Electronics',
        'Textiles',
        'Logistics & Transportation'
      ],
      stat1: 'Trays/Day',
      stat2: 'Recycled Paper',
      stat3: 'Eco-Friendly'
    },
    // Features Section
    features: {
      heading: 'Why Choose Us',
      subheading: 'Discover what makes NSK AGRO INDUSTRIES the preferred choice for sustainable egg packaging',
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
      heading: 'Our Products',
      subheading: 'Innovative, eco-friendly, and durable moulded pulp packaging solutions custom-made for various industries.',
      exploreBtn: 'Explore All Products',
      items: [
        {
          title: 'Electronic Industrial Packaging',
          desc: 'Custom moulded pulp packaging that provides anti-static, shock-absorbing protection for sensitive electronic components.',
          badge: 'Electronics'
        },
        {
          title: 'Wine Tray',
          desc: 'Strong and durable pulp trays designed to hold wine bottles securely, preventing breakage during shipping and transit.',
          badge: 'Beverages'
        },
        {
          title: 'Egg Carton',
          desc: 'Sturdy, eco-friendly cartons with secure locking covers to protect eggs and display branding for retail.',
          badge: 'Retail Poultry'
        },
        {
          title: 'Egg Tray',
          desc: 'Classic, heavy-duty 30-cell egg trays engineered to absorb shocks and protect eggs during storage and high-volume transit.',
          badge: 'Poultry Farms'
        },
        {
          title: 'Food Product Packaging',
          desc: 'Biodegradable and moisture-resistant pulp trays designed for fruits, vegetables, and other food products.',
          badge: 'Agriculture'
        },
        {
          title: 'Handicraft Packaging',
          desc: 'Protective and customizable moulded packaging that cushions delicate handicrafts, artifacts, and gifts.',
          badge: 'Handicrafts'
        },
        {
          title: 'Textile Industry Cones',
          desc: 'High-strength paper cones designed for yarn winding and textile manufacturing processes.',
          badge: 'Textiles'
        }
      ]
    },
    // Testimonials Section
    testimonials: {
      heading: 'What Our Clients Will Say',
      subheading: 'We are just getting started - Your review could be featured here!',
      test1: 'NSK AGRO INDUSTRIES has been our trusted supplier for over 3 years. Their egg trays are incredibly durable and eco-friendly. Our customers love the sustainable packaging!',
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
      subheading: 'Ready to Partner with NSK AGRO INDUSTRIES?',
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
      address: 'NSK AGRO INDUSTRIES,\nRamachandra puram,\nNegamam, Pollachi,\nCoimbatore, Tamil Nadu, 642120',
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
      copyright: 'Copyright © 2026 NSK AGRO INDUSTRIES. All Rights Reserved.',
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
      badge: '',
      title: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ்',
      subtitle: 'NOVAPAC delivers innovative, eco-friendly pulp packaging solutions that protect your products and our planet.',
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
      title: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ் பற்றி',
      para1: 'என்.எஸ்.கே ஆக்ரோ இண்டஸ்ட்ரீஸ் தனது முதன்மை பிராண்டான நோவாபாக் (NOVAPAC) இன் கீழ் நிலையான காகித அடிப்படையிலான பேக்கேஜிங் தீர்வுகளை தயாரிப்பதில் முன்னணி நிறுவனமாகும்.',
      para2: 'முட்டை தட்டுகள், தொழில்துறை பாதுகாப்பு பேக்கேஜிங், எலக்ட்ரானிக் பேக்கேஜிங் மற்றும் பல்வேறு தொழில்களின் வளர்ந்து வரும் தேவைகளைப் பூர்த்தி செய்யும் வகையில் வடிவமைக்கப்பட்ட தனிப்பயன் கூழ்-வடிவமைக்கப்பட்ட தீர்வுகள் உள்ளிட்ட உயர்தர வார்ப்பட கூழ் தயாரிப்புகளில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.',
      para3: 'மேம்பட்ட கூழ் வார்ப்பு தொழில்நுட்பம் மற்றும் மறுசுழற்சி செய்யப்பட்ட காகித வளங்களைப் பயன்படுத்தி, விவசாயம், உணவு பதப்படுத்துதல், எலக்ட்ரானிக்ஸ், உற்பத்தி மற்றும் தளவாடத் துறைகளுக்கு சேவை செய்யும் நீடித்த, செலவு குறைந்த மற்றும் சுற்றுச்சூழல் நட்பு பேக்கேஜிங் தீர்வுகளை நாங்கள் உருவாக்குகிறோம்.',
      para4: 'நவீன உற்பத்தி வசதிகள், திறமையான பணியாளர்கள் மற்றும் நிலைத்தன்மைக்கான வலுவான அர்ப்பணிப்பு ஆகியவற்றுடன், ஒவ்வொரு நோவாபாக் (NOVAPAC) தயாரிப்பும் தரம், நம்பகத்தன்மை மற்றும் சுற்றுச்சூழல் பொறுப்பின் மிக உயர்ந்த தரநிலைகளை அடைவதை நாங்கள் உறுதி செய்கிறோம்.',
      visionTitle: 'எங்கள் தொலைநோக்கு',
      visionDesc: 'வணிகங்களை ஆதரிக்கும் அதே வேளையில் பசுமையான எதிர்காலத்திற்கு பங்களிக்கும் புதுமையான, சுற்றுச்சூழல் பொறுப்புள்ள தயாரிப்புகளை வழங்குவதன் மூலம் நிலையான பேக்கேஜிங் தீர்வுகளில் நம்பகமான தலைவராக மாறுவது.',
      missionTitle: 'எங்கள் இலக்கு',
      missionDesc: 'வாடிக்கையாளர் திருப்தி, செயல்பாட்டு சிறந்து விளங்குதல் மற்றும் சுற்றுச்சூழல் பாதுகாப்பு ஆகியவற்றை உறுதி செய்யும் அதே வேளையில், மேம்பட்ட தொழில்நுட்பம், நிலையான நடைமுறைகள் மற்றும் தொடர்ச்சியான கண்டுபிடிப்புகள் மூலம் உயர்தர வார்ப்பட கூழ் பேக்கேஜிங் தயாரிப்புகளை தயாரிப்பது.',
      whyTitle: 'ஏன் நோவாபாக் (NOVAPAC)?',
      whyBullets: [
        'நிலையான மற்றும் சுற்றுச்சூழல் நட்பு பேக்கேஜிங் தீர்வுகள்',
        'மறுசுழற்சி செய்யப்பட்ட காகித வளங்களைப் பயன்படுத்தி தயாரிக்கப்படுகிறது',
        'நீடித்த, இலகுரக மற்றும் செலவு குறைந்த தயாரிப்புகள்',
        'பல்வேறு தொழில்களுக்கான தனிப்பயன் பேக்கேஜிங் தீர்வுகள்',
        'நிலையான தரம் மற்றும் நம்பகமான விநியோகம்'
      ],
      tagline: 'நோவாபாக் (NOVAPAC) — தயாரிப்புகள், வணிகங்கள் மற்றும் கிரகத்தைப் பாதுகாக்கும் நிலையான பேக்கேஜிங்.',
      industriesTitle: 'நாங்கள் சேவை செய்யும் தொழில்கள்',
      industriesBullets: [
        'கோழி பண்ணைகள்',
        'விவசாயம்',
        'உணவு பதப்படுத்துதல்',
        'எலக்ட்ரானிக்ஸ்',
        'ஜவுளி',
        'தளவாடங்கள் மற்றும் போக்குவரத்து'
      ],
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
      heading: 'எங்கள் தயாரிப்புகள்',
      subheading: 'பல்வேறு தொழில்களுக்காக வடிவமைக்கப்பட்ட புதுமையான, சுற்றுச்சூழல் நட்பு மற்றும் நீடித்த வார்ப்பட கூழ் பேக்கேஜிங் தீர்வுகள்.',
      exploreBtn: 'அனைத்து தயாரிப்புகளையும் ஆராயுங்கள்',
      items: [
        {
          title: 'எலக்ட்ரானிக் தொழில்துறை பேக்கேஜிங்',
          desc: 'உணர்திறன் கொண்ட எலக்ட்ரானிக் கூறுகளுக்கு அதிர்ச்சி-உறிஞ்சும் பாதுகாப்பை வழங்கும் தனிப்பயன் பேக்கேஜிங்.',
          badge: 'எலக்ட்ரானிக்ஸ்'
        },
        {
          title: 'ஒயின் தட்டு',
          desc: 'ஒயின் பாட்டில்களை பாதுகாப்பாக வைத்திருக்க வடிவமைக்கப்பட்ட வலுவான மற்றும் நீடித்த கூழ் தட்டுகள்.',
          badge: 'பானங்கள்'
        },
        {
          title: 'முட்டை அட்டைப்பெட்டி',
          desc: 'முட்டைகளைப் பாதுகாக்கவும் சில்லறை விற்பனைக்கு பிராண்டிங்கைக் காட்டவும் பாதுகாப்பான மூடிகளுடன் கூடிய வலுவான அட்டைப்பெட்டிகள்.',
          badge: 'சில்லறை விற்பனை'
        },
        {
          title: 'முட்டை தட்டு',
          desc: 'போக்குவரத்தின் போது முட்டைகளை அதிர்ச்சியிலிருந்து பாதுகாக்கும் உன்னதமான 30-செல் முட்டை தட்டுகள்.',
          badge: 'கோழி பண்ணைகள்'
        },
        {
          title: 'உணவுப் பொருள் பேக்கேஜிங்',
          desc: 'பழங்கள், காயறிகள் மற்றும் இதர உணவுப் பொருட்களுக்காக வடிவமைக்கப்பட்ட மக்கும் மற்றும் ஈரப்பதம் எதிர்க்கும் தட்டுகள்.',
          badge: 'விவசாயம்'
        },
        {
          title: 'கைவினைப்பொருள் பேக்கேஜிங்',
          desc: 'மென்மையான கைவினைப்பொருட்கள் மற்றும் பரிசுகளைப் பாதுகாக்கும் தனிப்பயனாக்கக்கூடிய வார்ப்பட பேக்கேஜிங்.',
          badge: 'கைவினைப்பொருட்கள்'
        },
        {
          title: 'ஜவுளித் தொழில்துறை கூம்புகள்',
          desc: 'நூல் சுருட்டுதல் மற்றும் ஜவுளி உற்பத்தி செயல்முறைகளுக்காக வடிவமைக்கப்பட்ட உயர் வலிமை கொண்ட காகித கூம்புகள்.',
          badge: 'ஜவுளித் துறை'
        }
      ]
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
