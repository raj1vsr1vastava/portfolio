import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BioContainer = styled(motion.div)`
  margin: 8px 0;
  
  p {
    margin-bottom: 14px;
    
    &:last-child {
      margin-bottom: 8px;
    }
  }
  
  @media (max-width: 768px) {
    p {
      margin-bottom: 12px;
      
      &:last-child {
        margin-bottom: 6px;
      }
    }
  }
`;

export const HeroAboutSection = styled.section`
  padding: 80px 0 40px;
  position: relative;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 70px 0 30px;
    min-height: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  height: 100%;
`;

export const HiddenAnchor = styled.div`
  display: none;
  visibility: hidden;
  height: 0;
  width: 0;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 32px;
  align-items: center;
  
  @media (max-width: 992px) {
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 16px;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  p {
    font-size: 15px;
    line-height: 1.5;
    color: ${({ theme }) => theme.text.secondary};
    margin-bottom: 14px;
    max-width: 100%;
    
    @media (max-width: 768px) {
      font-size: 14px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.4;
    }
  }
  
  @media (max-width: 768px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 12px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 992px) {
    font-size: 42px;
  }
  
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: 17px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 20px;
  max-width: 100%;
  
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 14px;
  margin-top: 10px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
    color: #fff;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  background: transparent;
  color: ${({ theme }) => theme.accent.primary};
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.accent.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent.primary}10;
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 24px;
  }
`;

export const HeroImageWrapper = styled.div`
  width: 90%;
  height: 90%;
  max-width: 320px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: 12px;
    bottom: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.accent.primary}30, 
      ${({ theme }) => theme.accent.secondary}30
    );
    z-index: -1;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 20px 40px ${({ theme }) => theme.shadow.medium};
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileImagePlaceholder = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: ${({ theme }) => theme.text.secondary};
  box-shadow: 0 20px 40px ${({ theme }) => theme.shadow.medium};
  
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 12px 0 20px;
  max-width: 100%;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 8px;
    margin: 10px auto 16px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin: 10px auto 16px;
  }
  
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }
`;

export const StatItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  padding: 10px 6px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 3px 6px ${({ theme }) => theme.shadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 14px ${({ theme }) => theme.shadow.medium};
  }
  
  h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 1px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.accent.primary}, 
      ${({ theme }) => theme.accent.secondary}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    @media (max-width: 992px) {
      font-size: 22px;
    }
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 500;
    margin-bottom: 0;
    
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
`;

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3 }
  }
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
