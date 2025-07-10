import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants/theme';

const { width } = Dimensions.get('window');

export const petImageStyles = StyleSheet.create({
  imageContainer: {
    backgroundColor: theme.colors.transparent,
    marginHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  petImage: {
    width: '100%',
    height: width * 0.6,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.lightGray,
  },
});
