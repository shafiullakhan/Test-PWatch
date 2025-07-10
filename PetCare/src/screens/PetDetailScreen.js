import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
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
  const { selectedPet: pet } = usePet();

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
