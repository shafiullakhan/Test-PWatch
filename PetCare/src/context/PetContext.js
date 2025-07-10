import React, { createContext, useContext, useState } from 'react';

// Create the context
const PetContext = createContext();

// Create a custom hook to use the context
export const usePet = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePet must be used within a PetProvider');
  }
  return context;
};

// Create the provider component
export const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState(null);

  const selectPet = (pet) => {
    setSelectedPet(pet);
  };

  const clearSelectedPet = () => {
    setSelectedPet(null);
  };

  const value = {
    selectedPet,
    selectPet,
    clearSelectedPet,
  };

  return (
    <PetContext.Provider value={value}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContext;
