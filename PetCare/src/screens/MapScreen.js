import React, { useState, useEffect } from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import MapView, { Marker, Callout } from 'react-native-maps';
import { PetDetailHeader } from '../components';
import { mapScreenStyles as styles } from '../styles/mapScreenStyles';
import { usePet } from '../context/PetContext';

const MapScreen = () => {
  const navigation = useNavigation();
  const { selectedPet } = usePet();
  
  if (!selectedPet) {
    return null;
  }

  const { location: petLocation, name: petName } = selectedPet;
  
  const [userLocation, setUserLocation] = useState(null);
  const [userLocationName, setUserLocationName] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);
  const [loadingLocationName, setLoadingLocationName] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setLocationPermission(true);
        getCurrentLocation();
      } else {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to show your location'
        );
      }
    } catch (error) {
      console.error('Location permission error:', error);
    }
  };

  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(coords);
      
      await getLocationName(coords);
    } catch (error) {
      console.error('Get location error:', error);
    }
  };

  const getLocationName = async (coords) => {
    try {
      setLoadingLocationName(true);
      const result = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      
      if (result && result.length > 0) {
        const address = result[0];
        const addressComponents = [
          address.street,
          address.district,
          address.city,
          address.region,
          address.country
        ].filter(Boolean);
        
        const locationName = addressComponents.join(', ');
        setUserLocationName(locationName || 'Unknown Location');
      } else {
        setUserLocationName('Unknown Location');
      }
    } catch (error) {
      console.error('Reverse geocoding error:', error);
      setUserLocationName('Unable to determine location');
    } finally {
      setLoadingLocationName(false);
    }
  };

  const calculateDistance = () => {
    if (!userLocation || !petLocation) return null;
    
    const R = 6371; // Radius of the Earth in km
    const dLat = (petLocation.latitude - userLocation.latitude) * Math.PI / 180;
    const dLon = (petLocation.longitude - userLocation.longitude) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(userLocation.latitude * Math.PI / 180) * Math.cos(petLocation.latitude * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance.toFixed(1);
  };

  const getMapRegion = () => {
    if (userLocation && petLocation) {
      // Calculating the center point between user and pet
      const centerLat = (userLocation.latitude + petLocation.latitude) / 2;
      const centerLon = (userLocation.longitude + petLocation.longitude) / 2;
      
      // Calculating deltas to show both locations with some padding
      const latDelta = Math.abs(userLocation.latitude - petLocation.latitude);
      const lonDelta = Math.abs(userLocation.longitude - petLocation.longitude);
      
      // Add padding and set minimum zoom level
      const paddingFactor = 2.5; // Increase padding for better view
      const minDelta = 0.02; // Minimum zoom level
      
      return {
        latitude: centerLat,
        longitude: centerLon,
        latitudeDelta: Math.max(latDelta * paddingFactor, minDelta),
        longitudeDelta: Math.max(lonDelta * paddingFactor, minDelta),
      };
    }
    
    // Default to pet location
    return {
      latitude: petLocation?.latitude || 24.4539,
      longitude: petLocation?.longitude || 54.3773,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header  */}
      <PetDetailHeader petName={petName} />

      {/* Full Screen Map */}
      <MapView
        style={styles.map}
        region={getMapRegion()}
        showsUserLocation={locationPermission}
        showsMyLocationButton={locationPermission}
        showsCompass={true}
        showsScale={true}
        showsBuildings={true}
        showsTraffic={false}
      >
        {/* Pet Location Marker */}
        {petLocation && (
          <Marker
            coordinate={{
              latitude: petLocation.latitude,
              longitude: petLocation.longitude,
            }}
            pinColor="red"
          >
            <Callout style={styles.calloutContainer}>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>🏠 {petName}'s Location</Text>
                <Text style={styles.calloutDescription}>{petLocation.address}</Text>
              </View>
            </Callout>
          </Marker>
        )}
        
        {/* User Location Marker */}
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            pinColor="blue"
          >
            <Callout style={styles.calloutContainer}>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>📱 Your Location</Text>
                <Text style={styles.calloutDescription}>
                  {loadingLocationName ? 'Loading...' : userLocationName || 'Your current location'}
                </Text>
                {calculateDistance() && (
                  <Text style={styles.calloutDistance}>
                    🚗 {calculateDistance()} km to pet
                  </Text>
                )}
              </View>
            </Callout>
          </Marker>
        )}
      </MapView>

      {/* Bottom Info Panel */}
      <View style={styles.infoPanel}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📍 Pet Location:</Text>
          <Text style={styles.infoValue}>{petLocation?.address}</Text>
        </View>
        
        {userLocation && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>📱 Your Location:</Text>
            <Text style={styles.infoValue}>
              {loadingLocationName ? 'Loading...' : userLocationName || 'Unknown'}
            </Text>
          </View>
        )}
        
        {calculateDistance() && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>🚗 Distance:</Text>
            <Text style={styles.distanceValue}>{calculateDistance()} km away</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
