import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export const petItemStyles = StyleSheet.create({
  petItem: {
    backgroundColor: theme.colors.primaryLight,
    padding: 20,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: rgba(0, 0, 0, 0.1),
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  petInfo: {
    alignItems: 'center',
  },
  petName: {
    fontSize: 16,
    fontWeight:  'bold',
    color: "#333333",
    marginBottom: 4,
  },
});
