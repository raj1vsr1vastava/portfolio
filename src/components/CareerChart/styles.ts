import styled from 'styled-components';
import { motion } from 'framer-motion';

// Props for the CareerStep component
export interface CareerStepProps {
  index: number;
  color: string;
  isActive?: boolean;
}

// Props for the StepCircle component
export interface StepCircleProps {
  color: string;
  isActive?: boolean;
}

export const ChartSection = styled.section`
  padding: 50px 0 30px;
  background-color: ${({ theme }) => theme.bg.alternate};
  min-height: auto; /* Allow natural height instead of forcing minimum */
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

export const ChartDescription = styled.div`
  margin-bottom: 32px;
  
  p {
    font-size: 16px;
    line-height: 1.7;
    text-align: center;
    color: ${({ theme }) => theme.text.secondary};
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding: 2px 0;
`;

export const HorizontalCareerPath = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  margin-top: 20px;
`;

export const CareerStepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;
  margin: 5px 0 5px;
  z-index: 2; /* Make sure step containers are above the career path line */
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0;
    
    /* Vertical connecting line for mobile */
    &::before {
      content: "";
      position: absolute;
      left: 20px; /* Center it with the step circles */
      top: 60px; /* Start after the first circle */
      bottom: 60px; /* End before the last circle */
      width: 3px;
      background: linear-gradient(to top, 
        ${({ theme }) => theme.text.secondary || '#e0e0e0'}, 
        rgba(0, 0, 0, 0.1)
      );
      opacity: 0.6;
      z-index: 1;
    }
    
    /* Upward arrow at the top */
    &::after {
      content: "";
      position: absolute;
      left: 13px; /* Center with the line */
      top: 40px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 12px solid ${({ theme }) => theme.text.secondary || '#e0e0e0'};
      opacity: 0.8;
      z-index: 2;
    }
  }
`;

export const StepCircle = styled.div<StepCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 3; /* Increased z-index to ensure circles appear above the line */
  border: 3px solid #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden; /* Changed to hidden to ensure content stays within */
  outline: none !important; /* Remove default outline with higher specificity */
  -webkit-tap-highlight-color: transparent; /* Remove mobile tap highlight */
  -webkit-user-select: none; /* Prevent selecting text in the circle */
  user-select: none;
  
  ${props => props.isActive && `
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  `}
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    
    &::after {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border: 2px dashed white;
      border-radius: 50%;
      animation: pulse 1.5s infinite ease-in-out;
    }
  }
  
  &.clicked {
    animation: clickEffect 0.5s ease-out;
  }
  
  @keyframes clickEffect {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.7);
    }
    50% {
      transform: scale(1.2);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
    100% {
      transform: scale(1.1);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.6;
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 160px;
  
  @media (max-width: 768px) {
    align-items: flex-start;
    max-width: none;
    margin-left: 30px;
    padding-bottom: 30px;
  }
`;

export const StepTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0 4px;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    margin: 0 0 4px;
  }
`;

export const StepRole = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
  margin: 10px 0 6px;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const StepDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const CareerStep = styled(motion.div)<CareerStepProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 7); /* 7 steps */
  cursor: pointer;
  outline: none !important; /* Remove default outline with higher specificity */
  -webkit-tap-highlight-color: transparent; /* Remove mobile tap highlight */
  
  /* Remove outline when clicked or focused */
  &:focus, &:focus-within {
    outline: none !important;
    box-shadow: none !important;
    border-color: transparent !important;
  }
  
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
  }
  
  &:hover {
    ${StepCircle} {
      transform: scale(1.1);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    ${StepTitle} {
      color: ${({ theme }) => theme.accent.primary};
    }
  }
  
  &:active {
    ${StepCircle} {
      transform: scale(0.95);
      transition: transform 0.1s ease-in-out;
    }
    outline: none !important; /* Ensure no outline on active state */
  }
  
  /* Custom accessibility focus indicator - only show on keyboard focus, not mouse click */
  &:focus-visible {
    outline: none !important;
    
    ${StepCircle} {
      outline: 3px solid ${({ theme }) => theme.accent.primary};
      outline-offset: 3px;
    }
  }
`;

export const CompanyLogo = styled.img`
  /* Main logo styling - for centered logos in step circles */
  &.centered-logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
    background-color: white;
    border-radius: 50%;
    padding: 3px;
    position: relative; /* Changed from absolute to relative */
    margin: auto;
    display: block;
  }
  
  @media (max-width: 768px) {
    &.centered-logo {
      width: 24px;
      height: 24px;
      padding: 2px;
    }
  }
`;

export const CareerPathLine = styled.div`
  position: absolute;
  top: 55px; /* Position at center of step circles */
  left: 0;
  right: 0;
  width: calc(100% - 20px); /* Leave space for the arrow */
  height: 4px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), ${({ theme }) => theme.text.secondary || '#e0e0e0'});
  transform: translateY(-50%);
  opacity: 0.8;
  z-index: 1;
  
  /* Arrow at the end */
  &::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 16px solid ${({ theme }) => theme.text.secondary || '#e0e0e0'};
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;