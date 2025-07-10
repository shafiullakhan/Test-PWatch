import React, { createContext, useContext, useState } from 'react';

// Create the context
const PaymentContext = createContext();

// Create a custom hook to use the context
export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

// Mock payment methods data
const mockPaymentMethods = [
  {
    id: 'google-pay',
    name: 'Google Pay',
    iconType: 'ionicon',
    iconName: 'logo-google',
    iconColor: '#4285F4',
    type: 'digital_wallet',
    available: true,
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    iconType: 'ionicon',
    iconName: 'logo-apple',
    iconColor: '#000000',
    type: 'digital_wallet',
    available: true,
  },
  {
    id: 'saved-card-1',
    name: 'Visa ending in 1234',
    iconType: 'ionicon',
    iconName: 'card',
    iconColor: '#1A1F71',
    type: 'card',
    cardNumber: '**** **** **** 1234',
    expiryDate: '12/26',
    available: true,
  },
  {
    id: 'saved-card-2',
    name: 'Mastercard ending in 5678',
    iconType: 'ionicon',
    iconName: 'card',
    iconColor: '#EB001B',
    type: 'card',
    cardNumber: '**** **** **** 5678',
    expiryDate: '08/25',
    available: true,
  },
];

// Create the provider component
export const PaymentProvider = ({ children }) => {
  const [paymentMethods] = useState(mockPaymentMethods);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [lastPaymentResult, setLastPaymentResult] = useState(null);

  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const processPayment = async (amount, petName) => {
    setPaymentInProgress(true);
    
    return new Promise((resolve) => {
      // Simulate payment processing delay
      setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% success rate
        
        const result = {
          success: isSuccess,
          transactionId: `TX-${Date.now()}`,
          amount,
          petName,
          paymentMethod: selectedPaymentMethod,
          timestamp: new Date().toISOString(),
        };

        setLastPaymentResult(result);
        setPaymentInProgress(false);
        resolve(result);
      }, 2000); // 2 second delay
    });
  };

  const clearPaymentResult = () => {
    setLastPaymentResult(null);
    setSelectedPaymentMethod(null);
  };

  const value = {
    paymentMethods,
    selectedPaymentMethod,
    paymentInProgress,
    lastPaymentResult,
    selectPaymentMethod,
    processPayment,
    clearPaymentResult,
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
