import { View, Text, TouchableOpacity } from 'react-native';
import { petItemStyles as styles } from '../styles/petItemStyles';

const PetItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PetItem;
