import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoadingScreen from './components/LoadingScreen';
import WelcomeIntro from './components/WelcomeIntro';
import { LanguageProvider, useLanguage } from './LanguageContext';
import SITE_CONFIG from './config/siteConfig';

const AboutPage = lazy(() => import('./components/AboutPage'));
const InvestmentsPage = lazy(() => import('./components/InvestmentsPage'));
const ApproachPage = lazy(() => import('./components/ApproachPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const AssetDetailModal = lazy(() => import('./components/AssetDetailModal'));

function getViewFromPath(pathname) {
  const { routes } = SITE_CONFIG;
  const clean = (pathname || '/').toLowerCase().replace(/\/+$/, '') || '/';
  if (clean === '/' || clean === '/home' || clean === '/index.html') return routes.home;
  if (clean === '/about') return routes.about;
  if (clean === '/investments') return routes.investments;
  if (clean === '/approach') return routes.approach;
  if (clean === '/contact') return routes.contact;
  return routes.notFound;
}

function getPathFromView(view) {
  const { routes } = SITE_CONFIG;
  if (view === routes.about) return '/about';
  if (view === routes.investments) return '/investments';
  if (view === routes.approach) return '/approach';
  if (view === routes.contact) return '/contact';
  return '/';
}

function AppContent() {
  const [currentView, setCurrentView] = useState(() =>
    typeof window !== 'undefined'
      ? getViewFromPath(window.location.pathname)
      : SITE_CONFIG.routes.home
  );
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showIntro, setShowIntro] = useState(() => {
    try {
      // Shows on first open in the session; resets when browser/tab is closed
      return !sessionStorage.getItem(SITE_CONFIG.introSessionKey);
    } catch {
      return false;
    }
  });
  const { lang, t } = useLanguage();

  // Sync browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Prefetch secondary route chunks on idle so navigation is instantaneous
  useEffect(() => {
    const prefetchPages = () => {
      import('./components/AboutPage');
      import('./components/InvestmentsPage');
      import('./components/ApproachPage');
      import('./components/ContactPage');
      import('./components/AssetDetailModal');
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetchPages, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(prefetchPages, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Instant view switch with clean URL history update & smooth scroll to top
  const handleViewChange = (newView) => {
    if (newView === currentView) return;
    setCurrentView(newView);
    if (typeof window !== 'undefined' && newView !== SITE_CONFIG.routes.notFound) {
      const targetPath = getPathFromView(newView);
      const currentPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
      if (currentPath !== targetPath) {
        window.history.pushState({ view: newView }, '', targetPath);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync window title & canonical link with current view and language
  useEffect(() => {
    const { brandName, routes } = SITE_CONFIG;
    const titles = {
      [routes.home]: `${brandName} | ${t.hero.titleLine1} ${t.hero.titleLine2} ${t.hero.titleLine3}`,
      [routes.about]: `${t.nav.about} | ${brandName}`,
      [routes.investments]: `${t.nav.investments} | ${brandName}`,
      [routes.approach]: `${t.nav.approach} | ${brandName}`,
      [routes.contact]: `${t.nav.contact} | ${brandName}`,
      [routes.notFound]: t.common.notFoundTitle
    };
    document.title = titles[currentView] || brandName;

    if (typeof document !== 'undefined' && currentView !== routes.notFound) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://www.dulandglobal.com${getPathFromView(currentView)}`);
      }
    }
  }, [currentView, lang, t]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#0b3b24] selection:text-white relative overflow-x-clip">
      
      {/* 1. Animated Welcome Intro (First-time visit per session) */}
      {showIntro && (
        <WelcomeIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Persistent Navigation Header */}
      <Header currentView={currentView} setCurrentView={handleViewChange} />

      {/* 3. Main View Router with Suspense & Smooth Entrance */}
      <main key={currentView} className="flex-1 animate-pageEnter">
        <Suspense fallback={<LoadingScreen text={t.common.loading} />}>
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
        </Suspense>
      </main>

      {/* 4. Persistent Corporate Footer */}
      <Footer setCurrentView={handleViewChange} />

      {/* 5. Interactive Asset Detail Modal */}
      {selectedAsset && (
        <Suspense fallback={null}>
          <AssetDetailModal
            asset={selectedAsset}
            onClose={() => setSelectedAsset(null)}
            onContactClick={() => {
              setSelectedAsset(null);
              handleViewChange('contact');
            }}
          />
        </Suspense>
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
