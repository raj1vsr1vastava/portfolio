import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection = styled.section`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.bg.secondary}; /* Default background */
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
`;

const AboutText = styled.div`
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

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StatItem = styled(motion.div)`
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
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const About: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Counter animation for stats
  const [hasAnimated, setHasAnimated] = React.useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);
  
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          Building innovative solutions and leading engineering teams to success
        </SectionSubtitle>
        
        <AboutContent as={motion.div} ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <AboutText>
            <motion.p variants={fadeInUp}>
              With over 19+ years of experience in the software industry, I bring deep technical expertise and leadership in Web, Mobile, and Platform API development. I have made impactful contributions across diverse domains including Payments, Retail, Pharmacy, Travel, and Healthcare.
            </motion.p>
            <motion.p variants={fadeInUp}>
              My technical proficiency spans Mobile (iOS, Android), Core Java, JavaScript, ReactJS, C#, Web Services, Docker, Azure Cloud, and database technologies. I have a strong track record in end-to-end product delivery, engineering management, execution excellence, and strategic planning.
            </motion.p>
            
            <Stats>
              <StatItem variants={fadeInUp}>
                <h3>19+</h3>
                <p>Years Experience</p>
              </StatItem>
              
              <StatItem variants={fadeInUp}>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </StatItem>
              
              <StatItem variants={fadeInUp}>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </StatItem>
            </Stats>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
