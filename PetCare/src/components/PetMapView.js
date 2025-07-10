import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import { petMapViewStyles as styles } from '../styles/petMapViewStyles';

const PetMapView = ({ petLocation }) => {
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
        // Build a readable address from components
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
    const dLat = (petLocation.latitude - userLocation.latitude) * Math.PI / 180;
    const dLon = (petLocation.longitude - userLocation.longitude) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(userLocation.latitude * Math.PI / 180) * Math.cos(petLocation.latitude * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = 6371 * c;
    return distance.toFixed(1);
  };

  const getDistance = () => {
    if (userLocation && petLocation) {
      return calculateDistance();
    }
    return null;
  };

  return (
    <View style={styles.mapContainer}>
      <Text style={styles.mapTitle}>📍 Pet Location</Text>
      
      {/* Pet Location Card - Enhanced */}
      <View style={styles.petLocationCard}>
        <Text style={styles.petLocationTitle}>🏠 Pet is located at:</Text>
        <Text style={styles.petLocationAddress}>{petLocation?.address}</Text>
        <Text style={styles.coordinatesText}>
          📍 {petLocation?.latitude.toFixed(4)}, {petLocation?.longitude.toFixed(4)}
        </Text>
        
        {/* Visual Map Representation */}
        <View style={styles.mapVisualization}>
          <Text style={styles.mapIcon}>🗺️</Text>
          <View style={styles.locationPin}>
            <Text style={styles.pinIcon}>📍</Text>
            <Text style={styles.pinLabel}>Pet Here</Text>
          </View>
        </View>
      </View>

      {/* User Location */}
      {locationPermission && (
        <View style={styles.locationCard}>
          <Text style={styles.locationTitle}>📱 Your Location</Text>
          {userLocation ? (
            <>
              {/* Show location name if available */}
              {userLocationName && (
                <Text style={styles.locationText}>
                  {loadingLocationName ? 'Getting location name...' : userLocationName}
                </Text>
              )}
              <Text style={styles.coordinatesText}>
                📍 {userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)}
              </Text>
              {getDistance() && (
                <Text style={styles.distanceText}>
                  🚗 Distance: {getDistance()} km away
                </Text>
              )}
            </>
          ) : (
            <Text style={styles.loadingText}>Getting your location...</Text>
          )}
        </View>
      )}

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapPlaceholderText}>🗺️</Text>
        <Text style={styles.mapNote}>Interactive map coming soon</Text>
        <Text style={styles.mapSubNote}>Abu Dhabi, UAE</Text>
      </View>
    </View>
  );
};

export default PetMapView;
