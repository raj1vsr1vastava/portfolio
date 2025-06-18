import { Project } from '../../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Cloud Migration Platform',
    description: 'Designed and implemented a comprehensive cloud migration solution for enterprise clients, reducing infrastructure costs by 30%.',
    technologies: ['Azure', 'C#', 'DevOps'],
    imageUrl: undefined // Will use icon instead
  },
  {
    id: 'project-2',
    title: 'Business Intelligence Dashboard',
    description: 'Built an interactive dashboard using Power BI that provides real-time insights for executive decision-making.',
    technologies: ['Power BI', 'SQL', 'Azure'],
    imageUrl: undefined // Will use icon instead
  },
  {
    id: 'project-3',
    title: 'Mobile Application Suite',
    description: 'Developed a cross-platform mobile application with real-time synchronization and offline capabilities.',
    technologies: ['React Native', 'Azure', 'Node.js'],
    imageUrl: undefined // Will use icon instead
  }
];
