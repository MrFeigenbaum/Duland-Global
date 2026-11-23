import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import InvestmentsPage from './components/InvestmentsPage';
import ApproachPage from './components/ApproachPage';
import ContactPage from './components/ContactPage';
import AssetDetailModal from './components/AssetDetailModal';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Sync window title with current view
  useEffect(() => {
    const titles = {
      home: 'Duland Global | Investing in Real Assets for Lasting Value',
      about: 'About Us | Duland Global',
      investments: 'Our Investments | Duland Global',
      approach: 'Investment Approach | Duland Global',
      contact: 'Contact | Duland Global',
    };
    document.title = titles[currentView] || 'Duland Global';
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#006400] selection:text-white">
      {/* Persistent Navigation Header */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage 
            setCurrentView={setCurrentView} 
            setSelectedAsset={setSelectedAsset} 
          />
        )}
        {currentView === 'about' && (
          <AboutPage 
            setCurrentView={setCurrentView} 
          />
        )}
        {currentView === 'investments' && (
          <InvestmentsPage 
            setSelectedAsset={setSelectedAsset} 
            setCurrentView={setCurrentView} 
          />
        )}
        {currentView === 'approach' && (
          <ApproachPage 
            setCurrentView={setCurrentView} 
          />
        )}
        {currentView === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Corporate Footer */}
      <Footer setCurrentView={setCurrentView} />

      {/* Interactive Asset Detail Modal */}
      {selectedAsset && (
        <AssetDetailModal
          asset={selectedAsset}
          onClose={() => setSelectedAsset(null)}
          onContactClick={() => {
            setSelectedAsset(null);
            setCurrentView('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}

export default App;
