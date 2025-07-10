import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const adoptButtonStyles = StyleSheet.create({
  adoptButton: {
    backgroundColor: theme.colors.primaryDark,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.md,
  },
  adoptButtonText: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.white,
    textAlign: 'center',
  },
});
