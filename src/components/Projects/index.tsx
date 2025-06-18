import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { projectsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faChartBar, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.bg.secondary};
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
  margin-bottom: 64px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 48px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.shadow.medium};
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.accent.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  i, svg {
    font-size: 64px;
    color: ${({ theme }) => theme.accent.primary};
  }
`;

const ProjectContent = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 24px;
  flex-grow: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  
  span {
    font-size: 14px;
    font-weight: 500;
    padding: 6px 12px;
    background-color: ${({ theme }) => theme.bg.tertiary};
    color: ${({ theme }) => theme.accent.primary};
    border-radius: 6px;
  }
`;

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: i * 0.2,
      duration: 0.6
    }
  })
};

const Projects: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  // Helper function to get icon for project
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('cloud')) {
      return faCloud;
    } else if (title.toLowerCase().includes('dashboard') || title.toLowerCase().includes('intelligence')) {
      return faChartBar;
    } else if (title.toLowerCase().includes('mobile')) {
      return faMobileAlt;
    }
    return faCloud;
  };
  
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        
        <ProjectsGrid ref={ref}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              animate={controls}
            >
              <ProjectImage>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} />
                ) : (
                  <FontAwesomeIcon icon={getProjectIcon(project.title)} />
                )}
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTech>
                  {project.technologies.map((tech, i) => (
                    <span key={`${project.id}-tech-${i}`}>{tech}</span>
                  ))}
                </ProjectTech>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
