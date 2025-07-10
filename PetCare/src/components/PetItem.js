import { View, Text, TouchableOpacity, Image } from 'react-native';
import { petItemStyles as styles } from '../styles/petItemStyles';

const PetItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.content}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.breed}>{item.breed}</Text>
          <Text style={styles.color}>{item.color}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PetItem;
