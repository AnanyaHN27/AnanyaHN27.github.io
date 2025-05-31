import React, { useState } from 'react';
import { BookOpen, Code, Home, Menu, X, Link2 } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLink = ({ section, icon: Icon, text }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setIsMenuOpen(false);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        activeSection === section ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold text-navy-800">Ananya Hari Narain</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden md:flex gap-4 text-lg">
            <NavLink section="home" icon={Home} text="Home" />
            <NavLink section="resume" icon={BookOpen} text="Resume" />
            <NavLink section="portfolio" icon={Code} text="Portfolio" />
            <NavLink section="blog" icon={BookOpen} text="Blog" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t text-lg">
          <div className="flex flex-col p-4 gap-2">
            <NavLink section="home" icon={Home} text="Home" />
            <NavLink section="resume" icon={BookOpen} text="Resume" />
            <NavLink section="portfolio" icon={Code} text="Portfolio" />
            <NavLink section="blog" icon={BookOpen} text="Blog" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;