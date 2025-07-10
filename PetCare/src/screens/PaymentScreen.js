import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { paymentScreenStyles as styles } from '../styles/paymentScreenStyles';
import { usePet } from '../context/PetContext';
import { usePayment } from '../context/PaymentContext';
import { useDeviceDimensions } from '../hooks';
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
  const { width, height, isLandscape } = useDeviceDimensions();
  const scrollViewRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  // Navigate back to home if no pet is selected
  useEffect(() => {
    if (!selectedPet) {
      navigation.navigate('Home');
    }
  }, [selectedPet, navigation]);

  // Reset scroll position when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      // Reset layout state
      setIsLayoutReady(false);
      
      // Reset scroll position
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
      }
      
      // Set layout ready after a short delay
      setTimeout(() => {
        setIsLayoutReady(true);
      }, 100);
    }, [])
  );

  // Handle layout ready
  const handleLayoutReady = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
    setIsLayoutReady(true);
  };

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
      
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        onLayout={handleLayoutReady}
      >
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
