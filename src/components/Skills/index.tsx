import React, { useState, useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';
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
import {
  SkillsSection,
  Container,
  SectionTitle,
  SectionSubtitle,
  SkillsGrid,
  SkillCategory,
  SkillItems,
  SkillTag,
  SkillDivider,
  SkillIcon,
  fadeInUp
} from './styles';
import { Skill } from '../../types';

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
  // Helper function to render either FontAwesome icon or custom image
  const renderIconOrImage = (skill: Skill) => {
    if (skill.customIcon) {
      return (
        <SkillIcon 
          src={skill.customIcon} 
          alt={`${skill.name} icon`} 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallbackIcon = document.createElement('span');
            fallbackIcon.className = 'fallback-icon';
            fallbackIcon.innerText = skill.name.charAt(0);
            e.currentTarget.parentNode?.insertBefore(fallbackIcon, e.currentTarget);
          }}
        />
      );
    }
    return <FontAwesomeIcon icon={getIcon(skill.icon || '')} />;
  };
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent, skillId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTooltip(activeTooltip === skillId ? null : skillId);
    }
  };
  
  // Helper function to organize skills by highlighted status
  const renderSkillsByHighlight = (skills: Skill[]) => {
    const highlightedSkills = skills.filter(skill => skill.isHighlighted);
    const regularSkills = skills.filter(skill => !skill.isHighlighted);
    
    const hasHighlighted = highlightedSkills.length > 0;
    const hasRegular = regularSkills.length > 0;
    
    return (
      <>
        {hasHighlighted && (
          <SkillItems>
            {highlightedSkills.map(skill => {
              const skillId = `highlighted-${skill.name}`.replace(/\s+/g, '-').toLowerCase();
              return (
                <SkillTag 
                  key={skillId}
                  data-tooltip={skill.tooltip}
                  isActive={activeTooltip === skillId}
                  isHighlighted={skill.isHighlighted}
                  onMouseEnter={() => setActiveTooltip(skillId)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onFocus={() => setActiveTooltip(skillId)}
                  onBlur={() => setActiveTooltip(null)}
                  onKeyDown={(e) => handleKeyDown(e, skillId)}
                  role="button"
                  tabIndex={0}
                  aria-label={skill.tooltip}
                >
                  {renderIconOrImage(skill)}
                  <span>{skill.name}</span>
                </SkillTag>
              );
            })}
          </SkillItems>
        )}
        
        {hasHighlighted && hasRegular && <SkillDivider />}
        
        {hasRegular && (
          <SkillItems>
            {regularSkills.map(skill => {
              const skillId = `regular-${skill.name}`.replace(/\s+/g, '-').toLowerCase();
              return (
                <SkillTag 
                  key={skillId}
                  data-tooltip={skill.tooltip}
                  isActive={activeTooltip === skillId}
                  isHighlighted={skill.isHighlighted}
                  onMouseEnter={() => setActiveTooltip(skillId)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onFocus={() => setActiveTooltip(skillId)}
                  onBlur={() => setActiveTooltip(null)}
                  onKeyDown={(e) => handleKeyDown(e, skillId)}
                  role="button"
                  tabIndex={0}
                  aria-label={skill.tooltip}
                >
                  {renderIconOrImage(skill)}
                  <span>{skill.name}</span>
                </SkillTag>
              );
            })}
          </SkillItems>
        )}
      </>
    );
  };
  
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>        <SectionSubtitle>
          My specialized technical and functional expertise in modern development ecosystems
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
              {renderSkillsByHighlight(category.skills)}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
