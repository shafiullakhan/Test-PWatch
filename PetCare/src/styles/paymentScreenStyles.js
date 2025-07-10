import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const paymentScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    position: 'relative',
    overflow: 'hidden', // Prevent content from spilling out
  },
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing.xl,
    minHeight: '100%', // Ensure minimum height
  },
  paymentMethodsSection: {
    margin: theme.spacing.lg,
    minHeight: 200,
    position: 'relative',
  },
  sectionTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
    textAlign: 'left',
  },
  proceedButton: {
    backgroundColor: theme.colors.primary,
    margin: theme.spacing.lg,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.md,
    minHeight: 56,
    position: 'relative',
  },
  proceedButtonDisabled: {
    backgroundColor: theme.colors.gray,
    opacity: 0.6,
  },
  proceedButtonText: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.white,
    textAlign: 'center',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
});
