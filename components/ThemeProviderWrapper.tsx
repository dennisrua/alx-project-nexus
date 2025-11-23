'use client';

import { ThemeProvider } from 'styled-components';
import { useState, ReactNode } from 'react';

const lightTheme = { bg: '#fff', text: '#000' };
const darkTheme = { bg: '#121212', text: '#fff' };

interface Props {
  children: ReactNode;
}

export default function ThemeProviderWrapper({ children }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}
