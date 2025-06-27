import React from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImageContainer,
  HeroImageWrapper,
  ProfileImage,
  ProfileImagePlaceholder,
  fadeInUp,
  fadeIn,
  staggerContainer
} from './styles';

// Import image with require for TypeScript compatibility
const profileImage = require('../../assets/images/Rajiv.jpg');

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
