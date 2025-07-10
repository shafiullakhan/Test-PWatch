import React from 'react';
import { View, Text } from 'react-native';
import { petInfoCardStyles as styles } from '../styles/petInfoCardStyles';
import { usePet } from '../context/PetContext';

const PetInfoCard = () => {
  const { selectedPet } = usePet();

  if (!selectedPet) {
    return null;
  }

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Breed:</Text>
        <Text style={styles.infoValue}>{selectedPet.breed}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Age:</Text>
        <Text style={styles.infoValue}>{selectedPet.age} years old</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Color:</Text>
        <Text style={styles.infoValue}>{selectedPet.color}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Type:</Text>
        <Text style={styles.infoValue}>{selectedPet.type}</Text>
      </View>
    </View>
  );
};

export default PetInfoCard;
