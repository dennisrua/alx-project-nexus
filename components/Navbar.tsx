'use client';

import React from 'react';
import styled, { useTheme } from 'styled-components';
import Link from 'next/link';

interface NavbarProps {
  toggleTheme: () => void;
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Logo = styled.img`
  height: 70px;
  width: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <Nav>
      <StyledLink href="/">
        <Logo src="/logo.png" alt="AstraWatch" />
      </StyledLink>

      <NavLinks>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </NavLinks>

      <Button onClick={toggleTheme}>
        {theme.bg === '#fff' ? 'Dark' : 'Light'} Mode
      </Button>
    </Nav>
  );
};

export default Navbar;
