import { View, Image } from 'react-native';
import { petImageStyles as styles } from '../styles/petImageStyles';

const PetImage = ({ imageUri, petName }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: imageUri }}
        style={styles.petImage}
        resizeMode="cover"
        accessibilityLabel={`Photo of ${petName}`}
      />
    </View>
  );
};

export default PetImage;
