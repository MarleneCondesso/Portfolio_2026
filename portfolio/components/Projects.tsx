import { useState, useEffect, useRef } from 'react';
import {featuredProjects, sideProjects, ProjectFilter } from '../libs/portfolioData';


export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('All');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

 
  const allProjects = showAll ? [...featuredProjects, ...sideProjects] : featuredProjects;

  const filters = ['All', 'React', 'Next.js', 'Typescript', 'C#', 'MongoDB', 'Vite'];

  const filteredProjects = selectedFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.filters.includes(selectedFilter));

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      'React': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
      'Next.js': 'bg-slate-500/20 text-slate-300 border-slate-500/50',
      'Typescript': 'bg-blue-500/20 text-blue-300 border-blue-500/50',
      'Javascript': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      'Tailwind CSS': 'bg-teal-500/20 text-teal-300 border-teal-500/50',
      'MongoDB': 'bg-green-500/20 text-green-300 border-green-500/50',
      'C#': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
      'Razor': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50',
      'API': 'bg-orange-500/20 text-orange-300 border-orange-500/50',
      'CSS': 'bg-pink-500/20 text-pink-300 border-pink-500/50',
    };
    return colors[tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => Array.from(new Set([...prev, index])));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects.length]);

  return (
    <section id="projects" className="flex flex-col mb-72 lg:gap-20" ref={sectionRef}>
      <div className="text-slate-200 xl:text-4xl text-xl font-medium items-center gap-6 py-16">
        Projects
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1 xl:w-28 w-16 translate-y-5"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter as ProjectFilter)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
              selectedFilter === filter
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50 scale-105'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-200 border border-slate-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center flex-col w-full self-center gap-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center items-center justify-center gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card group perspective-1000 transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index % 3) * 150}ms` }}
            >
              <div className="relative w-80 h-96 2xl:w-96 2xl:h-[28rem] preserve-3d group-hover:rotate-y-180 transition-transform duration-700 cursor-pointer">
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 shadow-2xl">
                  <div className="relative w-full h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col gap-4">
                    <h2 className="text-slate-100 font-bold text-xl 2xl:text-2xl">
                      {project.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tools, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTechColor(tools)}`}
                        >
                          {tools}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-center gap-2 text-pink-400 text-sm font-medium">
                      <span>Hover to see details</span>
                      <i className="ri-arrow-right-line animate-pulse"></i>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-pink-500/30 shadow-2xl shadow-pink-500/20">
                  <div className="p-8 flex flex-col gap-6 h-full justify-between">
                    <div>
                      <h2 className="text-slate-100 font-bold text-xl 2xl:text-2xl mb-4">
                        {project.title}
                      </h2>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tools, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTechColor(tools)}`}
                        >
                          {tools}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.gitHubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 py-3 rounded-lg transition-all duration-300 group/btn border border-slate-600 hover:border-slate-500 whitespace-nowrap"
                      >
                        <i className="ri-github-fill text-xl group-hover/btn:scale-110 transition-transform"></i>
                        <span className="font-medium">Code</span>
                      </a>
                      <a 
                        href={project.webSiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg transition-all duration-300 group/btn shadow-lg shadow-pink-500/30 whitespace-nowrap"
                      >
                        <i className="ri-external-link-line text-xl group-hover/btn:scale-110 transition-transform"></i>
                        <span className="font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Little Exercises Toggle */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex flex-col items-center text-slate-300 hover:text-pink-400 text-lg cursor-pointer font-semibold whitespace-nowrap transition-all duration-300"
          >
            <span className="relative">
              Little Exercises
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <i className={`ri-arrow-down-s-line text-3xl transition-all duration-500 ${showAll ? 'rotate-180 text-pink-400' : ''} group-hover:translate-y-1`}></i>
          </button>
        </div>
      </div>
    </section>
  );
}
