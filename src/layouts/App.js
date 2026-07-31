import React, { useState, useEffect } from 'react';
import LandingPage from '../pages/LandingPage';
import ExploreProductsPage from '../pages/ExploreProductsPage';
import { LanguageProvider } from '../context/LanguageContext';

const SITE_URL = 'https://nskagroindustries.com';

const HOME_SEO = {
  title: 'NSK Agro Industries - Eco-Friendly Egg Trays',
  description: 'NSK Agro Industries manufactures eco-friendly paper pulp egg trays and sustainable packaging solutions for poultry farms and egg producers.',
  canonical: SITE_URL,
  ogType: 'business.business',
  image: `${SITE_URL}/logo192.png?v=2`,
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'NSK Agro Industries',
        url: SITE_URL,
      },
      {
        '@type': 'WebPage',
        name: 'NSK Agro Industries - Eco-Friendly Egg Trays',
        url: SITE_URL,
        description: 'Manufacturer of eco-friendly paper pulp egg trays and sustainable packaging solutions.',
      },
      {
        '@type': 'Organization',
        name: 'NSK Agro Industries',
        url: SITE_URL,
        logo: `${SITE_URL}/logo192.png?v=2`,
      },
      {
        '@type': 'LocalBusiness',
        name: 'NSK Agro Industries',
        telephone: '+91-9788778666',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
      },
    ],
  },
};

const EXPLORE_SEO = {
  title: 'Explore Products | NSK Agro Industries',
  description: 'Explore eco-friendly moulded pulp packaging products from NSK Agro Industries for poultry, agriculture, electronics, food, textiles, and logistics.',
  canonical: `${SITE_URL}/explore-products`,
  ogType: 'website',
  image: `${SITE_URL}/logo192.png?v=2`,
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'NSK Agro Industries',
        url: SITE_URL,
      },
      {
        '@type': 'WebPage',
        name: 'Explore Products | NSK Agro Industries',
        url: `${SITE_URL}/explore-products`,
        description: 'Explore eco-friendly moulded pulp packaging products from NSK Agro Industries.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Explore Products',
            item: `${SITE_URL}/explore-products`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'NSK Agro Industries Product List',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'Electronic Industrial Packaging',
              description: 'Custom moulded pulp packaging for sensitive electronic components.',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              name: 'Wine Tray',
              description: 'Durable pulp trays designed to hold wine bottles securely.',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Product',
              name: 'Egg Carton',
              description: 'Eco-friendly cartons with secure locking covers for retail eggs.',
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Product',
              name: 'Egg Tray',
              description: 'Heavy-duty 30-cell egg trays for storage and transit.',
            },
          },
        ],
      },
    ],
  },
};

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  const seo = currentHash === '#/explore-products' ? EXPLORE_SEO : HOME_SEO;

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = seo.title;

    const upsertMeta = (attribute, name, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const upsertLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:image', seo.image);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', seo.image);
    upsertLink('canonical', seo.canonical);

    let schemaScript = document.getElementById('route-seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'route-seo-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(seo.schema);
  }, [seo]);

  const isExplorePage = currentHash === '#/explore-products';

  return (
    <LanguageProvider>
      <div className="App">
        {isExplorePage ? <ExploreProductsPage /> : <LandingPage />}
      </div>
    </LanguageProvider>
  );
}

export default App;
