import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { organizationData } from './data';
import { formatDate } from '../../utils/dateUtils';
import {
  ChartSection,
  Container,
  SectionTitle,
  SectionSubtitle,
  ChartDescription,
  ChartContainer,
  VerticalCareerChart,
  TimeAxis,
  YearMarker,
  VerticalTimelineLine,
  CareerBarsContainer,
  CareerBar,
  BarConnector,
  OrgLabel
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

// Calculate position based on date
const calculateBarPosition = (startDate: string): string => {
  const [year, month] = startDate.split('-').map(Number);
  const yearOffset = year - TIMELINE_START_YEAR;
  const monthOffset = month ? (month - 1) / 12 : 0; // Convert month to fractional year
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
  
  return (
    <ChartSection id="career-chart">
      <Container>
        <SectionTitle>Career Journey</SectionTitle>
        <SectionSubtitle>
          Visual representation of my professional growth and skills development over time
        </SectionSubtitle>
        
        <ChartDescription as={motion.div}
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <p>This chart illustrates my career progression across different organizations and highlights key skill growth areas. Hover over elements or tap on mobile to explore details about each milestone and skill development point.</p>
        </ChartDescription>
        
        <ChartContainer ref={ref}>
          <VerticalCareerChart>
            <TimeAxis>
              <YearMarker>2006</YearMarker>
              <YearMarker>2010</YearMarker>
              <YearMarker>2014</YearMarker>
              <YearMarker>2018</YearMarker>
              <YearMarker>2022</YearMarker>
              <YearMarker>2025</YearMarker>
            </TimeAxis>
            
            <VerticalTimelineLine />            <CareerBarsContainer>
              {/* Sort organizations by start date, earliest first (closest to x-axis) */}
              {[...organizationData]
                .sort((a, b) => {
                  // Convert dates to comparable values (earlier at bottom, closest to x-axis)
                  return new Date(a.startDate + '-01').getTime() - new Date(b.startDate + '-01').getTime();
                })                .map((org, index) => {
                  const colors = getCompanyColor(org.colorClass);
                  // Use a more reliable positioning approach
                  // Total available height is 500px, divide it evenly based on number of orgs with margins                  // Start from the bottom with enough space for the timeline and distribute bars evenly
                  const verticalPosition = 380 - (index * 85); // Increased spacing between bars
                  
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
                      aria-label={`${org.name}, ${org.role}, ${formatDate(org.startDate)} to ${formatDate(org.endDate)}`}
                      onMouseEnter={() => handleBarHover(index)}
                      onMouseLeave={handleBarLeave}
                      onFocus={() => handleBarHover(index)}
                      onBlur={handleBarLeave}
                      style={{ top: `${verticalPosition}px`, position: 'absolute' }}
                    >
                      {/* Recalculate connector height based on new timeline position */}
                      <BarConnector style={{ 
                        height: `${500 - verticalPosition - 70}px`, // Account for bar height (70px)
                        bottom: `-${500 - verticalPosition - 70}px`
                      }} />
                      <OrgLabel>
                        <strong>{org.name}</strong>
                        <span>{org.role}</span>
                      </OrgLabel>
                    </CareerBar>
                  );
                })}
            </CareerBarsContainer>
          </VerticalCareerChart>
        </ChartContainer>
      </Container>
    </ChartSection>
  );
};

export default CareerChart;
