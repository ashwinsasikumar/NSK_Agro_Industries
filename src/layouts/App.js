import React, { useState, useEffect } from 'react';
import LandingPage from '../pages/LandingPage';
import ExploreProductsPage from '../pages/ExploreProductsPage';
import { LanguageProvider } from '../context/LanguageContext';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
