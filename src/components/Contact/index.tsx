import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
  padding: 50px 0;
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
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 992px) {
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const ContactInfo = styled(motion.div)`
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

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.div`
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
  
  span {
    font-size: 16px;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
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

const SubmitButton = styled.button`
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

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! I will get back to you soon.');
      setSubmitSuccess(false);
    }, 2000);
  };
  
  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactContent>
          <ContactInfo
            variants={fadeInLeft}
            initial="hidden"
            animate={controls}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to discuss potential projects.
            </p>
            
            <ContactDetails>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>rajiv.srivastava@example.com</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faPhone} />
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faLinkedin} />
                <span>linkedin.com/in/rajivsrivastava</span>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          
          <ContactForm 
            onSubmit={handleSubmit}
            variants={fadeInRight}
            initial="hidden"
            animate={controls}
          >
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project or inquiry..." 
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent!' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
