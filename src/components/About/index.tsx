import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  AboutSection,
  Container,
  SectionTitle,
  SectionSubtitle,
  AboutContent,
  AboutText,
  Stats,
  StatItem,
  fadeInUp,
  staggerContainer
} from './styles';

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
                <h3>5+</h3>
                <p>Domain Expertise</p>
              </StatItem>
              
              <StatItem variants={fadeInUp}>
                <h3>6+</h3>
                <p>Transformational Products</p>
              </StatItem>
            </Stats>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
