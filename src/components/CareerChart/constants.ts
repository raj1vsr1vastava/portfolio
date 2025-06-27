// Define company colors
export const companyColors = {
  infosys: '#0C2074',
  juniper: '#84B135',
  ge: '#0D5EAF',
  amadeus: '#E31937',
  walmart: '#0071DC',
  paypal: '#003087',
  microsoft: '#7FBA00',
};

// Mapping between Career Chart organizations and Experience items
export const orgToExperienceMapping: { [key: string]: string } = {
  'org-1': 'exp-6', // Infosys
  'org-2': 'exp-6', // Juniper Networks (maps to same experience as Infosys in experience data)
  'org-3': 'exp-5', // GE Healthcare
  'org-4': 'exp-4', // Amadeus Labs
  'org-5': 'exp-3', // Walmart Labs
  'org-6': 'exp-2', // PayPal India
  'org-7': 'exp-1', // Microsoft India
};

// Get color based on company colorClass
export const getCompanyColor = (colorClass: string): string => {
  switch(colorClass) {
    case 'infosys-bar':
      return companyColors.infosys;
    case 'juniper-bar':
      return companyColors.juniper;
    case 'ge-bar':
      return companyColors.ge;
    case 'amadeus-bar':
      return companyColors.amadeus;
    case 'walmart-bar':
      return companyColors.walmart;
    case 'paypal-bar':
      return companyColors.paypal;
    case 'microsoft-bar':
      return companyColors.microsoft;
    default:
      return '#777777';
  }
};
