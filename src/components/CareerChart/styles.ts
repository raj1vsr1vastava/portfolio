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
  padding: 50px 0 30px;
  background-color: ${({ theme }) => theme.bg.alternate}; /* Subtle blue-gray for alternating effect */
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
  padding: 20px 0 60px;
`;

export const VerticalCareerChart = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  min-height: 650px; /* Increased to accommodate enhanced timeline */
  padding: 32px 0 32px 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    min-height: auto; /* Auto height for mobile vertical layout */
    padding: 20px 0;
  }
`;

export const MonthlyTimeAxis = styled.div`
  position: absolute;
  bottom: 135px; /* Positioned just below timeline */
  left: 32px;
  right: 32px;
  width: calc(100% - 64px);
  height: 20px;
  display: flex;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    display: none; /* Hide on mobile - will use vertical layout */
  }
`;

export const MonthMarker = styled.div<{ position: string; isStartMonth?: boolean }>`
  position: absolute;
  left: ${props => props.position};
  font-size: 10px;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: ${props => props.isStartMonth ? '600' : '400'};
  transform: translateX(-50%);
  white-space: nowrap;
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    height: ${props => props.isStartMonth ? '8px' : '4px'};
    width: 1px;
    background-color: ${({ theme, isStartMonth }) => 
      isStartMonth ? theme.text.primary : theme.text.muted};
  }
  
  @media (max-width: 768px) {
    font-size: 8px;
    
    /* Stagger every other marker to avoid overlap */
    &:nth-child(even) {
      top: 15px; /* Move every other marker down */
    }
    
    &:nth-child(odd) {
      top: 0px; /* Keep odd markers at the top */
    }
    
    &::before {
      height: ${props => props.isStartMonth ? '6px' : '3px'};
    }
  }
  
  @media (max-width: 480px) {
    font-size: 7px;
    
    /* More aggressive staggering for very small screens */
    &:nth-child(even) {
      top: 20px;
    }
  }
`;

export const HorizontalTimelineLine = styled.div`
  position: absolute;
  bottom: 165px; /* 5px gap from career bars */
  left: 32px;
  right: 32px;
  height: 2px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  width: calc(100% - 64px);
  
  @media (max-width: 768px) {
    display: none; /* Hide horizontal timeline on mobile - will use vertical layout */
  }
`;

export const VerticalTimelineLine = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 24px; /* Center under the 48px logos (0px + 48px/2 = 24px) */
    top: 20px;
    bottom: 70px;
    width: 2px;
    background: linear-gradient(180deg, 
      ${({ theme }) => theme.accent.primary}, 
      ${({ theme }) => theme.accent.secondary}
    );
    z-index: 1;
  }
`;

export const MobileCareerContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-left: 60px; /* Space for vertical timeline + larger logos (48px + 12px margin) */
  }
`;

export const MobileCareerItem = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    position: relative;
    /* Removed circle - logo will be on timeline instead */
  }
`;

export const MobileCareerCard = styled.div<{ startColor: string; endColor: string }>`
  background: linear-gradient(135deg, 
    ${props => props.startColor}, 
    ${props => props.endColor}
  );
  border-radius: 8px;
  padding: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  width:90%; /* Use full width of container for proper border-radius */
  overflow: hidden; /* Ensure content doesn't break border-radius */
  box-sizing: border-box; /* Include padding in width calculation */
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.medium};
  }
  
  h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
    line-height: 1.2;
  }
  
  p {
    font-size: 12px;
    opacity: 0.9;
    margin-bottom: 8px;
    line-height: 1.2;
  }
  
  span {
    font-size: 11px;
    opacity: 0.8;
  }
`;

export const CareerBarsContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 32px;
  right: 32px;
  width: calc(100% - 64px);
  z-index: 2;
  height: 480px; /* Increased to bring bars closer to timeline */
  
  @media (max-width: 768px) {
    display: none; /* Hide horizontal layout on mobile */
  }
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
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.medium};
    filter: brightness(1.05);
  }

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease-out ${props => props.index * 0.2}s;
    
    &:hover {
      transform: translateY(-2px);
    }
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
  bottom: -10px; /* Connect from the bottom of the bar */
  left: 50%;
  transform: translateX(-50%);
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
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
  }
  
  strong {
    display: block;
    font-weight: 600;
    margin-bottom: 4px;
    white-space: normal; /* Allow wrapping */
    line-height: 1.3;
    
    @media (max-width: 768px) {
      margin-bottom: 2px;
      line-height: 1.2;
    }
  }
  
  span {
    opacity: 0.9;
    font-size: 13px;
    white-space: normal; /* Allow wrapping */
    line-height: 1.3;
    
    @media (max-width: 992px) {
      font-size: 11px;
    }
    
    @media (max-width: 768px) {
      font-size: 10px;
      line-height: 1.2;
    }
    
    @media (max-width: 480px) {
      font-size: 9px;
    }
  }
`;

export const CompanyLogo = styled.img`
  display: none; /* Hide logos on desktop/wide screens */
  
  /* Only show logos on mobile screens for space efficiency */
  @media (max-width: 768px) {
    display: block;
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 4px;
    filter: brightness(0) invert(1); /* Make logos white */
    flex-shrink: 0;
  }
`;

export const OrgLabelContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OrgLabelHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
  }
`;

export const MobileCompanyLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-right: 12px;
  border-radius: 6px;
  background-color: white;
  padding: 4px;
  flex-shrink: 0;
`;

export const MobileCareerContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TimelineLogoContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0px; /* Center on timeline (24px left - 12px = 12px from center for 48px logo) */
    top: 30px;
    z-index: 3;
  }
`;

export const TimelineLogo = styled.img<{ index: number }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: ${props => {
      // Calculate positioning based on mobile career item layout:
      // - Each MobileCareerItem: card height + 24px margin-bottom
      // - Card content estimate:
      //   - h4 (14px font, 600 weight, 4px margin-bottom, 1.2 line-height): ~17px
      //   - p (12px font, 8px margin-bottom, 1.2 line-height): ~22px  
      //   - span (11px font, 1.2 line-height): ~13px
      //   - Card padding: 16px top + 16px bottom = 32px
      //   Total card height: ~84px
      // - Total item height: 84px + 24px margin = 108px
      // - Logo should align with card center: 16px (top padding) + 26px (half content) = 42px from item start
      const itemSpacing = 125; // Total height per career item
      const logoOffset = 35;   // Offset to center logo with card content
      return props.index * itemSpacing + logoOffset;
    }}px;
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 50%;
    background-color: white;
    padding: 1px;
    border: 3px solid ${({ theme }) => theme.accent.primary};
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0,0,0,0.3);
    }
  }
`;
