import { useState, useEffect, useRef } from 'react';
import { skills } from '@/libs/portfolioData';


export default function TechnicalSkills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleSkills((prev) => Array.from(new Set([...prev, index])));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-item');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section className="flex flex-col mb-44" id="skills" ref={sectionRef}>
      <div className="text-slate-200 xl:text-4xl text-xl font-bold items-center gap-6 py-16 relative">
        <span className="relative inline-block">
          Technical Skills
          <div className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent xl:w-32 w-20"></div>
        </span>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleSkills([]);
            }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeCategory === category
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50 scale-105'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid with circular progress */}
      <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {filteredSkills.map((skill, index) => {
          const SkillIcon = skill.icon;

          return (
            <div
              key={`${skill.name}-${activeCategory}`}
              data-index={index}
              className={`skill-item relative group ${
                visibleSkills.includes(index)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-75'
              } transition-all duration-500 ease-out`}
            >
              {/* Circular progress background */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer">
                {/* SVG Circular Progress */}
                <div className="relative w-24 h-24 mb-4">
                  <svg className="transform -rotate-90 w-24 h-24">
                    {/* Background circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-slate-700"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - (visibleSkills.includes(index) ? skill.level / 100 : 0))}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#9333ea" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <SkillIcon
                      className="text-[2.35rem] drop-shadow-[0_0_10px_rgba(15,23,42,0.15)]"
                      style={{ color: skill.iconColor }}
                    />
                  </div>

                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-300 mt-12">
                      {visibleSkills.includes(index) ? skill.level : 0}%
                    </span>
                  </div>
                </div>

                {/* Skill name */}
                <span className="text-slate-200 text-sm font-semibold text-center">
                  {skill.name}
                </span>

                {/* Category badge */}
                <span className="mt-2 px-2 py-1 bg-slate-900/50 border border-slate-700/50 rounded-full text-xs text-slate-400">
                  {skill.category}
                </span>

                {/* Tooltip on hover */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-pink-500/50 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-xl">
                  <div className="text-xs font-semibold text-pink-400">Proficiency: {skill.level}%</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900 border-r border-b border-pink-500/50"></div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
