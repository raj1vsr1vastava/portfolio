import React, { useRef, useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { experienceData } from './data';
import { calculateDuration, formatDate } from '../../utils/dateUtils';
import {
  ExperienceSection,
  Container,
  SectionTitle,
  SectionSubtitle,
  ExperienceGrid,
  ExperienceCard,
  ExperienceHeader,
  CompanyLogo,
  ExperienceContent,
  ExperienceTitle,
  CompanyName,
  ExperiencePeriod,
  Duration,
  ExperienceDescription,
  AchievementsList,
  cardVariant
} from './styles';

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
              return (              <ExperienceCard
                key={experience.id}
                data-experience-id={experience.id}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                animate={controls}
                id={experience.id}
                className="experience-card"
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
