import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  FooterWrapper,
  Container,
  Copyright,
  SocialLinks
} from './styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <Container>
        <Copyright>&copy; {currentYear} Rajiv Srivastava. All rights reserved.</Copyright>
        
        <SocialLinks>          <a href="https://www.linkedin.com/in/rajiv-srivastava/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" aria-label="Visit LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/raj1vsr1vastava" target="_blank" rel="noopener noreferrer" title="GitHub Profile" aria-label="Visit GitHub Profile">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </SocialLinks>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
