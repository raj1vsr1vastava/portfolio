import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.bg.tertiary};
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.border.color};
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.secondary};
    transition: all 0.3s ease;
    font-size: 20px;
    
    &:hover {
      background-color: ${({ theme }) => theme.accent.primary};
      color: white;
      transform: translateY(-4px);
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <Container>
        <Copyright>&copy; {currentYear} Rajiv Srivastava. All rights reserved.</Copyright>
        
        <SocialLinks>          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" aria-label="Visit LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub Profile" aria-label="Visit GitHub Profile">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </SocialLinks>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
