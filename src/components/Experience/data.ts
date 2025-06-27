import { ExperienceItem } from '../../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Group Engineering Manager',
    company: 'Microsoft India',
    startDate: '2022-03',
    endDate: null,
    description: 'Driving charters for (A) Python In Excel and (B) Outlook Extensibility (Add-ins)',
    achievements: [
      'Redefining Excel with GenAI capabilities which will transform how users interact with data with Advanced Analysis and Python',
      'Leading Outlook Extensibility (New Outlook, macOS and Mobile platforms) adoption and Add-ins modernization',
      'Driving Digital Native initiatives for Microsoft IDC'
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
      'Led migration of Digital Wallet Activity module',
      'Successfully delivered Widget (Server Driven UI) for Activity - pluggable across PayPal modules',
      'Led a green field project "Document Center" (Self Service Tax portal) - launched Dec 2021'
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
      'Accomplished 30% tech debt reduction within 6 months leading to better products',
      'Architected Lufthansa Middleware integration and scaled to 5 other airlines with different RBAC models',
      'Created Self Service tool automating web service deployment - 98% reduction in turnaround time'
    ]
  },
  {
    id: 'exp-5',
    title: 'Systems Specialist',
    company: 'GE Healthcare',
    startDate: '2011-11',
    endDate: '2014-06',
    description: 'Architected and developed healthcare applications, communication models, and enterprise software solutions.',
    achievements: [
      'Architected and developed PET Graphical Prescription application for PET-MRI scanners',
      'Developed GEOCOMM (GE Object Communication) - new communication model'
    ]
  },
  {
    id: 'exp-6',
    title: 'Software Engineer',
    company: 'Juniper Networks | Infosys',
    startDate: '2006-10',
    endDate: '2011-10',
    description: 'POS Suite of applications',
    achievements: [
      'Reduced bugs by 30% within 8 months for JWEB (Juniper\'s Web Device management software)',
      'Designed and developed Point Of Sale suite of applications for Nordstrom'
    ]
  }
];
