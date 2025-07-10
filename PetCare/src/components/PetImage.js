import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { petImageStyles as styles } from '../styles/petImageStyles';
import { usePet } from '../context/PetContext';
import ImageModal from './ImageModal';

const PetImage = () => {
  const { selectedPet } = usePet();
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!selectedPet) {
    return null;
  }

  const handleImagePress = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.imageContainer} onPress={handleImagePress}>
        <Image
          source={{ uri: selectedPet.avatar }}
          style={styles.petImage}
          resizeMode="cover"
          accessibilityLabel={`Photo of ${selectedPet.name}`}
        />
      </TouchableOpacity>

      <ImageModal
        visible={isModalVisible}
        imageUri={selectedPet.avatar}
        petName={selectedPet.name}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default PetImage;
