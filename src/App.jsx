import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import InvestmentsPage from './components/InvestmentsPage';
import ApproachPage from './components/ApproachPage';
import ContactPage from './components/ContactPage';
import AssetDetailModal from './components/AssetDetailModal';
import LoadingScreen from './components/LoadingScreen';
import NotFoundPage from './components/NotFoundPage';
import WelcomeIntro from './components/WelcomeIntro';
import { LanguageProvider, useLanguage } from './LanguageContext';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showIntro, setShowIntro] = useState(() => {
    // Shows on first open in the session; resets when browser/tab is closed
    return !sessionStorage.getItem('duland_intro_shown');
  });
  const [isLoading, setIsLoading] = useState(false);
  const { lang, t } = useLanguage();

  // Smooth view transition with optional brief loading state
  const handleViewChange = (newView) => {
    if (newView === currentView) return;
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(newView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsLoading(false);
    }, 180);
  };

  // Sync window title with current view and language
  useEffect(() => {
    const titles = {
      home: `Duland Global | ${t.hero.titleLine1} ${t.hero.titleLine2} ${t.hero.titleLine3}`,
      about: `${t.nav.about} | Duland Global`,
      investments: `${t.nav.investments} | Duland Global`,
      approach: `${t.nav.approach} | Duland Global`,
      contact: `${t.nav.contact} | Duland Global`,
      '404': `404 - Page Not Found | Duland Global`
    };
    document.title = titles[currentView] || 'Duland Global';
  }, [currentView, lang, t]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#0b3b24] selection:text-white relative">
      
      {/* 1. Animated Welcome Intro (First-time visit per session) */}
      {showIntro && (
        <WelcomeIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Loading Screen */}
      {isLoading && (
        <LoadingScreen text="Loading..." />
      )}

      {/* 3. Persistent Navigation Header */}
      <Header currentView={currentView} setCurrentView={handleViewChange} />

      {/* 4. Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage 
            setCurrentView={handleViewChange} 
            setSelectedAsset={setSelectedAsset} 
          />
        )}
        {currentView === 'about' && (
          <AboutPage 
            setCurrentView={handleViewChange} 
          />
        )}
        {currentView === 'investments' && (
          <InvestmentsPage 
            setSelectedAsset={setSelectedAsset} 
            setCurrentView={handleViewChange} 
          />
        )}
        {currentView === 'approach' && (
          <ApproachPage 
            setCurrentView={handleViewChange} 
          />
        )}
        {currentView === 'contact' && (
          <ContactPage />
        )}
        {currentView === '404' && (
          <NotFoundPage setCurrentView={handleViewChange} />
        )}
      </main>

      {/* 5. Persistent Corporate Footer */}
      <Footer setCurrentView={handleViewChange} />

      {/* 6. Interactive Asset Detail Modal */}
      {selectedAsset && (
        <AssetDetailModal
          asset={selectedAsset}
          onClose={() => setSelectedAsset(null)}
          onContactClick={() => {
            setSelectedAsset(null);
            handleViewChange('contact');
          }}
        />
      )}
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
