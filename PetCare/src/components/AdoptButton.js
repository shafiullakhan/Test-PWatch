import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adoptButtonStyles as styles } from '../styles/adoptButtonStyles';
import { usePet } from '../context/PetContext';

const AdoptButton = () => {
  const navigation = useNavigation();
  const { selectedPet } = usePet();

  const handleAdopt = () => {
    if (!selectedPet) return;
    navigation.navigate('Payment');
  };

  if (!selectedPet) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
      <Text style={styles.adoptButtonText}>🧑‍🧑‍🧒 Adopt {selectedPet.name} - AED {selectedPet.price}</Text>
    </TouchableOpacity>
  );
};

export default AdoptButton;
