import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  a {
    color: ${({ theme }) => theme.accent.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.accent.hover};
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }
  
  button, input, textarea {
    font-family: 'Inter', sans-serif;
  }
  
  section {
    padding: 80px 0;
    
    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    
    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  /* For smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Accessibility */
  :focus {
    outline: 2px solid ${({ theme }) => theme.accent.primary};
    outline-offset: 2px;
  }

  /* For screen readers */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyles;
