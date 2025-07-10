import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryLight,
  },
  listContainer: {
    padding: 16,
  },
});
