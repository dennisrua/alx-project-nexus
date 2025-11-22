// components/Navbar.tsx
'use client';

import React from 'react';
import styled from 'styled-components';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Nav = styled.nav<{ themeMode: 'light' | 'dark' }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${({ themeMode }) =>
    themeMode === 'light' ? '#f5f5f5' : '#1a1a1a'};
  color: ${({ themeMode }) => (themeMode === 'light' ? '#000' : '#fff')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* optional subtle shadow */
  z-index: 1000; /* stays above content */
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Logo = styled.img`
  height: 70px;
  width: auto;
`;

const Button = styled.button<{ themeMode: 'light' | 'dark' }>`
  padding: 0.5rem 1rem;
  background-color: ${({ themeMode }) =>
    themeMode === 'light' ? '#000' : '#fff'};
  color: ${({ themeMode }) => (themeMode === 'light' ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <Nav themeMode={theme}>
      <Logo src="/logo.png" alt="AstraWatch" />
      <Button onClick={toggleTheme} themeMode={theme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </Nav>
  );
};

export default Navbar;
