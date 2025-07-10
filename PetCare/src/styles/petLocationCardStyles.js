import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const petLocationCardStyles = StyleSheet.create({
  locationCard: {
    backgroundColor: theme.colors.white,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContent: {
    flex: 1,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  locationTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
  },
  chevronColor: theme.colors.gray,
  locationAddress: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
    lineHeight: 20,
  },
  locationSubtext: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray,
    fontStyle: 'italic',
  },
});
