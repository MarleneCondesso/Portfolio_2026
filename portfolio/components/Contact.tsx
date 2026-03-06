import { useEffect, useState } from 'react';

const contactShapes = Array.from({ length: 20 }, (_, index) => ({
  width: `${70 + (index % 5) * 30}px`,
  height: `${70 + ((index + 2) % 5) * 30}px`,
  left: `${(index * 17 + 9) % 100}%`,
  top: `${(index * 21 + 13) % 100}%`,
  transform: `rotate(${(index * 29) % 360}deg)`,
  animation: `float ${10 + (index % 6)}s ease-in-out infinite`,
}));

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const title = 'SAY HI!';
  const cvFileUrl = '/files/Marlene CV - EN.pdf';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/30">
        <div className="absolute inset-0 opacity-10">
          {contactShapes.map((shape, index) => (
            <div
              key={index}
              className="absolute border border-pink-500/30"
              style={{
                width: shape.width,
                height: shape.height,
                left: shape.left,
                top: shape.top,
                transform: shape.transform,
                animation: shape.animation,
              }}
            />
          ))}
        </div>
      </div>

      <section
        id="contact"
        className="relative flex flex-col items-center justify-center px-5 pb-20 pt-20 lg:pt-32"
      >
        <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center">
          <div className="mb-8 flex gap-2">
            {title.split('').map((letter, index) => (
              <h1
                key={index}
                className={`bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-extrabold text-transparent transition-all duration-500 md:text-5xl xl:text-7xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  animation: isVisible
                    ? `bounce 0.6s ease-in-out ${index * 0.1}s`
                    : 'none',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </h1>
            ))}
          </div>

          <div
            className={`w-full py-12 text-center text-md font-medium leading-relaxed tracking-wide text-slate-300 transition-all duration-700 lg:text-base xl:text-lg ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <p>
              I&apos;m currently looking for any opportunities and challenges to
              merge into this area and improve my skills. My inbox is always
              open. I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div
            className={`mb-12 flex flex-col gap-6 transition-all duration-700 lg:flex-row ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <a
              href="mailto:marleneflima.official@gmail.com"
              className="group relative flex h-14 w-44 cursor-pointer flex-row items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-pink-500 font-semibold text-white whitespace-nowrap xl:h-16 xl:w-52"
            >
              <div className="absolute inset-0 translate-y-full transform bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
              <i className="ri-mail-line relative z-10 text-xl transition-transform duration-300 group-hover:scale-110"></i>
              <span className="relative z-10">Email</span>
            </a>
            <a
              href={cvFileUrl}
              download="Marlene CV - EN.pdf"
              className="group relative flex h-14 w-44 cursor-pointer flex-row items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-purple-500 font-semibold text-white whitespace-nowrap xl:h-16 xl:w-52"
            >
              <div className="absolute inset-0 translate-y-full transform bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
              <i className="ri-download-line relative z-10 text-xl transition-transform duration-300 group-hover:scale-110"></i>
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          <div
            className={`flex flex-row gap-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <a
              href="https://github.com/MarleneCondesso"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-slate-800/50 transition-all duration-300 hover:rotate-12 hover:scale-110 hover:bg-pink-500"
            >
              <i className="ri-github-fill text-2xl text-slate-300 transition-colors duration-300 group-hover:text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marleneflima/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-slate-800/50 transition-all duration-300 hover:rotate-12 hover:scale-110 hover:bg-blue-500"
            >
              <i className="ri-linkedin-fill text-2xl text-slate-300 transition-colors duration-300 group-hover:text-white"></i>
            </a>
          </div>

          <div
            className={`mt-16 text-sm text-slate-400 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1.4s' }}
          >
            <p>(c) 2024 Marlene Condesso. All rights reserved.</p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </footer>
  );
}
