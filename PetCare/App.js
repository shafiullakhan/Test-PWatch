import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PetProvider } from './src/context/PetContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <PetProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PetProvider>
  );
}
