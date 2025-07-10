import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const paymentSummaryStyles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: theme.colors.white,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
    minHeight: 200,
    maxWidth: '100%',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden', // Prevent content overflow
  },
  summaryTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
    textAlign: 'left',
  },
  petSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    width: '100%',
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.md,
    flexShrink: 0,
  },
  petDetails: {
    flex: 1,
    minWidth: 0, // Prevent text overflow
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
    width: '100%',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    width: '100%',
  },
  priceLabel: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    flex: 1,
    textAlign: 'left',
  },
  priceValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
    textAlign: 'right',
    flexShrink: 0,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.md,
    width: '100%',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  totalLabel: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    flex: 1,
    textAlign: 'left',
  },
  totalValue: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primary,
    textAlign: 'right',
    flexShrink: 0,
  },
});
