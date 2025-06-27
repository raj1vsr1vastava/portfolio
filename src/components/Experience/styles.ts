import styled from 'styled-components';
import { motion } from 'framer-motion';

// Core section styling
export const ExperienceSection = styled.section`
  padding: 40px 0 60px;
  background-color: ${({ theme }) => theme.bg.secondary}; /* Regular background */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SectionSubtitle = styled.p`
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
export const ExperienceGrid = styled.div`
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
export const ExperienceCard = styled(motion.div)`
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
  /* Add smooth transitions for all properties */
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;  &.highlight-experience {
    border: 2px solid ${({ theme }) => theme.accent.primary};
    box-shadow: 0 8px 24px ${({ theme }) => theme.accent.primary}40;
    transform: translateY(-4px);
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;
  }
`;

// Header section of the experience card
export const ExperienceHeader = styled.div`
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

export const CompanyLogo = styled.img`
  height: 42px;
  width: auto;
  max-width: 80px;
  margin-right: 16px;
  object-fit: contain;
`;

// Content section of the experience card
export const ExperienceContent = styled.div`
  padding: 16px 24px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

// Title of the experience
export const ExperienceTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.text.primary};
`;

// Company name
export const CompanyName = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Period of employment
export const ExperiencePeriod = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;

// Duration calculation display
export const Duration = styled.span`
  font-size: 13px;
  font-weight: normal;
  color: ${({ theme }) => theme.text.muted};
  margin-left: 4px;
`;

// Description paragraph
export const ExperienceDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 20px;
`;

// Achievements list container
export const AchievementsList = styled.ul`
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
export const cardVariant = {
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
