import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / windowHeight) * 100;

      setScrollProgress(progress);

      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 cursor-pointer transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Background */}
          <svg
            className="absolute inset-0 -rotate-90 w-14 h-14"
            viewBox="0 0 48 48"
          >
            {/* Background Circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="3"
            />
            {/* Progress Circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button Content */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md flex items-center justify-center border border-slate-700/50 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300">
            <i className="ri-arrow-up-line text-2xl text-slate-300 group-hover:text-pink-400 transition-all duration-300 group-hover:-translate-y-1"></i>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </button>
      )}
    </>
  );
}