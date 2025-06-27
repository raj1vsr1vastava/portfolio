import styled from 'styled-components';

export const StyledHeader = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.bg.nav : 'transparent'};
  box-shadow: ${({ theme, scrolled }) => 
    scrolled ? `0 2px 10px ${theme.shadow.light}` : 'none'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
`;

export const Logo = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 24px;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.bg.primary};
    padding: 20px 0;
    gap: 16px;
    box-shadow: 0 4px 6px ${({ theme }) => theme.shadow.medium};
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100vh)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 999;
  }
  
  li a {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text.primary};
    padding: 8px 16px;
    border-radius: 8px;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.bg.tertiary};
      color: ${({ theme }) => theme.accent.primary};
    }
    
    &.active {
      background-color: ${({ theme }) => theme.accent.primary};
      color: white;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavList = styled.ul`
  display: contents;
  padding: 0;
  margin: 0;
`;

export const ThemeToggle = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg.tertiary};
  color: ${({ theme }) => theme.text.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.bg.secondary};
    transform: rotate(15deg);
  }
`;

export const HamburgerButton = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding: 8px;
    background: none;
    border: none;
  }
`;

export const Hamburger = styled.div`
  position: relative;
  width: 24px;
  height: 20px;
  
  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.text.primary};
    border-radius: 2px;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      top: 0;
    }
    
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    
    &:nth-child(3) {
      bottom: 0;
    }
  }
`;
