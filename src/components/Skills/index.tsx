import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { skillsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faMobileAlt, faGlobe,
  faTasks, faUsers, faChess, faProjectDiagram, 
  faDatabase, faBrain, faChartLine, faRobot, 
  faCube, faBolt, faCodeBranch, faChartBar, faDharmachakra
} from '@fortawesome/free-solid-svg-icons';
import { 
  faJs, faMicrosoft, faReact, faGitAlt, 
  faDocker, faWindows, faAndroid, faApple 
} from '@fortawesome/free-brands-svg-icons';

const SkillsSection = styled.section`
  padding: 50px 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.shadow.medium};
  }
  
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${({ theme }) => theme.border.color};
  }
`;

const SkillItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
`;

interface SkillTagProps {
  isActive: boolean;
}

const SkillTag = styled.div<SkillTagProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.bg.tertiary};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover, &:focus, &:focus-visible {
    color: ${({ theme }) => theme.accent.primary};
    background-color: ${({ theme }) => theme.accent.primary}10;
    transform: translateY(-3px);
  }
  
  i, svg {
    color: ${({ theme }) => theme.accent.primary};
  }
  
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) scale(${props => props.isActive ? 1 : 0});
    min-width: 180px;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    font-size: 14px;
    font-weight: 400;
    border-radius: 6px;
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow.medium};
    opacity: ${props => props.isActive ? 1 : 0};
    pointer-events: ${props => props.isActive ? 'auto' : 'none'};
    z-index: 10;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%) rotate(45deg) scale(${props => props.isActive ? 1 : 0});
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.bg.primary};
    opacity: ${props => props.isActive ? 1 : 0};
    z-index: 9;
    transition: all 0.3s ease;
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      delay: i * 0.1
    }
  })
};

const Skills: React.FC = () => {
  // State for active tooltip
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  // Helper function to map icon names to FontAwesome icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return faCode;
      case 'js': return faJs;
      case 'microsoft': return faMicrosoft;
      case 'react': return faReact;
      case 'windows': return faWindows;
      case 'code-branch': return faCodeBranch;
      case 'bolt': return faBolt;
      case 'cube': return faCube;
      case 'git-alt': return faGitAlt;
      case 'docker': return faDocker;
      case 'dharmachakra': return faDharmachakra;
      case 'database': return faDatabase;
      case 'chart-bar': return faChartBar;
      case 'android': return faAndroid;
      case 'apple': return faApple;
      case 'mobile-alt': return faMobileAlt;
      case 'globe': return faGlobe;
      case 'tasks': return faTasks;
      case 'users': return faUsers;
      case 'chess': return faChess;
      case 'project-diagram': return faProjectDiagram;
      case 'brain': return faBrain;
      case 'chart-line': return faChartLine;
      case 'robot': return faRobot;
      default: return faCode;
    }
  };
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent, skillId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTooltip(activeTooltip === skillId ? null : skillId);
    }
  };
  
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionSubtitle>
          Comprehensive technical skills across modern development stacks and platforms
        </SectionSubtitle>
        
        <SkillsGrid ref={ref}>
          {skillsData.map((category, index) => (
            <SkillCategory
              key={category.title}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
            >
              <h3>{category.title}</h3>
              <SkillItems>
                {category.skills.map((skill) => {
                  const skillId = `${category.title}-${skill.name}`.replace(/\s+/g, '-').toLowerCase();
                  return (
                    <SkillTag 
                      key={skillId}
                      data-tooltip={skill.tooltip}
                      isActive={activeTooltip === skillId}
                      onMouseEnter={() => setActiveTooltip(skillId)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onFocus={() => setActiveTooltip(skillId)}
                      onBlur={() => setActiveTooltip(null)}
                      onKeyDown={(e) => handleKeyDown(e, skillId)}
                      role="button"
                      tabIndex={0}
                      aria-label={skill.tooltip}
                    >
                      <FontAwesomeIcon icon={getIcon(skill.icon)} />
                      <span>{skill.name}</span>
                    </SkillTag>
                  );
                })}
              </SkillItems>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
