import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { experienceData } from './data';
import { calculateDuration, formatDate } from '../../utils/dateUtils';

// Core section styling
const ExperienceSection = styled.section`
  padding: 40px 0 60px;
  background-color: ${({ theme }) => theme.bg.secondary}; /* Regular background */
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



// Grid layout for experience cards - limited to 2 columns
const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Card styling for experiences
const ExperienceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.shadow.medium};
  }
  
  &.highlight-experience {
    border: 2px solid ${({ theme }) => theme.accent.primary}60;
    box-shadow: 0 8px 32px ${({ theme }) => theme.accent.primary}40;
  }
`;

// Header section of the experience card
const ExperienceHeader = styled.div`
  height: auto;
  padding: 24px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.accent.primary}20, 
    ${({ theme }) => theme.accent.secondary}20
  );
  display: flex;
  flex-direction: column;
  
  .icon-container {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`;

const CompanyLogo = styled.img`
  height: 42px;
  width: auto;
  max-width: 80px;
  margin-right: 16px;
  object-fit: contain;
`;

// Content section of the experience card
const ExperienceContent = styled.div`
  padding: 16px 24px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

// Title of the experience
const ExperienceTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.text.primary};
`;

// Company name
const CompanyName = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Period of employment
const ExperiencePeriod = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;

// Duration calculation display
const Duration = styled.span`
  font-size: 13px;
  font-weight: normal;
  color: ${({ theme }) => theme.text.muted};
  margin-left: 4px;
`;

// Description paragraph
const ExperienceDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 20px;
`;

// Achievements list container
const AchievementsList = styled.ul`
  padding-left: 18px;
  margin-top: 16px;
  
  li {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.text.secondary};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// Animation variants for staggered animation
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

// Mapping between Experience ID and Organization ID
const experienceToOrgMapping: { [key: string]: string } = {
  'exp-1': 'org-5', // Microsoft India
  'exp-2': 'org-4', // PayPal India
  'exp-3': 'org-3', // Walmart Labs
  'exp-4': 'org-2', // Amadeus Labs
  'exp-5': 'org-1', // GE Healthcare 
  'exp-6': 'org-6', // Juniper Networks
};

// Mapping between Organization ID and Logo URL
const orgLogoMapping: { [key: string]: string } = {
  'org-1': 'https://brandeps.com/logo-download/G/GE-Healthcare-logo-vector-01.svg', // GE Healthcare
  'org-2': 'https://1000logos.net/wp-content/uploads/2022/05/Amadeus-Logo.png',
  'org-3': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
  'org-4': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
  'org-5': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'org-6': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Juniper_Networks_logo.svg/2560px-Juniper_Networks_logo.svg.png', // Juniper Networks
};

const Experience: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Professional Experience</SectionTitle>
        <SectionSubtitle>
          A journey through leading technology companies and impactful projects
        </SectionSubtitle>
        
        <ExperienceGrid ref={ref}>
          {experienceData.map((experience, index) => {
            const dateText = `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`;
            const duration = calculateDuration(experience.startDate, experience.endDate);
            
            return (
              <ExperienceCard
                key={experience.id}
                data-experience-id={experience.id}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                animate={controls}
                className={experience.id === window.location.hash.substring(1) ? 'highlight-experience' : ''}
              >
                <ExperienceHeader>
                  <div className="icon-container">
                    <CompanyLogo 
                      src={orgLogoMapping[experienceToOrgMapping[experience.id]]} 
                      alt={experience.company}
                    />
                    <div>
                      <ExperienceTitle>{experience.title}</ExperienceTitle>
                      <CompanyName>{experience.company}</CompanyName>
                      <ExperiencePeriod>
                        {dateText} <Duration>({duration})</Duration>
                      </ExperiencePeriod>
                    </div>
                  </div>
                </ExperienceHeader>
                
                <ExperienceContent>
                  <ExperienceDescription>{experience.description}</ExperienceDescription>
                  
                  <AchievementsList>
                    {experience.achievements.map((achievement, i) => (
                      <li key={`${experience.id}-achievement-${i}`}>{achievement}</li>
                    ))}
                  </AchievementsList>
                </ExperienceContent>
              </ExperienceCard>
            );
          })}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
