// Theme configuration for PetCare app

export const colors = {
  // Primary colors
  primary: '#D96F60', // rgb(217, 111, 96)
  primaryLight: '#E08A7D',
  primaryDark: '#C85A49',
  
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Gray scale
  gray: '#6C757D',
  darkGray: '#495057',
  lightGray: '#F1F3F4',
  
  // Background colors
  background: '#F8F9FA',
  surface: '#FFFFFF',
  
  // Text colors
  textPrimary: '#333333',
  textSecondary: '#666666',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
  huge: 28,
  massive: 32,
};

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const shadows = {
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 30,
};

export const theme = {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  shadows,
};

export default theme;
