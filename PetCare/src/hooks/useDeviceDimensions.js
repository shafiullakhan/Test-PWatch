import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useDeviceDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenData(window);
    });

    return () => {
      if (subscription?.remove) {
        subscription.remove();
      }
    };
  }, []);

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};

export default useDeviceDimensions;
