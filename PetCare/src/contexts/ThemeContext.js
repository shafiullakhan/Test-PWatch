import React, { createContext, useContext, useState } from 'react';
import { theme, darkColors } from '../constants/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const currentTheme = {
    ...theme,
    colors: isDarkMode ? darkColors : theme.colors,
  };
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const value = {
    theme: currentTheme,
    isDarkMode,
    toggleTheme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
