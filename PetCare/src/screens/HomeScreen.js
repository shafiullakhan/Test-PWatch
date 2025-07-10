import { useRef } from 'react';
import {
  SafeAreaView,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { list } from '../constants/mockData';
import { homeScreenStyles as styles } from '../styles/homeScreenStyles';
import { HomeHeader, PetItem } from '../components';
import { HEADER_HEIGHT } from '../styles/headerStyles';


const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const handlePetPress = (item) => navigation.navigate('PetDetail', { pet: item })

  const renderItem = ({ item }) => <PetItem item={item} onPress={() => handlePetPress(item)} />

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <HomeHeader scrollY={scrollY} />
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
