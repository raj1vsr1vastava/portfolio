import styled from 'styled-components';
import { motion } from 'framer-motion';

// Props for the CareerBar component
export interface CareerBarProps {
  index: number;
  startColor: string;
  endColor: string;
  width: string;
  left: string; // Position based on start date
}

export const ChartSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.bg.secondary};
  min-height: 900px; /* Further increased to ensure all organizations are visible */
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

export const ChartDescription = styled.div`
  margin-bottom: 48px;
  
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
  padding: 20px 0 60px;
`;

export const VerticalCareerChart = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
  min-height: 700px; /* Further increased height to show all organizations */
  padding: 32px 0 64px 0; /* Added padding at the bottom */
  display: flex;
  flex-direction: column;
`;

export const TimeAxis = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 32px;
  width: calc(100% - 64px);
  margin-top: 500px; /* Further increased to ensure timeline is below all orgs */
`;

export const YearMarker = styled.div`
  position: relative;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  margin-top: 16px; /* Changed from margin-bottom to margin-top */
  
  &::before {
    content: '';
    position: absolute;
    top: -8px; /* Changed from bottom to top */
    left: 50%;
    transform: translateX(-50%);
    height: 6px;
    width: 1px;
    background-color: ${({ theme }) => theme.text.secondary};
  }
`;

export const VerticalTimelineLine = styled.div`
  position: absolute;
  top: 500px; /* Adjusted to match the new time axis position */
  left: 32px;
  right: 32px;
  height: 2px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  width: calc(100% - 64px);
`;

export const CareerBarsContainer = styled.div`
  position: absolute;
  top: 20px; /* Adjusted to position above the time axis */
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 24px); /* Increased width */
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 2;
  height: 500px; /* Further increased to ensure all orgs are visible */
`;

export const CareerBar = styled(motion.div)<CareerBarProps>`
  position: relative;
  height: 70px; /* Increased height for content */
  margin-bottom: 30px; /* Increased spacing between bars */
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px); /* Changed animation direction */
  background: linear-gradient(90deg, 
    ${props => props.startColor}, 
    ${props => props.endColor}
  );
  width: ${props => props.width};
  margin-left: ${props => props.left}; /* Position bar based on start date */
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow.medium};
  overflow: hidden;

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease-out ${props => props.index * 0.2}s;
  }

  &.dimmed {
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &.keyboard-focus {
    outline: 3px solid ${({ theme }) => theme.accent.primary};
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.accent.primary};
    outline-offset: 2px;
  }
`;

export const BarConnector = styled.div`
  position: absolute;
  bottom: -30px; /* Connect from the bottom of the bar */
  left: 50%;
  transform: translateX(-50%);
  height: 30px; /* Variable height will be applied with inline styles */
  width: 2px;
  background-color: ${({ theme }) => theme.text.muted};
  z-index: 1;
`;

export const OrgLabel = styled.div`
  padding: 12px 16px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 992px) {
    font-size: 12px;
    padding: 8px 12px;
  }
  
  strong {
    display: block;
    font-weight: 600;
    margin-bottom: 4px;
    white-space: normal; /* Allow wrapping */
    line-height: 1.3;
  }
  
  span {
    opacity: 0.9;
    font-size: 13px;
    white-space: normal; /* Allow wrapping */
    line-height: 1.3;
  }
`;
