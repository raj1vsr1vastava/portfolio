import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import Header from './components/Header';
import HeroAbout from './components/HeroAbout';
import Experience from './components/Experience';
import CareerChart from './components/CareerChart';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App: React.FC = () => {
  // Add console log for debugging
  console.log('App component is rendering');

  // Handle smooth scrolling for navigation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href') || '';
        const section = document.querySelector(href);
        
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Handle active navigation highlighting based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-menu a');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.slice(1) === current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <AppContainer>
        <Header />        <main>
          <HeroAbout />
          <CareerChart />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
