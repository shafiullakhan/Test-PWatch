import { View, Text, Animated } from 'react-native';
import { headerStyles as styles, HEADER_HEIGHT } from '../styles/headerStyles';

const HomeHeader = ({ scrollY }) => {
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 2],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
    outputRange: [1, 0.8, 0.5],
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [{ translateY: headerTranslateY }],
        },
      ]}
    >
      <Animated.Image
        source={require('../../assets/header.png')}
        style={[
          styles.headerImage,
          {
            opacity: imageOpacity,
          },
        ]}
        resizeMode="cover"
        onError={(error) => console.log('Image loading error:', error)}
        onLoad={() => console.log('Image loaded successfully')}
      />
      <View style={styles.headerOverlay} />
      <Animated.View
        style={[
          styles.headerContent,
          {
            transform: [
              { translateY: titleTranslateY },
              { scale: titleScale },
            ],
          },
        ]}
      >
        <Text style={styles.headerTitle}>Pet Care</Text>
        <Text style={styles.headerSubtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

export default HomeHeader;
