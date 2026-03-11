import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { siteCopy } from '@/libs/siteCopy';
import { useSiteLanguage } from '@/libs/siteLanguage';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useSiteLanguage();
  const copy = siteCopy[language];
  const cvFileUrl = '/files/Marlene CV - EN.pdf';
  const logoUrl = '/images/logoWhite.png';
  const ptFlagUrl = '/icon/pt-dark.png';
  const enFlagUrl = '/icon/en-dark.png';

  const navItems = [
    { id: 'home', label: copy.nav.home },
    { id: 'about', label: copy.nav.about },
    { id: 'experience', label: copy.nav.experience },
    { id: 'projects', label: copy.nav.projects },
    { id: 'contact', label: copy.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-pink-500/10 border-b border-pink-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-20 py-6 lg:h-20">
          <div className="flex items-center">
            <img
              src={logoUrl}
              alt="Marlene Condesso Logo"
              className="h-12 md:h-14 brightness-110 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative text-base font-semibold transition-all cursor-pointer whitespace-nowrap group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-pink-400'
                      : 'text-slate-300 group-hover:text-pink-400'
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={cvFileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-pink-400 transition-colors duration-300 px-4 font-semibold text-sm whitespace-nowrap cursor-pointer"
            >
              {copy.nav.previewCv}
            </a>
            <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/50">
              <div className="flex gap-2 bg-slate-700/60 rounded-lg p-2">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`${language === 'pt' ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity cursor-pointer`}
                  aria-label={copy.nav.portuguese}
                >
                  <img
                    src={ptFlagUrl}
                    alt="PT"
                    className="h-4"
                  />
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`${language === 'en' ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity cursor-pointer`}
                  aria-label={copy.nav.english}
                >
                  <img
                    src={enFlagUrl}
                    alt="EN"
                    className="h-4"
                  />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-pink-400 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          >
            {isMobileMenuOpen ? <IoClose size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-pink-500/20 z-40 transform transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-8 mt-20">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left text-lg font-semibold transition-all cursor-pointer whitespace-nowrap group"
              style={{
                animation: isMobileMenuOpen
                  ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-pink-400'
                    : 'text-slate-300 group-hover:text-pink-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
          <div className="border-t border-slate-700 pt-6 mt-4">
            <a
              href={cvFileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-pink-400 transition-colors duration-300 font-semibold text-base whitespace-nowrap cursor-pointer block mb-4"
            >
              {copy.nav.previewCv}
            </a>
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage('pt')}
                className={`${language === 'pt' ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity cursor-pointer`}
                aria-label={copy.nav.portuguese}
              >
                <img
                  src={ptFlagUrl}
                  alt="PT"
                  className="h-5"
                />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`${language === 'en' ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity cursor-pointer`}
                aria-label={copy.nav.english}
              >
                <img
                  src={enFlagUrl}
                  alt="EN"
                  className="h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
