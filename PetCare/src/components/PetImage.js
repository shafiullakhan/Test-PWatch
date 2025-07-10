import { View, Image } from 'react-native';
import { petImageStyles as styles } from '../styles/petImageStyles';
import { usePet } from '../context/PetContext';

const PetImage = () => {
  const { selectedPet } = usePet();

  if (!selectedPet) {
    return null;
  }

  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: selectedPet.avatar }}
        style={styles.petImage}
        resizeMode="cover"
        accessibilityLabel={`Photo of ${selectedPet.name}`}
      />
    </View>
  );
};

export default PetImage;
