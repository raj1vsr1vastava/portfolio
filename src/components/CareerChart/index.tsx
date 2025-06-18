import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { organizationData } from './data';
import { formatDate } from '../../utils/dateUtils';
import {
  ChartSection,
  Container,
  SectionTitle,
  ChartDescription,
  ChartContainer,
  VerticalCareerChart,
  MonthlyTimeAxis,
  MonthMarker,
  HorizontalTimelineLine,
  VerticalTimelineLine,
  CareerBarsContainer,
  CareerBar,
  BarConnector,
  OrgLabel,
  CompanyLogo,
  OrgLabelContent,
  OrgLabelHeader,
  MobileCareerContainer,
  MobileCareerItem,
  MobileCareerCard,
  TimelineLogoContainer,
  TimelineLogo
} from './styles';

// Define company colors
const companyColors = {
  infosys: {
    start: '#0C2074',
    end: '#1F3FAA',
  },
  amadeus: {
    start: '#E31937',
    end: '#F25A5A',
  },
  walmart: {
    start: '#0071DC',
    end: '#41A0FF',
  },
  paypal: {
    start: '#003087',
    end: '#0070E0',
  },
  microsoft: {
    start: '#7FBA00',
    end: '#A4E32A',
  },
};

// Define timeline range constants
const TIMELINE_START_YEAR = 2006;
const TIMELINE_END_YEAR = 2025;
const TIMELINE_TOTAL_YEARS = TIMELINE_END_YEAR - TIMELINE_START_YEAR;

// Mapping between Career Chart organizations and Experience items
const orgToExperienceMapping: { [key: string]: string } = {
  'org-1': 'exp-5', // Infosys | Juniper Networks | GE Healthcare
  'org-2': 'exp-4', // Amadeus Labs
  'org-3': 'exp-3', // Walmart Labs
  'org-4': 'exp-2', // PayPal India
  'org-5': 'exp-1', // Microsoft India
};

// Generate key month markers for career milestones
const generateMonthMarkers = (): Array<{ position: string; label: string; isStartMonth: boolean }> => {
  const markers: Array<{ position: string; label: string; isStartMonth: boolean }> = [];
  
  // Add key career start dates
  const keyDates = [
    { year: 2006, month: 10, label: 'Oct 2006' },
    { year: 2014, month: 7, label: 'Jul 2014' },
    { year: 2018, month: 8, label: 'Aug 2018' },
    { year: 2020, month: 11, label: 'Nov 2020' },
    { year: 2022, month: 3, label: 'Mar 2022' },
  ];
  
  keyDates.forEach(date => {
    const yearOffset = date.year - TIMELINE_START_YEAR;
    const monthOffset = (date.month - 1) / 12;
    const totalOffset = yearOffset + monthOffset;
    const position = (totalOffset / TIMELINE_TOTAL_YEARS) * 100;
    
    markers.push({
      position: `${position}%`,
      label: date.label,
      isStartMonth: true
    });
  });
  
  return markers;
};

