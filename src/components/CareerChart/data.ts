import { Organization } from '../../types';

export const organizationData: Organization[] = [
  {
    id: 'org-1',
    name: 'Infosys',
    role: 'Software Engineer',
    startDate: '2006-10',
    endDate: '2010-11',    
    colorClass: 'infosys-bar',
    width: '14.29%', // Exact segment size (Oct 2006 to Dec 2010)
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
  },
  {    id: 'org-2',
    name: 'Juniper Networks',
    role: 'Software Engineer',
    startDate: '2010-12',
    endDate: '2011-09',    
    colorClass: 'juniper-bar',
    width: '14.29%', // Exact segment size (Dec 2010 to Oct 2011)
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg',
  },
  {
    id: 'org-3',
    name: 'GE Healthcare',
    role: 'Systems Specialist',
    startDate: '2011-10',
    endDate: '2014-06',    
    colorClass: 'ge-bar',
    width: '14.29%', // Exact segment size (Oct 2011 to Jul 2014)
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg',
  },
  {
    id: 'org-4',
    name: 'Amadeus Labs',
    role: 'Development Manager',
    startDate: '2014-07',
    endDate: '2018-07',    
    colorClass: 'amadeus-bar',
    width: '14.29%', // Exact segment size (Jul 2014 to Aug 2018)
    logoUrl: 'https://1000logos.net/wp-content/uploads/2022/05/Amadeus-Logo.png',
  },
  {
    id: 'org-5',
    name: 'Walmart Labs',
    role: 'Engineering Manager',
    startDate: '2018-08',
    endDate: '2020-10',    
    colorClass: 'walmart-bar',
    width: '14.29%', // Exact segment size (Aug 2018 to Nov 2020)
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
  },
  {
    id: 'org-6',
    name: 'PayPal India',
    role: 'Senior Engineering Manager',
    startDate: '2020-11',
    endDate: '2022-02',    
    colorClass: 'paypal-bar',
    width: '14.29%', // Exact segment size (Nov 2020 to Mar 2022)
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
  },
  {
    id: 'org-7',
    name: 'Microsoft India',
    role: 'Group Engineering Manager',
    startDate: '2022-03',
    endDate: null,    
    colorClass: 'microsoft-bar',
    width: '14.29%', // Exact segment size (Mar 2022 to Present)
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
];
