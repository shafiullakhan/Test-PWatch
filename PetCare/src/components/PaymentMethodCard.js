import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { paymentMethodCardStyles as styles } from '../styles/paymentMethodCardStyles';

const PaymentMethodCard = ({ method, isSelected, onSelect }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.card,
        isSelected && styles.selectedCard
      ]}
      onPress={onSelect}
    >
      <View style={styles.cardContent}>
        <View style={styles.methodInfo}>
          <View style={styles.methodIconContainer}>
            <Ionicons 
              name={method.iconName} 
              size={32} 
              color={method.iconColor} 
            />
          </View>
          <View style={styles.methodDetails}>
            <Text style={styles.methodName}>{method.name}</Text>
            {method.type === 'card' && (
              <Text style={styles.methodSubtext}>{method.cardNumber}</Text>
            )}
            {method.type === 'digital_wallet' && (
              <Text style={styles.methodSubtext}>Touch to pay</Text>
            )}
          </View>
        </View>
        
        <View style={styles.selectionIndicator}>
          {isSelected ? (
            <Ionicons name="radio-button-on" size={24} color="#4CAF50" />
          ) : (
            <Ionicons name="radio-button-off" size={24} color="#CCCCCC" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentMethodCard;
