import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const paymentMethodCardStyles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
    ...theme.shadows.sm,
  },
  selectedCard: {
    borderColor: '#4CAF50',
    backgroundColor: '#f8fff8',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  methodIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  methodDetails: {
    flex: 1,
  },
  methodName: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  methodSubtext: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  selectionIndicator: {
    marginLeft: theme.spacing.md,
  },
});
