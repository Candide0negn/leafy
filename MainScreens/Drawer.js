import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

const Drawer = ({ isOpen }) => {
  const [drawerAnimation] = useState(new Animated.Value(-width));

  useEffect(() => {
    Animated.timing(drawerAnimation, {
      toValue: isOpen ? 0 : -width,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View
      style={[
        styles.drawer,
        {
          transform: [{ translateX: drawerAnimation }],
        },
      ]}
    >
      {/* Drawer content can go here */}
      <View style={styles.drawerContent}>
        {/* Example content */}
        <Text>Your Drawer Content Here</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.5,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 10,
  },
  drawerContent: {
    padding: 20,
  },
});

export default Drawer;
