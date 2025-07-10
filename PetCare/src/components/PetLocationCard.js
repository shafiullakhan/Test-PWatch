import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { petLocationCardStyles as styles } from '../styles/petLocationCardStyles';
import { usePet } from '../context/PetContext';

const PetLocationCard = () => {
  const navigation = useNavigation();
  const { selectedPet } = usePet();

  const handleMapPress = () => {
    navigation.navigate('Map');
  };

  if (!selectedPet) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.locationCard} onPress={handleMapPress}>
      <View style={styles.locationContent}>
        <View style={styles.locationHeader}>
          <Text style={styles.locationTitle}>📍 Location</Text>
        </View>
        <Text style={styles.locationAddress}>{selectedPet.location?.address}</Text>
        <Text style={styles.locationSubtext}>Tap to view on map</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={styles.chevronColor} />
    </TouchableOpacity>
  );
};

export default PetLocationCard;
