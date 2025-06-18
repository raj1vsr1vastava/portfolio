import { ExperienceItem } from '../../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Group Engineering Manager',
    company: 'Microsoft India',
    startDate: '2022-03',
    endDate: null,
    description: 'Driving charters for (A) Python In Excel and (B) Outlook Extensibility.',
    achievements: [
      'Leading Outlook Web Extensibility for Monarch adoption in FY25',
      'Driving new initiatives in Outlook Copilot extensibility (FY24) - Patent filed for "MOS App recommendation system"',
      'Led Microsoft Excel on the Web for new feature developments (FY24 K2 Program) - Freeze Panes and Name Manager',
      'Led Outlook Mobile Extensibility Platform (FY23) - Increased MAU from 650k to 2.5M over 1.5 years'
    ]
  },
  {
    id: 'exp-2',
    title: 'Senior Software Development Manager',
    company: 'PayPal India',
    startDate: '2020-11',
    endDate: '2022-02',
    description: 'Successfully led major platform migrations and new product developments for digital payment solutions.',
    achievements: [
      'Led migration of Digital Wallet Activity module from 1.0 to 2.0 version (Mobile feature)',
      'Delivered Widget (Server Driven UI) for Activity - pluggable across PayPal modules',
      'Led green field project "Document Center" (Self Service Tax portal) - launched Dec 2021',
      'Modeled and coached 2 reportees for Management roles'
    ]
  },
  {
    id: 'exp-3',
    title: 'Senior Engineering Manager',
    company: 'Walmart Labs',
    startDate: '2018-08',
    endDate: '2020-10',
    description: 'Drove successful healthcare initiatives and cloud migration projects for pharmacy and supplier management systems.',
    achievements: [
      'Led Pharmacy COVID initiatives: Curbside pickup, Ship from Store, In-Home, and Immunization features',
      'Executed Pharmacy backend architecture migration to Azure',
      'Led Global Supplier Management product delivery across US and Canada markets',
      'Achieved minimum 20% Opex cost savings through Azure cloud migration'
    ]
  },
  {
    id: 'exp-4',
    title: 'Development Manager',
    company: 'Amadeus Labs',
    startDate: '2014-07',
    endDate: '2018-07',
    description: 'Led DevOps practices and architected airline integration solutions with significant performance improvements.',
    achievements: [
      'Led DevOps practice with full ownership of Amadeus Deployment tools suite in Bangalore',
      'Accomplished 30% tech debt reduction within 6 months leading to better products',
      'Architected Lufthansa Middleware integration and scaled to 5 other airlines with different RBAC models',
      'Created Self Service tool automating web service deployment - 98% reduction in turnaround time'
    ]
  },
  {
    id: 'exp-5',
    title: 'Software Engineer / Lead',
    company: 'Infosys | Juniper Networks | GE Healthcare',
    startDate: '2006-10',
    endDate: '2014-06',
    description: 'Architected and developed healthcare applications, communication models, and enterprise software solutions.',
    achievements: [
      'Architected and developed PET Graphical Prescription application for PET-MRI scanners',
      'Developed GEOCOMM (GE Object Communication) - new communication model',
      'Reduced bugs by 30% within 8 months for JWEB (Juniper\'s Web Device management software)',
      'Designed and developed Point Of Sale suite of applications for Nordstrom'
    ]
  }
];
