import React, { useRef, useEffect, useState } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { projectsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faChartBar, faMobileAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  ProjectsSection,
  Container,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ImageModal,
  ModalImage,
  CloseButton,
  ModalTitle,
  cardVariant
} from './styles';

const Projects: React.FC = () => {
  // Animation control
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  // Helper function to get icon for project
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('cloud')) {
      return faCloud;
    } else if (title.toLowerCase().includes('dashboard') || title.toLowerCase().includes('intelligence')) {
      return faChartBar;
    } else if (title.toLowerCase().includes('mobile')) {
      return faMobileAlt;
    }
    return faCloud;
  };
  
  // Function to open modal with selected image
  const openModal = (imageUrl: string, title: string) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };
    return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        
        <ProjectsGrid ref={ref}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              animate={controls}
            >
              <ProjectImage onClick={() => project.imageUrl && openModal(project.imageUrl, project.title)}>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} />
                ) : (
                  <FontAwesomeIcon icon={getProjectIcon(project.title)} />
                )}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        {/* Image Modal */}
        <ImageModal isOpen={modalOpen}>
          <CloseButton onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <ModalImage src={selectedImage} alt={selectedTitle} />
          <ModalTitle>{selectedTitle}</ModalTitle>
        </ImageModal>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
