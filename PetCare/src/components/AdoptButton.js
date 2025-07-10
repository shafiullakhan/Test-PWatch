import { TouchableOpacity, Text, Alert } from 'react-native';
import { adoptButtonStyles as styles } from '../styles/adoptButtonStyles';

const AdoptButton = ({ petName, price }) => {
  const handleAdopt = () => {
    Alert.alert(
      "Adopt " + petName,
      "Are you sure you want to adopt " + petName + " for AED " + price + "?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes, Adopt!",
          onPress: () => {
            Alert.alert("Success!", "Adoption process started for " + petName + "! Total cost: AED " + price);
          }
        }
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
      <Text style={styles.adoptButtonText}>🧑‍🧑‍🧒 Adopt {petName} - AED {price}</Text>
    </TouchableOpacity>
  );
};

export default AdoptButton;
