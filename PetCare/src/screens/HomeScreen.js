import { useRef } from 'react';
import {
  SafeAreaView,
  Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { list } from '../constants/mockData';
import { homeScreenStyles as styles } from '../styles/homeScreenStyles';
import { Header, PetItem } from '../components';
import { HEADER_HEIGHT } from '../styles/headerStyles';


const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handlePetPress = (item) => {
    console.log('Pet pressed:', item.name);
  };

  const renderItem = ({ item }) => <PetItem item={item} onPress={() => handlePetPress(item)} />

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header scrollY={scrollY} />
      <Animated.FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={[styles.listContainer, { paddingTop: HEADER_HEIGHT + 20 }]}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
