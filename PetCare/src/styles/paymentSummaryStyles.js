import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const paymentSummaryStyles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: theme.colors.white,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  summaryTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  petSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.md,
  },
  petDetails: {
    flex: 1,
  },
  petName: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  petBreed: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  petAge: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray,
  },
  priceBreakdown: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.lightGray,
    paddingTop: theme.spacing.md,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  priceLabel: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  priceValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.md,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
  },
  totalValue: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primary,
  },
});
