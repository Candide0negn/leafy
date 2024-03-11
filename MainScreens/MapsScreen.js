import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity , Button } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { GoogleMapsServices } from 'react-native-google-maps-services';
import * as Location from 'expo-location';


const MapsScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [socialClubs, setSocialClubs] = useState([]);
  const [showSocialClubs, setShowSocialClubs] = useState(true);

  useEffect(() => {
    getUserLocation();
    fetchNearbyClubs();
  }, []);

  const getUserLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
  
      let { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setUserLocation({ latitude: coords.latitude, longitude: coords.longitude });
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  };
  
  const fetchNearbyClubs = async () => {
    if (!userLocation) return;

    try {
      const response = await GoogleMapsServices.placesSearch({
        location: userLocation,
        radius: 5000, // Search radius in meters
        type: 'social_club', // Replace with appropriate place type
      });

      setSocialClubs(response.results);
    } catch (error) {
      console.error('Error fetching nearby clubs:', error);
    }
  };

  const toggleSocialClubs = () => {
    setShowSocialClubs(!showSocialClubs);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation?.latitude || 0,
          longitude: userLocation?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {showSocialClubs &&
          socialClubs.map((club, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: club.geometry.location.lat,
                longitude: club.geometry.location.lng,
              }}
              title={club.name}
            />
          ))}
      </MapView>
      {/* Add a filter button or component */}
      <Button title={`${showSocialClubs ? 'Hide' : 'Show'} Social Clubs`} onPress={toggleSocialClubs} />
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="message-square" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="user-o" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 8,
    alignItems: 'center',
    width: '96%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    padding: 10,
  },
  navIcon: {
    fontSize: 28,
    color: '#333333',
  },
});

export default MapsScreen;