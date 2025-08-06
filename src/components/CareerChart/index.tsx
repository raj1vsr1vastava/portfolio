import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { organizationData } from './data';
import { formatDate } from '../../utils/dateUtils';
import { orgToExperienceMapping, getCompanyColor } from './constants';
import { 
  ChartSection, 
  Container, 
  SectionTitle, 
  ChartDescription, 
  ChartContainer,
  HorizontalCareerPath,
  CareerStepsContainer,
  StepCircle,
  StepContent,
  StepRole,
  CompanyLogo,
  CareerStep,
  CareerPathLine
} from './styles';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const stepAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }  })
};

const CareerChart: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get the data in the correct order based on screen size
  const getOrderedData = () => {
    return isMobile ? [...organizationData].reverse() : organizationData;
  };
  
  // Debug: Log all experience items on mount
  useEffect(() => {
    setTimeout(() => {
      console.log('Checking available experience elements:');
      const experienceItems = document.querySelectorAll('[data-experience-id]');
      console.log(`Found ${experienceItems.length} items with data-experience-id`);
      experienceItems.forEach(item => {
        console.log(`- Item: ${item.getAttribute('data-experience-id')}, id: ${item.id}`);
      });

      const experienceSection = document.getElementById('experience');
      console.log('Experience section found:', !!experienceSection);
    }, 1000); // Wait for everything to render
  }, []);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);  // Handle click to navigate to corresponding experience
  const handleStepClick = (orgId: string) => {
    console.log(`Career step clicked: ${orgId}`);
    const experienceId = orgToExperienceMapping[orgId];
    console.log(`Mapped to experience: ${experienceId}`);
    
    if (experienceId) {
      // Use multiple methods to find the target element
      const experienceSection = document.getElementById('experience');
      console.log('Experience section found:', !!experienceSection);
      
      // Try multiple ways to find the target
      const experienceItem = 
        document.getElementById(experienceId) || 
        document.querySelector(`#${experienceId}`) ||
        document.querySelector(`[data-experience-id="${experienceId}"]`) ||
        document.querySelector(`[id="${experienceId}"]`);
      
      console.log('Experience item found:', !!experienceItem);
      
      // Remove any existing highlight classes first
      document.querySelectorAll('.highlight-experience').forEach(el => {
        el.classList.remove('highlight-experience');
      });
      
      if (experienceSection) {
        // First scroll to the experience section using native browser scrolling
        // as a reliable fallback method
        experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Then wait a moment before highlighting the specific item
        setTimeout(() => {
          if (experienceItem) {
            console.log('Scrolling to experience item');
            
            // Scroll to the specific item
            experienceItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add highlight class
            experienceItem.classList.add('highlight-experience');
            
            // Keep the highlight for a while, then remove it
            setTimeout(() => {
              experienceItem.classList.remove('highlight-experience');
            }, 4000);
          } else {
            console.warn(`Could not find experience element with ID: ${experienceId}`);
            
            // As a last resort, try to find the item using a broader query
            const allExperienceCards = document.querySelectorAll('.experience-card');
            console.log(`Found ${allExperienceCards.length} experience cards`);
          }
        }, 500); // Wait for section scroll to complete
      } else {
        console.warn('Could not find experience section');
      }
    } else {
      console.warn(`No mapping found for organization ID: ${orgId}`);
    }
  };
  
  return (
    <ChartSection id="career-chart">
      <Container>
        <SectionTitle>Career Journey</SectionTitle>
        
        <ChartDescription as={motion.div}
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <p>This chart illustrates my career progression across different organizations. Click on any step to view detailed experience information.</p>
        </ChartDescription>
          <ChartContainer ref={ref}>          <HorizontalCareerPath>
            {/* Horizontal connecting line with arrow */}
            <CareerPathLine />
            
            <CareerStepsContainer>
              {/* Sort organizations by start date - chronological for desktop, reverse for mobile */}
              {getOrderedData().map((org, index) => {
                const color = getCompanyColor(org.colorClass);
                
                return (                  <CareerStep
                    key={org.id}
                    index={index}
                    color={color}
                    isActive={activeStep === org.id}
                    custom={index}
                    variants={stepAnimation}
                    initial="hidden"
                    animate={controls}
                    onMouseEnter={() => setActiveStep(org.id)}
                    onMouseLeave={() => setActiveStep(null)}                    onClick={(e) => {
                      e.stopPropagation();
                      e.currentTarget.blur(); // Remove focus on click
                      
                      // Add clicked class for visual feedback
                      const circle = e.currentTarget.querySelector('[data-testid="step-circle"]');
                      if (circle) {
                        circle.classList.add('clicked');
                        // Remove class after animation completes
                        setTimeout(() => {
                          circle.classList.remove('clicked');
                        }, 500);
                      }
                      
                      handleStepClick(org.id);
                      return false;
                    }}
                    onKeyDown={(e: React.KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleStepClick(org.id);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    style={{ cursor: 'pointer' }}
                    aria-label={`${org.name}, ${org.role}, ${formatDate(org.startDate)} to ${formatDate(org.endDate)}. Click to view detailed experience.`}
                  >                    <StepCircle 
                      color={color} 
                      isActive={activeStep === org.id}
                      data-testid="step-circle"                    >
                      {org.logoUrl ? (
                        <CompanyLogo 
                          src={org.logoUrl} 
                          alt={`${org.name} logo`}
                          className="centered-logo"
                          onError={(e) => {
                            // If logo fails to load, show first letter of company name as fallback
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentNode;
                            if (parent) {
                              // Place the letter directly if the logo fails
                              parent.textContent = org.name.charAt(0);
                            }
                          }}
                        />
                      ) : (
                        // Fallback to first letter if no logo
                        org.name.charAt(0)
                      )}
                    </StepCircle>
                    
                    <StepContent>
                      {/* <StepTitle>{org.name}</StepTitle> */}
                      <StepRole>{org.role}</StepRole>
                      {/* <StepDate>{formatDate(org.startDate)} - {formatDate(org.endDate)}</StepDate> */}
                    </StepContent>
                  </CareerStep>
                );
              })}
            </CareerStepsContainer>
          </HorizontalCareerPath>
        </ChartContainer>
      </Container>
    </ChartSection>
  );
};

export default CareerChart;
