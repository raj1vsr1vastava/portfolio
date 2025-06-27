import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.section`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.bg.alternate}; /* Subtle blue-gray for alternating effect */
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  border-radius: 12px;
  padding: 36px;
  box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.shadow.medium};
  }
  
  h3 {
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
    margin-bottom: 28px;
    padding-bottom: 14px;
    border-bottom: 2px solid ${({ theme }) => theme.border.color};
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
`;

export const SkillItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
`;

interface SkillTagProps {
  isActive: boolean;
  isHighlighted?: boolean;
}

export const SkillTag = styled.div<SkillTagProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ isHighlighted }) => isHighlighted ? '14px 20px' : '12px 18px'};
  background-color: ${({ theme, isHighlighted }) => isHighlighted ? `${theme.accent.primary}15` : theme.bg.tertiary};
  border-radius: 10px;
  font-size: ${({ isHighlighted }) => isHighlighted ? '17px' : '16px'};
  font-weight: ${({ isHighlighted }) => isHighlighted ? '600' : '500'};
  color: ${({ theme, isHighlighted }) => isHighlighted ? theme.accent.primary : theme.text.secondary};
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: ${({ isHighlighted, theme }) => isHighlighted ? `4px solid ${theme.accent.primary}` : 'none'};
  box-shadow: ${({ isHighlighted, theme }) => isHighlighted ? `0 4px 12px ${theme.shadow.light}` : 'none'};
  min-height: 48px;
  
  &:hover, &:focus, &:focus-visible {
    color: ${({ theme }) => theme.accent.primary};
    background-color: ${({ theme }) => theme.accent.primary}15;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.shadow.light};
  }
  
  i, svg {
    color: ${({ theme }) => theme.accent.primary};
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
    
    i, svg {
      font-size: 16px;
    }
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

export const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  & + .fallback-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.accent.primary};
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    margin-right: 8px;
    
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
      font-size: 12px;
    }
  }
`;

export const SkillDivider = styled.div`
  height: 1px;
  width: 80%;
  margin: 20px auto;
  background: ${({ theme }) => `linear-gradient(to right, transparent, ${theme.accent.primary}40, transparent)`};
  opacity: 0.6;
`;

// Animation variants
export const fadeInUp = {
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
