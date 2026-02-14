import React from 'react';
import LandingPage from '../pages/LandingPage';
import { LanguageProvider } from '../context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LandingPage />
      </div>
    </LanguageProvider>
  );
}

export default App;
