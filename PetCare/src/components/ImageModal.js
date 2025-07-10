import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { imageModalStyles as styles } from '../styles/imageModalStyles';

const ImageModal = ({ visible, imageUri, onClose, petName }) => {
  const scrollViewRef = useRef(null);

  // Reset scroll position when modal opens
  useEffect(() => {
    if (visible && scrollViewRef.current) {
      // Reset zoom and scroll position
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, [visible]);

  const handleClose = () => {
    // Reset scroll view before closing
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
    // Small delay to ensure scroll reset before closing
    setTimeout(() => {
      onClose();
    }, 50);
  };

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      onRequestClose={handleClose}
      presentationStyle="fullScreen"
      statusBarTranslucent={false}
      supportedOrientations={['portrait']}
    >
      <StatusBar hidden />
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>

        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          minimumZoomScale={1}
          maximumZoomScale={3}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          centerContent={true}
          bounces={false}
          bouncesZoom={false}
          scrollEventThrottle={16}
          decelerationRate="fast"
        >
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode="contain"
            accessibilityLabel={`Full size photo of ${petName}`}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ImageModal;
