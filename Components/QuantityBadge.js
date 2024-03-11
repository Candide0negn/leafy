import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuantityBadge = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFF0D8',
    //borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default QuantityBadge;