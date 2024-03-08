import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>We need your Location</Text>
      <Text style={styles.descriptionText}>
        Leafly needs your location to find the best deals in your area
      </Text>
      <Image source={require('./assets/walking.png')} style={styles.imageStyle} />
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5E3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  imageStyle: {
    width: '93%',
    height: '37%',
    marginBottom: 30,
    marginTop: '10%',
  },
  continueButton: {
    width: '93%',
    height: '9%',
    backgroundColor: '#476134',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 10,
    position: 'absolute',
    bottom: '5%',
  },
  continueButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocationScreen;  