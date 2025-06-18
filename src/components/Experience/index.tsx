import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { experienceData } from './data';
import { calculateDuration, formatDate } from '../../utils/dateUtils';

const ExperienceSection = styled.section`
  padding: 100px 0;
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
  margin-bottom: 64px;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 48px;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    background-color: ${({ theme }) => theme.accent.primary}40;
    top: 0;
    bottom: 0;
    left: 20px;
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 48px;
  
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.accent.primary};
  border-radius: 50%;
  left: 14px;
  top: 8px;
  z-index: 1;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.bg.primary}, 
              0 0 0 6px ${({ theme }) => theme.accent.primary}40;
  
  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineDate = styled.span`
  position: relative;
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-left: 48px;
  
  @media (min-width: 768px) {
    width: 40%;
    margin-left: 0;
    padding-right: 30px;
    text-align: right;
    float: left;
    padding-top: 6px;
  }
`;

const Duration = styled.small`
  display: inline-block;
  font-weight: normal;
  margin-left: 8px;
  color: ${({ theme }) => theme.text.muted};
  font-size: 12px;
`;

const TimelineContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bg.card};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 16px ${({ theme }) => theme.shadow.light};
  margin-left: 48px;
  
  @media (min-width: 768px) {
    width: calc(50% - 30px);
    float: left;
    margin-left: 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 12px;
      right: -10px;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.bg.card};
      transform: rotate(45deg);
      box-shadow: 4px -4px 8px ${({ theme }) => theme.shadow.light}20;
    }
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.accent.primary};
  }
  
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.text.primary};
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text.secondary};
    margin-bottom: 16px;
  }
  
  ul {
    padding-left: 18px;
    
    li {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.text.secondary};
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

// Alternate layout for timeline items
const RightTimelineContent = styled(TimelineContent)`
  @media (min-width: 768px) {
    float: right;
    
    &::before {
      left: -10px;
      right: auto;
      box-shadow: -4px 4px 8px ${({ theme }) => theme.shadow.light}20;
    }
  }
`;

const RightTimelineDate = styled(TimelineDate)`
  @media (min-width: 768px) {
    float: right;
    text-align: left;
    padding-right: 0;
    padding-left: 30px;
  }
`;

// Animation variants
const fadeInUpItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
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
        
        <Timeline ref={ref}>
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            const dateText = `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`;
            const duration = calculateDuration(item.startDate, item.endDate);
            
            return (
              <TimelineItem 
                key={item.id}
                variants={fadeInUpItem}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                <TimelineMarker />
                
                {isEven ? (
                  <>
                    <TimelineDate>
                      {dateText} <Duration>({duration})</Duration>
                    </TimelineDate>
                    <TimelineContent>
                      <h3>{item.title}</h3>
                      <h4>{item.company}</h4>
                      <p>{item.description}</p>
                      <ul>
                        {item.achievements.map((achievement, i) => (
                          <li key={`${item.id}-achievement-${i}`}>{achievement}</li>
                        ))}
                      </ul>
                    </TimelineContent>
                  </>
                ) : (
                  <>
                    <RightTimelineDate>
                      {dateText} <Duration>({duration})</Duration>
                    </RightTimelineDate>
                    <RightTimelineContent>
                      <h3>{item.title}</h3>
                      <h4>{item.company}</h4>
                      <p>{item.description}</p>
                      <ul>
                        {item.achievements.map((achievement, i) => (
                          <li key={`${item.id}-achievement-${i}`}>{achievement}</li>
                        ))}
                      </ul>
                    </RightTimelineContent>
                  </>
                )}
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
