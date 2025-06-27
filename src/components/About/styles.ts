import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.bg.secondary}; /* Default background */
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

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
`;

export const AboutText = styled.div`
  p {
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.text.secondary};
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const StatItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  padding: 32px 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow.medium};
  }
  
  h3 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.accent.primary}, 
      ${({ theme }) => theme.accent.secondary}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  
  p {
    font-size: 18px;
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 500;
  }
`;

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
