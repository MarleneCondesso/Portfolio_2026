import { useEffect, useRef, useState } from 'react';
import { siteCopy } from '@/libs/siteCopy';
import { useSiteLanguage } from '@/libs/siteLanguage';

const floatingParticles = Array.from({ length: 20 }, (_, index) => ({
  left: `${(index * 19 + 7) % 100}%`,
  top: `${(index * 23 + 11) % 100}%`,
  animationDelay: `${(index % 5) * 0.7}s`,
  animationDuration: `${7 + (index % 6)}s`,
}));

export default function Hero() {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { language } = useSiteLanguage();
  const copy = siteCopy[language];
  const cvFileUrl = '/files/Marlene CV - EN.pdf';

  useEffect(() => {
    const texts = copy.hero.roles;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;
    const target = typewriterRef.current;

    const type = () => {
      const currentText = texts[textIndex];
      
      if (target) {
        if (!isDeleting) {
          target.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          
          if (charIndex === currentText.length) {
            isDeleting = true;
            timeout = setTimeout(type, 2000);
            return;
          }
        } else {
          target.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          
          if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
          }
        }
      }
      
      timeout = setTimeout(type, isDeleting ? 50 : 100);
    };

    type();

    return () => {
      clearTimeout(timeout);

      if (target) {
        target.textContent = '';
      }
    };
  }, [copy.hero.roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'hero-ripple';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen relative px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-60"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle, i) => (
          <div
            key={i}
            className="hero-animate-float absolute h-2 w-2 rounded-full bg-pink-500/30"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      <div
        className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transition: 'all 0.3s ease-out',
        }}
      />

      <div className="flex flex-col gap-6 items-center text-center relative z-10">
        <div className="overflow-hidden">
          <h1
            data-text={copy.hero.nameLine}
            className="hero-animate-gradient hero-glitch-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-[length:200%_auto] bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            {copy.hero.nameLine}
          </h1>
        </div>

        <div className="flex items-center gap-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="text-slate-300 font-light">{copy.hero.intro}</span>
          <div className="relative">
            <span
              ref={typewriterRef}
              className="text-pink-400 font-semibold"
            ></span>
            <span className="text-pink-400 animate-pulse ml-1">|</span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleCTAClick}
            className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden group cursor-pointer whitespace-nowrap transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105"
          >
            <span className="relative z-10">{copy.hero.contactButton}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <a
            href={cvFileUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border-2 border-pink-500 text-pink-400 font-semibold rounded-lg cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:scale-105"
          >
            {copy.hero.resumeButton}
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/MarleneCondesso"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-pink-400 hover:border-pink-500 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/marleneflima/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-pink-400 hover:border-pink-500 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <i className="ri-linkedin-fill text-2xl"></i>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-pink-400/50"></i>
      </div>
    </section>
  );
}
