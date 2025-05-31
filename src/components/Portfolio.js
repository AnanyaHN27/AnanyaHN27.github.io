import React, { useState } from 'react';
import Navigation from './Navigation';
import HomeSection from './sections/HomeSection';
import ResumeSection from './sections/ResumeSection';
import PortfolioSection from './sections/PortfolioSection';
import BlogSection from './sections/BlogSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 text-lg">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'resume' && <ResumeSection />}
          {activeSection === 'portfolio' && <PortfolioSection />}
          {activeSection === 'blog' && <BlogSection />}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;