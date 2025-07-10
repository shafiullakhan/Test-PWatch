import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { petDetailHeaderStyles as styles } from '../styles/petDetailHeaderStyles';
import { theme } from '../constants/theme';

const PetDetailHeader = ({ petName }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{petName}</Text>
    </View>
  );
};

export default PetDetailHeader;
