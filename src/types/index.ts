// Type definitions for experience items
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  startDate: string; // Format: 'YYYY-MM'
  endDate: string | null; // Format: 'YYYY-MM' or null for present
  description: string;
  achievements: string[];
}

// Type definitions for skills
export interface Skill {
  name: string;
  icon?: string;
  customIcon?: string;
  tooltip: string;
  isHighlighted?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Type definitions for projects
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

// Type for Organization in career chart
export interface Organization {
  id: string;
  name: string;
  role: string; // Job title/designation
  startDate: string; // Format: 'YYYY-MM'
  endDate: string | null; // Format: 'YYYY-MM' or null for present
  colorClass: string;
  width: string;
  left?: string; // Optional left position property
  logoUrl?: string; // Company logo URL
}
