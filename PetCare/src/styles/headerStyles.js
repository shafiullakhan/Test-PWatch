import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

const HEADER_HEIGHT = 250;

export const headerStyles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 310,
    zIndex: 1,
    backgroundColor: theme.colors.primary,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#F1F3F4',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000020',
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
    marginVertical: 16,
    textShadowColor: '#80000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
    opacity: 0.9,
    textShadowColor: '#80000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export { HEADER_HEIGHT };
