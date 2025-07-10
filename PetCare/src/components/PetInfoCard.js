import React from 'react';
import { View, Text } from 'react-native';
import { petInfoCardStyles as styles } from '../styles/petInfoCardStyles';

const PetInfoCard = ({ pet }) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Breed:</Text>
        <Text style={styles.infoValue}>{pet.breed}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Age:</Text>
        <Text style={styles.infoValue}>{pet.age} years old</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Color:</Text>
        <Text style={styles.infoValue}>{pet.color}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Type:</Text>
        <Text style={styles.infoValue}>{pet.type}</Text>
      </View>
    </View>
  );
};

export default PetInfoCard;
