import React from 'react';
import { View, Text, Image } from 'react-native';
import { paymentSummaryStyles as styles } from '../styles/paymentSummaryStyles';
import { usePet } from '../context/PetContext';

const PaymentSummary = () => {
  const { selectedPet } = usePet();

  if (!selectedPet) {
    return null;
  }
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Adoption Summary</Text>
      
      <View style={styles.petSummary}>
        <Image
          source={{ uri: selectedPet.avatar }}
          style={styles.petImage}
          resizeMode="cover"
        />
        <View style={styles.petDetails}>
          <Text style={styles.petName} numberOfLines={1} ellipsizeMode="tail">
            {selectedPet.name}
          </Text>
          <Text style={styles.petBreed} numberOfLines={1} ellipsizeMode="tail">
            {selectedPet.breed}
          </Text>
          <Text style={styles.petAge} numberOfLines={1} ellipsizeMode="tail">
            {selectedPet.age} years old
          </Text>
        </View>
      </View>

      <View style={styles.priceBreakdown}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Adoption Fee:</Text>
          <Text style={styles.priceValue}>AED {selectedPet.price}</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Processing Fee:</Text>
          <Text style={styles.priceValue}>AED 0</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalValue}>AED {selectedPet.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentSummary;
