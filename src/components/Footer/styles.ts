import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.bg.tertiary};
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.border.color};
`;

export const Container = styled.div`
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

export const Copyright = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
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
