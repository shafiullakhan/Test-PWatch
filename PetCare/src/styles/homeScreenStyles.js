import { StyleSheet } from 'react-native';
import theme from '../constants/theme';

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContainer: {
    paddingBottom: theme.spacing.sm,
  },
});
