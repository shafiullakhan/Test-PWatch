import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { paymentScreenStyles as styles } from '../styles/paymentScreenStyles';
import { usePet } from '../context/PetContext';
import { usePayment } from '../context/PaymentContext';
import { PaymentMethodCard, PaymentSummary, PetDetailHeader } from '../components';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const { selectedPet } = usePet();
  const { 
    paymentMethods, 
    selectedPaymentMethod, 
    paymentInProgress, 
    selectPaymentMethod, 
    processPayment 
  } = usePayment();

  if (!selectedPet) {
    return null;
  }

  const handlePaymentMethodSelect = (method) => {
    selectPaymentMethod(method);
  };

  const handleProceedPayment = async () => {
    if (!selectedPaymentMethod) {
      Alert.alert('Payment Method Required', 'Please select a payment method to proceed.');
      return;
    }

    try {
      const result = await processPayment(selectedPet.price, selectedPet.name);
      
      if (result.success) {
        navigation.navigate('PaymentSuccess');
      } else {
        Alert.alert(
          'Payment Failed',
          'There was an issue processing your payment. Please try again.',
          [
            { text: 'OK', style: 'default' }
          ]
        );
      }
    } catch (error) {
      Alert.alert(
        'Payment Error',
        'An unexpected error occurred. Please try again.',
        [
          { text: 'OK', style: 'default' }
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <PetDetailHeader title="Payment" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <PaymentSummary />
        
        <View style={styles.paymentMethodsSection}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              isSelected={selectedPaymentMethod?.id === method.id}
              onSelect={() => handlePaymentMethodSelect(method)}
            />
          ))}
        </View>
        
        <TouchableOpacity 
          style={[
            styles.proceedButton,
            (!selectedPaymentMethod || paymentInProgress) && styles.proceedButtonDisabled
          ]}
          onPress={handleProceedPayment}
          disabled={!selectedPaymentMethod || paymentInProgress}
        >
          {paymentInProgress ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="white" />
              <Text style={styles.proceedButtonText}>Processing...</Text>
            </View>
          ) : (
            <Text style={styles.proceedButtonText}>
              Pay AED {selectedPet.price}
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
