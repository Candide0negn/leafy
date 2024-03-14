import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapsScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [establishments, setEstablishments] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getCurrentPosition();
    fetchEstablishments();
  }, []);

  const getCurrentPosition = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission && Geolocation) {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ latitude, longitude });
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      console.log('Location permission denied');
    }
  };

  const fetchEstablishments = async () => {
    if (currentPosition) {
      try {
        const response = await fetch(
          `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity](around:10000,${currentPosition.latitude},${currentPosition.longitude});out;`
        );
        const data = await response.json();
        setEstablishments(data.elements);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const filterEstablishments = () => {
    // Add your filter logic here
  };

  const sortByDistance = () => {
    // Add your sorting logic here
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to display on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        return true;
      } else {
        console.log('Location permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  return (
    <View style={styles.container}>
    {currentPosition ? (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={currentPosition} title="Your Location" />
        {establishments.map((establishment, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: establishment.lat,
              longitude: establishment.lon,
            }}
            title={establishment.tags.name}
          >
            <Callout>
              <Text>{establishment.tags.amenity}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    ) : (
      <Text>Loading...</Text>
    )}
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
});

export default MapsScreen;