import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ClubIcon from './assets/ClubIcon.png';

const PickUpScreen = () => {
  const [isDelivery, setIsDelivery] = useState(false);
  const [isItemExpanded, setIsItemExpanded] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false); // Initialize to false or true as per your default


  const toggleDeliveryOption = () => {
    setIsDelivery(!isDelivery);
  };

  const toggleItemSection = () => {
    setIsItemExpanded(!isItemExpanded);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
