import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { petDetailStyles as styles } from '../styles/petDetailStyles';
import { useRoute } from '@react-navigation/native';
import { 
  PetDetailHeader, 
  PetImage, 
  PetInfoCard, 
  PetMapView, 
  AdoptButton 
} from '../components';

const PetDetailScreen = () => {
  const route = useRoute();
  const { pet } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <PetDetailHeader petName={pet.name} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <PetImage imageUri={pet.avatar} petName={pet.name} />
        <PetInfoCard pet={pet} />
        <PetMapView petLocation={pet.location} />
        <AdoptButton petName={pet.name} price={pet.price} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetDetailScreen;
