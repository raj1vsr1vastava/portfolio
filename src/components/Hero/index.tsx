import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Import image with require for TypeScript compatibility
const profileImage = require('../../assets/images/myProfile.png');

const HeroSection = styled.section`
  padding: 120px 0 60px;
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 100px 0 40px;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 992px) {
    font-size: 48px;
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 32px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 auto 32px;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
    color: #fff;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: transparent;
  color: ${({ theme }) => theme.accent.primary};
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.accent.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent.primary}10;
    transform: translateY(-2px);
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 24px;
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.accent.primary}30, 
      ${({ theme }) => theme.accent.secondary}30
    );
    z-index: -1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 20px 40px ${({ theme }) => theme.shadow.medium};
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ProfileImagePlaceholder = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 24px;
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent as={motion.div} 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <HeroText>
            <HeroTitle variants={fadeInUp}>
              Rajiv Srivastava
            </HeroTitle>
            
            <HeroSubtitle variants={fadeInUp}>
              Engineering Excellence at Scale
            </HeroSubtitle>
            
            <HeroDescription variants={fadeInUp}>
              Group Engineering Manager with 19+ years of experience building 
              transformative digital solutions. Passionate about leading high-performing teams 
              and delivering innovative products that drive business growth.
            </HeroDescription>
            
            <HeroButtons variants={fadeInUp}>
              <PrimaryButton href="#contact">
                Get In Touch
              </PrimaryButton>
              <SecondaryButton href="#experience">
                View Experience
              </SecondaryButton>
            </HeroButtons>
          </HeroText>
          
          <HeroImageContainer variants={fadeIn}>
            <HeroImageWrapper>
              {profileImage ? (
                <ProfileImage 
                  src={profileImage} 
                  alt="Rajiv Srivastava" 
                />
              ) : (
                <ProfileImagePlaceholder>
                  <i className="fas fa-user"></i>
                </ProfileImagePlaceholder>
              )}
            </HeroImageWrapper>
          </HeroImageContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
