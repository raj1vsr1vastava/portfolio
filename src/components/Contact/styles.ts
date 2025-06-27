import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.bg.alternate}; /* Subtle blue-gray for alternating effect */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

export const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.text.primary};
  }
  
  p {
    font-size: 18px;
    line-height: 1.7;
    color: ${({ theme }) => theme.text.secondary};
    margin-bottom: 32px;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  i, svg {
    font-size: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.accent.primary}20;
    color: ${({ theme }) => theme.accent.primary};
  }
  
  span, a {
    font-size: 16px;
    color: ${({ theme }) => theme.text.secondary};
  }
  
  a {
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    
    &:hover, &:focus {
      color: ${({ theme }) => theme.accent.primary};
      transform: translateX(5px);
    }
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text.primary};
  }
  
  input, textarea {
    padding: 14px 16px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.border.color};
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    font-family: inherit;
    font-size: 16px;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.accent.primary};
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.text.muted};
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ContactIntro = styled(motion.div)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
  }
  
  p {
    font-size: 16px;
    line-height: 1.7;
    color: ${({ theme }) => theme.text.secondary};
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

export const ContactCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.card};
  border-radius: 14px;
  padding: 24px 20px;
  box-shadow: 0 6px 20px ${({ theme }) => theme.shadow.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 100%;
    /* Removed ::before pseudo-element that created the top line animation */
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px ${({ theme }) => theme.shadow.medium};
  }
`;

export const ContactIcon = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.accent.primary};
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent.primary}10;
  margin-bottom: 4px;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed ${({ theme }) => theme.accent.primary}40;
    top: 0;
    left: 0;
    transition: transform 0.4s ease;
  }
  
  ${ContactCard}:hover & {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.accent.primary}20;
    
    &::after {
      transform: rotate(90deg);
    }
  }
`;

export const ContactCardTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.text.primary};
  transition: transform 0.3s ease, color 0.3s ease;
  
  ${ContactCard}:hover & {
    color: ${({ theme }) => theme.accent.primary};
    transform: translateY(-1px);
  }
`;

export const ContactCardText = styled.p`
  margin-bottom: 12px;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  transition: transform 0.3s ease;
  line-height: 1.6;
  font-size: 15px;
  flex-grow: 1;
  
  ${ContactCard}:hover & {
    transform: translateY(-1px);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: auto;
  transition: transform 0.3s ease;
  
  ${ContactCard}:hover & {
    transform: translateY(-1px);
  }
`;

export const PrimaryButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent.primary}, 
    ${({ theme }) => theme.accent.secondary}
  );
  color: white;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.20);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(99, 102, 241, 0.30);
    color: white;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accent.primary};
  color: ${({ theme }) => theme.accent.primary};
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.accent.primary}20, 
      ${({ theme }) => theme.accent.secondary}20
    );
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.accent.primary}30;
    
    &::before {
      width: 100%;
    }
  }
`;

// Animation variants
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
