import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PetProvider } from './src/context/PetContext';
import { PaymentProvider } from './src/context/PaymentContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <PetProvider>
      <PaymentProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaymentProvider>
    </PetProvider>
  );
}
