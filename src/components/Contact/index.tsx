import React, { useRef, useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  ContactSection,
  Container,
  SectionTitle,
  ContactContent,
  ContactIntro,
  ContactCard,
  ContactIcon,
  ContactCardTitle,
  ContactCardText,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  fadeInUp,
  fadeInLeft,
  fadeInRight
} from './styles';

const Contact: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>

        <ContactIntro
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <h3>Let's Connect</h3>
          <p>
            I'm always open to meaningful conversations and new ideas. 
            Whether you'd like to explore potential collaborations, share insights, or 
            simply expand our professional networks, feel free to reach out through email or LinkedIn.
          </p>
        </ContactIntro>
        
        <ContactContent>
          <ContactCard
            variants={fadeInLeft}
            initial="hidden"
            animate={controls}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </ContactIcon>
            <ContactCardTitle>Email Me</ContactCardTitle>
            <ContactCardText>
              Send me an email with your inquiry or project details and I'll get back to you promptly.
            </ContactCardText>
            <ButtonsContainer>
              <PrimaryButton 
                href="mailto:rajiv.srivastava01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </PrimaryButton>
            </ButtonsContainer>
          </ContactCard>
          
          <ContactCard
            variants={fadeInRight}
            initial="hidden"
            animate={controls}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faLinkedin} />
            </ContactIcon>
            <ContactCardTitle>Connect on LinkedIn</ContactCardTitle>
            <ContactCardText>
              Connect with me on LinkedIn to stay updated with my latest professional activities.
            </ContactCardText>
            <ButtonsContainer>
              <PrimaryButton 
                href="https://www.linkedin.com/in/rajiv-srivastava/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </PrimaryButton>
              <SecondaryButton 
                href="https://www.linkedin.com/messaging/compose/?to=rajiv-srivastava"
                target="_blank"
                rel="noopener noreferrer"
              >
                Direct Message
              </SecondaryButton>
            </ButtonsContainer>
          </ContactCard>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
