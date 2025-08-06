import React from 'react';
import { motion } from 'framer-motion';
import {
  HeroAboutSection,
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
  Stats,
  StatItem,
  HiddenAnchor,
  BioContainer,
  fadeInUp,
  fadeIn,
  staggerContainer
} from './styles';

// Import image with require for TypeScript compatibility
const profileImage = require('../../assets/images/Rajiv.jpg');

const HeroAbout: React.FC = () => {
  return (
    <HeroAboutSection id="home">
      {/* Hidden anchor for the about-section ID for navigation */}
      <HiddenAnchor id="about-section" />
      
      {/* Hero Section with integrated About content */}
      <HeroContainer>
        <HeroContent 
          as={motion.div} 
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
              Passionate about leading high-performing teams and delivering innovative products 
              that drive business growth through transformative digital solutions.
            </HeroDescription>
              <Stats>
              <StatItem variants={fadeInUp}>
                <h3>19+</h3>
                <p>Years Experience</p>
              </StatItem>
              <StatItem variants={fadeInUp}>
                <h3>6+</h3>
                <p>Products</p>
              </StatItem>
              <StatItem variants={fadeInUp}>
                <h3>5+</h3>
                <p>Domains</p>
              </StatItem>
              <StatItem variants={fadeInUp}>
                <h3>3</h3>
                <p>Patents</p>
              </StatItem>
            </Stats>
            
            <BioContainer variants={fadeInUp}>
              <motion.p>
                Engineering Leader with 19+ years of experience in the software industry, bringing deep technical expertise in Web, Mobile, and Platform API development. Impactful contributions across Payments, Retail, Pharmacy, Travel, and Healthcare.
              </motion.p>
              
              <motion.p>
                My technical proficiency spans GenAI, Multi Agent app development, Web development (JavaScript, ReactJS), Mobile (iOS, Android), Core Java, C#, Web Services, Docker, Azure Cloud, and database technologies with a strong track record in end-to-end product delivery and engineering management.
              </motion.p>
            </BioContainer>
            
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
    </HeroAboutSection>
  );
};

export default HeroAbout;
