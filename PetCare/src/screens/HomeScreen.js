import { useRef } from 'react';
import {
  SafeAreaView,
  Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { homeScreenStyles as styles } from '../styles/homeScreenStyles';
import { Header } from '../components';


const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header scrollY={scrollY} />
    </SafeAreaView>
  );
};

export default HomeScreen;
