import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const mapScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    minWidth: 200,
  },
  callout: {
    padding: theme.spacing.sm,
  },
  calloutTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  calloutDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  calloutDistance: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.medium,
    marginTop: theme.spacing.xs,
  },
  infoPanel: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    ...theme.shadows.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  infoLabel: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.textPrimary,
    flex: 1,
  },
  infoValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    flex: 2,
    textAlign: 'right',
  },
  distanceValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.medium,
    flex: 2,
    textAlign: 'right',
  },
});
