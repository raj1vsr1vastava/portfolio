import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.bg.secondary};
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
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const ProjectsGrid = styled.div`
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

export const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 20px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px ${({ theme }) => theme.shadow.medium};
  }
`;

export const ProjectImage = styled.div`
  height: 160px;
  background-color: ${({ theme }) => theme.accent.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &::after {
    content: '🔍 Click to enlarge';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 2;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
    padding: 15px;
    max-height: 140px;
  }
  
  i, svg {
    font-size: 42px;
    color: ${({ theme }) => theme.accent.primary};
  }
  
  ${ProjectCard}:hover & {
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    
    img {
      transform: scale(1.1);
    }
  }
`;

export const ProjectContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text.primary};
`;

export const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 16px;
  flex-grow: 1;
`;

export const ProjectTech = styled.div`
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

// Modal for enlarged image view
export const ImageModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  padding: 50px;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const ModalTitle = styled.h3`
  color: white;
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
`;

// Animation variants
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
