import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const petItemStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.xl,
    marginRight: theme.spacing.lg,
    backgroundColor: theme.colors.lightGray,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.xs,
  },
  breed: {
    fontSize: theme.fontSize.md,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  color: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray,
  },
});