// Calculate position based on date
const calculateBarPosition = (startDate: string): string => {
  const [year, month] = startDate.split('-').map(Number);
  const yearOffset = year - TIMELINE_START_YEAR;
  const monthOffset = month ? (month - 1) / 12 : 0;
  const totalOffset = yearOffset + monthOffset;
  
  // Calculate percentage position within the timeline
  const positionPercentage = (totalOffset / TIMELINE_TOTAL_YEARS) * 100;
  
  return `${positionPercentage}%`;
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const barAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const CareerChart: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
    useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // Add animation class to bars with delay
      setTimeout(() => {
        const bars = document.querySelectorAll('.career-bar');
        bars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('animate-in');
          }, 300 * index);
        });
      }, 500); // Add a small initial delay to ensure DOM elements are ready
    }
  }, [isInView, controls]);
  
  // Get color based on company name
  const getCompanyColor = (colorClass: string) => {
    switch(colorClass) {
      case 'infosys-bar':
        return companyColors.infosys;
      case 'amadeus-bar':
        return companyColors.amadeus;
      case 'walmart-bar':
        return companyColors.walmart;
      case 'paypal-bar':
        return companyColors.paypal;
      case 'microsoft-bar':
        return companyColors.microsoft;
      default:
        return { start: '#777', end: '#999' };
    }
  };
  
  // Handle hover effect
  const handleBarHover = (index: number) => {
    const bars = document.querySelectorAll('.career-bar');
    bars.forEach((bar, i) => {
      if (i !== index) {
        bar.classList.add('dimmed');
      }
    });
  };
  
  const handleBarLeave = () => {
    const bars = document.querySelectorAll('.career-bar');
    bars.forEach(bar => {
      bar.classList.remove('dimmed');
    });
  };

  // Handle click to navigate to corresponding experience
  const handleBarClick = (orgId: string) => {
    const experienceId = orgToExperienceMapping[orgId];
    if (experienceId) {
      // Navigate to the experience section first
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: 'smooth' });
        
        // After scrolling to the section, highlight the specific experience item
        setTimeout(() => {
          const experienceItem = document.querySelector(`[data-experience-id="${experienceId}"]`);
          if (experienceItem) {
            experienceItem.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            // Add a highlight effect
            experienceItem.classList.add('highlight-experience');
            setTimeout(() => {
              experienceItem.classList.remove('highlight-experience');
            }, 3000);
          }
        }, 800); // Wait for the section scroll to complete
      }
    }
  };
  
  return (
    <ChartSection id="career-chart">
      <Container>
        <SectionTitle>Career Journey</SectionTitle>
        {/* <SectionSubtitle>
          Visual representation of my professional growth and skills development over time
        </SectionSubtitle> */}
        
        <ChartDescription as={motion.div}
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <p>This chart illustrates my career progression across different organizations and highlights key skill growth areas. Click on any organization bar to view detailed experience information, or hover over elements to explore details about each milestone and skill development point.</p>
        </ChartDescription>
        
        <ChartContainer ref={ref}>
          <VerticalCareerChart>
            {/* Desktop/Tablet Horizontal Layout */}
            {/* Month markers for key career dates */}
            <MonthlyTimeAxis>
              {generateMonthMarkers().map((marker, index) => (
                <MonthMarker 
                  key={index}
                  position={marker.position}
                  isStartMonth={marker.isStartMonth}
                >
                  {marker.label}
                </MonthMarker>
              ))}
            </MonthlyTimeAxis>
            
            <HorizontalTimelineLine />
            
            <CareerBarsContainer>
              {/* Sort organizations by start date, earliest first (closest to x-axis) */}
              {[...organizationData]
                .sort((a, b) => {
                  // Convert dates to comparable values (earlier at bottom, closest to x-axis)
                  return new Date(a.startDate + '-01').getTime() - new Date(b.startDate + '-01').getTime();
                }).map((org, index) => {
                  const colors = getCompanyColor(org.colorClass);
                  // Adjusted vertical positioning for desktop/tablet layout
                  const verticalPosition = 380 - (index * 70);
                  
                  return (
                    <CareerBar 
                      key={org.id}
                      className={`career-bar ${org.colorClass}`}
                      index={index}
                      startColor={colors.start}
                      endColor={colors.end}
                      width={org.width}
                      left={calculateBarPosition(org.startDate)}
                      tabIndex={0}
                      custom={index}
                      variants={barAnimation}
                      initial="hidden"
                      animate={controls}
                      aria-label={`${org.name}, ${org.role}, ${formatDate(org.startDate)} to ${formatDate(org.endDate)}. Click to view detailed experience.`}
                      onMouseEnter={() => handleBarHover(index)}
                      onMouseLeave={handleBarLeave}
                      onFocus={() => handleBarHover(index)}
                      onBlur={handleBarLeave}
                      onClick={() => handleBarClick(org.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleBarClick(org.id);
                        }
                      }}
                      style={{ 
                        top: `${verticalPosition}px`, 
                        position: 'absolute',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Connector to timeline */}
                      <BarConnector style={{ 
                        height: `${400 - verticalPosition - 50}px`,
                        bottom: `-${400 - verticalPosition - 50}px`
                      }} />
                      <OrgLabel>
                        <OrgLabelHeader>
                          {org.logoUrl && (
                            <CompanyLogo 
                              src={org.logoUrl} 
                              alt={`${org.name} logo`}
                              onError={(e) => {
                                // Hide logo if it fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          )}
                          <OrgLabelContent>
                            <strong>{org.name}</strong>
                          </OrgLabelContent>
                        </OrgLabelHeader>
                        <span>{org.role}</span>
                      </OrgLabel>
                    </CareerBar>
                  );
                })}
            </CareerBarsContainer>
            
            {/* Mobile Vertical Layout */}
            <VerticalTimelineLine />
            
            {/* Timeline Logos */}
            <TimelineLogoContainer>
              {[...organizationData]
                .sort((a, b) => {
                  // Sort by start date for vertical layout (most recent first)
                  return new Date(b.startDate + '-01').getTime() - new Date(a.startDate + '-01').getTime();
                }).map((org, index) => (
                  org.logoUrl && (
                    <TimelineLogo
                      key={`timeline-logo-${org.id}`}
                      src={org.logoUrl}
                      alt={`${org.name} logo`}
                      index={index}
                      onError={(e) => {
                        // Hide logo if it fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )
                ))}
            </TimelineLogoContainer>
            
            <MobileCareerContainer>
              {[...organizationData]
                .sort((a, b) => {
                  // Sort by start date for vertical layout (most recent first)
                  return new Date(b.startDate + '-01').getTime() - new Date(a.startDate + '-01').getTime();
                }).map((org, index) => {
                  const colors = getCompanyColor(org.colorClass);
                  
                  return (
                    <MobileCareerItem
                      key={`mobile-${org.id}`}
                      custom={index}
                      variants={barAnimation}
                      initial="hidden"
                      animate={controls}
                    >
                      <MobileCareerCard
                        startColor={colors.start}
                        endColor={colors.end}
                        onClick={() => handleBarClick(org.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleBarClick(org.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`${org.name}, ${org.role}, ${formatDate(org.startDate)} to ${formatDate(org.endDate)}. Click to view detailed experience.`}
                      >
                        <div>
                          <h4>{org.name}</h4>
                          <p>{org.role}</p>
                          <span>{formatDate(org.startDate)} - {formatDate(org.endDate)}</span>
                        </div>
                      </MobileCareerCard>
                    </MobileCareerItem>
                  );
                })}
            </MobileCareerContainer>
          </VerticalCareerChart>
        </ChartContainer>
      </Container>
    </ChartSection>
  );
};

export default CareerChart;
