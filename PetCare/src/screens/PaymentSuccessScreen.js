import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { paymentSuccessStyles as styles } from '../styles/paymentSuccessStyles';
import { usePet } from '../context/PetContext';
import { usePayment } from '../context/PaymentContext';

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();
  const { selectedPet, clearSelectedPet } = usePet();
  const { lastPaymentResult, clearPaymentResult } = usePayment();

  useEffect(() => {
    // Auto-clear after 30 seconds
    const timer = setTimeout(() => {
      handleBackToHome();
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackToHome = () => {
    clearPaymentResult();
    clearSelectedPet();
    navigation.navigate('Home');
  };

  const handleAdoptAnother = () => {
    clearPaymentResult();
    clearSelectedPet();
    navigation.navigate('Home');
  };

  if (!selectedPet || !lastPaymentResult) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.successHeader}>
          <View style={styles.successIcon}>
            <Ionicons name="checkmark" size={60} color="white" />
          </View>
          <Text style={styles.successTitle}>Payment Successful!</Text>
          <Text style={styles.successSubtitle}>
            Congratulations! You have successfully adopted {selectedPet.name}
          </Text>
        </View>

        <View style={styles.petCard}>
          <Image
            source={{ uri: selectedPet.avatar }}
            style={styles.petImage}
            resizeMode="cover"
          />
          <View style={styles.petInfo}>
            <Text style={styles.petName}>{selectedPet.name}</Text>
            <Text style={styles.petBreed}>{selectedPet.breed}</Text>
            <Text style={styles.petLocation}>{selectedPet.location?.address}</Text>
          </View>
        </View>

        <View style={styles.paymentDetails}>
          <Text style={styles.detailsTitle}>Payment Details</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Transaction ID:</Text>
            <Text style={styles.detailValue}>{lastPaymentResult.transactionId}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount Paid:</Text>
            <Text style={styles.detailValue}>AED {lastPaymentResult.amount}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment Method:</Text>
            <Text style={styles.detailValue}>{lastPaymentResult.paymentMethod.name}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date & Time:</Text>
            <Text style={styles.detailValue}>{formatDate(lastPaymentResult.timestamp)}</Text>
          </View>
        </View>

        <View style={styles.nextSteps}>
          <Text style={styles.nextStepsTitle}>What's Next?</Text>
          <View style={styles.stepItem}>
            <Ionicons name="mail" size={20} color="#4CAF50" />
            <Text style={styles.stepText}>You'll receive a confirmation email shortly</Text>
          </View>
          <View style={styles.stepItem}>
            <Ionicons name="calendar" size={20} color="#4CAF50" />
            <Text style={styles.stepText}>Schedule a pickup time at your convenience</Text>
          </View>
          <View style={styles.stepItem}>
            <Ionicons name="heart" size={20} color="#4CAF50" />
            <Text style={styles.stepText}>Get ready to welcome your new family member!</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleBackToHome}
          >
            <Text style={styles.primaryButtonText}>Back to Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={handleAdoptAnother}
          >
            <Text style={styles.secondaryButtonText}>Adopt Another Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;
