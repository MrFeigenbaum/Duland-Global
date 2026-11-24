import React from 'react';
import { Home, ArrowRight, Compass, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const NotFoundPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();

  const content = {
    EN: {
      eyebrow: 'Error 404 • Page Not Found',
      title: 'Requested Document or Page Not Located',
      desc: 'The corporate page or investment asset you are attempting to access does not exist, has been archived, or was relocated within our platform.',
      returnHome: 'Return to Homepage',
      exploreInvestments: 'Explore Investments',
      contactDesk: 'Contact Corporate Desk',
    },
    HU: {
      eyebrow: '404-es Hiba • Az oldal nem található',
      title: 'A keresett oldal vagy dokumentum nem található',
      desc: 'A megnyitni kívánt vállalati oldal vagy befektetési eszköz nem létezik, archiválásra került vagy új helyre költözött rendszerünkben.',
      returnHome: 'Vissza a Kezdőlapra',
      exploreInvestments: 'Befektetéseink megtekintése',
      contactDesk: 'Kapcsolatfelvétel',
    },
    DE: {
      eyebrow: 'Fehler 404 • Seite nicht gefunden',
      title: 'Angeforderte Seite nicht gefunden',
      desc: 'Die gewünschte Unternehmensseite oder Investitionsposition existiert nicht oder wurde innerhalb unserer Plattform verschoben.',
      returnHome: 'Zur Startseite',
      exploreInvestments: 'Investitionen entdecken',
      contactDesk: 'Kontakt aufnehmen',
    },
    UZ: {
      eyebrow: 'Xatolik 404 • Sahifa topilmadi',
      title: 'Soʻralgan sahifa yoki hujjat topilmadi',
      desc: 'Siz murojaat qilayotgan korporativ sahifa yoki investitsiya aktivi mavjud emas yoki boshqa joyga koʻchirilgan.',
      returnHome: 'Bosh sahifaga qaytish',
      exploreInvestments: 'Investitsiyalarni koʻrish',
      contactDesk: 'Biz bilan bogʻlanish',
    }
  };

  const t404 = content[lang] || content.EN;

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center bg-[#fafcfb] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fadeIn">
        
        {/* Large 404 Visual Monogram */}
        <div className="relative inline-block">
          <div className="text-8xl sm:text-9xl font-serif font-extrabold text-slate-200 tracking-tighter select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center text-[#0b3b24]">
              <Compass className="w-8 h-8 stroke-[1.75] text-[#22c55e]" />
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b3b24] block">
            {t404.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {t404.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            {t404.desc}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0b3b24] hover:bg-[#072617] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{t404.returnHome}</span>
          </button>

          <button
            onClick={() => {
              setCurrentView('investments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#0b3b24] text-slate-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-2xs cursor-pointer"
          >
            <span>{t404.exploreInvestments}</span>
            <ArrowRight className="w-4 h-4 text-[#22c55e]" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
