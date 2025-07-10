import { TouchableOpacity, Text, Alert } from 'react-native';
import { adoptButtonStyles as styles } from '../styles/adoptButtonStyles';
import { usePet } from '../context/PetContext';

const AdoptButton = () => {
  const { selectedPet } = usePet();

  const handleAdopt = () => {
    if (!selectedPet) return;
    
    Alert.alert(
      "Adopt " + selectedPet.name,
      "Are you sure you want to adopt " + selectedPet.name + " for AED " + selectedPet.price + "?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes, Adopt!",
          onPress: () => {
            Alert.alert("Success!", "Adoption process started for " + selectedPet.name + "! Total cost: AED " + selectedPet.price);
          }
        }
      ]
    );
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
