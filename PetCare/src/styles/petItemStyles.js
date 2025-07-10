import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const petItemStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: theme.colors.lightGray,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.darkGray,
    marginBottom: 4,
  },
  breed: {
    fontSize: 14,
    color: theme.colors.primary,
    marginBottom: 2,
  },
  color: {
    fontSize: 12,
    color: theme.colors.gray,
  },
});
