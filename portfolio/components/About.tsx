import { useEffect, useRef, useState } from 'react';
import { siteCopy } from '@/libs/siteCopy';
import { useSiteLanguage } from '@/libs/siteLanguage';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [tiltStyle, setTiltStyle] = useState({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { language } = useSiteLanguage();
  const copy = siteCopy[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate years counter
          let count = 0;
          const target = 1;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              setYearsCount(target);
              clearInterval(timer);
            } else {
              setYearsCount(Math.floor(count));
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  const handleHireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'absolute rounded-full bg-white/30 animate-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '0px';
    ripple.style.height = '0px';

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  const infoCards = [
    {
      icon: 'ri-cake-3-line',
      label: copy.about.infoCards.birthdayLabel,
      value: copy.about.infoCards.birthdayValue,
    },
    {
      icon: 'ri-book-open-line',
      label: copy.about.infoCards.studyLabel,
      value: copy.about.infoCards.studyValue,
    },
    {
      icon: 'ri-heart-line',
      label: copy.about.infoCards.interestLabel,
      value: copy.about.infoCards.interestValue,
    },
    {
      icon: 'ri-map-pin-line',
      label: copy.about.infoCards.locationLabel,
      value: copy.about.infoCards.locationValue,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient">
              {copy.about.title}
            </span>
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with 3D Tilt */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative max-w-md mx-auto">
              {/* Animated border frame */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-border animate-border-spin rounded-2xl"></div>
              </div>

              {/* Image container with 3D tilt */}
              <div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative z-10 rounded-2xl overflow-hidden transition-transform duration-300 ease-out"
                style={tiltStyle}
              >
                <img
                  src="/images/profile.png"
                  alt="Marlene Condesso"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Years of experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 shadow-2xl z-20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{yearsCount}</div>
                  <div className="text-sm text-white/90 mt-1">{copy.about.yearsLabel}</div>
                  <div className="text-xs text-white/80">{copy.about.experienceLabel}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info & Bio */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {infoCards.map((card, index) => (
                <div
                  key={card.label}
                  className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg">
                      <i className={`${card.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{card.label}</div>
                      <div className="text-sm text-white font-medium">{card.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bio Text with highlighted keywords */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                {copy.about.paragraphs.introLead}
                <span className="text-pink-400 font-semibold highlight-word">{copy.about.paragraphs.introName}</span>
                {copy.about.paragraphs.introMiddle}
                <span className="text-purple-400 font-semibold highlight-word">{copy.about.paragraphs.introRole}</span>
                {copy.about.paragraphs.introEnd}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {copy.about.paragraphs.experienceLead}
                <span className="text-pink-400 font-semibold highlight-word">{copy.about.paragraphs.experienceHighlight}</span>
                {copy.about.paragraphs.experienceMiddle}
                <span className="text-pink-400 font-semibold highlight-word">{copy.about.paragraphs.experienceTechOne}</span>,{' '}
                <span className="text-pink-400 font-semibold highlight-word">{copy.about.paragraphs.experienceTechTwo}</span>,{' '}
                <span className="text-pink-400 font-semibold highlight-word">{copy.about.paragraphs.experienceTechThree}</span>
                {copy.about.paragraphs.experienceEnd}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {copy.about.paragraphs.growthLead}
                <span className="text-purple-400 font-semibold highlight-word">{copy.about.paragraphs.growthHighlight}</span>
                {copy.about.paragraphs.growthMiddle}
                <span className="text-pink-400 font-semibold highlight-word">{copy.about.paragraphs.growthEmphasis}</span>
                {copy.about.paragraphs.growthEnd}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {copy.about.paragraphs.closing}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">{copy.about.growth}</span>
                <span className="text-sm text-pink-400 font-semibold">35%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-2000 ease-out ${
                    isVisible ? 'w-[35%]' : 'w-0'
                  }`}
                ></div>
              </div>
            </div>

            {/* Hire Me Button with Ripple Effect */}
            <button
              onClick={handleHireClick}
              className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden group hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="ri-mail-send-line text-xl"></i>
                {copy.about.hireMe}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
