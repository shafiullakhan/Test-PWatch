import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { petDetailHeaderStyles as styles } from '../styles/petDetailHeaderStyles';
import { theme } from '../constants/theme';
import { usePet } from '../context/PetContext';

const PetDetailHeader = ({ title }) => {
  const navigation = useNavigation();
  const { selectedPet } = usePet();

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (!selectedPet) {
    return null;
  }

  // Use provided title if available, otherwise use pet name
  const headerTitle = title || selectedPet.name;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default PetDetailHeader;
