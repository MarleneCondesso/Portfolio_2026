import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import TechnicalSkills from '../components/TechnicalSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SideEmail from '../components/SideEmail';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/CustomCursor';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        <Hero />
        <div className="px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-60">
          <About />
          <Experience />
          <TechnicalSkills />
          <Projects />
          <Contact />
        </div>
      </main>
      <SideEmail />
      <ScrollToTop />
    </div>
  );
}