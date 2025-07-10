import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const paymentSuccessStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: theme.spacing.xl,
  },
  successHeader: {
    backgroundColor: '#4CAF50',
    padding: theme.spacing.xl,
    alignItems: 'center',
    paddingTop: 60,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  successTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  successSubtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    textAlign: 'center',
    lineHeight: 22,
  },
  petCard: {
    backgroundColor: theme.colors.white,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.md,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  petBreed: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  petLocation: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray,
  },
  paymentDetails: {
    backgroundColor: theme.colors.white,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  detailsTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  detailLabel: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  detailValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
    flex: 1,
    textAlign: 'right',
  },
  nextSteps: {
    backgroundColor: theme.colors.white,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  nextStepsTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  stepText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  buttonContainer: {
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  primaryButtonText: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.white,
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    ...theme.shadows.sm,
  },
  secondaryButtonText: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primary,
  },
});
