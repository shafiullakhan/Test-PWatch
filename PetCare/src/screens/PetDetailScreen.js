import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { petDetailStyles as styles } from '../styles/petDetailStyles';
import { usePet } from '../context/PetContext';
import { 
  PetDetailHeader, 
  PetImage, 
  PetInfoCard, 
  PetLocationCard, 
  AdoptButton 
} from '../components';

const PetDetailScreen = () => {
  const navigation = useNavigation();
  const { selectedPet: pet } = usePet();

  // Navigate back to home if no pet is selected
  useEffect(() => {
    if (!pet) {
      navigation.navigate('Home');
    }
  }, [pet, navigation]);

  if (!pet) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <PetDetailHeader />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <PetImage />
        <PetInfoCard />
        <PetLocationCard />
        <AdoptButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetDetailScreen;
