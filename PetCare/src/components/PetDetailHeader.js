import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { petDetailHeaderStyles as styles } from '../styles/petDetailHeaderStyles';
import { theme } from '../constants/theme';
import { usePet } from '../context/PetContext';

const PetDetailHeader = () => {
  const navigation = useNavigation();
  const { selectedPet } = usePet();

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (!selectedPet) {
    return null;
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{selectedPet.name}</Text>
    </View>
  );
};

export default PetDetailHeader;
