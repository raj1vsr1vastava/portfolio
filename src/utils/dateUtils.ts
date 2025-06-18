/**
 * Calculate duration between two dates
 * @param startDate Start date in YYYY-MM format
 * @param endDate End date in YYYY-MM format or null for present
 * @returns Formatted duration string
 */
export const calculateDuration = (startDate: string, endDate: string | null = null): string => {
  const start = new Date(`${startDate}-01`); // Add day for valid date
  const end = endDate ? new Date(`${endDate}-01`) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  let result = '';
  if (years > 0) {
    result += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (result) result += ' ';
    result += `${months} month${months > 1 ? 's' : ''}`;
  }
  
  return result || '0 months';
};

/**
 * Format date string for display
 * @param dateStr Date in YYYY-MM format
 * @returns Formatted date string (e.g., "Mar 2022")
 */
export const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return 'Present';
  
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'short'
  });
};

/**
 * Get month name from date string
 * @param dateStr Date in YYYY-MM format
 * @returns Month name
 */
export const getMonthName = (dateStr: string): string => {
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleDateString('en-US', { month: 'short' });
};

/**
 * Get year from date string
 * @param dateStr Date in YYYY-MM format
 * @returns Year
 */
export const getYear = (dateStr: string): number => {
  const [year] = dateStr.split('-');
  return parseInt(year);
};
