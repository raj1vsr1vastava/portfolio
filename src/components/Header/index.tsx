import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';
import {
  StyledHeader,
  NavContainer,
  Logo,
  NavMenu,
  NavActions,
  ThemeToggle,
  HamburgerButton,
  Hamburger
} from './styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLElement>(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle navigation click with proper scroll positioning
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open
    
    const section = document.getElementById(sectionId);
    if (section) {
      const currentHeaderHeight = headerRef.current?.offsetHeight || 80; // Default to 80px if ref not available
        // Use smooth scrolling with proper offset based on measured header height
      // Use the dynamic headerHeight for more accuracy
      const offset = headerHeight || currentHeaderHeight;
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Measure header height
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
      
      // Re-measure when window is resized
      const updateHeaderHeight = () => {
        if (headerRef.current) {
          setHeaderHeight(headerRef.current.offsetHeight);
        }
      };
      
      window.addEventListener('resize', updateHeaderHeight);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateHeaderHeight);
      };
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <StyledHeader ref={headerRef} scrolled={hasScrolled}>
      <NavContainer>
        <Logo>
          <h2>Profile</h2>
        </Logo>
      <NavMenu isOpen={isMenuOpen}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#career-chart" onClick={(e) => handleNavClick(e, 'career-chart')}>Career Journey</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </NavMenu>
        <NavActions>
          <ThemeToggle onClick={toggleTheme} role="button" tabIndex={0} aria-label="Toggle dark/light theme">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </ThemeToggle>
          <HamburgerButton onClick={toggleMenu}>
            <Hamburger>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
          </HamburgerButton>
        </NavActions>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;
